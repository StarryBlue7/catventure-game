// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch("/api/users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
};

// save cat data for a logged in user
export const addCat = (catData, token) => {
    return fetch("/api/users/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(catData),
    });
};

export const removeCat = (catId, token) => {
    return fetch(`/api/users/cats/${catId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

export const lastTreasure = (userId, token) => {
    return fetch(`/api/users/treasure/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

export const lastHeal = (userId, token) => {
    return fetch(`/api/users/heal/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

export const lastRecruit = (userId, token) => {
    return fetch(`/api/users/recruit/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

export const updateCat = (catData, token) => {
    return fetch(`/api/users/cats/update/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(catData),
    });
};

export const addTavernCat = (catData, token) => {
    return fetch("/api/users/addTavern", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(catData),
    });
};

export const lockoutTavernCat = (userId, token) => {
    return fetch(`/api/users/tavernlockout/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};
