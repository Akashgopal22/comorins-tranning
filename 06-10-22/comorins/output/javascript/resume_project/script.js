let resume={
    name:"Akash",
    email:"akashas@gmail.com",
    mobileno:8760506332,
    role:"full stack web-developer",
    objctive:"Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings.",
    project:[{
        year:2018,
        title:"bitumin mixed with rubber and plastic"
     }],
    education:[
        {
            education:"12th",
            institute:"carmel",
            percentage:81.5
        },
        {
            education:"B.E",
            institute:"ponjesly",
            percentage:74
        },
        {
            studies:"sslc",
            institute:"St tresa's school",
            percentage:81.5
        }
       
    ],
    personaldetails:{
                fathername:"Ananthagopalan",
                martialstatus:"single",
                dob:"22-11-96",
                address:"213-b,parakkai rd junction, kottar(p.o),nagercoil-629 002",
                languageknown:["tamil","english"],
                gender:"male",
                hobbies:["cricket","exercise","gardeing"]
        },
    skills:["designing","html","css","javascript"],
    certification:["Degree","surveyor","12th","10th","c-tech in webdevelopement"],
    workingexpereince:[{
        organisation:"sbicap securites",
        year:"1yr",
        role:"executive"
    },
    {
        organisation:"chennai surveys",
        year:"6 month",
        role:"surveyor"
    }


    ],
    areaofinterest:["coding","back-end development","web-designing"]
}
console.log(resume)
let resume_list={
    skills:[],
    certification:[],
    Areaofinterest:[],
    personaldetails:{},
    languagesknown:[]
   
    
}

function adddetails(key,value,index=null,mainkey=null){
    if(index==null){
        resume_list[key]=value

    }
    else if(key=="education"||key=="workingexperience"){
        if(!resume_list[key]){
            resume_list[key]=[]
        }
        if(!resume_list[key][index]){
            resume_list[key][index]={}
        }
        resume_list[key][index][mainkey]=value
    }
    else{
       
        resume_list[key][index]=value
    }
    display()
  


}

function storage(){
    if(!localStorage.getItem("resume")){
        localStorage.setItem("resume",JSON.stringify())
    }
    let fullresume=JSON.parse(localStorage.getItem("resume"))
    fullresume.push(resume_list)
    localStorage.setItem("resume",JSON.stringify(fullresume));
    namedisplay()
}
namedisplay()
function namedisplay(){
    let element=""
    let resumeindex=JSON.parse(localStorage.getItem("resume"))
    for(let i=0;i<resumeindex.length;i++){
        element=element+"<li> <a href='view.html?name="+resumeindex[i].name +"'target='_blank'>"+resumeindex[i].name+"</a></li>"
    }
    document.getElementById("order").innerHTML=element
}
function display(){     

    document.getElementById("obj").innerHTML=JSON.stringify(resume_list)
}

