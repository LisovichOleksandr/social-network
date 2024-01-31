import newsReducer, {
	InitialNewsStateType,
	addNewsCreator,
} from './newsReducer'

test('should be added news in state', () => {
	const startState: InitialNewsStateType = {
		newsData: [
			{ id: 1, news: 'Let my people go.' },
			{ id: 2, news: 'Redux is understanding' },
		],
	}
	const t = 'new text'
	const action = addNewsCreator(t)

	const endState = newsReducer(startState, action)

	expect(endState.newsData.length).toBe(3)
	expect(endState.newsData[1].news).toBe('Redux is understanding')
	expect(endState.newsData[2].news).toBe(t)
})
