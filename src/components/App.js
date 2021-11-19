import Customers from "./Customers";
import AddCustomerForm from "./AddCustomerForm";
import Header from "./Header";
import styled from 'styled-components';
import React, { useEffect, useState } from "react";

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

  // new customer form functionality
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
        setDisplayedCustomers([...displayedCustomers, data])
        setFormData({
          name: "",
          email: "",
          phone: "",
          birthday: "",
        })
      })
  }

  // display newsletter subscribers
  function filterOff(e) {
    if (e.target.checked) {
      setDisplayedCustomers(customers)
    }
  }

  function promoFilter(e) {
    if (e.target.checked) {
      console.log("filter accessed")
      fetch("http://localhost:9292/newsletters/promos")
        .then((resp) => resp.json())
        .then((data) => setDisplayedCustomers(data));
    } else setDisplayedCustomers(customers)
  }

  function eventsFilter(e) {
    if (e.target.checked) {
      console.log("filter accessed")
      fetch("http://localhost:9292/newsletters/events")
        .then((resp) => resp.json())
        .then((data) => setDisplayedCustomers(data));
    } else setDisplayedCustomers(customers)
  }

  function birthdayFilter(e) {
    if (e.target.checked) {
      console.log("filter accessed")
      fetch("http://localhost:9292/newsletters/birthdays")
        .then((resp) => resp.json())
        .then((data) => setDisplayedCustomers(data));
    } else setDisplayedCustomers(customers)
  }

  function textsFilter(e) {
    if (e.target.checked) {
      console.log("filter accessed")
      fetch("http://localhost:9292/newsletters/texts")
        .then((resp) => resp.json())
        .then((data) => setDisplayedCustomers(data));
    } else setDisplayedCustomers(customers)
  }

  // delete customer
  function deleteCustomer(clickedCustomer) {
    const updatedCustomers = displayedCustomers.filter(
      customer => customer.id !== clickedCustomer.id
    )
    setDisplayedCustomers(updatedCustomers)
  }

  // update customers after edit
  function onUpdateCustomer(updatedCustomer) {
    const updatedCustomers = displayedCustomers.map(
      customer => {
        if (customer.id === updatedCustomer.id) {
          return updatedCustomer
        } else { return customer }
      }
    )
    setDisplayedCustomers(updatedCustomers)
  }


  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <PortalTitle>
          <h4>Newsletter Subscription Management Portal</h4>
        </PortalTitle>
        <AddCustomerForm
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
        />
        <Customers
          displayedCustomers={displayedCustomers}
          filterOff={filterOff}
          promoFilter={promoFilter}
          eventsFilter={eventsFilter}
          birthdayFilter={birthdayFilter}
          textsFilter={textsFilter}
          deleteCustomer={deleteCustomer}
          onUpdateCustomer={onUpdateCustomer}
        />
      </div>
    </div>
  );
}

export default App;

const pageStyle = {
  backgroundColor: "#CCCCCC",
  borderTop: "solid 1px",
  boxShadow: "0 -0.5px 5px",
  minHeight: "100vh",
  position: "relative"
}

const PortalTitle = styled.div`
h4{
    text-align: center; 
    font-size: 25px   
    }
`