import { Link } from 'react-router-dom';
import lamp from '../../images/lamp.png';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
    box-shadow: 3px 3px 5px 3px lightgrey;
    padding: 0 15px;

    nav {
        display: flex;
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 20px;
    }
    
    li {
        font-size: 25px;
        margin-right: 20px;
    }

    h1 {
        margin-right: 20px;
    }

    a {
        text-decoration: none;
        color: white; 
    }
`;

function Header(props) {
    return (
        <StyledHeader>
            <Link to="/">
                <ul>
                    <h1>Light the Lamp</h1>
                    <img src={lamp} alt="goal lamp" height={80} width={120} />

                </ul>
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};
export default Header;