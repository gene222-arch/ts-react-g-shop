import { AuthState, User } from "../../../types/states/AuthState";
import { 
    ActionType, 
    SIGN_IN_START,
    SIGN_IN_SUCCEEDED,
    SIGN_IN_FAILED,
    SIGN_OUT_START,
    SIGN_OUT_SUCCEEDED,
    SIGN_OUT_FAILED,
    SIGN_UP_START,
    SIGN_UP_SUCCEEDED,
    SIGN_UP_FAILED,
} from "./action.type";

const userInitialValue: User = {
    id: 0,
    name: "",
    email: "",
    password: ""
};

const initialState: AuthState = 
{
    isAuthenticated: false,
    user: userInitialValue,
    isLoading: false,
    error: undefined
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case SIGN_IN_START:
        case SIGN_OUT_START:
        case SIGN_UP_START:
            return {
                ...state,
                isLoading: true
            };

        case SIGN_IN_SUCCEEDED:
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    ...state.user,
                    ...action.payload.data.data
                },
                isLoading: false
            };

        case SIGN_OUT_SUCCEEDED:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: userInitialValue
            };

        case SIGN_UP_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };

        case SIGN_IN_FAILED:
        case SIGN_OUT_FAILED:
        case SIGN_UP_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;