import { useState } from "react";
import { useNavigate } from "react-router";
import { myCreateUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import './SignUp.styles.scss'
const defaultFormfield = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

function SignUp() {
    const [formField, setFormField] = useState(defaultFormfield);
    const { displayName, email, password, confirmPassword } = formField;
    const navigate = useNavigate()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Password do not match')
            return;
        }
        try {
            const resp = await myCreateUserWithEmailAndPassword(email, password)
            const { user } = resp
            await createUserDocumentFromAuth(user, { displayName })
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use.')
            }
            console.log('Error signing up with email and password', error)
        }

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }
    console.log(formField)

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label='Display Name' type="text" onChangeHandler={onChangeHandler} value={displayName} />

                <FormInput label='Email' type="email" name='email' onChangeHandler={onChangeHandler} value={email} />

                <FormInput label='Password' type="password" name='password' onChangeHandler={onChangeHandler} value={password} />

                <FormInput label='Confirm Password' type="password" name='confirmPassword' onChangeHandler={onChangeHandler} value={confirmPassword} />

                <Button type='submit'>Sign Up</Button>

            </form>
        </div>
    );
}

export default SignUp;