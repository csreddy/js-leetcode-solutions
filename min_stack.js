/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minstack = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    
    if(this.minstack.length === 0) {
        this.minstack.push(x)
    } else {
        if(x < this.minstack[this.minstack.length -1]){
            this.minstack.push(x)
        } else {
            this.minstack.push(this.minstack[this.minstack.length -1 ])
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.stack.pop();
     this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length-1];    
    } 
    return ;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minstack.length > 0){
        return this.minstack[this.minstack.length - 1];
    }
    return;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */