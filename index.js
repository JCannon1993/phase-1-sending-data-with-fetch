// Add your code here

function submitData (name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        })
    })
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            const body = document.querySelector('body')
            body.innerHTML = `${object.id}`
           
        })
        .catch(function(error){
            document.body.innerHTML = error.message
        })
    }
        
    
    
    
    
    
    
    
    // const configurationObject = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //         dogName: 'Byron',
    //         dogBreed: "Poodle",
    //     }),
    // }
    // fetch("http://localhost:3000/dogs", configurationObject)
    // .then(function (response){
    //     return response.json();
    // })
    // .then(function (object){
    //     console.log(object)
    //})