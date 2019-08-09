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
  const [state, setState] = useState({Text: null});

  const loadComponent = () => {
    import('./text.js').then((res) => {
      setState({Text: res.default});
    });
  };
  return (
    <div className="a">
      {
        state.Text ? <state.Text /> : null
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