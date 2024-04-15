import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Building a component to guard our routes.
const PrivateRoute = ({ children }:{children:React.ReactNode})  => {
    const { user } = useSelector((state : any) => state.auth)

    if (user) return (<>{children}</>)

    return (
        <>
          <Navigate to='/login' />
        </>
    )
}

export default PrivateRoute