var logins= require('./login');

test('Valid User',()=>{
    var uid="mukta2000";
    var pwd="admin05";
    var res="Valid User"
    expect(logins.login(uid,pwd)).toEqual(res);
});
test('InValid User',()=>{
    var uid="mukta200";
    var pwd="admin";
    var res="Invalid User"
    expect(logins.login(uid,pwd)).toEqual(res);
});