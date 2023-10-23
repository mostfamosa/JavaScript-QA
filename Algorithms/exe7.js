class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // add list node to the end of the linked list
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // remove the duplicates using the SET
    removeDuplicates() {
        if (!this.head) {
            return;
        }

        const uniqueValues = new Set();
        let current = this.head;
        let previous = null;

        while (current) {
            if (uniqueValues.has(current.val)) {
                previous.next = current.next;
            } else {
                uniqueValues.add(current.val);
                previous = current;
            }
            current = current.next;
        }
    }

    display() {
        let current = this.head;
        let print = ""
        while (current) {
            print += current.val
            print += " -> "
            current = current.next;
        }
        console.log(print)
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(4);
linkedList.append(5);

console.log("Original Linked List:");
linkedList.display();

linkedList.removeDuplicates();

console.log("Linked List after removing duplicates:");
linkedList.display();