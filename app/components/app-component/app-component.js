import Vue from 'vue';
import template from './app-component-template.html';
import getInfo from '../../services/api'
import {MediaPlayer} from 'dashjs';

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
  },
  computed: {
    backdropUrl() {
      return this.config.images.base_url + this.config.images.backdrop_sizes[2] + this.info.backdrop_path
    },
    posterUrl() {
      return this.config.images.base_url + this.config.images.poster_sizes[2] + this.info.poster_path
    }
  },

  methods: {
    initializeVideo() {
      const url = "https://dash.akamaized.net/envivio/Envivio-dash2/manifest.mpd";
      const player = MediaPlayer().create();
      player.initialize(this.$refs.videoElement, url, true)
    }
  },
  
  mounted() {
    this.initializeVideo()
  }
});

export default AppComponent;
