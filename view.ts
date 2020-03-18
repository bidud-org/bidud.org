import { $ } from './vid'
import * as queryString from 'query-string'



window.addEventListener('DOMContentLoaded', () => {
    const args = queryString.parse(location.search)
    const i = parseInt(args['i'] as string)
    const vid = $.getVid(i)
    const cues = vid.cues
    delete args['i']

    Object.keys(args).forEach((k, i) => {
        cues[i].t = args[k] as string
    })


    const player = document.getElementById('player') as HTMLMediaElement
    player.src = vid.src

    const track = document.createElement('track')
    track.kind = 'subtitles'
    track.srclang = 'en'
    track.src = $.vtt(cues)
    player.appendChild(track)
    player.textTracks[0].mode = 'showing'

    player.play()
})
