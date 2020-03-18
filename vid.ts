
export namespace $ {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    const vids = [
        {
            src: 'vid_01.mp4',
            cues: [
                { s: 1.5, e: 3, t: '' },
                { s: 4, e: 6, t: '' },
                { s: 7, e: 11, t: '' },
                { s: 14, e: 15, t: '' },
                { s: 17, e: 22, t: '' },
                { s: 24, e: 29, t: '' },
            ]
        }, {
            src: 'vid_02.mp4',
            cues: [
                { s: 0, e: 2, t: '' },
                { s: 2, e: 7, t: '' },
                { s: 7, e: 12, t: '' },
                { s: 12, e: 16, t: '' },
                { s: 16, e: 22, t: '' },
                { s: 22, e: 27, t: '' },
                { s: 38, e: 41, t: '' },
                { s: 48, e: 55, t: '' },
                { s: 55, e: 60, t: '' },
                { s: 65, e: 70, t: '' },
                { s: 72, e: 76, t: '' },
                { s: 80, e: 86, t: '' },
                { s: 90, e: 95, t: '' },
            ]
        }
    ]

    function f2t(seconds: number) {
        const min = Math.floor(seconds / 60)
        const sec = (seconds % 60).toFixed(3)

        return ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-6)
    }

    export function rndInt() {
        return Math.floor(Math.random() * vids.length);
    }

    export function getVid(i) {
        return vids[i]
    }


    export function vtt(cues: cue[]) {
        const sub = 'WEBVTT\n\n' + cues.map(
            c => `${f2t(c.s)} --> ${f2t(c.e)}\n${c.t}`
        ).join('\n\n')

        return URL.createObjectURL(new Blob([sub], { type: 'text/vtt' }))
    }

    export function debounce<F extends (...args: any[]) => void>(
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
}
