import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <div>
            <HeaderTitle>
                <h1>Devenir</h1>
                <h3>Enterprise Data Management</h3>
            </HeaderTitle>
        </div>
    )
}

export default Header

const HeaderTitle = styled.div`
font-family: 'Genos', sans-serif;
text-align: center;
color: #FFFFFF;
text-shadow: 1px 1px 3px #000000;
/* background-color: #707070; */
h1{
font-size: 80px;
margin-bottom: -15px;
margin-top: 1px;
}
h3{
font-size: 40px;
margin-bottom: 20px;
margin-top: 5px;
}
`
