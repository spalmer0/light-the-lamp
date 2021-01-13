import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import lamp from '../../images/lamp.png';

function Header(props) {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <h1>Light the Lamp</h1>
                <img src={lamp} alt="goal lamp" height={100} width={150} />
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </>
                        :
                        <>
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
        </header>
    );
};
export default Header;