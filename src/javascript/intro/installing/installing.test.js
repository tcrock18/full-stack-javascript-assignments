import Test from 'ava';
import * as Assignment from './';

Test.only('name is exported properly', t => {
  t.truthy(Assignment.name);
});

Test.only('email is exported properly', t => {
  t.truthy(Assignment.email);
});

Test.only('phone number is exported properly', t=> {
  t.truthy(Assignment.phone);
});
