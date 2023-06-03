import React, {useEffect} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {faPaw } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import '../../../App.css'
import Abandoned from '../../../abandoned/Abandoned';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from '../../../components/views/LoginPage/LoginPage';
import RegisterPage from '../../../components/views/RegisterPage/RegisterPage';
import Auth from '../../../hoc/auth';
import Home from '../../../home/Home';

function LandingPage(props) {

  const [isopenMenu, setIsOpenMenu] = useState(false)

  const toggleBtn = () => {
    setIsOpenMenu(!isopenMenu);
  }
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {console.log(response)})
    },[])

    const onClickHandler = () => {
      axios.get(`/api/users/logout`)
      .then(response => {
        if(response.data.success) {
            props.history.push("/login")
        }else{
          alert("로그아웃 하는데 실패 했습니다")
        }
      })
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
                    <li onClick={onClickHandler}>로그아웃</li>
                </ul>

                <a href='#' className='navbar_toogleBtn' onClick={toggleBtn}>
                    <FontAwesomeIcon icon={faPaw} />
                </a>
            </nav>
            <hr/>

    <div style={{
      display : 'flex', justifyContent : 'center', alignItems : 'center'
      ,width : '100%', height : '100vh'
    }}>
      <h2>시작 페이지</h2>
    </div>
    </div>
  )
}

export default withRouter(LandingPage);