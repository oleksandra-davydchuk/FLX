import data from './data';

const initialState = {
    users: data,
    usersLimit: 5
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'REMOVE_USER':
        return {
            ...state,
            users: state.users.filter((user) => user.id !== action.id)
        };
    case 'LOAD_MORE':
        return {
            ...state
        };
    case 'SEARCH':
        if (action.name !== '') {
            return {
                ...state,
                users: state.users.filter((user) =>
                    user.name.toLowerCase().includes(action.name.toLowerCase())
                )
            };
        } else {
            return {
                ...state,
                users: initialState.users
            };
        }

    default:
        return state;
    }
};
