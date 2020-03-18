import { vid } from './vid'
import * as queryString from 'query-string'



window.addEventListener('DOMContentLoaded', () => {
    const cues = vid.vid.cues
    const args = queryString.parse(location.search)
    Object.keys(args).forEach((k, i) => {
        cues[i].t = args[k] as string
    })


    const player = document.getElementById('player') as HTMLMediaElement
    player.src = vid.vid.src

    const track = document.createElement('track')
    track.kind = 'subtitles'
    track.srclang = 'en'
    track.src = vid.vtt(cues)
    player.appendChild(track)
    player.textTracks[0].mode = 'showing'
})
