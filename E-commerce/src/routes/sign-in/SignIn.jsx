import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
function SignIn() {
    const loginWithGoogle = async () => {
        try {
            const response = await signInWithGooglePopup();
            const { user } = response;
            createUserDocumentFromAuth(user)
        } catch (e) {
            console.error(e)
        }

    }

    return (<div>SignIn
        <button onClick={loginWithGoogle}>Sign in with google</button>
    </div>);
}

export default SignIn;