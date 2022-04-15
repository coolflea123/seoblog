import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            setTimeout(() => {console.log("wait...")}, 5000);
            Router.push(`/signin`);
        } else if (isAuth().role !== 1) {
            setTimeout(() => {console.log("wait...")}, 5000);
            Router.push(`/`);
        }
    }, []);
    return <>{children}</>;
};

export default Admin;
