import * as queryString from 'query-string'
import './view.css'
import { data } from './vid'


function sents(txt) {
    return txt.split('\n')
}

function getVid(sentences: string[]) {
    for (const vid of data.vids) {
        if (vid.cues.length === sentences.length)
            return vid
    }
}

function f2t(seconds: number) {
    const min = Math.floor(seconds / 60)
    const sec = (seconds % 60).toFixed(3)

    return ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-6)
}

function vtt(cues: data.cue[]) {
    const sub = 'WEBVTT\n\n' + cues.map(
        c => `${f2t(c.s)} --> ${f2t(c.s + c.l)}\n${c.t}`
    ).join('\n\n')

    console.log(sub)
    return URL.createObjectURL(new Blob([sub], { type: 'text/vtt' }))
}

window.addEventListener('DOMContentLoaded', () => {
    const args = queryString.parse(location.search)
    const txt = args.txt as string
    const sentences = sents(txt)
    const vid = getVid(sentences)

    for (let i in sentences) {
        vid.cues[i].t = sentences[i]
    }

    const player = document.getElementById('player') as HTMLMediaElement
    player.src = vid.src

    const track = document.createElement('track')
    track.kind = 'subtitles'
    track.srclang = 'en'
    track.src = vtt(vid.cues)
    player.appendChild(track)
    player.textTracks[0].mode = 'showing'

    player.play()
})
