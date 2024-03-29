import {Scrape} from "@/utils/scraper";

require("dotenv").config()

const EXPRESS_BASE_URL = process.env.NEXT_PUBLIC_EXPRESS_BASE_URL
export const storeUserLogin = (email: string, token: string, name: string) => {
    window.sessionStorage.setItem('email', email)
    window.sessionStorage.setItem('token', token)
    window.sessionStorage.setItem('name', name)
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
        storeUserLogin(email, data.accessToken, data.firstName + ' ' + data.lastName)
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
            password: password,
        })
    }).then(response => {
        console.log(response)
        status = response.status
        console.log(status)
        return response.json()
    }).then(data => {
        console.log(data)
        storeUserLogin(email, data.accessToken, data.firstName + ' ' + data.lastName)
    }).catch(err => {
        console.log(err)
    })
    return status
}

export const logout = () => {
    window.sessionStorage.setItem('email', '')
    window.sessionStorage.setItem('token', '')
    window.sessionStorage.setItem('name', '')
}

export const getUserScrapes = async (email: string) => {
    let scrapes: Scrape[] = []
    await fetch(`${EXPRESS_BASE_URL}/scrape/user`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                email: email
            })
        }
    ).then(response => {
        return response.json()
    }).then(data => {
        console.log(data.scrapes[0].scrapes)
        scrapes = data.scrapes[0].scrapes
    })
    return scrapes

}