module.exports = {
    mutipleMongooseToObject: function (arrays) {
        return arrays.map((array) => array.toObject());
    },
    mongoosetoObject: function (array) {
        return array ? array.toObject() : array;
    },
};
