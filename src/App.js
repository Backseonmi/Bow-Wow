import React from 'react';
import {Link,Route} from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Abandoned from './abandoned/Abandoned'
import Login from './login/Login';
import Signup from './sign-up/sign-up';
import Community from './community/Community';

function App() {
  return (
    <div>

        <div className='Bar'>
          <Link className='navbar' to="/home">홈</Link>
          <Link className='navbar' to="/abandoned">키워줘멍</Link>
          <Link className='navbar' to='/bow'>멍멍</Link>
          <Link className='navbar' to='/login'>나의멍</Link>
        </div>
     

        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/home" render={() => <Main />} />
        <Route exact path="/abandoned" render={() => <Abandoned />} />
        <Route exact path="/bow" render={() => <Community />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/sign" render={() => <Signup />} />

    </div>
  );
}

export default App;