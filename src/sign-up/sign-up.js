import React from 'react';
import styles from './sign-up.module.css';

const signup = () => {
    return (
        
        <div>
            <h2>회원가입</h2>
            <div className={styles.login}>
            <input type='email' placeholder='이메일을 입력하시오' className={styles.email}/>
            <hr/>
            <input type='password' placeholder='비밀번호를 입력하시오' className={styles.password}/>
            <hr/>
            </div>
            
            <p>이미 회원이신가요 ?<button className={styles.button}>Login</button></p>
        </div>
        

    )
}

export default signup;