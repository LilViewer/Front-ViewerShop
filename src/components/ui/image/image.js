import styled from 'styled-components';

const Image = styled.div`

    width: ${props => props.sizeWidth};
    overflow:hidden;
    & img{
        width: 100%;
        min-height: 270px;
        border-radius: 10px 10px 0px 0px;
    }
`

export default Image