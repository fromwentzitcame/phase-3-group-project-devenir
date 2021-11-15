import DataContainer from './DataContainer';
import SubForm from './SubForm';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import '../App.css';


function App() {
  const [subs, setSubs] = useState([])

  // fetch("http://localhost:9292/test")
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data));


  return (
    <div>
      <Header />
      <SubForm />
      <DataContainer />
    </div>
  );
}

export default App;
