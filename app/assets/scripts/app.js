var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes.")
    }
}

var john = new Person('John Doe', 'Blue');
var jane = new Adult('Jane Smith', 'Orange');

john.greet();
jane.greet();
jane.payTaxes();

$("h1").remove();