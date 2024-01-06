export const withRouter = Children => {
	return props => {
		const match = { params: useParams() }
		return <Children {...props} match={match} />
	}
}
