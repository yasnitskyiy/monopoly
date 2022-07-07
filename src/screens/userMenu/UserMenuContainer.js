import {connect} from "react-redux";
import UserMenu from "./UserMenu";
import {signOutActionCreator} from "../../store/UserMenuReducer";

let mapStateToProps = (state) => {
    return ({
        authorized: state.userMenu.authorized,
        nickname: state.userMenu.users[state.userMenu.active].nickname,
        profileImage: state.userMenu.users[state.userMenu.active].profileImage
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        signOut: () => {
            dispatch(signOutActionCreator());
        }
    })
}

const UserMenuContainer = connect(mapStateToProps, mapDispatchToProps)(UserMenu)

export default UserMenuContainer