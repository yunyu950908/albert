const save = function (key, item) {
    return window.localStorage.setItem(key, JSON.stringify(item))
};

const load = function (key) {
    return JSON.parse((window.localStorage.getItem(key)))
};

export {save, load};