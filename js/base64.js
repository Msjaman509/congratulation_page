let query

document.querySelector("#generate").addEventListener("click",async (clicked)=>{
    clicked.preventDefault()
    let name = document.querySelector("#name").value;
    let stream = document.querySelector("#stream").value;
    let organization = document.querySelector("#organization").value;
    let session =  document.querySelector("#session").value;
   
    let photo=document.querySelector("#fileToUpload").files[0];
    
    let pictureEncoded=await toBase64(photo);
    try{
        query=`fileToUpload=${pictureEncoded}&name=${name}&stream=${stream}&organization=${organization}&session=${session}`
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('stream',stream );
        window.localStorage.setItem('organization',organization );
        window.localStorage.setItem('session',session );
        window.localStorage.setItem('photo', pictureEncoded );
        window.location='/Congratulation.html'
    }
    catch(error)
    {
        console.log(error)
    } 
})

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});



"fileToUpload=20210518_185525.jpg&name=jhhjh&stream=B.Sc+in+Medical+Lab+Technology&organization=hjhj&session=2016-2017"