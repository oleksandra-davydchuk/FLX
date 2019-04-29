export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
        id: user.id
    };
};
export const loadMore = () => {
    return {
        type: 'LOAD_MORE'
    };
};
export const searchUser = (name) => {
    return {
        type: 'SEARCH',
        name: name
    };
};