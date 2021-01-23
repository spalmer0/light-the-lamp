import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Footer(props) {
    return (
        <StyledFooter>
            <p>Copyright &copy; {new Date().getFullYear()} Light the Lamp. All Rights Reserved. </p>
        </StyledFooter>
    );
};

export default Footer;