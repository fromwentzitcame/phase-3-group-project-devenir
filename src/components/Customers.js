import React, { useState } from 'react'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import Filter from './Filter'
import '../index.css'

function Customers({ displayedCustomers, filterOff, promoFilter, eventsFilter, birthdayFilter, textsFilter, deleteCustomer, onUpdateCustomer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    birthday: "",
  })

  // when PATCH request happens
  function handleCustomerUpdate(updatedCustomer) {
    setIsEditing(false);
    onUpdateCustomer(updatedCustomer);
  }

  // capture user input in edit form
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }


  function changeEditState(customer) {
    if (customer.id === editForm.id) {
      setIsEditing(isEditing => !isEditing)
    } else if (isEditing === false) {
      setIsEditing(isEditing => !isEditing)
    }
  }

  function captureEdit(clickedCustomer) {
    let filtered = displayedCustomers.filter(customer => customer.id === clickedCustomer.id)
    setEditForm(filtered[0])
  }

  function renderTableData() {
    return (displayedCustomers.map(customer => {
    console.log(customer.id)
    return (<Customer
      key={customer.id}
      customer={customer}
      handleDelete={handleDelete}
      captureEdit={captureEdit}
      changeEditState={changeEditState}
    />)}
    )
    )
  }

  function handleDelete(customer) {
    fetch(`http://localhost:9292/customers/${customer.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", }
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
    deleteCustomer(customer)
  }


  return (
    <div>
      <Filter
        filterOff={filterOff}
        promoFilter={promoFilter}
        eventsFilter={eventsFilter}
        birthdayFilter={birthdayFilter}
        textsFilter={textsFilter}
      />
      {isEditing ? <EditCustomer editForm={editForm} handleChange={handleChange} handleCustomerUpdate={handleCustomerUpdate} /> : null}
      <table id='customers' border="1">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Modify Customer</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default Customers
