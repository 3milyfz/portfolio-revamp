import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed; // Make it fixed position
    bottom: 0;
    height: fit-content;
    padding: 10px;
    background-color: black;
    text-align: right;
    width: 100%;
    z-index: 1000; // High value to ensure it's on top
`;

const Text = styled.p`
    color: rgb(210, 212, 199);
    font-size: 18px;
    padding-right: 25px;
`;

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <Text>© {currentYear} Emily Zhou</Text>
        </Container>
    );
}

export default Copyright;
