/* Here we have a constructor function named Restaurant that has a method inside the function.

Remove the existing method addStars and use it to create a prototype method for this constructor 
function. For testing purposes, make sure to use the same name.
*/ 


function Restaurant (name, type, stars) {
  this.name = name;
  this.type = type;
  this.stars = stars;
  
}

Restaurant.prototype.addStars=function(num) {
    this.stars += num;
    return this.stars;
  }
