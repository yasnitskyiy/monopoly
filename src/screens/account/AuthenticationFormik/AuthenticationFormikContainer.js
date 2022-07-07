import {connect} from "react-redux";
import AuthenticationFormik from "./AuthenticationFormik";
import {userAuthActionCreator} from "../../../store/UserMenuReducer";

let mapStateToProps = (state) => {
    return({
        users: state.userMenu.users
    })
}

let mapDispatchToProps = (dispatch) => {
    return({
        userAuth: (inputLogin, inputPassword) => {
            dispatch(userAuthActionCreator(inputLogin, inputPassword));
        },
    })
}

const AuthenticationFormikContainer = connect(mapStateToProps, mapDispatchToProps)(AuthenticationFormik)

export default AuthenticationFormikContainer