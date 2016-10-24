const _ = require('lodash');
const fetch = require('node-fetch');

const tags = {
  all: () => {
    return new Promise(function (resolve) {
      fetch('https://data.gov.uk/api/3/action/tag_list')
      .then(function (res) {
        return res.json();
      }).then(function (json) {
        const results = [];
        _.each(json.result, result => {
          results.push({ text: result });
        });
        resolve(results);
      });
    });
  },
  byText: arg => {
    return new Promise(function (resolve) {
      tags.all().then(function (data) {
        resolve(_.isEmpty(arg) ?
        data :
        _.filter(data, tag => _.includes(tag.text.toLowerCase(), arg.text.toLowerCase())));
      });
    });
  },
};

exports = module.exports = tags;
