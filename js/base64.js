let query
let error=[];
let carryForward;
let errorString="";
document.querySelector("#generate").addEventListener("click",async (clicked)=>{
    error.length = 0
    errorString=``;
    clicked.preventDefault()
    let name = document.querySelector("#name").value;
    let stream = document.querySelector("#stream").value;
    let organization = document.querySelector("#organization").value;
    let session =  document.querySelector("#session").value;
    let photo=document.querySelector("#fileToUpload").files[0];
    if(!photo){
        carryForward = false
    error.push("noPhoto")}
    if(!name){
        carryForward = false
    error.push("noName")}
    if(!session){
        carryForward = false
    error.push("noSession")}
    if(!stream){
        carryForward = false
    error.push("noStream")}
    if(!organization){
        carryForward = false
    error.push("noOrganization")}
    window.localStorage.setItem('carry',carryForward);
    if(error.length==0){
        window.localStorage.setItem('carry', "true");
    }
    document.querySelector(".errorText").innerHTML+=``
    if(error.length>0){
        error.forEach((eachError)=>{
            errorString+=`</p>${errorMap[eachError]}</p>`
        })
        document.querySelector(".error").style.display="block"
        document.querySelector(".errorText").innerHTML=errorString
        setTimeout(()=>{
            document.querySelector(".error").style.display="none"
          },5000)
    }
    let pictureEncoded=await toBase64(photo);
    try{
        query=`fileToUpload=${pictureEncoded}&name=${name}&stream=${stream}&organization=${organization}&session=${session}`
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('stream',stream );
        window.sessionStorage.setItem('organization',organization );
        window.sessionStorage.setItem('session',session );
        window.sessionStorage.setItem('photo', pictureEncoded );
        if(window.localStorage.getItem('carry')==="true")
        window.location='/Congratulation.html'
    }
    catch(error)
    {
        console.log(error)
    } 
 })
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    if(file)
    {
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
}   
});






let errorMap = {
    "noPhoto" : "Please upload a Supported Photo ! ",
    "noName" : "Please enter your name" ,
    "noSession" :  "Please enter your Course Session",
    "noOrganization" :  "Please enter organization Name",
    "noStream" :  "Please enter you Stream"    
}


