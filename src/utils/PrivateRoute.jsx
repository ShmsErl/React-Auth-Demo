import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth/AuthContext';


const PrivateRoute = ({ component, role }) => {
  const auth = useAuth();

  return auth.hasPermission(role) ? (
   component
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
