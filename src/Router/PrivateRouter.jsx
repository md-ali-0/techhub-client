import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../components/Loading';

const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation()
    if (isLoading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};
PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRouter;
