//callback function
function sayhello(name){
scrib.show(`hhti ${name}`);
  setTimeout(() => {
	scrib.show(name)
	callback("ramu")
  },3000)
}
	function sayhi(name,callback){
  scrib.show(`hii ${name}`)
  callback(name)
}
sayhi("ramu",sayhello);
