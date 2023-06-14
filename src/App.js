import React from 'react';
import {Link,Route} from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Abandoned from './abandoned/Abandoned'
import Login from './login/Login';
import CommunityList from './community/CommunityList';
import CommunityWrite from './community/CommunityWrite';
import CommunityDetail from './community/CommunityDetail';
import Shelter from './Shelter/Shelter';
import Location1 from './location/Location1';
import Location2 from './location/Location2';
import Location3 from './location/Location3';
import Location4 from './location/Location4';
import Location5 from './location/Location5';
import Location6 from './location/Location6';
import Location7 from './location/Location7';
import Location8 from './location/Location8';
import Location9 from './location/Location9';
import Location10 from './location/Location10';

function App() {
  return (
    <div>

        <div className='Bar'>
          <Link className='navbar' to="/home">홈</Link>
          <Link className='navbar' to="/abandoned">키워줘멍</Link>
          <Link className='navbar' to='/bow'>멍멍</Link>
          <Link className='navbar' to='/shelter'>보러와멍</Link>
          <Link className='navbar' to='/login'>나의멍</Link>
        </div>
     

        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/home" render={() => <Main />} />
        <Route exact path="/abandoned" render={() => <Abandoned />} />
        <Route exact path="/shelter" render={() => <Shelter />} />
        <Route exact path="/bow" render={() => <CommunityList />} />
        <Route exact path="/location1" render={() => <Location1 />} />
        <Route exact path="/location2" render={() => <Location2 />} />
        <Route exact path="/location3" render={() => <Location3 />} />
        <Route exact path="/location4" render={() => <Location4 />} />
        <Route exact path="/location5" render={() => <Location5 />} />
        <Route exact path="/location6" render={() => <Location6 />} />
        <Route exact path="/location7" render={() => <Location7 />} />
        <Route exact path="/location8" render={() => <Location8 />} />
        <Route exact path="/location9" render={() => <Location9 />} />
        <Route exact path="/location10" render={() => <Location10 />} />
        <Route exact path="/community/write" component={CommunityWrite} />
        <Route path="/community/detail/:postId" component={CommunityDetail} />
        <Route exact path="/login" render={() => <Login />} />

    </div>
  );
}

export default App;