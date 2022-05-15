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

linkedList.printList();