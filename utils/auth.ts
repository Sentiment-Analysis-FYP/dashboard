require("dotenv").config()

export const storeUserLogin = (email: string, token: string) => {
    window.sessionStorage.setItem('email', email)
    window.sessionStorage.setItem('token', token)
}
export const signIn = async (email: string, password: string) => {
    let status = 400
    await fetch(`${process.env.EXPRESS_BASE_URL}/auth/signin`, {
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