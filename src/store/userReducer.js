// import profileImg from "../images/Person.jpg";
//
// const LOGIN = 'LOGIN';
// const SIGN_OUT = 'SIGN-OUT';
//
// let initialState = {
//     id: '',
//     name: '',
//     games: {
//         total: 0,
//         wins: 0,
//     },
//     achievements: [],
//     friends: [],
//     credits: 0
// }
//
// const UserReducer = (state= initialState, action) => {
//     switch (action.type){
//         case LOGIN:
//             return {
//
//             }
//         case SIGN_OUT:
//             return {
//
//             }
//         default:
//             return state;
//     }
//     // switch (action.type){
//     //     case AUTH:
//     //         let id = -1
//     //         return {
//     //             ...state,
//     //             authorized: state.users.map(user => {
//     //                 if (user.login === action.inputLogin && user.password === action.inputPassword) {
//     //                     console.log('LOGIN SUCCESS!')
//     //                     id = user.id
//     //                     return true
//     //                 }
//     //                 return false
//     //             }),
//     //             active: (id !== -1)? id: null
//     //         }
//     //     case SIGN_OUT:
//     //         return {
//     //             ...state, authorized: false
//     //         }
//     //     default:
//     //         return state;
//     // }
// }
//
// export const setEnteredUserData = (object) => ({
//     type: LOGIN,
//     id: login,
//     inputPassword: password
// })
//
// export const signOutActionCreator = () => ({
//     type: SIGN_OUT,
// })
//
// export default UserReducer