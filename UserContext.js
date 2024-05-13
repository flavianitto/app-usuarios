import React, { createContext, useReducer } from "react";
import users from './users'

const actions = {
    deleteUser(state,action) {
        const user = action.payload
        const updatedUsers = state.users.filter(u => u.id !== user.id)
        return{
                ...state, //opcional no caso de 1 estado, se tiver mais estados precisa clonalos com essa linha
                users: updatedUsers
            } //estado é evoluido
    },
    createUser(state,action) {
        const user = action.payload
        user.id = Math.random()
        const updatedUsers = [...state.users,user]
       return{
            ...state,
            users: updatedUsers,
        }
    },
    updateUser(state,action) {
        const updated = action.payload;
        const updatedUsers = state.users.map(u => u.id === updated.id ? updated : u);
       return {
          ...state,
          users: updatedUsers,
        };
    },
}

export const UsersProvider = props => {
    function reducer(state,action){
            const fn = actions [action.type]
            return fn ? fn(state,action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value = {{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext;