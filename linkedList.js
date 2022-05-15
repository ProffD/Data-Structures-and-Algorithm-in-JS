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
console.log('Aftere delete');
linkedList.printList();

