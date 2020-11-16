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

  getFirstLevelPage($page) {

    const detailPath = $page.regularPath.split('/');

    if (detailPath.length === 3
      && detailPath[1].length
      && !detailPath[2].length) {

      return detailPath[1];
    }

    return null;
  },

  getComponentName($page) {

    const componentsMap = {
      'chroniclealbum': 'ChronicleItem',
      'peoplealbum': 'PeopleItem',
      'photoalbum': 'PhotoItem',
      'teamalbum': 'TeamItem',
      'themesalbum': 'ThemeItem',
    };

    // если нужно вывести список первого уровня

    const detailPath = $page.regularPath.split('/');

    console.log ('detailPath', detailPath);

    // if (detailPath.length === 3
    //     && detailPath[1].length
    //     && !detailPath[2].length
    //     && componentsMap[detailPath[1]]) {
    //
    //   return componentsMap[detailPath[1]];
    // }
    //
    // return null;

    if (!detailPath[2] || !detailPath[2].length) {
      return null;
    }

    const openedPagePath = detailPath[1];

    return componentsMap[openedPagePath];
  },

  camelToKebab(text) {

    if (!text || !text.length) {
      return null;
    }

    const textFix  = text.charAt(0).toLowerCase() + text.slice(1);

    const result = textFix.replace( /([A-Z])/g, " $1" );

    return result
      .split(' ')
      .join('-')
      .toLowerCase();
  }
};
