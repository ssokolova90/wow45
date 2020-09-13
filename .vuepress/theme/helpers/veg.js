import moment from "moment";
import 'moment/locale/ru';

export default {

  filterPages(pages, path) {

    return (pages || []).filter(x => {
      return x.path.match(
        new RegExp(`(${path})(?=.*html)`)
      );
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
  },


  isMainPage($page) {

    const detailPath = $page.regularPath.split('/');

    return detailPath.length == 2
      && detailPath[0].length == 0
      && detailPath[1].length == 0;
  },


  getComponentName($page) {

    const componentsMap = {
      'chronicle': 'ChronicleDetails',
      'people': 'PeopleDetails',
      'photo': 'PhotoDetails',
      'team': 'TeamDetails',
      'themes': 'ThemeDetails',
      'video': 'VideoDetails'
    };

    const detailPath = $page.regularPath.split('/');

    if (!detailPath[1] || !detailPath[1].length) {
      return null;
    }

    const openedPagePath = detailPath[1];
    return componentsMap[openedPagePath];
  },
};
