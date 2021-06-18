window.addEventListener('load', () => {
let name =window.sessionStorage.getItem('name');
let stream = window.sessionStorage.getItem('stream');
let organization = window.sessionStorage.getItem('organization');
let session =window.sessionStorage.getItem('session');
let photoEncode=window.sessionStorage.getItem('photo')
    document.getElementById('myimg').src = photoEncode;
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-stream').innerHTML = stream;
    document.getElementById('result-organization').innerHTML = organization;
    document.getElementById('result-session').innerHTML = session;
})

