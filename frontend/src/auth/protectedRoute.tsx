import { useAuth0 } from "@auth0/auth0-react";

const protectedRoute = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (<Outlet/>) : (<Navigate to="/" replace/>)
};

export default protectedRoute;