
type InitialStateType = {
    themeId: number
}

const initState:InitialStateType = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ChangeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
