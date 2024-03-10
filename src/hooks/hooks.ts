import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/reduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
