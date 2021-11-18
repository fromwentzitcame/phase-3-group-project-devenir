import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <div>
             <HeaderTitle> 
            <h1>Devenir</h1>
            <h3>Athleisure for Self-Actualization</h3> 
            </HeaderTitle>
            <PortalTitle>
            <h4>Newsletter Subscription Management Portal</h4>
            </PortalTitle>
            
        </div>
    )
}



export default Header

const HeaderTitle = styled.div`
font-family: 'Genos', sans-serif;
text-align: center;
color: #FFFFFF;
background-color: #808080;
h1{
font-size: 80px;
margin-bottom: -30px;
margin-top: -20px;

}
h3{
font-size: 40px;
padding-bottom: 20px;
}
h4{
text-align: center; 
font-size: 25px   
}


`
const PortalTitle = styled.div`

h4{
    text-align: center; 
    font-size: 25px   
    }
`