let name = "";
// if(localStorage.getItem('username')){
//     name = localStorage.getItem('username')
// }
const stateDefault = {
    username: name,
    message:""

}


export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'SIGNIN': {
            state.username = action.username;
            state.message = action.message;
            return { ...state }
        }
        case 'SIGNIN_ERROR': {
            state.message = action.message;
            return { ...state }
        }
        case 'SIGNUP': {
            state.message = action.message;
            return { ...state }
        }
        default: return state;
    }
}