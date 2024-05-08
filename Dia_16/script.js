function fetchUser(){
    let xhr=new XMLHttpRequest();
    let url='https://randomuser.me/api/';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(this.readyState == 4 && this.status ===200){
            let dato= JSON.parse(this.responseText);
            console.log(dato.results[0]);
            info=dato.results[0]
            displayUser(info)
        }else{
            return ("ERROOOOOOOOOOOR!");
        }
    }
    xhr.send()
}

function displayUser(dato){
    //Comando para obtener nombre
    nombre=((dato["name"]["first"])+" "+(dato["name"]["last"]))
    console.log(nombre);
    
    //Comando para obtener correo
    correo=(dato["email"])
    console.log(correo);
    
    
    //Comando para obtener fecha de nacimiento
    variable= dato ["dob"]["date"];
    console.log(variable);
    
    variable= variable.slice(0,10);
    arrayFechas=variable.split('-');
    ano=arrayFechas[0]
    mes=arrayFechas[1]
    dia=arrayFechas[2]
    fechaFinal=mes+"/"+dia+"/"+ano
    console.log(fechaFinal);
    
    //Comando para obtener dirección
    direccion=((dato['location']['street']['number'])+" "+(dato['location']['street']['name']))
    console.log(direccion);
    
    //Comando para obtener telefono
    telefonoCompleto= dato['phone'];
    arrayTel=telefonoCompleto.split(' ');
    telefonoFinal="("+arrayTel[0]+")"+" "+arrayTel[1]+"-"+arrayTel[2]+arrayTel[3];
    console.log(telefonoCompleto);
    
    //Comando para obtener password
    contrasena=(dato["login"]["password"])
    console.log(contrasena)
    //Comando para la foto
    foto=(dato['picture']['large'])
    let userInfo=document.getElementById('userInfo');
    if(dato.response == "Habemus error!"){
        userInfo.innerHTML=`<h1>HABEMUS ERROR!!!</h1>`
    }else{
        userInfo.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Hi,My name is</p>
                <h5 class="card-title">${nombre}</h5>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">My email address is</p>
                <h5 class="card-title">${correo}</h5>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">My birthday is</p>
                <h5 class="card-title">${fechaFinal}</h5>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">My address is</p>
                <h5 class="card-title">${direccion}</h5>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">My phone number is</p>
                <h5 class="card-title">${telefonoCompleto}</h5>
            </div>
        </div>
        
        <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">My password is</p>
                <h5 class="card-title">${contrasena}</h5>
            </div>
        </div>



        <img src="${foto}" class="card-img-top" alt="..." style = "width: 3em">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${fechaFinal}</p>
            <p class="card-text">${correo}</p>
            <p class="card-text">${direccion}</p>
            <p class="card-text">${telefonoCompleto}</p>
            <p class="card-text">${contrasena}</p>
        </div>

            `
        }
    
}
fetchUser()