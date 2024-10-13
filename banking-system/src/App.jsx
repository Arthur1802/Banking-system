import AuthProvider from './utils/contexts/authContext/AuthProvider.js'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default App