//object without class
var laptop={
    name:"acer",
    color:"gray",
    size:15
}
console.log(laptop.color)
console.log(laptop["name"])
laptop.isKeyBBLPresents=false
console.log(laptop)
laptop.color="white"
Object.freeze(laptop)
console.log(laptop.color)
// object with class
class Laptop{
constructor(name,color,size){
    this.name=name
    this.color=color
    this.size=size}
}
var laptop1=new Laptop("dell","black",8)
console.log(typeof(laptop1))
console.log(typeof(laptop))