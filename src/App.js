import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "redux/authorization/authorizationAsyncThunk";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
const LazyPhoneBookPage = lazy(
  () =>
    import("components/PhoneBook/PhoneBook") /*webpackChunkName: 'PhoneBook'*/
);
const LazyAppBarPage = lazy(
  () => import("components/AppBar/AppBar") /*webpackChunkName: 'AppBar'*/
);
const LazyLoginPage = lazy(
  () => import("Pages/Login/Login") /*webpackChunkName: 'Login'*/
);
const LazyRegisterPage = lazy(
  () => import("Pages/Register/Register") /*webpackChunkName: 'Register'*/
);
const LazyNotFoundPage = lazy(
  () =>
    import(
      "Pages/PageNotFound/PageNotFound"
    ) /*webpackChunkName: 'PageNotFound'*/
);

const LazyHomePage = lazy(
  () => import("Pages/HomePage/HomePage") /*webpackChunkName: 'HomePage'*/
);

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const { token, isAuth } = useSelector((state) => state.authorization);

  // console.log("isAuth", isAuth);
  useEffect(() => {
    if (token) {
      dispatch(currentUser());
      // navigate()
    }
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <LazyAppBarPage />

        <Routes>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <LazyPhoneBookPage />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<LazyHomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <LazyRegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LazyLoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
