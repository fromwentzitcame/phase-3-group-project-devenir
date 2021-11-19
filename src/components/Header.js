import React from 'react'
import {styled} from 'styled-components';

function Header() {
    return (
        <div>
            <HeaderTitle>
                <h1>Devenir</h1>
                <h3>Athleisure for Self-Actualization</h3>
            </HeaderTitle>
        </div>
    )
}

export default Header

const HeaderTitle = styled.div`
font-family: 'Genos', sans-serif;
text-align: center;
color: #FFFFFF;
background-color: #707070;
h1{
font-size: 80px;
margin-bottom: -20px;
margin-top: -20px;
}
h3{
font-size: 40px;
}
`
