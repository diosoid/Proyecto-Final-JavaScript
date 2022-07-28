// -- FUNCION DEL CLIMA

const climaCheck = document.querySelector('#clima_info')

let climaFeature = []

fetch(`https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=aa32ef9670433326a09ad851d24585f1&lang=sp&units=metric`)
.then((resp) => resp.json())
.then((data) => {
    console.log(data)




    climaCheck.innerHTML =`

    <h3>Ciudad: ${data.name} </4>
    <h4>Temp actual: ${data.main.temp} °</h4> 
    <h4>Humedad actual: ${data.main.humidity}%</h4>
    <h4>Hoy tenemos ${data.weather[0].description}.</h4> 
    
    `

    
})










const registroFormulario = document.getElementById('regBtn');

function registroUsuario() {
    let userName = [];
    let userMail = []; 
    let userPhone = [];


    const xuserName = document.getElementById('name_input');
    const xuserMail = document.getElementById('email_input');
    const xuserPhone = document.getElementById('telephone_input');

    userName.push(xuserName.value)
    userMail.push(xuserMail.value)
    userPhone.push(xuserPhone.value)

    console.log(userName, 'username')
    console.log(userMail, 'userMail')
    console.log(userPhone, 'userPhone')

    localStorage.setItem('UserNameReg', JSON.stringify(userName[0]));
    localStorage.setItem('UserMailReg', JSON.stringify(userMail[0]));
    localStorage.setItem('UserPhoneReg', JSON.stringify(userPhone[0]));


    
     Swal.fire({
        title: 'Registro completado!',
        
        icon: 'success',
                
        confirmButtonText: `<a href="index.html">Seguir comprando</a>`,
        
    }) 
}

registroFormulario.addEventListener('click', registroUsuario);


