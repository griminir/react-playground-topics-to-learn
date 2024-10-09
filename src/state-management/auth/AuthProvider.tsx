// import { ReactNode, useReducer } from 'react';
// import AuthContext from './authContext';

// interface Login {
//   type: 'Login';
//   username: string;
// }

// interface Logout {
//   type: 'Logout';
// }

// export type AuthAction = Login | Logout;

// const authReducer = (state: string, action: AuthAction): string => {
//   switch (action.type) {
//     case 'Login':
//       return action.username;
//     case 'Logout':
//       return '';
//     default:
//       return state;
//   }
// };

// interface Props {
//   children: ReactNode;
// }

// const authProvider = ({ children }: Props) => {
//   const [user, dispatch] = useReducer(authReducer, '');
//   return (
//     <AuthContext.Provider value={{ user, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default authProvider;
