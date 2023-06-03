import React from 'react';
import {Link,Route} from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Abandoned from './abandoned/Abandoned'
import Login from './login/Login';
import signup from './sign-up/sign-up';
import community from './community/Community';

function App() {
  return (
    <div>

        <div className='Bar'>
          <Link className='navbar' to="/home">홈</Link>
          <Link className='navbar' to="/abandoned">키워줘멍</Link>
          <Link className='navbar' to='/bow'>멍멍</Link>
          <Link className='navbar' to='/login'>로그인</Link>
        </div>
     

      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Main} />
      <Route exact path="/abandoned" component={Abandoned} />
      <Route exact path="/bow" component={community} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={signup} />
    </div>
  );
}

export default App;
