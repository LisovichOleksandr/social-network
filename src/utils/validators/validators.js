export const required = value => {
		// If error
	// return 'error message'
		// IF don`t error
	// return undefined
		if (value) return undefined;
		return 'field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength) return `Max length is ${maxLength} sumbols`;
		return undefined;	
}