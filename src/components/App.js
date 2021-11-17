import DataContainer from "./DataContainer";
import AddCustomerForm from "./AddCustomerForm";
import Header from "./Header";

import React, { useEffect, useState } from "react";
// import { Route, Switch } from 'react-router-dom';

import "../App.css";

function App() {
// set states
  const [customers, setCustomers] = useState([]);
  const [displayedCustomers, setDisplayedCustomers] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });

// first data grab
  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((resp) => resp.json())
      .then((data) => {
        setCustomers(data)
        setDisplayedCustomers(data)
      });
  }, []);

// form functionality
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
  }

// display newsletter subscribers
function promoFilter(e) {
  if (e.target.checked) {
    console.log("filter accessed")
    fetch("http://localhost:9292/newsletters/promos")
    .then((resp) => resp.json())
    .then((data) => setDisplayedCustomers(data));
  }
  else setDisplayedCustomers(customers)
  }

function eventsFilter(e) {
  if (e.target.checked) {
    console.log("filter accessed")
    fetch("http://localhost:9292/newsletters/events")
    .then((resp) => resp.json())
    .then((data) => setDisplayedCustomers(data));
  }
  else setDisplayedCustomers(customers)
  }

function birthdayFilter(e) {
  if (e.target.checked) {
    console.log("filter accessed")
    fetch("http://localhost:9292/newsletters/birthdays")
    .then((resp) => resp.json())
    .then((data) => setDisplayedCustomers(data));
  }
  else setDisplayedCustomers(customers)
  }

function textsFilter(e) {
  if (e.target.checked) {
    console.log("filter accessed")
    fetch("http://localhost:9292/newsletters/texts")
    .then((resp) => resp.json())
    .then((data) => setDisplayedCustomers(data));
  }
  else setDisplayedCustomers(customers)
  }

  function deleteCustomer(clickedCustomer){
    const updatedCustomers = displayedCustomers.filter(customer => customer.id !== clickedCustomer.id)
    setDisplayedCustomers(updatedCustomers)
  }

function handleDeleteClick(customer){
  
fetch("http://localhost:9292/customers/:id", {
  method: "DELETE",
  header: {"Content-type": "application/json"}
})
.then(response => response.json())
.then(data => console.log(data))
deleteCustomer(customer)

}

  return (
    <div>
      <Header />
      <AddCustomerForm
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
      <DataContainer
        displayedCustomers={displayedCustomers}
        promoFilter={promoFilter}
        eventsFilter={eventsFilter}
        birthdayFilter={birthdayFilter}
        textsFilter={textsFilter}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
