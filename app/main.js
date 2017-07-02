import _ from 'lodash'
require('./styles/base.styl')
const getInfo = require('./services/api')
const mainConfig = require('./config/config.json')

import Vue from 'vue'
import AppComponent from './components/app-component/app-component'

const promises = [
  getInfo('config'),
  getInfo(mainConfig.movie_code)
]

Promise.all(promises).then(([r1, r2]) => {
  new Vue({
    el: 'main',
    components: {
      'app-component': AppComponent
    },
    data: {
      r1,
      r2
    }
  });
})