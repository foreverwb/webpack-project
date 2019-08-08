import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import mio from './123.gif';
import {a} from './tree-shaking';

// tree-shaking 
if (false) {
  a();
}

const Search = () => {
  const [state, setState] = useState({Test: null});

  const loadComponent = () => {
    import('./test.js').then((res) => {
      setState({Test: res.default});
    });
  };
  return (
    <div className="a">
      {
        state.Test ? <state.Test /> : null
      }
      <p onClick={loadComponent}>Mio Wang</p>
      <img src={mio} alt="jingyan"/>
    </div>
  );

};


ReactDOM.render(
  <Search/>,
  document.getElementById('root')
);