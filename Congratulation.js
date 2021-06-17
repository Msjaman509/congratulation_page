window.addEventListener('load', () => {
let name =window.localStorage.getItem('name');
let stream = window.localStorage.getItem('stream');
let organization = window.localStorage.getItem('organization');
let session =window.localStorage.getItem('session');
let photoEncode=window.localStorage.getItem('photo')
    document.getElementById('myimg').src = photoEncode;
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-stream').innerHTML = stream;
    document.getElementById('result-organization').innerHTML = organization;
    document.getElementById('result-session').innerHTML = session;
})

