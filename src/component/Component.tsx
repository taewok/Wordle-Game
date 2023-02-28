import React from 'react';
import styled from "styled-components";

const Component = () => {
    return (
        <Bg>
            fsdfsfdsf
        </Bg>
    );
};

const Bg = styled.div`
    background-color: ${({theme})=>theme.lightTheme.backgroundColor};
`

export default Component;