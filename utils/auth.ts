require("dotenv").config()

const EXPRESS_BASE_URL = process.env.NEXT_PUBLIC_EXPRESS_BASE_URL
export const storeUserLogin = (email: string, token: string) => {
    window.sessionStorage.setItem('email', email)
    window.sessionStorage.setItem('token', token)
}
export const signIn = async (email: string, password: string) => {
    let status = 400
    await fetch(`${EXPRESS_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
            email: `${email}`,
            password: `${password}`
        })
    }).then(response => {
        status = response.status
        console.log(status)
        return response.json()
    }).then(data => {
        console.log(data)
        storeUserLogin(email, data.accessToken)
    }).catch(err => {
        console.log(err)
    })
    return status
}

export const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
    let status = 400
    console.log(EXPRESS_BASE_URL)
    await fetch(`${EXPRESS_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
    }).then(response => {
        console.log(response)
        status = response.status
        console.log(status)
        return response.json()
    }).then(data => {
        console.log(data)
        storeUserLogin(email, data.accessToken)
    }).catch(err => {
        console.log(err)
    })
    return status
}