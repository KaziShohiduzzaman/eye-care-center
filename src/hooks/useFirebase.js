import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user)
            }).catch((error) => {
                setError(error.message)
            });
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUsers(user)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUsers(user)
                setError('');
                setUserName();
            })
            .catch((error) => {
                setError(error.message)
                // ..
            });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers('')
            }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false);
        });
    }, [])

    const handleNameChange = e => {
        setName(e.target.value);
    }

    return {
        signInWithGoogle,
        users,
        setUsers,
        error,
        setError,
        logOut,
        setIsLogin,
        isLoading,
        signInWithGithub,
        processLogin,
        createNewUser,
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        handleNameChange
    }
}
export default useFirebase;
