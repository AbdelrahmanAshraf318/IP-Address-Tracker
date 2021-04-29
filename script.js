let api = 'http://api.icndb.com/jokes/random/3';


window.addEventListener('load' , () => {
    console.log("random");
    fetch(api).then(function(response){
        return response.json()
    })
    .then(function(json){
        for(var i=0 ; i<json.value.length ; i++){
            console.log(json.value[i].joke);
        }
    })
})



