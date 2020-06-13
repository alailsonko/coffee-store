import React from 'react'
import styled from "styled-components";

function Aside() {
    return (
        <AsideStyled>
             <div className="icon-aside logo white"/>
        </AsideStyled>
    )
}






const AsideStyled = styled.aside`
   
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

/* Primary */

background: #FF8822;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`
export default Aside;
 