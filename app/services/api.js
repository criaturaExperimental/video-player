const url = require('./url-constructor')

module.exports = function getInfo(code) {
    return fetch(url(code),  {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).catch(function(err){
      console.log('Error: ', err)
    })
}