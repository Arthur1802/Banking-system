import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Welcome />}/>
                <Route path = "/welcome" element = {<Welcome />}/>
                <Route path = "/login" element = {<Login />}/>
                <Route path = "/signin" element = {<Signin />}/>
                <Route path = "/home" element = <ProtectedRoute element = {<Home />}/> />
            </Routes>
        </BrowserRouter>
    )
}