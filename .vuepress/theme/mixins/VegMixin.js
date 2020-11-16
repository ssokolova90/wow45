import $veg from '../helpers/veg.js';
import utf8 from 'utf8';

export default {

  methods: {
    $formatDate(date) {
      return $veg.formatDate(date);
    },
    $utf8(url) {
      // return encodeURIComponent(url);
      // return utf8.encode(url
        return decodeURIComponent(url);
    }
  }
}