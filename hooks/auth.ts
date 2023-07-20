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