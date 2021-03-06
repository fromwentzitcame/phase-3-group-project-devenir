import React from 'react'

function Filter({ filterOff, promoFilter, eventsFilter, birthdayFilter, textsFilter }) {
    return (
        <div>
            <h4>Filter Subscriber Data</h4>
                <div style={filterStyle}>
                    <div>
                        <input type="radio" name="filter" onClick={filterOff}></input> All Customers
                    </div>
                    <div>
                        <input type="radio" name="filter" onClick={promoFilter}></input> Promos and Sales
                    </div>
                    <div>
                        <input type="radio" name="filter" onClick={eventsFilter}></input> Community Events
                    </div>
                    <div>
                        <input type="radio" name="filter" onClick={birthdayFilter}></input> Birthday Promo
                    </div>
                    <div>
                        <input type="radio" name="filter" onClick={textsFilter}></input> Texts
                    </div>
                </div>
        </div>
    )
}

export default Filter

const filterStyle = {
marginBottom: "20px"
}
