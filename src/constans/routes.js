export const ROUTES = {
    initialPage: `/`,
    bookPage: `/bookContent/:bookID`,
    loginPage: `/authorization`,
    supportPage: `support`,
}

export const PATH = {
    initialPage: `/`,
    bookPage: (id) => `/bookContent/${id}`,
    loginPage: `/authorization`,
    supportPage: `support`,
}