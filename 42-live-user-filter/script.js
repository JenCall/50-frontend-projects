const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

uploadData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function uploadData() {
    // fetch API data
    const response = await fetch('https://randomuser.me/api?results=50');
    const { results } = await response.json()

    // clear results first
    result.innerHTML = ''

    // create html with dinamic info
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })

}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}