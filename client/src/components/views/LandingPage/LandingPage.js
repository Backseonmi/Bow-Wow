import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {console.log(response)})
    },[])
  return (
    <div>
      LanginPage 렌딩페이지입니다.
    </div>
  )
}

export default LandingPage;