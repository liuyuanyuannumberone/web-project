function sortIndex(index) {
    return function (a, b) {
        return a[index] - b[index];
    }
}

let arr = [{index: 5, name: "lyy"}, {index: 4, name: 'hx'}, {index: 6, name: 'hx'}, {index: 0, name: 'hx'}];
arr.sort(sortIndex("index"));
console.log(arr);

function sortNumber() {
    return function (a, b) {
        return a - b
    };
}

let arr1 = [6, 8, 4, 5];
arr1.sort(sortNumber());
console.log(arr1);

