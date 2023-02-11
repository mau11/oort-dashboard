import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.h3`
    display: flex;
    border: 1px solid;
    align-items: center;
    width: fit-content;
`;

Header.Item = styled.div`
    min-width: ${props => props.lg ? '186' : '136'}px;
    text-align: center;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Row = styled.div`
    display: flex;
`;

Row.Item = styled.div`
    min-width: ${props => props.lg ? '186' : '136'}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
