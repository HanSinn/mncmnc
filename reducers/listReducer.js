
const INITIAL_STATE={
    isLoggedIn : false,
    id : "",
    lists : "",
    suhumLists : "",
    error : undefined
}

export default function list(state=INITIAL_STATE, action){
    console.log(action);
    switch (action.type) {
        case "LIST_SUCCESS":
            return {
                ...state,
                suhumLists : action.suhumLists,
                error : undefined
            }
        case "LIST_FAILED":
            return {
                ...state,
                error : undefined
            }
        case "LOGIN_SUCCESS":
            return {
                isLoggedIn : true,
                id : action.id,
                lists : action.lists,
                suhumLists : "",
                error : undefined
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                isLoggedIn : false
            }
        default:
            return state
    }
}