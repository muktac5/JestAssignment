
const { tsExternalModuleReference, exportAllDeclaration } = require("@babel/types");
const matchers= require ("./matchers");

describe('Matchers suite',()=>{
    test ("Comparing objects with toBe() and toBeEqual()",()=>{
        var empObj={"id":102,"name":"mukta","dept":"it","desgn":"full stack dev"}

        expect (matchers.returnObject()).toEqual (empObj);
    })
    
})