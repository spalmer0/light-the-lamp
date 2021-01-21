import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Footer(props) {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} </p>
        </StyledFooter>
    );
};

export default Footer;