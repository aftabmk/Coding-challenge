let blocks = [{"gym": false,"school": true,"store": false},{"gym": true,"school": false,"store": false},{"gym": true,"school": true,"store": false},{"gym": false,"school": true,"store": false},{"gym": false,"school": true,"store": true,} ]

//let arr=[{0:""},{1:""},{2:""},{3:""},{4:""}]
// 1) Generate array with key as index
let arr = [] 

for(let i= 0;i<blocks.length-1;i++)
{

  const item = {} 

  item[i]=""

  arr.push(item) 

}

//console.log(arr)

let reqs = ["gym", "school", "store"]

const option = {}

for(let i= 0;i<reqs.length;i++)

{option[reqs[i]]=[]

 

}

//console.log(option)

const apartmentHunting = (blocks,reqs) =>{
// 2) Mapping through the block array to generate the above given array named arr.

const items = blocks.map((item,i)=> {
// 3) Assigning key value pair for the  array arr , creating an array with three object based on index. 
if(i==0) {arr[i] = [item, [],blocks[i+1]]}

else if(i== blocks.length-1)

{arr[i] = [item, blocks[i-1]]}

else {arr[i] = [item ,blocks[i-1], blocks[i+1]]}
//4) The object are created based on index from map parameter (i) hence it includes 
// existing object as well as object , object preceding and successor namely (i-1) and (i+1) object.Hence obtaining array with three object.
}) 
//console.log(arr) 

// 5) creating const with value of arr length 
const len = arr.length - 1
// 6) Now we can map through the generated array to obtain individual array for further operation.
const map = arr.map((item,idx) =>

 {
// 7) The obtained individual array is undergone reduce function.
  return item.reduce((acc,cur,i)=> {
  // 8) Now assigning object into acc object with condition which only include key cur.gym and other respectively.Also limiting no. object pushed into array with acc.key.length eg acc.gym.length

  if( cur.gym === true && acc.gym.length == 0) 
// 9) The object is created with keys :-availabilty , distance and direction to walk if it doesnt exist in the current block
  {acc.gym.push({availableAtCurrentBlock : i==0? 'yes': 'not', 
  // 10)if index is zero it is current object else non current object hence distance to walk is one , return zero if current and vice versa.
distanceFromCurrentBlock : i==0? 0: 1 ,
// 11) Now performing ternary operation to filter based on index i, if i=0 hence current object , if i = 1 its the second object in the array arr.The second object in array arr has index [i-1] hence return the object whose index will be i-1. Similarly i=2 will return object with index i+1 in arr array , hence object index will be i+2
Walk:i!==0? i == 1? `${idx} => ${(idx-1)<0?0:idx-1 }`:`${idx} => ${(idx+1)>len?len:idx+1}` : `${idx} => ${idx}`

   

   })}

  if ( cur.school === true && acc.school.length == 0) 

   {acc.school.push({availableAtCurrentBlock : i==0? 'yes': 'not', distanceFromCurrentBlock : i==0? 0: 1,
   Walk:i!==0? i == 1? `${idx} => ${(idx-1)<0?0:idx-1 }`:`${idx} => ${(idx+1)>len?len:idx+1}` : `${idx} => ${idx}`

   })}

  if ( cur.store === true && acc.store.length == 0)

 {acc.store.push({availableAtCurrentBlock : i==0? 'yes': 'not', distanceFromCurrentBlock : i==0? 0: 1 ,
 Walk:i!==0? i == 1? `${idx} => ${(idx-1)<0?0:idx-1 }`:`${idx} => ${(idx+1)>len?len:idx+1}` : `${idx} => ${idx}`

 })}

  return acc 
// 12) acc has privided intial value provide below.
  },{gym: [] ,school : [] , store : [] })

 })

// console.log(map) 
// 13) The map function will return object which undergo reduce operation.
const res = map.reduce((acc,cur,idx)=>{
// 14) filtering object with below conditions.
  if(cur.gym.length && cur.store.length && cur.school.length){
// 15) assigning key value pair which passess above condition
    acc[idx]=cur

  }

  return acc

},{})
// 16) returning res having object with index ,keys:- gym,school and store with individual values of availableatcurrentblock,distance from currentblock and direction walk.
console.log(res) 
return res
}

//console.log(apartmentHunting(blocks,reqs))
exports.apartmentHunting = apartmentHunting;
