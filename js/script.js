
class User {
        constructor(data) {
            if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.tel.length > 0) this.data = data;
        }

        edit(data) {
            Object.assign(this.data, data);
        }
    }

// let user = new User({
//     name: 'bob',
//     email: 'test@gmail.com',
//     address: 'mexico',
//     telephone: '7788',
// })

// console.log(user);

// user.edit({
//     name: 'alex',
//     email: 'test@gmail.com',
//     address: 'mexico',
//     telephone: '7788',
// })

class Contacts {
    constructor(data) {
        this.userId = 0;
        this.contacts = [];
    }

    add(data) {
        if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.tel.length > 0)  {
           ++this.userId;
            let user = new User(data);
            user.data.id = this.userId;
            this.contacts.push(user);
       }
    }

    edit (id, data) {
        let userEdit = this.contacts.find(user => {
            if(user.data.id == id) return user
        })
        
        userEdit.edit(data);
    };

    remove(id) {
        this.contacts = this.contacts.filter(user => user.data.id != id ? user : null)
        return true;
    }

    getContacts() {
        return this.contacts;
    }

    
 

}

let contacts  = new Contacts();

// contacts.add({
//         name: 'john',
//         email: 'test@gmail.com',
//         address: 'mexico',
//         telephone: '7788',
// });

// contacts.add({
//     name: 'bob',
//     email: 'test@gmail.com',
//     address: 'mexico',
//     telephone: '7788',
// });

// contacts.add({
//     name: 'alex',
//     email: 'test@gmail.com',
//     address: 'mexico',
//     telephone: '7788',
// });

// contacts.edit(3, {
//     name: 'bob',
//     email: 'test@gmail.com',
//     address: 'mexico',
//     telephone: '7788',
// })


class ContactsApp extends Contacts{ 
    constructor() {
        super();
        this.init();
    }

    init() {
        let form = document.createElement('form');
        form.setAttribute('class', 'form');

        let title = document.createElement('h1');
        title.setAttribute('class', 'title');  
        title.innerText = 'Контакты';

        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'name');
        nameInput.setAttribute('class', 'name');  
        nameInput.setAttribute('placeholder', 'Введите имя');      


        let emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('class', 'email');  
        emailInput.setAttribute('placeholder', 'Введите e-mail');   


        let addressInput = document.createElement('input');
        addressInput.setAttribute('type', 'text');
        addressInput.setAttribute('name', 'address');
        addressInput.setAttribute('class', 'address');  
        addressInput.setAttribute('placeholder', 'Введите адрес');  


        let phoneInput = document.createElement('input');
        phoneInput.setAttribute('type', 'tel');
        phoneInput.setAttribute('name', 'tel');
        phoneInput.setAttribute('class', 'phone');   
        phoneInput.setAttribute('placeholder', 'Введите телефон');   


        let formBtn = document.createElement('button');
        formBtn.setAttribute('type', 'submit');
        formBtn.setAttribute('class', 'formBtn'); 
        formBtn.innerText = 'Сохранить';  


        let listContact = document.createElement('ol');
        listContact.setAttribute('class', 'list');   
        this.listContact = listContact;    

    
        form.append( nameInput, emailInput,  addressInput, phoneInput, formBtn);

        document.body.append(title, form, listContact);


        this.textInputs = [nameInput, emailInput, addressInput, phoneInput];

        form.addEventListener('submit', (e) => {
            this.addContact(e)
        })
    }

    addContact(e) {
        e.preventDefault();
        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})  
        this.add(data);
        this.textInputs.forEach(elem => elem.value = '') 
        console.log(this);
        console.log(this.contacts);
        this.createCont();
    }

    createCont() {
        this.listContact.innerHTML = '';
        let dataList = this.getContacts()
        dataList.map(elem => {
            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'list_item');
    
            let listName = document.createElement('div');
            listName.setAttribute('class', 'list_name');
            listName.innerText ='Имя: '+ elem.data.name;
    
            let listEmail = document.createElement('div');
            listEmail.setAttribute('class', 'list_email');
            listEmail.innerText = 'Электронная почта: ' + elem.data.email;
    
            let listAddress = document.createElement('div');
            listAddress.setAttribute('class', 'list_address');
            listAddress.innerText ='Адрес: ' + elem.data.address;
    
            let listPhone = document.createElement('div');
            listPhone.setAttribute('class', 'list_tel');
            listPhone.innerText = 'Телефон: ' + elem.data.tel;
    
            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'list_edit');
            editBtn.innerText = 'Редактировать'
    
            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'list_remove');
            removeBtn.innerText = 'Удалить';
    
            elemList.append(listName, listEmail, listAddress, listAddress, listPhone, editBtn, removeBtn)
            this.listContact.append(elemList);
    
    
            editBtn.addEventListener('click', _ => {
                this.editCont(listName, listEmail, listAddress, listPhone)
            })
    
            removeBtn.addEventListener('click', _ => this.contRemove(elem.data.id))
    
            listName.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listEmail.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listAddress.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listPhone.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
        
        })

        this.storage = this.contacts;
    }

    get storage(){
        let storage = localStorage.getItem('contacts');
        return JSON.parse(storage)
    }

    set storage(data) {
        let dataStorage = JSON.stringify(data)
        localStorage.setItem('contacts', dataStorage)
    }

    saveNote(e, id, name, email, address, tel){
        if(e.key == 'Enter' && e.ctrlKey){
            name.setAttribute('contenteditable', 'false');
            email.setAttribute('contenteditable', 'false');
            address.setAttribute('contenteditable', 'false');
            tel.setAttribute('contenteditable', 'false');
            let data = {
                name: name.innerText,
                email: email.innerText,
                address: address.innerText,
                tel: tel.innerText,
            }
    
            this.edit(id, data);  
            console.log(this.contacts)
        }
    }

    contRemove(id) {
        this.remove(id);
        this.createCont();
    }

    

    editCont = function (name, email, address, tel) {
        name.setAttribute('contenteditable', 'true');
        email.setAttribute('contenteditable', 'true');
        address.setAttribute('contenteditable', 'true');
        tel.setAttribute('contenteditable', 'true')
    }

    











}

