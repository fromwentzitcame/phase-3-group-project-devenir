import React from 'react'
// import EditCustomer from './EditCustomer'

function Customer({customer, customer:{id, name, email, phone, birthday, created_at, updated_at}, handleDelete, captureEdit, changeEditState}) {


    return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{birthday}</td>
                <td>{created_at}</td>
                <td>{updated_at}</td>
                <td><button onClick={() => {captureEdit(customer); changeEditState()}} >Edit</button><button onClick={() => handleDelete(customer)}>Delete</button></td>
            </tr>
    )
}

export default Customer
