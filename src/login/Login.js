import React from 'react';
import styles from './login.module.css';

const Login = () => {

    return (
        
        <div>
            <h2>로그인</h2>
            <div className={styles.login}>
            <input type='email' placeholder='이메일을 입력하시오' className={styles.email}/>
            <hr/>
            <input type='password' placeholder='비밀번호를 입력하시오' className={styles.password}/>
            <hr/>
            </div>
            
            <p>회원이 아니신가요 ?<button className={styles.button}>Sign-Up</button></p>
        </div>
        

    )
}

export default Login;