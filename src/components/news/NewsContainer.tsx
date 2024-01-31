import { connect, ConnectedProps } from 'react-redux'
import { addNewsCreator } from '../../redux/newsReducer.ts'
import News from './News.tsx'
import { AppStateType } from '../../redux/reduxStore.js'

const mapStateToProps = (state: AppStateType) => {
	return {
		newsPage: state.newsPage,
	}
}

const NewsContainer = connect(mapStateToProps, { addNewsCreator })(News)

export default NewsContainer
