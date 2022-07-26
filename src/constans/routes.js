export const ROUTES = {
    initialPage: `/`,
    bookPage: '/bookContent/:bookID',
    loginPage: `/authorization`,
}

export const PATH = {
    initialPage: `/`,
    bookPage: (id) => `/bookContent/${id}`,
    loginPage: `/authorization`,
}