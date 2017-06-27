import Vue from 'vue';
import template from './app-component-template.html';
import getInfo from '../../services/api'



const AppComponent = Vue.extend({
  template: template,
  props: [
    'config',
    'info'
  ],
  data() {
    return {
      test: true
    }
  }
});

export default AppComponent;
