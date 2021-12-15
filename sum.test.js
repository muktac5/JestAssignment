var myFunctions=require('./sum')

test('add',() => {
    expect (myFunctions.sum(2,3)).toBe (5);
});

test ('subtract',()=>{
    expect (myFunctions.subtract(5,2)).toBe (3)
});
test ('multiply',()=>{
    expect(myFunctions.multiply(3,4)).toBe(12)
});
test ('division',()=>{
    expect(myFunctions.division(10,2)).toBe(5)
});
test ('largestoftwonumbers',()=>{
    expect(myFunctions.largestoftwonumbers(3,4)).toBe(4)
});
test ('largestofthreenumbers',()=>{
    expect(myFunctions.largestofthreenumbers(1,0,2)).toBe(2)
});
test ('factorial',()=>{
    expect(myFunctions.factorial(1)).toBe(1)
});
test('evenorodd',()=>{
    expect(myFunctions.evenorodd(5)).toBeFalsy()
});
test('check',()=>{
    const ar=[4,5,6,7];
    const a=3;
    expect(myFunctions.check(a,ar)).toBeTruthy()
});