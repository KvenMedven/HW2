
const initState:InitState = {
    isLoading: false,
}

type InitState = {
    isLoading:boolean
}

export const loadingReducer = (state:InitState = initState, action: LoadingActionType): InitState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING' :
            return {...state,isLoading:action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
