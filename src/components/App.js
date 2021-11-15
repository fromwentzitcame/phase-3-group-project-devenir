import DataContainer from './DataContainer';
import AddCustomerForm from './AddCustomerForm';
import Header from './Header';

import React, {useEffect, useState} from 'react';
// import { Route, Switch } from 'react-router-dom';

import '../App.css';


function App() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((resp) => resp.json())
      .then((data) => setCustomers(data));
    }, [])


  return (
    <div>
      <Header />
      <AddCustomerForm />
      <DataContainer customers={customers} />
    </div>
  );
}

export default App;
