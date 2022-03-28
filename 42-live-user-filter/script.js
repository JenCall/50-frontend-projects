const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
uploadData()
async function uploadData() {
    const response = await fetch('https://randomuser.me/api?results=50');

    const { results } = await response.json()

    // clear results first
    results.innerHTML = ''

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