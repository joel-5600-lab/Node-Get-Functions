const axios = require('axios');

// ---------- CALLBACK ----------
function getPokemonCallback(name, callback) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
}

// ---------- PROMISE ----------
function getPokemonPromise(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.data)
        .catch(error => { throw error });
}

// ---------- ASYNC/AWAIT ----------
async function getPokemonAsync(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// ---------- TEST ----------
console.log("Starting program...");

console.log("\n=== CALLBACK ===");
getPokemonCallback('squirtle', (err, data) => {
    if (err) console.log("Error:", err.message);
    else console.log("Pokemon Name:", data.name);
});

console.log("\n=== PROMISE ===");
getPokemonPromise('jigglypuff')
    .then(data => console.log("Pokemon Name:", data.name))
    .catch(err => console.log("Error:", err.message));

console.log("\n=== ASYNC/AWAIT ===");
(async () => {
    try {
        const data = await getPokemonAsync('eevee');
        console.log("Pokemon Name:", data.name);
    } catch (err) {
        console.log("Error:", err.message);
    }
})();
