fetch('https://swapi.py4e.com/api/people/1/')
.then(response => {
    if (!response.ok) { 
        throw new Error('Error en la solicitud');
      }
    return response.json();
})
.then(json => {
    console.log(json)})
.catch(error => {
    console.error('Ocurrió un error:', error);
    });

fetch('https://swapi.py4e.com/api/', {
    method: 'POST',
            body: JSON.stringify({
                name: "Luke Skywalker",
            }),
            headers: {
                "Content-type": "application/json"
            }
      .then(response => response.json())
      .then(json => console.log(json))
    })
fetch('https://swapi.py4e.com/api/planets/1/', {
    method: 'DELETE'
});
HTMLButtonElement()