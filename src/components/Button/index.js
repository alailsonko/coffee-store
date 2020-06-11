import styled from 'styled-components'

const Button = styled.button`
    outline: none! important;
    cursor: pointer;
    color: white;
    background: #FF8822;
    font-size: 1em;
    margin: 0em 0em 0em 2.3em;
    padding: 0.25em 1em;
    border: 1px solid #FF8822;
    border-radius: 100px;
    width: 328px;
    height: 48px;
    position: absolute;
    &:hover {
        border: 1px solid #FF8822;
        box-shadow: 0 0 10px #FF8822;
    }
`;

export default Button;