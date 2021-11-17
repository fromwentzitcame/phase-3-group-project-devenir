import React from 'react'
import '../index.css'

function DataContainer({displayedCustomers, promoFilter, eventsFilter, birthdayFilter, textsFilter, deleteCustomer}) {

    function renderTableData() {
        return displayedCustomers.map(customer => {
           const { id, name, email, phone, birthday, created_at, updated_at } = customer
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phone}</td>
                 <td>{birthday}</td>
                 <td>{created_at}</td>
                 <td>{updated_at}</td>
                 <td><button>Edit</button><button onClick={() => handleDelete(customer)}>Delete</button></td>
              </tr>
           )
        })
     }
 
    function handleDelete(customer) {
      fetch(`http://localhost:9292/customers/${customer.id}`, {
        method: "DELETE",
        headers: {"Content-Type" : "application/json",}
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    deleteCustomer(customer)
    }

    return (
        <div>
            <h4>Filter Subscriber Data</h4>
            <span>
            <div> Promos and Sales:
              <input type="checkbox" name="promo" onClick={promoFilter}></input>
            </div>
            <div> Community Events:
              <input type="checkbox" name="promo" onClick={eventsFilter}></input>
            </div>
            <div> Birthday Promo:
              <input type="checkbox" name="promo" onClick={birthdayFilter}></input>
            </div>
            <div> Texts:
              <input type="checkbox" name="promo" onClick={textsFilter}></input>
            </div>
          </span>
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
                <th>Edit Customer</th>
              </tr>
            </thead>
            <tbody id="table-body">
                {renderTableData()}
            </tbody>
          </table>
        </div>
    )
}

export default DataContainer
