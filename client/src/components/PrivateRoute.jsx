import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
//import { getAuth} from 'firebase/auth';



export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
// export default function  PrivateRoute ({ currentUser, Component: Component, ...rest })  {
//   const { currentUser } = getAuth();

//   return (
//     <Outlet
//       {...rest}
//       render={(props) =>
//         currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/sign-in" />
//         )
//       }
//     />
//   );
// };

