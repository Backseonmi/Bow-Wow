import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {loginUser} from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {faPaw } from "@fortawesome/free-solid-svg-icons";
import '../../../App.css'
import Abandoned from '../../../abandoned/Abandoned';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../../../components/views/LandingPage/LandingPage.js';
import RegisterPage from '../../../components/views/RegisterPage/RegisterPage';
import Auth from '../../../hoc/auth';
import Home from '../../../home/Home';

function LoginPage(props) {
  const [isopenMenu, setIsOpenMenu] = useState(false)

    const toggleBtn = () => {
      setIsOpenMenu(!isopenMenu);
    }

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email : Email,
      password : Password
    }

    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess) {
          props.history.push('/')
        }else{
          alert('Error')
        }
      })

  }
  const onClickHandler = () => {
      props.history.push("/register")
  
  }

  return (
    <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    <a href=''>멍주인</a>
                </div>
                
                <ul className={`navbar_menu ${isopenMenu ? 'active' : ''}`}>
                    <li><Link to="/home">홈</Link></li>
                    <li><Link to="/abandoned">키워줘멍</Link></li> 
                    <li><Link to='/bow'>멍멍</Link></li> 
                    <li><Link to='/play'>놀자멍</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                </ul>

                <a href='#' className='navbar_toogleBtn' onClick={toggleBtn}>
                    <FontAwesomeIcon icon={faPaw} />
                </a>
            </nav>
            <hr/>
    <div style={{
      displonSubmitHandleray : 'flex', justifyContent : 'center', alignItems : 'center'
      ,width : '100%', height : '100vh'
    }}>
      <form style={{display : 'flex', flexDirection : 'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler}/>
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler}/>

          <br />
          <button type="submit">
            로그인
          </button>
          <button type="submit" onClick={onClickHandler}>
            회원가입
          </button>
      </form>
    </div>
    </div>
  )
}

export default withRouter(LoginPage);
