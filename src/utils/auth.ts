export const isAuthenticated = (url: string) => {
  const auth =
    url === '/' || url === '/login' || url === '/signup' ? false : true
  //This function will return true or false depending on whether the user is authenticated or not.
  // const authToken = localStorage.getItem('authToken')
  // return !!authToken

  return auth
}
