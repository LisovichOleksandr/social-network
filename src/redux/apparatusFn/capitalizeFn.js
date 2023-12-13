const capitalizeFn = (str) => {
	let arr = str.split(' ')
	let uperCse = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1));
	return uperCse.join(' ')
}

export default capitalizeFn