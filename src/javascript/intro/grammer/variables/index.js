
// 1. What are variables used for? Why are they important?
//      JavaScript variables are containers for storing data values.
//      If you store variables in const you can not reassign those values
//      at a later time, if you store them in a let, you can reassign the
//      the value at a later time. Also we do not want to use var anymore
//      it is being deprecated.

export var message = 'hello';

export let greeting = 'Yo!';

export const saying = 'What up';


// 2. Can you assign a new value to message? (Assign 'world')
// 3. Can you assign a new value to greeting? (Assign 'Hello!')
// 4. Can you assign a new value to const? (Assign 'Booyah')
//       No you can not assign a new value to the variables you
//       have already created. It will not pass the test, because
//       the test is checking for those values that are already
//       assigned to the values.
