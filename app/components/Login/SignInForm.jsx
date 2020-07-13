import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { loginAction } from '../../actions'
import { input, Form, ImgInInput } from '../../resource/Styles.js'
import loginImg from '../../resource/images/login.svg'
import pswImg from '../../resource/images/password.svg'

const validate = values => {
    const errors = {}

    if (!values.login) {
        errors.login = 'Введите логин или email!'
    }

    if (!values.password) {
        errors.password = 'Введите пароль!'
    }

    return errors
}

const SignInForm = () => {

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 2))
        // dispatch(loginAction(values))
    }

    // const dispatch = useDispatch()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const login = useField('login', form)
    const password = useField('password', form)

    return (
        <div id="log">
            <h3>Войдите или создайте новую учетную запись</h3>
            <form>
                <div id="in">
                    <p>
                        <ImgInInput src={loginImg} />
                        <input {...login.input}
                            placeholder='Ваш логин'
                            type='text' />
                        {/* {login.meta.touched &&
                            login.meta.error && <span>{login.meta.error}</span>} */}
                    </p>

                    <div>
                        <ImgInInput src={pswImg} />
                        <input {...password.input}
                            placeholder='Ваш пароль'
                            type='password' />
                        {/* {password.meta.touched &&
                            password.meta.error && <span>{password.meta.error}</span>} */}
                    </div>

                    <button type='submit'
                        disabled={submitting}
                        style={{ margin: 'auto', marginTop: '4%' }}>
                        Войти
                    </button>
                    <div id='forgot'>
                        <a href='#'>
                            <p>Забыли пароль?</p>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignInForm