'use strict';

const React = require('react');
const mio = require('./123.gif');
const largeNumber = require('largetonum');
require('./index.less');

class Search extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

  loadComponent() {
    import('./text.js').then((res) => {
      setState({ Text: res.default });
    });
  };


  render() {
    const { Text } = this.state;
    const num = largeNumber('999', '1');
    return (
      <div className="a">
        {
          Text ? <Text /> : null
        }
        <p onClick={this.loadComponent}>Mio Wang {num}</p>
        <img src={mio} alt="jingyan"/>
      </div>
    )
  }
}

module.exports = <Search/>;