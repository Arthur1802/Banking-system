import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = true
    if (!isLoggedIn) {
        toast.error('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute;