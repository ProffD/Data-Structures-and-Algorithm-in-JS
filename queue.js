class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    front(){
        return !this.isEmpty() ? this.items[0] : undefined;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    dequeue(){
        if(this.isEmpty()) return undefined;

        return this.items.shift();
    }

    printQueue(){
        let queue = "";
        this.items.forEach(element => { 
            queue += element + " ";
        });
        console.log(queue);
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(7);
queue.printQueue();
console.log(queue.front() + ' is the first element in the queue');

console.log(queue.dequeue() + ' is removed from the queue');
queue.printQueue();