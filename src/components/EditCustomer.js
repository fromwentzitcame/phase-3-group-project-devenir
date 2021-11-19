import React from 'react'

function EditCustomer({ editForm, handleCustomerUpdate, handleChange }) {
    let { id, name, email, phone, birthday } = editForm

    function handleEditForm(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedCustomer => {
                console.log(updatedCustomer)
                handleCustomerUpdate(updatedCustomer)
            })
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <input type="text" name="email" value={email} onChange={handleChange} />
                <input type="text" name="phone" value={phone} onChange={handleChange} />
                <input type="date" name="birthday" value={birthday} onChange={handleChange} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}

export default EditCustomer
