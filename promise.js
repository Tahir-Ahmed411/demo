function buyCake(type){
    return new Promise((resolve,reject)=>{
        if(type==="coffee"){
            resolve("Job done")
        }
        else
            reject("Not Done")
    })
}

// buyCake("coffee").then(alert).catch(alert);

function getDirectors(){
    return new Promise((resolve,reject)=>{
        fetch("http://www.maciejtreder.com/asynchronous-javascript/directors/")
        .then(res=>res.json())
        .then(r=>resolve(r[0].id))
    })
}

function getMovies(id){
    return new Promise((resolve,reject)=>{
        fetch(`http://www.maciejtreder.com/asynchronous-javascript/directors/${id}/movies`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    })
}

getDirectors().then(getMovies)

console.log("hello world")
