import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import mio from './123.gif';
import {a} from './tree-shaking';
import largeNumber from 'largetonum';

// tree-shaking 
if (false) {
  a();
}

const Search = () => {
  const [state, setState] = useState({Text: null});

  const loadComponent = () => {
    import('./text.js').then((res) => {
      setState({Text: res.default});
    });
  };
  const _num = largeNumber('999', '1');
  return (
    <div className="a">
      {
        state.Text ? <state.Text /> : null
      }
      <p onClick={loadComponent}>Mio Wang {_num}</p>
      <img src={mio} alt="jingyan"/>
    </div>
  );

};


ReactDOM.render(
  <Search/>,
  document.getElementById('root')
);