import React, {useState} from 'react'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import Filter from './Filter'
import '../index.css'

function Customers({displayedCustomers, filterOff, promoFilter, eventsFilter, birthdayFilter, textsFilter, deleteCustomer, onUpdateCustomer}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    birthday: "",
  })

  function handleCustomerUpdate(updatedCustomer) {
      setIsEditing(false);
      onUpdateCustomer(updatedCustomer);
    };  

    function changeEditState() {
      setIsEditing(isEditing => !isEditing)
    }

    function captureEdit(clickedCustomer) {
      let filtered = displayedCustomers.filter((customer) => customer.id === clickedCustomer.id)
      setEditForm(filtered[0])
    }

    function renderEditForm() {
            return (<EditCustomer
            editForm={editForm}
            handleCustomerUpdate={handleCustomerUpdate}
            />)
    }

    function renderTableData() {
        return (displayedCustomers.map((customer) => {
          return (
            <Customer
            key={customer.id}
            customer={customer}
            handleDelete={handleDelete}
            onUpdateCustomer={onUpdateCustomer}
            captureEdit={captureEdit}
            changeEditState={changeEditState}
            />
          )
        }))
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
          <Filter
            filterOff={filterOff}
            promoFilter={promoFilter}
            eventsFilter={eventsFilter}
            birthdayFilter={birthdayFilter}
            textsFilter={textsFilter}
          />
          {isEditing? renderEditForm() : null}
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
