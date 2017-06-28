import Vue from 'vue';
import template from './app-component-template.html';
import getInfo from '../../services/api'
import {MediaPlayer} from 'dashjs';
import vueScrollto from 'vue-scrollto'
import plyr from 'plyr'
require('../../../node_modules/plyr/dist/plyr.css')

Vue.use(vueScrollto)
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
      const url = "http://media.axprod.net/dash/ED_TTML_NEW/Clear/Manifest_sub_in.mpd";
      const player = MediaPlayer().create();
      player.initialize(this.$refs.videoElement, url, false)
      // player.attachVideoContainer(this.$refs.videoContainer)
      // player.attachTTMLRenderingDiv(this.$refs.videoCaption)
      plyr.setup(this.$refs.videoElement)
    }
  },
  
  mounted() {
    this.initializeVideo()
  }
});

export default AppComponent;
