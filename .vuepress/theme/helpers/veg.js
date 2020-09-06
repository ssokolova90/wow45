import moment from "moment";
import 'moment/locale/ru';


export default {

  filterPages(pages, path) {

    return (pages || []).filter(x => {
      return x.path.match(new RegExp(`(${path})(?=.*html)`));
    });
  },

  formatDate(date, format = 'D MMMM YYYY') {
    return moment(date).format(format)
  },
  
  b(block, element, modifier) {

    let result = [];

    if (block) {
      result = [...result, block];
    }

    if (element) {
      result = [...result, '__', element];
    }

    if (modifier) {
      result = [...result, '--', modifier];
    }

    return result.join('');
  }
};
