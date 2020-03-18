import { $ } from './vid'

window.addEventListener('DOMContentLoaded', () => {
    const i = $.rndInt()
    const vid = $.getVid(i)
    const vtt = $.vtt
    const debounce = $.debounce

    function inputs(
        cues: $.cue[],
        player: HTMLMediaElement,
        track: HTMLTrackElement
    ) {
        cues.forEach((c, i) => c.t = `Placeholder ${i}`)
        track.src = vtt(cues)
        const inputs = cues.map((cue, i) => {
            const setTime = debounce(() => {
                player.currentTime = cue.s - 0.5
                cue.t = input.value
                track.src = vtt(cues)
            }, 500)

            const input = document.createElement('input')
            input.type = 'text'
            input.addEventListener('focus', () => input.select())
            input.addEventListener('input', setTime)
            input.value = cue.t
            input.setAttribute('s', String(cue.s))
            input.setAttribute('e', String(cue.e))
            input.name = `s-${i}`

            return input
        })

        player.addEventListener('timeupdate', e => {
            const t = player.currentTime
            for (const input of inputs) {
                input.setAttribute('data-active', 'false')
                const s = parseFloat(input.getAttribute('s') as string)
                const e = parseFloat(input.getAttribute('e') as string)
                if (s < t && t < e) {
                    input.setAttribute('data-active', 'true')
                }
            }

        })

        return inputs
    }


    const player = document.getElementById('player') as HTMLMediaElement
    player.src = vid.src

    const track = document.createElement('track')
    track.kind = 'subtitles'
    track.srclang = 'en'
    player.appendChild(track)
    player.textTracks[0].mode = 'showing'

    const cues = document.getElementById('cues')
    inputs(vid.cues, player, track).forEach(cue => cues?.append(cue))

    const h = document.createElement('input')
    h.type = 'hidden'
    h.name = 'i'
    h.value = `${i}`
    cues.append(h)

    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'View'
    cues?.append(submit)
})
