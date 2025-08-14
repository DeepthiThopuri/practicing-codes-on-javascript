/// promises
const promiseEx = new Promise((resolve,reject) =>{
  setTimeout(() =>{
	let flag=false;
	if(flag){
	  resolve("Data resolved");
	}
	else{
	  reject("Data rejected");
	}
	},3000);
});
  promiseEx.then(value =>{scrib.show(value)}).catch(value =>{scrib.show(value)})
  // async await
  const promiseEx = new Promise((resolve,reject) =>{
  setTimeout(() =>{
	let flag=false;
	if(flag){
	  resolve("Data resolved");
	}
	else{
	  reject("Data rejected");
	}
	},3000);
});
async function funname(){
  const result=await promiseEx
   const user={
  name:"vb"

  scrib.show(result)
}
funname()
//nullisf coalshibg
const user={
  name:"vb"
}
scrib.show(user.addrss?.pin)
const k=null;
scrib.show(k??"vf")