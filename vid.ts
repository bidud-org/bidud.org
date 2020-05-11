
export namespace data {
    export type cue = { s: number, l: number, t: string }
    export type vid = { src: string, cues: cue[] }

    export const vids = [
        {
            src: 'vids/01-02.mp4',
            cues: [
                { s: 3, l: 3, t: '' },
                { s: 8, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-03.mp4',
            cues: [
                { s: 1, l: 3, t: '' },
                { s: 8, l: 3, t: '' },
                { s: 14, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-04.mp4',
            cues: [
                { s: 1, l: 3, t: '' },
                { s: 7, l: 3, t: '' },
                { s: 14, l: 3, t: '' },
                { s: 20, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-05.mp4',
            cues: [
                { s: 1, l: 3, t: '' },
                { s: 5, l: 3, t: '' },
                { s: 12, l: 3, t: '' },
                { s: 19, l: 3, t: '' },
                { s: 24, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-06.mp4',
            cues: [
                { s: 0, l: 3, t: '' },
                { s: 5, l: 3, t: '' },
                { s: 9, l: 3, t: '' },
                { s: 16, l: 3, t: '' },
                { s: 23, l: 3, t: '' },
                { s: 28, l: 4, t: '' },
            ]
        },
        {
            src: 'vids/01-07.mp4',
            cues: [
                { s: 0, l: 3, t: '' },
                { s: 3, l: 3, t: '' },
                { s: 8, l: 3, t: '' },
                { s: 12, l: 3, t: '' },
                { s: 19, l: 3, t: '' },
                { s: 26, l: 3, t: '' },
                { s: 31, l: 4, t: '' },
            ]
        },
    ]
}
