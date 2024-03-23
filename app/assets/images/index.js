'use strict';

const Images = {
  introductionImg: {
    source: require("./introduction.jpg"),
    style: {},
  },
  animeLogo: {
    source: require("./animeLogo.png"),
    style: { height: 24, width: 24 },
  },
};

module.exports = {
  ...Images,
};