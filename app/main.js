require('./styles/base.styl')
const getInfo = require('./services/api')
const mainConfig = require('./config/config.json')

import Vue from 'vue'
import MovieComponent from './components/movie-component/movie-component'

const promises = [
  getInfo('config'),
  getInfo(mainConfig.movie_code)
]

Promise.all(promises).then(([r1, r2]) => {
  new Vue({
    el: 'main',
    components: {
      'movie-component': MovieComponent
    },
    data: {
      r1,
      r2
    }
  });
})