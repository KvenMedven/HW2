const initState: InitState = {
	themeId: 1,
}

type InitState = {
	themeId: number
}

export const themeReducer = (state: InitState = initState, action: Action): InitState => { // fix an

	switch (action.type) {
		// дописать
		case 'SET_THEME_ID' : {
			return {...state, themeId: +action.id}
		}
		default:
			return state
	}
}


type Action = {
	type: string
	id: number
}


export const changeThemeId = (id: number): Action => ({type: 'SET_THEME_ID', id}) // fix any

