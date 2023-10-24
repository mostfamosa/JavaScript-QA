//Copy/paste the following code into some .js file. Fix the errors to make it work:

const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        console.log('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"