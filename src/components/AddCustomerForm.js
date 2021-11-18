import React from 'react'

function AddCustomerForm({ formData: { name, email, phone, birthday }, handleSubmit, handleFormChange }) {

    return (
        <div>
            <h4>Add a customer</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} placeholder="name" onChange={handleFormChange} />
                <input type="text" name="email" value={email} placeholder="email" onChange={handleFormChange} />
                <input type="text" name="phone" value={phone} placeholder="phone" onChange={handleFormChange} />
                <input type="date" name="birthday" value={birthday} placeholder="birthday" onChange={handleFormChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCustomerForm
