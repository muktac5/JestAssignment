var registeredusers=[];

function registration(uid,pwd,role){
    if(uid!="" && pwd!="")
    {
        if(role!=admin && role!=user){
        let user ={
            "userid":uid,
            "password":pwd,
            "roleoftheuser":role
        }
        registeredusers.push(user);
        console.log("Registration successful");
        console.log(registeredusers);
        return "Registration successful";
        }
    }
else
{
    console.log("Failed to register bcos user details provided are wrong")
return "Failed to register";
    
}
}

function login(uid,pwd){
    let user = registeredusers.find(user => user.userid===uid && user.password===pwd);
    if(user!=undefined)
    {
        return "Valid User";
    }
    else{
        return "Invalid User";
    }
}

module.exports={
    registration,
    login
}