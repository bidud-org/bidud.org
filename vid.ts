
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
                { s: 1, l: 3, t: '' },
                { s: 8, l: 2, t: '' },
                { s: 14, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-04.mp4',
            cues: [
                { s: 1, l: 3, t: '' },
                { s: 7, l: 3, t: '' },
                { s: 14, l: 2, t: '' },
                { s: 20, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-05.mp4',
            cues: [
                { s: 1, l: 3, t: '' },
                { s: 5, l: 3, t: '' },
                { s: 12, l: 3, t: '' },
                { s: 19, l: 2, t: '' },
                { s: 24, l: 4, t: '' },
            ]
        },
    ]
}
