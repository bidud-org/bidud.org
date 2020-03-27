
export namespace $ {
    export type cue = { s: number, e: number, t: string }
    export type vid = { src: string, cues: cue[] }

    const vids = [
        {
            src: 'vid_01.mp4',
            cues: [
                { s: 1, e: 3, t: '' },
                { s: 4, e: 6, t: '' },
                { s: 7, e: 11, t: '' },
                { s: 14, e: 16, t: '' },
                { s: 17, e: 22, t: '' },
                { s: 24, e: 29, t: '' },
            ]
        }
        , {
            src: 'vid_02.mp4',
            cues: [
                { s: 1, e: 3, t: '' },
                { s: 3.5, e: 7, t: '' },
                { s: 8, e: 14, t: '' },
                { s: 15, e: 23, t: '' },
                { s: 25, e: 28, t: '' },
                { s: 30, e: 31, t: '' },
                { s: 38, e: 40, t: '' },
            ]
        }
        , {
            src: 'vid_03.mp4',
            cues: [
                { s: 1, e: 2, t: '' },
                { s: 3, e: 4, t: '' },
                { s: 5, e: 10, t: '' },
                { s: 12, e: 15, t: '' },
                { s: 16, e: 22, t: '' },
            ]
        }
        , {
            src: 'vid_04.mp4',
            cues: [
                { s: 2, e: 5, t: '' },
                { s: 5, e: 8, t: '' },
                { s: 8, e: 10, t: '' },
                { s: 12, e: 14, t: '' },
            ]
        }
        , {
            src: 'vid_05.mp4',
            cues: [
                { s: 1, e: 4, t: '' },
                { s: 6, e: 9, t: '' },
                { s: 10, e: 11, t: '' },
                { s: 12, e: 15, t: '' },
                { s: 16, e: 19, t: '' },
                { s: 20, e: 24, t: '' },
                { s: 24, e: 26, t: '' },
            ]
        }
    ]
}
