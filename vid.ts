
export namespace data {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    export const vids = [
        {
            src: 'vids/01-02.mp4',
            cues: [
                { s: 3, l: 2, t: '' },
                { s: 8, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-03.mp4',
            cues: [
                { s: 2, e: 4, t: '' },
                { s: 19, e: 16, t: '' },
                { s: 18, e: 23, t: '' },
            ]
        },
        {
            src: 'vids/01-04.mp4',
            cues: [
                { s: 6, e: 10, t: '' },
                { s: 16, e: 22, t: '' },
                { s: 19, e: 23, t: '' },
            ]
        },
    ]
}
