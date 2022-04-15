import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';
import LoginFacebook from './LoginFacebook';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                setTimeout(() => {console.log("wait...")}, 8000);
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/blogs`);
                        //Router.push(`/Admin`);
                        setValues({ ...values, email: '', password: '',error: '',message: ''});

                    } else {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/blogs`);
                        //Router.push(`/User`);
                        setValues({ ...values, email: '', password: '',error: '',message: ''});
                    }
                });
            }
        });

    };

    const handleChange = name => e => {
        setTimeout(() => {console.log("wait...")}, 5000);
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                    <button className="btn btn-primary">Signin</button>
                </div>
            </form>
        );
    };

    return (
        <>
            {showError()}
            {showLoading()}
            {showMessage()}
            <LoginGoogle />
            <LoginFacebook />
            {showForm && signinForm()}
            <br />
            <Link href="/auth/password/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link>
        </>
    );
};

export default SigninComponent;
