//declare place
//const nama = document.querySelector(".user-name"); 
const body = document.body;
const listImg = document.querySelectorAll('.list-img')


//greeting for visitor

const paragraf = document.createElement('p');
    paragraf.textContent = inputan;
    if(inputan == '' || inputan.trim() == ''){
    nama.append('user')
}
nama.append(inputan);

//console.log(document.getElementsByClassName("lidocumen




function hasil (){
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let gender = document.querySelector('input[name="gender"]:checked');
    let pesan = document.getElementById("pesan");
    let tanggal = document.getElementById("birtday");
    let f_target = document.querySelector('.first-name-target');
    let l_target = document.querySelector('.last-name-target');
    let pesan_target = document.querySelector('.pesan-target');
    let jenis_kelamin = document.querySelector('.jenis-kelamin-target')
    let t_target = document.querySelector('.tgl-target');

    f_target.innerHTML = "Nama " +  firstname.value + " " + lastname.value;
    t_target.innerHTML = "Tanggal Lahir : " + tanggal.value;
    jenis_kelamin.innerHTML = "jenis kelamin : " + gender.value;
    pesan_target.innerHTML = "Pesan : " + pesan.value;

    
    firstname.value = "";
    lastname.value = "";
    gender.checked = false;
    pesan.value = '';
    tanggal.value = false;


    
}





