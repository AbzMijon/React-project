export const ROUTES = {
	initialPage: `/`,
	bookPage: `/bookContent/:bookID`,
	loginPage: `/authorization`,
	userProfile: `/userProfile/:userName`,
};

export const PATH = {
	initialPage: `/`,
	bookPage: (id:number) => `/bookContent/${id}`,
	loginPage: `/authorization`,
	userProfile: (userName:string) => `/userProfile/${userName}`,
};