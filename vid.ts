
export namespace vid {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    export const vid = {
        src: 'vid.mp4',
        cues: [
            { s: 1.5, e: 3, t: '' },
            { s: 4, e: 6, t: '' },
            { s: 7, e: 11, t: '' },
            { s: 14, e: 15, t: '' },
            { s: 17, e: 22, t: '' },
            { s: 24, e: 29, t: '' },
        ]
    }

    export function f2t(seconds: number) {
        const min = Math.floor(seconds / 60)
        const sec = (seconds % 60).toFixed(3)

        return ('00' + min).slice(-2) + ':' + ('00' + sec).slice(-6)
    }

    export function vtt(cues: cue[]) {
        const sub = 'WEBVTT\n\n' + cues.map(
            c => `${f2t(c.s)} --> ${f2t(c.e)}\n${c.t}`
        ).join('\n\n')

        console.log(sub)

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
