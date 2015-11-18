fs=require('fs');
eval(fs.readFileSync('/home/jsdev/node-consoleapp/main.js')+'');
assert=require('assert');

suite('check for dividers', function(){
   test('should return 1', function(){
       assert.deepEqual(f(),1);
   });
});