class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;        
    }
}

class BST {
    constructor(data) {
       this.root = new Node(data);
       this.count = 1;

    }

    insert(data) {
        this.count++;
        let newNode = new Node(data);
        let searchTree = node => {
            if(newNode.data < node.data){
                if(!node.left){
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else {
                if(!node.right){
                    node.right = newNode;
                }else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
        
    }

    contains(data) {
        let currNode = this.root;
        
        while(currNode){
            if(data === currNode.data){
                return true;
            } 
            if( data < currNode.data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }

        return false;

    }

    size() {
        return this.count;
    }

    min() {
        let currNode = this.root;

        while(currNode.left){
            currNode = currNode.left;
        }
        return currNode.data;
    }

    max() {
        let currNode = this.root;

        while(currNode.right){
            currNode = currNode.right;
        }
        return currNode.data;
    }

    /* Depth First Searching
        -inorder traversal
        -preorder traversal
        -postorder traversal
    */
   // left => root => right
   inOrder() {
       const result = [];
       const traverse = node => {
           if(node.left)  traverse(node.left);
            result.push(node.data);
           if(node.right)  traverse(node.right);
       }
       traverse(this.root);
       return result;
   }
   // root => left => right
   preOrder() {
        const result = [];
        const traverse = node => {
            result.push(node.data);
            if(node.left)  traverse(node.left);
            if(node.right)  traverse(node.right);
        }
        traverse(this.root);
        return result;

    }
    // left => right => root
    postOrder() {
        const result = [];
        const traverse = node => {
            if(node.left)  traverse(node.left);
            if(node.right)  traverse(node.right);
            result.push(node.data);
        }
        traverse(this.root);
        return result;
    }

}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log('Size: ', bst.size());
console.log('Min: ', bst.min());
console.log('Max: ', bst.max());
console.log('Contains: ', bst.contains(12));
console.log('Contains: ', bst.contains(1));
console.log('InOrder traversal: ', bst.inOrder());
console.log('PreOrder traversal: ', bst.preOrder());
console.log('PostOrder traversal: ', bst.postOrder());
// console.log('Breadth First traversal: ', bst.inOrder());








