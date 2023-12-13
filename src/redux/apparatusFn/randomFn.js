const randomFn = (arr) => {
	let el = arr[Math.floor(Math.random() * arr.length)]
	return el
}

export default randomFn