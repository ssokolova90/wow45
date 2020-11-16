import $veg from '../helpers/veg.js';

export default {

  methods: {
    $formatDate(date) {
      return $veg.formatDate(date);
    },
    $utf8(url) {
        return decodeURIComponent(url);
    }
  }
}