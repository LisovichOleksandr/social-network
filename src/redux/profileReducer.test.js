import profileReducer, { addPost } from "./profileReducer";


it('length of post should be incremented', () => {
	//1 Test Data
	let state = {
		postData: [
			{
				id: 1, post:
					' "If you want to govern the people, You must place yourself below them. If you want to lead people, You must learn how to follow them."      ----- Lao Tzu, Tao Te Ching'

				, likesCount: 12
			},
			{
				id: 2, post:
					'Моя исторія перша в житті і через це вона не може бути ідеальною: "Не подумайте люди добрі що я забоявся поміряти ті штани в секонд-хенді."			 Кінець	and It is my first post'
				, likesCount: 13
			},
			{
				id: 3, post:
					'Ind I am developer app apparatus'
				, likesCount: 122
			},
			{
				id: 4, post:
					'Ind Movement is life.'
				, likesCount: 32
			},
		],
	}
	let action = addPost('New text with test')
	//2 Action
	let newState = profileReducer(state, action)
	//3 Expectation
	expect(newState.postData.length).toBe(5)

})