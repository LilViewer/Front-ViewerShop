import styled from "styled-components";


const Discount = styled.div`
  border: 2px solid white;
  color: black;
  position: absolute;
  background: #3FD371;
  display: ${props => props.display};
  border-radius: 12px;
  text-align: center;
  padding: 5px;
  bottom: 1px;
`


export default Discount