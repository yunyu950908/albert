const jsonClone = function (json) {
    return JSON.parse(JSON.stringify(json))
};

export {jsonClone}