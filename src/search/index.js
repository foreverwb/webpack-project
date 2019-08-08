import React from "react";
import ReactDOM from 'react-dom';
import './index.less'
import mio from './123.gif'
import { a } from './tree-shaking' 

// tree-shaking 
if(false) {
  a()
}

const Search = () => (

  <div className="a">
    {}
    <p>Mio Wang</p>
    <img src={mio} alt="jingyan"/>
  </div>
)

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)