let obj=[
    {
        companyname:"Tata",
        year:1870,
        category:"retail"
    },
    {
        companyname:"facebook",
        year:2004,
        category:"retail"
    },
    {
        companyname:"Amazon",
        year:1994, 
        category:"retail"
    },
    {
        companyname:"Adidas",
        year:1924,
        category:"non-retail"
    },
    {
        companyname:"Google",
        year:1998,
        category:"non-retail"
    },
]
// part1:exercise1
let ele=""
obj.forEach((e=>{
    ele+=`<li>${e.companyname}</li>`
}))
$("#order1").html(ele)
// part1:exercise2
let element=""
obj.filter(e=>e.year>1987 ? element+=`<li>${e.companyname}</li>`:"")
$("#order").html(element)
// part1:exercise3
let app="";
let incr=obj.filter(e=>e.category=="retail")
console.log(incr);
let toincr=incr.map(e=>e)
for(let toincr1 of incr){
    let a= toincr1.companyname
    let b=toincr1.year+1
    console.log(a);
    console.log(b);
     app+=`<li>${a}-${b}</li>`

}
$("#order0").html(app)

// part1:exercise4
let ele1=""
let obj1=obj.map((e)=>e)
console.log(obj1)
obj1.sort((a,b)=>{
   return a.year-b.year
})
for(let obj2 of obj1){
    ele1+=`<li>${obj2.companyname}</li>`
}
$("#order3").html(ele1)
// part1:exercise5
let ages=[25,45,90,100,75,80]
ages.sort((a,b)=>b-a)
console.log(ages)
// part1:exercise6
let add=ages.reduce((a,b)=>a+b)
console.log(add)
// part1:exercise7

// part1:exercise8

let sum=(...args)=>{
    let final=0
    for(let args1 of args) {
        final+=args1   
    }
    console.log(final)
}
sum(1,2,3,4,5,6,300)
// part1:exercise9
let arr=["ab",1,2,3]
let arr1=(...abc)=> abc
let concat=[...arr,...arr1(2,"abc",3)]
console.log(concat);
// part1:exercise10
let street="gandhi street"
let objdes={
    name:"kottar",
    street
}
let {name}=objdes
console.log(name)
console.log(objdes.street)
// part1:exercise11
let count=0
let incree=()=>{
    console.log(count++)
}
incree()
incree()
incree()
// part1:exercise12
// part2:exercise1
let sum1=(a,b=1)=>a+b
console.log(sum1(4,6))
console.log(sum1(4))
// part2:exercise2
class user{
    constructor(name){
        this.name=name
    }
    static out(){
        console.log(this.name)
    }
}
user.out("hello")
// part2:exercise3
let equal1=[
    {
        companyname:"Tata",
        year:1870,
        category:"retail"
    },
    {
        companyname:"facebook",
        year:2004,
        category:"retail"
    },
    {
        companyname:"Amazon",
        year:1994, 
        category:"retail"
    },
    {
        companyname:"Adidas",
        year:1924,
        category:"non-retail"
    },
    {
        companyname:"Google",
        year:1998,
        category:"non-retail"
    },
]
let equal2=[
    {
        companyname:"Tata",
        year:1870,
        category:"retail"
    },
    {
        companyname:"facebook",
        year:2004,
        category:"retail"
    },
    {
        companyname:"Amazon",
        year:1994, 
        category:"retail"
    },
    {
        companyname:"Adidas",
        year:1924,
        category:"non-retail"
    },
    {
        companyname:"Google",
        year:1998,
        category:"non-retail"
    },
]

console.log(JSON.stringify(equal1)===JSON.stringify(equal2));
// part2:exercise4
let filt=[1,2,3,4,5,6,7,8,9,10]
let filt1=[]
let filt2=[]
filt.filter(e=>e%2==0&&e!==0?filt1.push(e):filt2.push(e))
// let filt2=filt.filter(e=>e%2!==0&&e!==0)
console.log(filt1);
console.log(filt2);

// part2:exercise5
let check=(e)=>e==null||e==undefined?console.log("give value is null or undefined"):console.log(`${typeof(e)}`)
check()
check(null)
check(5)
check("5")
// part2:exercise6 
let detail={
    fullname:"akash",
    personaldetails:{
        no:87856255555,
        email:"husudh"

    },
    language:["tamil","english"]
}

let {fullname,personaldetails:{no,email},language} =detail
console.log(fullname);
console.log(no);
console.log(language);
// part3:exercise1
let person=[{name:"abcd"},{name:"bcd"}]
for(let person1 of person){
    console.log(person1.name);
}
// part3:exercise2
// part3:exercise3
console.warn( 'please update your browser');
// part3:exercise4
console.error(  'invalid password');
// part3:exercise5
let p="hello"
console.log(p)
// part3:exercis6
    try {

    console.log('Start of try runs');
    console.log('End of try runs');
      
      } 
      catch (err) {
      
        console.log('Catch is ignored, because there are no errors');; 
      
      }
      // part3:exercis7
      let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);
// part3:exercis8
let empty={
  
}
Object.keys( empty).length>0?console.log("value inside"):console.log("empty object");
Object.entries(empty).length > 0?console.log("value inside"):console.log("empty object");
// part3:exercis9
let find=["abc","bcd","def"]
console.log(find)
 find.forEach(e=>console.log(e))
 for(let find1 of find){
    console.log(find1);
 }
 for(e in find){
    console.log(find[e]);
 }
 find.filter((e=>console.log(e)))
// part4:exercise1
duplicate=(...args)=>{
  return args.filter((obj,i)=>args.indexOf(obj)===i)
}
console.log(duplicate("aba","aba","bcd","1","2","1"));
// part4:exercise2
let addRemove=(a,b,c)=>a=="add"? console.log([b,...c]) :a=="remove"?console.log(c.slice(b)):null
addRemove("add",1,[1,2,3,4,5])
addRemove("remove",1,[1,2,3,4,5])
// part4:exercise3
let numarr=[1,2,3,"abc","cde",5]
let findnum= numarr.filter(e=>typeof(e)=="number")
console.log(findnum);
// part4:exercise4
let numfilt=(...e)=>e.filter(data=>data%2==0)
console.log (numfilt(1,2,3,4,5,500))
// part5:exercise1
let num1=[1,2,3,4]
let num2=[5,6,7,8]
let num=[...num1,...num2]
console.log(num);
console.log(Math.max(...num));
console.log(Math.min(...num));
// part5:exercise2
let tot=0
let avg;
let scorename;
let scorename1;
let fisherman=[{fishername:"david",score:150},{fishername:"suresh",score:90},{fishername:"rajesh",score:250},{fishername:"surane",score:120}]
fisherman.forEach((e)=>{
    tot+=e.score
    avg=tot/fisherman.length 
    scorename=fisherman.filter(e=>e.score>100)
    scorename1=scorename.map((e)=>e.fishername)     
})
console.log(tot);
console.log(avg);
console.log(scorename1);
// part5:exercise3
let a="abcd@123a90shg25"
console.log(a.replace(/\D/g, ''));
// part5:exercise4

// part5:exercise5
let findpositive=(a,b)=>a>=0&&b>=0?console.log("both number are positive"):a<0&&b<0?console.log("both numbers are negative"):console.log("one value is positive");
findpositive(-5,4)
findpositive(-5,-4)
findpositive(5,4)
// 
