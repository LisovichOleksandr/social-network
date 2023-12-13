

export const random = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
}

export const capitalize = (str) => {
	let arr = str.split(' ')
	let uperCase = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1));
	return uperCase.join(' ')
}
