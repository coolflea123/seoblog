import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from "react-social-login-buttons";
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';

const LoginGoogle = () => {
    const responseGoogle = response => {
        // console.log(response);
        const tokenId = response.tokenId;
        const user = { tokenId };
        setTimeout(() => {console.log("wait...")}, 5000);
        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setTimeout(() => {console.log("wait...")}, 15000);
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/blogs`);
                        //Router.push(`/Admin`);
                    } else {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/blogs`);
                        //Router.push(`/User`);
                    }
                });
            }
        });
    };
    setTimeout(() => {console.log("wait...")}, 15000);
    return (
        <div className="pb-3">
            <GoogleLogin
                clientId={`${GOOGLE_CLIENT_ID}`}
                //buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                //theme="dark"
                render={renderProps => (
                    <GoogleLoginButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                    Login with Google
                    </GoogleLoginButton>
                )}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default LoginGoogle;
