

type cue = { s: number, e: number, t: string }
type vid = { src: string, cues: cue[] }

const vid = {
    src: 'vid.mp4',
    cues: [
        { s: 1.5, e: 3, t: 'קשה לי בבידוד' },
        { s: 4, e: 6, t: 'אני רוצה ללכת לאכול גלידה' },
        { s: 7, e: 11, t: 'וגם נגמר לי הנייר טואלט' },
        { s: 14, e: 15, t: 'בא לי גומיגם' },
        { s: 17, e: 22, t: 'מישהו יודע מה השעה?' },
        { s: 24, e: 29, t: 'אני הולך לשחק חדחתול' },
    ]
}

function f2t(seconds: number) {
    const min = Math.floor(seconds / 60)
    const sec = (seconds % 60).toFixed(3)

    return ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-6)
}

function vtt(cues: cue[]) {
    const sub = 'WEBVTT\n\n' + cues.map(
        c => `${f2t(c.s)} --> ${f2t(c.e)}\n${c.t}`
    ).join('\n\n')

    console.log(sub)

    return URL.createObjectURL(new Blob([sub], { type: 'text/vtt' }))
}

function debounce<F extends (...args: any[]) => void>(
    f: F
    , timeout: number): F {
    let to: any
    return ((...args: any[]) => {
        clearTimeout(to);
        to = setTimeout(() => {
            f(...args)
        }, timeout)
    }) as any
}

function inputs(
    cues: cue[],
    player: HTMLMediaElement,
    track: HTMLTrackElement
) {
    track.src = vtt(cues)
    const inputs = cues.map(cue => {
        const setTime = debounce(() => {
            player.currentTime = cue.s - 0.5
            cue.t = input.value
            track.src = vtt(cues)

            console.log(input.value)
            console.log(player.currentTime)
        }, 500)

        const input = document.createElement('input')
        input.type = 'text'
        input.addEventListener('focus', () => input.select())
        input.addEventListener('input', setTime)
        input.value = cue.t
        input.setAttribute('s', String(cue.s))
        input.setAttribute('e', String(cue.e))
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

window.addEventListener('DOMContentLoaded', () => {

    const player = document.getElementById('player') as HTMLMediaElement
    player.src = vid.src

    const track = document.createElement('track')
    track.kind = 'subtitles'
    track.srclang = 'en'
    player.appendChild(track)
    player.textTracks[0].mode = 'showing'

    const cues = document.getElementById('cues')
    inputs(vid.cues, player, track).forEach(cue => cues?.append(cue))
})
