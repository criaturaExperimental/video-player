const apiKey = 'api_key=8a0710661d3c2195ca561e0323dd91f5'
const urlGeneral = 'https://api.themoviedb.org/3/movie/';
const urlConfig = 'https://api.themoviedb.org/3/configuration?';


module.exports = function urlConstructor(params) {
    if(params === 'config'){
        return `${urlConfig}${apiKey}`
    } else {
        return `${urlGeneral}${params}?${apiKey}`
    }
}