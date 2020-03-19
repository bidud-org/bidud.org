import { $ } from './vid'

window.addEventListener('DOMContentLoaded', () => {
    const i = $.rndInt()
    const vid = $.getVid(i)
    const vtt = $.vtt
    const debounce = $.debounce

    function inputs(cues: $.cue[]) {
        cues.forEach((c, i) => c.t = `Placeholder ${i}`)
        const inputs = cues.map((cue, i) => {
            const input = document.createElement('input')
            input.type = 'text'
            input.addEventListener('focus', () => input.select())
            input.value = cue.t
            input.name = `s-${i}`

            return input
        })

        return inputs
    }

    const cues = document.getElementById('cues')
    inputs(vid.cues).forEach(cue => cues?.append(cue))

    const h = document.createElement('input')
    h.type = 'hidden'
    h.name = 'i'
    h.value = `${i}`
    cues.append(h)

    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'Generate a movie'
    cues?.append(submit)
})
