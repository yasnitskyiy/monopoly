import profileImg from "../images/Person.jpg";

const AUTH = 'AUTH';
const SIGN_OUT = 'SIGN-OUT';

let initialState = {
    authorized: false,
    active: 0,
    users:[
        {
            id: 0,
            login: 'admin@admin',
            password: 'admin',
            nickname: 'UserNickName',
            profileImage: profileImg
        },
        {
            id: 1,
            login: 'b@b',
            password: 'b',
            nickname: 'TESTNICKNAME',
            profileImage: profileImg
        },
    ]
}

const UserReducer = (state= initialState, action) => {
    switch (action.type){
        case AUTH:
            let id = -1
            return {
                ...state,
                authorized: state.users.map(user => {
                    if (user.login === action.inputLogin && user.password === action.inputPassword) {
                        console.log('LOGIN SUCCESS!')
                        id = user.id
                        return true
                    }
                    return false
                }),
                active: (id !== -1)? id: null
            }
        case SIGN_OUT:
            return {
                ...state, authorized: false
            }
        default:
            return state;
    }
}

export const userAuthActionCreator = (login, password) => ({
    type: AUTH,
    inputLogin: login,
    inputPassword: password
})

export const signOutActionCreator = () => ({
    type: SIGN_OUT,
})

export default UserReducer