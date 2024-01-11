const S = 'S'

type GenesisType = {
	baseForm: string
	translate: string
}

type EtymologyDataType = {
	id: number
	baseForm: string
	translate: string
	genesis: Array<GenesisType>
	description: string
}

let initialState = {
	etymologyData: [
		{
			id: 1,
			baseForm: 'stubborn',
			translate: 'упрямый',
			genesis: [
				{ baseForm: 'stub', translate: 'пень' },
				{ baseForm: 'born', translate: 'рожденный' },
			],
			description: 'Тот кто родился пнем.',
		},
		{
			id: 2,
			baseForm: 'often',
			translate: 'часто',
			genesis: [
				{ baseForm: 'of', translate: 'больше' },
				{ baseForm: 'ten', translate: 'десять' },
			],
			description: 'Из десяти. Все что больше десяти - часто.',
		},
		{
			id: 3,
			baseForm: 'defense',
			translate: 'защита',
			genesis: [
				{ baseForm: 'de', translate: 'за' },
				{ baseForm: 'fence', translate: 'забор' },
			],
			description:
				'Дословно за забором. Задача: "найти слова образующиеся префиксом DE"   ',
		},
		{
			id: 4,
			baseForm: 'hut',
			translate: 'хижина',
			genesis: [
				{ baseForm: '', translate: '' },
				{ baseForm: '', translate: '' },
			],
			description: 'Pizza hut избушка пиццы',
		},
		{
			id: 5,
			baseForm: 'similar',
			translate: 'подобный',
			genesis: [
				{ baseForm: 'assimilation', translate: 'ассимиляция' },
				{ baseForm: 'assimilation', translate: 'уподобление' },
			],
			description: 'Ассимилировался и уподобился',
		},
	] as Array<EtymologyDataType>,
}

type InitialStateType = typeof initialState

const etymologyReducer = (
	state = initialState,
	action: any
): InitialStateType => {
	switch (action.type) {
		case 's':
			return { ...state }
	}

	return state
}

// export const executeSimplePresent = () => ({ type: 'a' })

export default etymologyReducer
