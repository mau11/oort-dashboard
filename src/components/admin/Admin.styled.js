import styled from 'styled-components';
import { breakpoints } from '@utils/breakpoints';

export const Wrapper = styled.div`
    padding: 8px;
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

Nav.Text = styled.div`
    font-style: italic;
    font-size: 12px;
`;

export const Title = styled.h2`
    @media ${breakpoints.tablet.portrait} {
        font-size: 18px;
    }
`;

export const Body = styled.div`
    overflow-x: scroll;
`;

export const Button = styled.div`
    border: 1px solid black;
    background-color: black;
    padding: 4px 20px;
    color: white;
    border-radius: 0.25rem;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    width: 112px;
    text-align: center;

    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }

    @media ${breakpoints.tablet.portrait} {
        padding: 4px 12px;
        width: 100px;
    }
`;

Button.Wrapper = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 8px;
`;

export const Header = styled.div`
    display: flex;
    border: 1px solid;
    align-items: center;
    width: fit-content;
    background-color: var(--amplify-components-button-primary-background-color);
    color: white;
    font-weight: 700;
`;

Header.Item = styled.div`
    min-width: ${props => props.lg ? '200' : '136'}px;
    text-align: center;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1;
    letter-spacing: 1px;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }

    @media ${breakpoints.tablet.portrait} {
        height: 50px;
    }
`;


export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Row = styled.div`
    display: flex;
    background-color: ${props => props.color ? 'rgba(4, 125, 149, 0.1)' : 'unset'};
    width: fit-content;
    font-size: 14px;

    @media ${breakpoints.tablet.portrait} {
        height: 45px;
    }
`;

Row.Item = styled.div`
    width: ${props => props.lg ? '200' : '136'}px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px 0;
`;
