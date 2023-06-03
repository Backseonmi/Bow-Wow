import React from 'react';
import mydog from '../img/mydog.jpg';
import sytels from './Main.module.css'

const Main = () => {

    return (
        <div>
            <div>
                <img src={mydog} className={sytels.mydog}/>
            </div>
        </div>
    )

}

export default Main;