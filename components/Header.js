import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
//import '../../node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#242424' }} light expand="md">
        <Link href="/">
          <NavLink style={{color:"white"}} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <>
            <NavItem>
                <Link href="/#learn">
                  <NavLink style={{color:"white"}}>What You'll Learn</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/#questions">
                  <NavLink style={{color:"white"}}>Questions</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/#instructors">
                  <NavLink style={{color:"white"}}>Instructors</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{color:"white"}}>Blogs</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <NavLink style={{color:"white"}}>Contact</NavLink>
                </Link>
              </NavItem>
            </>

            {!isAuth() && (
              <>
                <NavItem>
                  <Link href="/signin">
                    <NavLink style={{color:"white"}}>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{color:"white"}}>Signup</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && isAuth().role === 0 && (
              //setTimeout(() => {console.log("wait...")}, 5000),
              <NavItem>
                <Link href="/user">
                  <NavLink style={{color:"white"}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              //setTimeout(() => {console.log("wait...")}, 5000),
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{color:"white"}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              //setTimeout(() => {console.log("wait...")}, 5000),
              <NavItem>
                <NavLink style={{ cursor: 'pointer' },{color:"white"}} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}
            
            {isAuth() && isAuth().role === 1 && (
            <NavItem>
              <Link href="/admin/crud/blog">
                <NavLink className="btn btn-primary text-light">Write a blog</NavLink>
              </Link>
            </NavItem>
            )}
            
            {isAuth() && isAuth().role === 0 && (
            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink className="btn btn-primary text-light">Write a blog</NavLink>
              </Link>
            </NavItem>
            )}
            
            {!isAuth() && (
            <NavItem>
              <Link href="/signin">
                <NavLink className="btn btn-primary text-light">Write a blog</NavLink>
              </Link>
            </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </>
  );
};

export default Header;
