// (FYI) routes are naked until we build our api

// get logged in user info
export const getUser = (token) => {
    return fetch('', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};
//create user
export const createUser = (userData) => {
    return fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
}

export const loginUser = (userData) => {
    return fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};