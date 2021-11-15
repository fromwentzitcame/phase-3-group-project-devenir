import React from 'react'
import '../index.css'

function DataContainer({customers}) {
    // const displayCustomers = customers.map(customer => {<DataCard key={customer.id} customer={customer} />})

    function renderTableData() {
        return customers.map(customer => {
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
              </tr>
           )
        })
     }

    return (
        <div>
        <table id='customers' class='margin' border="1">
          <thead class='blue'>
            <tr class='padding center'>
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
