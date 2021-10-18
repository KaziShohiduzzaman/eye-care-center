import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const { signInWithGoogle, error, setError, processLogin, createNewUser, email, setEmail, password, setPassword, isLogin, setIsLogin } = useFirebase()

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be 6 characters')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)

    }

    const toggleLogIn = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleRegistration}>
                    <div className="row my-3">
                        <h1 className='text-warning text-center my-3 underlined'><u>
                            Please {isLogin ? 'Log in' : 'Register'}</u></h1>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-warning d-block mx-auto">{isLogin ? 'Log in' : 'Sign in'}</button>
                </form>
                <p className='text-center mt-3'><small>_____Sign in with_____</small></p>
                <div className='text-center mb-4'>
                    <span onClick={signInWithGoogle}><i class="fab fa-google login-icon google"></i></span>
                </div>
            </div >
        </div>
    );
};

export default Login;