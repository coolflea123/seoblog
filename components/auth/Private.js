import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Private = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            setTimeout(() => {console.log("wait...")}, 5000);
            Router.push(`/signin`);
        }
    }, []);
    return <>{children}</>;
};

export default Private;
