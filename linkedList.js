class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {value: value, next: null};
        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        }
    }

    delete(value){
        if(!this.head) return undefined;

        //If the value to be deleted is the head of the list
        while(this.head && this.head.value === value){
            this.head = this.head.next; // update head with the second node
        }

        let currNode = this.head;
        while(currNode.next){
            if(currNode.next.value === value){
                currNode.next = currNode.next.next;
            } else {
                currNode = currNode.next;
            }        

        }
        // If the value to be deleted is the tail of the list
        if(this.tail.value === value){
            this.tail = currNode;
        }
    }

    prepend(value){
        const newNode ={value: value, next: this.head};
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }

    }

    find(value){
        if(!this.head) return null;
        
        let currNode = this.head;
        while(currNode){
            if(currNode.value === value){
                return currNode;
            }

            currNode = currNode.next;
        }
        return null;
    }

    insertAfter(value,afterValue){
        const existingNode = this.find(afterValue);
        if(existingNode){
            const newNode = {value: value, next: existingNode.next}
            existingNode.next = newNode;
        }
    }

    printList(){
        let currNode = this.head;
        while(currNode){
            console.log(currNode.value);
            currNode = currNode.next
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(1);
linkedList.append(6);
linkedList.append(3);
linkedList.prepend('First');
linkedList.append(1);

console.log('Before delete');
linkedList.printList();
linkedList.delete(1);
console.log('After delete');
linkedList.printList();
console.log(linkedList.find(6) ? '6 was found' : '6 was not found');
linkedList.insertAfter(8,6);
linkedList.insertAfter(10,3);
console.log('After insertAfter');
linkedList.printList();

