//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//This is the Element Class. It is a link in our chanin
// It is a single element in our list


export class Element{
  constructor(value){
    this._value = value
    this._next = null
  }
  set next(newValue){
    this._next = newValue
  }

  get next(){
    return this._next
  }
 
  get value(){
    return this._value
  }
}

export class List {

  constructor(values) {
    this._head = null
    this._length = 0

      if(Array.isArray(values)) {
        for(let value of values)
        this.add(new Element(value))
      }

    
  }

  add(nextElement) {
    nextElement.next = this._head //save my list head
    this._head = nextElement //set the head to the next helement
    this._length++
  }

  get length() {
    return this._length
  }

  get head() {
    return this._head
    
  }

  toArray() {
    //initializing empty array
    let rtnValue= []
    let elmnt = this._head
    //if we have any elements, go through each one
    //pushing their value to the array
    while(elmnt !== null){
        
      rtnValue.push(elmnt.value)
    elmnt = elmnt.next
     
    }    
    return rtnValue
  
  }
  reverse() {
    return new List(this.toArray())
  }

}

