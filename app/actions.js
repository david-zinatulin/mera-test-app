import { host } from './constants'

export const loginAction = ({ email, password }) => {
    console.warn(state.email + state.password);
    let payload = {
        email: email,
        password: password
    };

    let user = {
        email: 'davidzinatulin@gmail.com',
        password: 'TestPass123'
    };

    fetch(`https://api.peerberry.com/v1/investor/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: queryString.stringify(user)
    })
}


// export const loginAction = ({ login, password }, history) => {
//     return async(dispatch) => {
//         try {
//             console.log({ login, password })
//             const response = await axios.post(`${host}/login`, { login, password })
//             console.log(response)
//             console.log(response.data.token)
//             dispatch(authenticatedUser())
//             localStorage.setItem('user', response.data.token)
//             history.push('/dashboard')
//         } catch (error) {
//             dispatch(authenticationError('Invalid email or password'))
//         }
//     }
// }

// export const registerAction = ({ login, email, password }, history) => {
//     return async(dispatch) => {
//         try {
//             // const id = uuidv4()
//             console.log({ login, email, password })
//             const response = await fetchJSON(
//                 `${host}/register`, {
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ login, email, password })
//                 }
//             )
//             console.log(response)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }