function fetchStar() {
    let xhr = new XMLHttpRequest();
    let url = 'https://swapi.py4e.com/api/google/1';
    xhr.open('GET',url,true);
    xhr.onreadystatechange =function (){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
        }else if(this.readyState ==4){
            console.log('Error:', this.statusText);
        }
    };
}
fetchStar();