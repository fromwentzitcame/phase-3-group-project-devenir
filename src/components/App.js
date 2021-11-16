import DataContainer from "./DataContainer";
import AddCustomerForm from "./AddCustomerForm";
import Header from "./Header";

import React, { useEffect, useState } from "react";
// import { Route, Switch } from 'react-router-dom';

import "../App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((resp) => resp.json())
      .then((data) => setCustomers(data));
  }, []);

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setCustomers([...customers, data])
      setFormData({
        name: "",
        email: "",
        phone: "",
        birthday: "",
      })
    })
    ;
  }

  return (
    <div>
      <Header />
      <AddCustomerForm
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
      <DataContainer customers={customers} />
    </div>
  );
}

export default App;
