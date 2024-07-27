import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { signInUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { signInWithGoogleStart, signInWithEmailAndPasswordStart } from "../../reducers/user/user.action";

import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";;
import './SignIn.styles.scss'


const defaultFormField = {
    email: '',
    password: '',
}

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        dispatch(signInWithEmailAndPasswordStart(email, password))
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }

    const resetForm = () => {
        setFormField(defaultFormField)
    }

    const signInWithGoogle = async () => {
        dispatch(signInWithGoogleStart())
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