export const API_ENDPOINT = () => {
	return document.URL.split('/')[2] == 'localhost:4200'
		?
		'http://localhost:8080/trumptweetapi/rest' 
		:
		'todo: add production server'
}
