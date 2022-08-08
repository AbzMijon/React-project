export const ROUTES = {
    initialPage: `/`,
    bookPage: `/bookContent/:bookID`,
    loginPage: `/authorization`,
    supportPage: `/support`,
    userProfile: `/userProfile/:userName`
}

export const PATH = {
    initialPage: `/`,
    bookPage: (id) => `/bookContent/${id}`,
    loginPage: `/authorization`,
    supportPage: `support`,
    userProfile: (userName) => `/userProfile/${userName}`
}