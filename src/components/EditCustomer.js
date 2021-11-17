import React, {useState} from 'react'

function EditCustomer({ editForm, handleCustomerUpdate }) {
    let {id, name, email, phone, birthday} = editForm
    const [updatedName, setUpdatedName] = useState(name)
    const [updatedEmail, setUpdatedEmail] = useState(email)
    const [updatedPhone, setUpdatedPhone] = useState(phone)
    const [updatedBirthday, setUpdatedBirthday] = useState(birthday)

    function handleEditForm(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: updatedName,
                email: updatedEmail,
                phone: updatedPhone,
                birthday: updatedBirthday
            }),
        })
            .then(resp => resp.json())
            .then(updatedCustomer => handleCustomerUpdate(updatedCustomer))
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={updatedName} placeholder={name} onChange={(e) => setUpdatedName(e.target.value)}/>
                <input type="text" name="email" value={updatedEmail} placeholder={email} onChange={(e) => setUpdatedEmail(e.target.value)}/>
                <input type="text" name="phone" value={updatedPhone} placeholder={phone} onChange={(e) => setUpdatedPhone(e.target.value)}/>
                <input type="date" name="birthday" value={updatedBirthday} placeholder={birthday} onChange={(e) => setUpdatedBirthday(e.target.value)}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}

export default EditCustomer
