export const useAuth = () => {
    if (typeof window !== "undefined")
        if (window.sessionStorage.getItem('email') && window.sessionStorage.getItem('token')) {
            return [
                window.sessionStorage.getItem('email'),
                window.sessionStorage.getItem('token'),
                window.sessionStorage.getItem('name')
            ]
        }
    return [
        null,
        null,
        null
    ]
}