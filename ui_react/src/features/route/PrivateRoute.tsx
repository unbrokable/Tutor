import { Route, Redirect } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { jwtService } from "../../app/jwtService";
import { selectUser } from "../../app/slice/userSlice";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user.isAuthorize && jwtService.get() ? (
        <Route
          {...rest}
          component={(props: any) => <Component {...props} {...rest} />}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
export default PrivateRoute;
