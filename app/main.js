import _ from 'lodash'
require('./styles/base.styl')
const getInfo = require('./services/api')

import Vue from 'vue';
import AppComponent from './components/app-component/app-component'

const p1 = getInfo('config')
const p2 = getInfo(845)

Promise.all( [ p1, p2 ] ).then( ( [r1, r2] ) => {
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
  }
)

