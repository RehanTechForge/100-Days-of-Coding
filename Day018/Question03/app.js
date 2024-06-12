function createObjectWithDynamicKey(key, value) {
    var _a;
    return _a = {},
        _a[key] = value,
        _a;
}
console.log(createObjectWithDynamicKey("name", "John"));
console.log(createObjectWithDynamicKey("age", "30"));
