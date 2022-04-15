import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';
import Router from 'next/router';
//import GoogleButton from 'react-google-button';
import { loginWithFacebook, authenticate, isAuth } from '../../actions/auth';
import { FB_APP_ID, API } from '../../config';
import { FacebookLoginButton } from "react-social-login-buttons";

const LoginFacebook = () => {
    const responseFacebook = response => {
        console.log(response);
        const userId=response.userID;
        const accessToken=response.accessToken;
        const user={userId,accessToken};
        setTimeout(() => {console.log("wait...")}, 5000);
        loginWithFacebook(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/admin`);
                    } else {
                        setTimeout(() => {console.log("wait...")}, 5000);
                        Router.push(`/user`);
                    }
                });
            }
        });
    }
    return (
        <div className="pb-3">
            <FacebookLogin
                fields="name,email,picture"
                appId={`${FB_APP_ID}`}
                autoLoad={false}
                callback={responseFacebook}
                render={renderProps => (
                    <FacebookLoginButton onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">
                        <i className="fab fa-facebook pr-2"></i> Login with Facebook
                    </FacebookLoginButton>
                )}
            />
        </div>
    );
};

export default LoginFacebook;