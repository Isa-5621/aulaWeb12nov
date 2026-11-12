const form = document.querySelector("form")
const input = document.getElementById('idPoke')
const button = document.querySelector('button')



form.addEventListener('submit', async(e) => {
    e.preventDefault()
    console.log(input.value)
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then(res => res.json())
    .then(pokemon => {

        const name = document.getElementById('pokeName')
        name.innerHTML =`Nome: ${pokemon.name}<br>
        xp base: ${pokemon.base_experience}<br>
        altura: ${pokemon.height}<br>
        peso: ${pokemon.weight}<br>
        ordem: ${pokemon.order}`

        const img = document.querySelector('img')
        img.src = pokemon.sprites.front_default;
    })
})
