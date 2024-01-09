import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import {auth, provider} from "../firebase";
import {useNavigate} from "react-router-dom"

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

const signIn = async () => {
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    await auth.signInWithPopup(provider).then((result) =>{
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
    }).then(()=>{
      navigate("/")
    })
  } catch (error) {
    alert(error.message);
  }
};
const signOut = async () =>{
  auth.signOut()
  .then(()=>{
    dispatch(setSignOut())
    navigate("/login");
  })
}
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <Login onClick={signIn} >Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
              <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </a>
            </Link>
            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} onClick={signOut} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  top: 0;
  position: sticky;
  z-index: 3;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding:8px 16px;
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background-color: rgba(0,0,0,.6);
    transition: all .2s ease 0s;
    cursor: pointer;
    margin-left:auto;
    
    &:hover {
      background-color: #f9f9f9;
      color: black;
      border-color: transparent;
    }

`
