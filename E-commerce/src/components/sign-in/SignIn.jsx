import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";
import { UserContext } from "../../contexts/UserContext";
import { useState, useContext } from "react";
import { signInWithGooglePopup, signInUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './SignIn.styles.scss'

const defaultFormField = {
    email: '',
    password: '',
}

function SignIn() {
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            await signInUserAuthWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-credential') {
                alert('email or password is incorrect')
            }
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }

    const resetForm = () => {
        setFormField(defaultFormField)
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (e) {
            console.error(e)
        }

    }

    return (

        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={onSubmitHandler}>
                <FormInput label='Email' type='email' name='email' value={email} onChangeHandler={onChangeHandler} />
                <FormInput label='Password' type='password' name='password' value={password} onChangeHandler={onChangeHandler} />

                <div className="buttons-container">
                    <Button type='submit'>SIGN IN</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                </div>

            </form>
        </div>

    );
}

export default SignIn;