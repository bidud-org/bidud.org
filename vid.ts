
export namespace data {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    export const vids = [
        {
            src: 'vids/01-02.mp4',
            cues: [
                { s: 3, e: 5, t: '' },
                { s: 8, e: 12, t: '' },
            ]
        },
        {
            src: 'vids/01-03.mp4',
            cues: [
                { s: 2, e: 4, t: '' },
                { s: 10, e: 16, t: '' },
                { s: 19, e: 23, t: '' },
            ]
        },
    ]
}
