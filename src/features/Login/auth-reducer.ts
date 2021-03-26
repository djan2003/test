import {Dispatch} from 'redux'
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../../app/app-reducer'
import {authAPI, LoginParamsType, todolistsAPI} from "../../api/todolists-api";
import {handleServerAppError, handleServerNetworkError, HandleServerNetworkErrorType} from "../../utils/error-utils";
import {addTaskAC} from "../TodolistsList/tasks-reducer";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}


export const loginTC = (values: LoginParamsType) => (dispatch: Dispatch<
    ActionsType>) => {
    debugger
    dispatch(setAppStatusAC('loading'))
    authAPI.login(values)
        .then((res) => {
            debugger
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            } else {
                // @ts-ignore
                dispatch(handleServerAppError(res.data, dispatch))
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppStatusAC('idle'))
        })
}

// types
type ActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
   // | HandleServerNetworkErrorType
