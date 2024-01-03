// import profileReducer, { addPost } from './profileReducer'

function doubleChar(str) {
	let r = str.split('')
	let t = r.map(el => el.repeat(2))
	return t.join('')
}

test('inside', () => {
	expect(doubleChar('Cool')).toBe('CCooooll')
})

test('inside Number', () => {
	expect(doubleChar('234')).toBe('223344')
})

test('voice', () => {
	expect(doubleChar('')).toBe('')
})

test('voice', () => {
	expect(doubleChar('')).toBe('')
})
// test('length of post should be incremented', () => {
// 	//1 Test Data

// 	let action = addPost('New text with test')
// 	//2 Action
// 	let newState = profileReducer(state, action)
// 	//3 Expectation
// 	expect(newState.postData.length).toBe(5)
// })
