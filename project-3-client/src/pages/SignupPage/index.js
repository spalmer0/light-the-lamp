import { useState } from 'react';
import { signup } from '../../services/userService';
function SignupPage(props) {
    const [formState, setFormState] = useState(getInitialFormState());
    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await signup(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();

            props.history.push('/');
            
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                value={formState.firstName} 
                onChange={handleChange} 
                name="firstName" 
                type="text" 
                />
                <label>Last Name</label>
                <input 
                value={formState.lastName} 
                onChange={handleChange} 
                name="lastName" 
                type="text" 
                />
                <label>Email</label>
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                />
                <label>Password</label>
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                />
                <button>Sign Up</button>
            </form>
        </div>
    );
}
export default SignupPage;