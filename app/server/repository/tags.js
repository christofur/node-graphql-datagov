const _ = require('lodash');
const fetch = require('node-fetch');
const config = require('../config');

const tags = {
  all: () => {
    return new Promise(function (resolve) {
      fetch(config.apiTag)
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
