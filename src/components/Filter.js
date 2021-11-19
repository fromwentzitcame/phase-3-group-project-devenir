import React from 'react'
import styled from 'styled-components';

function Filter({ filterOff, promoFilter, eventsFilter, birthdayFilter, textsFilter }) {
    return (
        <div>
            <h4>Filter Subscriber Data</h4>
            <FilterStyle>
                <span>
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
                </span>
            </FilterStyle>

        </div>
    )
}

export default Filter

const FilterStyle = styled.div`
margin-bottom: 20px;
`
