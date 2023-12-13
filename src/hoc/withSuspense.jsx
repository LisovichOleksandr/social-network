import { Suspense } from "react"
import Preloader from "../components/common/preloader/preloader"


export const WithSuspense = (Children) => {

return (props) => {
	return <Suspense fallback={<Preloader />}>
			<Children {...props}/>
		</Suspense>
		}
	}