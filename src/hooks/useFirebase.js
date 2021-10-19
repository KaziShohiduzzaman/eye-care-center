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
        return signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     setUsers(user)
        //     setError('');
        // })
        // .catch((error) => {
        //     setError(error.message)
        // });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                setUsers(result);
            })
            .finally(() => setIsLoading(false));

    }
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     setUsers(user)
        //     setError('');
        //     setUserName();
        // })
        // .catch((error) => {
        //     setError(error.message)
        //     // ..
        // });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers('')
            }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers(user)
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [auth, users])

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
        handleNameChange,
        setUserName,
        name
    }
}
export default useFirebase;
