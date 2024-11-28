const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function refactorName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
} 

function refactorNames(arr, callback) {
    return arr.map(callback);
}

console.log(refactorNames(people, refactorName));