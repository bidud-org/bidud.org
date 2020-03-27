import * as queryString from 'query-string'
import './view.css'
import * as Tokenizer from 'sentence-tokenizer'
import sbd from 'sbd'

// function f2t(seconds: number) {
//     const min = Math.floor(seconds / 60)
//     const sec = (seconds % 60).toFixed(3)

//     return ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-6)
// }

// export function rndInt() {
//     return Math.floor(Math.random() * vids.length);
// }

// export function getVid(i) {
//     return vids[i]
// }


// export function vtt(cues: cue[]) {
//     const sub = 'WEBVTT\n\n' + cues.map(
//         c => `${f2t(c.s)} --> ${f2t(c.e)}\n${c.t}`
//     ).join('\n\n')

//     return URL.createObjectURL(new Blob([sub], { type: 'text/vtt' }))
// }

// export function debounce<F extends (...args: any[]) => void>(
//     f: F
//     , timeout: number): F {
//     let to: any
//     return ((...args: any[]) => {
//         clearTimeout(to);
//         to = setTimeout(() => {
//             f(...args)
//         }, timeout)
//     }) as any
// }


function sents(txt) {
    return txt.split('\n')
}

window.addEventListener('DOMContentLoaded', () => {
    const args = queryString.parse(location.search)
    const txt = args.txt as string

    // const t = new Tokenizer()
    const sentences = sents(txt)
    console.log(sentences)

    // const player = document.getElementById('player') as HTMLMediaElement
    // player.src = vid.src

    // const track = document.createElement('track')
    // track.kind = 'subtitles'
    // track.srclang = 'en'
    // track.src = $.vtt(cues)
    // player.appendChild(track)
    // player.textTracks[0].mode = 'showing'

    // player.play()
})
