let arr = [];

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let head = null;

function createNode(data) {
    return new Node(data, null);
}

function insertNode(data) {
    if (head === null) {
        head = createNode(data);
    } else {
        let temp = head;

        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = createNode(data);
    }
    
}

insertNode(1);
insertNode(2);
insertNode(3);

function printList() {
    console.log("List: ");
    let temp = head;
    while (temp.next !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
    console.log(temp.data);
}

printList();

function deleteNode(data) {
    if (head.data === data) {
        let current = head;
        head = head.next;
        delete current;
    } else {
        let current = head;
        let prev = current;

        while(current.data !== data) {
            prev = current;
            current = current.next;
        }

        if(current === null) {
            prev.next = null;
            delete current;
        } else {
            prev.next = current.next;
            delete current;
        }
    }
    console.log("Deleted: ");
}

deleteNode(2)

printList();