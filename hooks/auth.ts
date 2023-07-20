export const storeUserLogin = (email: string, token: string) => {
    window.sessionStorage.setItem('email', email)
    window.sessionStorage.setItem('token', token)
}

export const useAuth = () => {
    if (typeof window !== "undefined")
        if (window.sessionStorage.getItem('email') && window.sessionStorage.getItem('token')) {
            return {
                'email': window.sessionStorage.getItem('email'),
                'token': window.sessionStorage.getItem('token')
            }
        }
    return {
        'email': null,
        'token': null
    }
}

export const signIn = async (email: string, password: string) => {
    let status = 400
    await fetch(`${process.env.BASE_URL}/api/auth/signin`, {
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