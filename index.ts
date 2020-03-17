

type cue = { s: number, e: number, t: string }
type vid = { src: string, cues: cue[] }

const vid = {
    src: 'vid1.mp4',
    cues: [
        { s: 1, e: 2, t: 'lala' },
        { s: 3, e: 4, t: 'baba' },
        { s: 6, e: 7, t: 'dada' },
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

function inputs(
    cues: cue[],
    player: HTMLMediaElement,
    track: HTMLTrackElement
) {
    track.src = vtt(cues)
    return cues.map(cue => {
        const input = document.createElement('input')
        input.type = 'text'
        input.addEventListener('focus', () => input.select())
        input.addEventListener('input', () => {
            player.currentTime = cue.s - 0.5
            cue.t = input.value
            track.src = vtt(cues)

            console.log(input.value)
            console.log(player.currentTime)
        })
        input.value = cue.t
        return input
    })
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
