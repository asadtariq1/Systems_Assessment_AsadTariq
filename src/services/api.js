const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';

export async function getTrendingGifs(offset, res) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${BASE_URL}trending?api_key=${API_KEY}&limit=15&offset=${offset}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            res(result)
        })
        .catch(error => {
            res('error')
            console.log('error', error)
        })
}

export async function searchGifs(query, offset, res) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${BASE_URL}search?api_key=${API_KEY}&limit=15&offset=${offset}&q=${query}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            res(result)
        })
        .catch(error => {
            res('error')
            console.log('error', error)
        })
}