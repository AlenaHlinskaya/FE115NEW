class Contacts {
   constructor(data) {

   }
};

class User {
        constructor(data) {
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.address = data.address;
            this.phone = data.phone;

        }

        edit(obj) {
            // В качестве параметра метод должен принимать объект с обновленными данными и обновлять свойство data.

        }

        get() {
            return 'пользователь: ' + this.id + this.name + ' Контактные данные: ' + this.email + this.address + this.phone;
        }
    }

let user = new User({id: 111, name: 'Alex', email: 'test@gmail.com', address: 'Haag', phone: 7788, });

console.log(user);
