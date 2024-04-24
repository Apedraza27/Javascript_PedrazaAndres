function fetchSuperHero() {
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById('heroID').value;
    console.log(heroID);
    let apiKey = "09c5caae3c0bb26d1b302394e9270fdc";
    let url = `https://superheroapi.com/api.php/$(apiKEy)/$(heroID)`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        }else if(this.readyState ==4){
            console.log('Error:', this.statusText);
        }
    };
    xhr.send();
}

function displayHero(data) {
    let heroInfo = document.getElementById('superHeroInfo');
    if (data.response === 'error'){
        heroInfo.innerHTML= `<p>Error:$(data.error)</p>`;
    }else{
        heroInfo.innerHTML=`
        <p>Name:$(data.name)</p>
        <p>Inteligencia:$(data.powerstats.intelligence)
        `
    }
}