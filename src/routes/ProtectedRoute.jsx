import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/shared/Loading';
import { AuthContext } from '../providers/AuthProvider';

const ProtectedRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return <Loading />;
	}
	if (user) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default ProtectedRoute;
