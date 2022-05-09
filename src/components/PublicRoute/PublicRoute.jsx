import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children, restricted = false }) => {
  const { isAuth } = useSelector((state) => state.authorization);

  return (
    <>
      {isAuth && restricted ? (
        <Navigate to="/contacts" replace={true} />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
