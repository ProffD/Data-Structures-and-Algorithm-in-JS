class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    peek(){
        return  !this.isEmpty() ? this.items[this.items.length - 1] : undefined;
    }

    pop(){
        this.size--;
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printStack(){
        this.items.forEach(element => {
            console.log(element)
        });
    }
}

const stack = new Stack();
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(4);
stack.printStack();
console.log('Top element: ',stack.peek());
console.log('Popped element: ',stack.pop());
console.log('Top element: ',stack.peek());
stack.printStack();
