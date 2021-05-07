import styled from 'styled-components'
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
    background: #101522;
    position: sticky;
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;