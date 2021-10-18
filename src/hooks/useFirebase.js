import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUsers(result.users)
            }).catch((error) => {
                setError(error.message)
            });
    }


    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                setError(error.message)
                // ..
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUsers('')
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
        });
    }, [])

    return {
        signInWithGoogle,
        users,
        setUsers,
        error,
        setError,
        logOut,
        processLogin,
        createNewUser,
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin

    }
}
export default useFirebase;
