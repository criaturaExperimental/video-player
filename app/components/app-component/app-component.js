import Vue from 'vue';
import template from './app-component-template.html';
import getInfo from '../../services/api'
import {MediaPlayer} from 'dashjs';
import vueScrollto from 'vue-scrollto'
import moment from 'moment'
import duration from 'moment-duration-format'
import currencyFormat from 'currency-formatter'
const mainConfig = require('../../config/config.json')

Vue.use(vueScrollto)
const AppComponent = Vue.extend({
  template: template,
  props: [
    'config',
    'info'
  ],
  data() {
    return {
      direction: 'rtl'
    }
  },
  computed: {
    backdropUrl() {
      return this.config.images.base_url + this.config.images.backdrop_sizes[3] + this.info.backdrop_path
    },
    posterUrl() {
      return this.config.images.base_url + this.config.images.poster_sizes[3] + this.info.poster_path
    },
    releaseYear() {
      return moment(this.info.release_date).year()
    },
    hoursAndMin() {
      return moment.duration(this.info.runtime, "minutes").format("h[h] m[m]");
    },
    budgetFormat() {
      return currencyFormat.format(this.info.budget, { code: 'USD' });
    },
    ratingPercentage() {
      return `${this.info.vote_average * 10}%`
    }

  },

  methods: {
    initializeVideo() {
      const url = mainConfig.video_url;
      const player = MediaPlayer().create();
      player.initialize(this.$refs.videoElement, url, false)
      player.attachTTMLRenderingDiv(this.$refs.videoCaption)
    },
    changeDirection() {
      if( this.direction === 'rtl') {
        this.direction = 'ltr'
      } else {
        this.direction = 'rtl'
      }
    }
  },

  mounted() {
    this.initializeVideo(),
    window.document.title = `WatchZ ${this.info.title}`,
    this.changeDirection()
  }
});

export default AppComponent;
