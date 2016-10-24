const _ = require('lodash');

const tags = {
  all: () => {
    const results = [];
    results.push({ text: 'My Tag 1' });
    results.push({ text: 'My Tag 2' });
    results.push({ text: 'My Tag 3' });
    return results;
  },
  byText: arg => {
    console.info('arg', arg);
    return _.isEmpty(arg) ?
    tags.all() :
    _.filter(tags.all(), tag => _.includes(tag.text.toLowerCase(), arg.text.toLowerCase()));
  }
};

exports = module.exports = tags;
