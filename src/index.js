class Sorter {
    constructor() {
        this.massiv = [];
        this.comparator = function(a, b) {
          return a - b;
        }
    }

    add(element) {
        this.massiv.push(element);
    }

    at(index) {
        return this.massiv[index];
    }

    get length() {
        return this.massiv.length;
    }

    toArray() {
        return this.massiv;
    }

    sort(indices) {
        var temp = [];
        for (var i = 0; i < indices.length; i++) {
            temp.push(this.massiv[indices[i]]);
        }
        indices.sort();
        temp.sort(this.comparator);
        for (var i = 0; i < indices.length; i++) {
            this.massiv[indices[i]] = temp[i];
        }

    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}


module.exports = Sorter;
