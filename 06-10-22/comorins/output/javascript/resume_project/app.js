let data =JSON.parse(window.localStorage.getItem('resume'));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const show = urlParams.get('name');
// alert(show)
for(let i=0;i<data.length;i++){
  if(show==data[i].name){

    document.getElementById("name").innerHTML=data[i].name;
    document.getElementById("email").innerHTML=data[i].email;
    document.getElementById("phone").innerHTML=data[i].phone;
    document.getElementById("work").innerHTML=data[i].role;
    document.getElementById("aboutme").innerHTML=data[i].aboutme
    let personal=data[i].personaldetails
    document.getElementById("fathername").innerHTML=personal.fathername;
    document.getElementById("dob").innerHTML=personal.dob;
    document.getElementById("gender").innerHTML=personal.gender;
    document.getElementById("languages").innerHTML=data[i].languagesknown;
    document.getElementById("address").innerHTML=personal.address;
    document.getElementById("nationality").innerHTML=personal.nationality;
    document.getElementById("objective").innerHTML=data[i].objective;
    let studies=data[i].education;
    for(let i=0;i<studies.length;i++){
      document.querySelector("#course"+i).innerHTML=studies[i].course;
      document.querySelector("#year"+i).innerHTML=studies[i].year;
      document.querySelector("#institute"+i).innerHTML=studies[i].institute;
      document.querySelector("#percentage"+i).innerHTML=studies[i].percentage;

    }
    let exp=data[i].workingexperience
    for(let i=0;i<exp.length;i++){
      document.getElementById("organisation"+i).innerHTML=exp[i].organisation;
      document.getElementById("role"+i).innerHTML=exp[i].role;
      document.getElementById("exyear"+i).innerHTML=exp[i].exyear;
    }
    let skills=data[i].skills
    let ele=""
    for(let i=0;i<skills.length;i++){
      ele=ele+"<li>"+skills[i]+"</li>"

    }
    document.getElementById("order").innerHTML=ele
    let certification= data[i].certification;
    let element=""
    for(let i=0;i<certification.length;i++){
      element=element+"<li>"+certification[i]+"</li>"
    }
    document.getElementById("certiorder").innerHTML=element
    let areaofinterest=data[i].Areaofinterest;
    let value="";
    for(let i=0;i<areaofinterest.length;i++){
      value=value+"<li>"+areaofinterest[i]+"</li>"
    }
    document.getElementById("interestorder").innerHTML=value

  }
  

 
}




