class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead === null) {this.listHead = new Node(value)}
        else {
            let temp = this.listHead;
            while (temp.next != null) {temp = temp.next}
            temp.next = new Node(value)
        }
    }

    prepend(value) {
        let temp = null
        if (this.listHead !== null) {temp = this.listHead}
        this.listHead = new Node(value)
        this.listHead.next = temp
    }

    size() {
        if (this.listHead === null) return 0;
        else {
            let count = 1;
            let temp = this.listHead;
            while (temp.next !== null) {
                count += 1
                temp = temp.next
            }
            return count;
        }
    }

    head() {
        return this.listHead
    }

    tail() {
        if (this.listHead === null || this.listHead.next === null) return this.listHead
        let temp = this.listHead;
        while (temp.next !== null) {
            temp = temp.next
        } 
        return temp;
    }

    at(index) {
        let count = 0;
        let temp = this.listHead;
        while (index !== count) {
            temp = temp.next
            count++;
            if (temp === null) return null
        }
        return temp
    }

    pop() {
        let temp = this.listHead;
        while (temp.next.next !== null) temp = temp.next
        temp.next = null;
    }

    contains(value) {
        let temp = this.listHead;
        while (temp !== null) {
            if (temp.data === value) return true
            temp = temp.next
        }
        return false
    }

    find(value) {
        if (!list.contains(value)) return null;
        let temp = this.listHead;
        let count = 0;
        while (temp.data !== value) {
            count += 1;
            temp = temp.next
        }
        return count;
    }

    toString() {
        let string = '';
        let temp = this.listHead
        while (temp!== null) {
            string += `${temp.data} -> `
            temp = temp.next
        }
        string += 'null'

    return string
    }
    insertAt(value, index) {
        if (this.listHead === null) this.prepend(value)
        else { 
            let tmp = this.at(index) // get node 
            if (!tmp) {
                this.append(value)
                return
            }
            let toBeInserted = new Node(value);
            toBeInserted.next = tmp;
            let prev = this.at(index-1)
            prev.next = toBeInserted;
        }
    }

    removeAt(index) {
        let prev = this.at(index-1)
        prev.next = prev.next.next;
    }
}

class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

let list = new LinkedList();
list.append(3)
list.append(4)
list.append(5)
list.prepend(2)
list.prepend(1)
console.log(list)
console.log(list.size()) // 5
console.log(list.head()) // 1
console.log(list.tail()) // 5
console.log(list.at(1)) // 2

console.log('popping..')
list.pop()
console.log(list.tail())
console.log('popping..')
list.pop()
console.log(list.tail())

console.log(list.contains(1)) //true
console.log(list.contains(6)) // false

console.log(list.find(3)) // 2
console.log(list.find(6)) // null

console.log(list.toString())