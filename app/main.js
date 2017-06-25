import _ from 'lodash';
require('./styles/base.styl')

import Vue from 'vue';
// don't worry, we haven't created this yet!
import AppComponent from './components/app-component/app-component';

const vm = new Vue({
  el: 'main',
  components: {
    'app-component': AppComponent
  }
});



function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());

