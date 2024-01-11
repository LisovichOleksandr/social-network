import { connect } from 'react-redux'
import { addNewsCreator, inputText } from '../../redux/newsReducer.ts'
import News from './News'

const mapStateToProps = state => {
	return {
		newsPage: state.newsPage,
	}
}
const mapDispatchToProps = dispatsh => {
	return {
		inputText: text => {
			dispatsh(inputText(text))
		},
		onSendNewsClick: () => {
			dispatsh(addNewsCreator())
		},
	}
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer
