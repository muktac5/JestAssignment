var registers=require('./register');

test('Valid Registration',()=>{
    uid="mukta2000";
    pwd="admin";
    role="staff";
    var valid="Registration successful";

    expect(registers.registration(uid,pwd,role)).toEqual(valid)
});

test('Valid Log in',()=>{
    uid="mukta2000";
    pwd="admin";
    role="admin";
    var valid="Valid User";

    expect(registers.login(uid,pwd)).toEqual(valid);
});
