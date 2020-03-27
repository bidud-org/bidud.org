
export namespace data {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    export const vids = [
        {
            src: 'vids/03_02.mp4',
            cues: [
                { s: 0, e: 2, t: '' },
                { s: 5, e: 9, t: '' },
            ]
        }
    ]
}
