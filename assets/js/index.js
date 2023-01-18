$("#register-form").submit(event=>{
    alert("Regestration successfull")
})
console.log("ela eyy")


$("#login-form").submit(function(event){
    console.log("hello")
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)


    var request = {
        "url" : `http://localhost:3000/api/student/${data.user_name}`,
        "method" : "GET",
        "data" : data
    }

    $.ajax(request).done(function(response){
       
        if(!response){
            alert("user not found please signup first")
            
        }
        else{
            alert("wahh");
            window.location.replace("/")
        }
    })

})

