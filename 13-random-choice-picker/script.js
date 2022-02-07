const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (ev) => {
    createTags(ev.target.value)
})

function createTags(input) {
    const tags = input.split(',')
    console.log(tags)
}