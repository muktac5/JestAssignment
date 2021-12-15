var logindeets=[
    {
        uid:"mukta2000",
        pwd:"admin"
    },
    {
        uid:"admin123",
        pwd:"admin05",

    },
    {
       uid:"jyotsna3",
       pwd:"jyo067"
        
    }
]

function login(u,p){


   let found = logindeets.find(found=>found.uid===u && found.pwd===p);
   if(found==undefined)
   return "Invalid User";
   else
   return "Valid User";

}

module.exports={
    login
}