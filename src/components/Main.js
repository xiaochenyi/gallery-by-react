require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
// var imageDatas = require('../data/imageDatas.json');

// function genImageURL(imageDatasArr){}


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">hello Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
