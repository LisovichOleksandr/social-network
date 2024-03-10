import React from 'react'
import Preloader from '../components/common/preloader/preloader'

export function WithSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
	return (props: WCP) => {
		return (
			<React.Suspense fallback={<Preloader />}>
				<WrappedComponent {...props} />
			</React.Suspense>
		)
	}
}
