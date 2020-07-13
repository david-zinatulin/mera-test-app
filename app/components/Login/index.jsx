import React from 'react'
// import { NavLink } from 'react-router-dom'
import styles from '../../resource/css/LoginAndReg.css'
import SignInForm from './SignInForm'

const Login = () => {
    // console.log(history)
    // const error = useSelector(state => state.get('auth').get('error'))

    return (
        <div className='auth' >
            <SignInForm />
            <div id='redirect' style={{ paddingTop: '5%' }} >
                <p style={{ left: '30px', right: '0px' }} >
                    Вы тут впервые ?
            </p>
                {/* <NavLink exact to='/register' > */}
                <button> Зарегистрироваться </button>
                {/* </NavLink> */}
            </div>
        </div>
    )
}

export default Login