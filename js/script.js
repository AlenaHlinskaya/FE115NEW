function delivery() {
    let fieldName = null,
        fieldPhone = null,
        fieldEmail = null,
        fielddeliveryMethods = null,
        fieldDateCurrent = null,
        fiedDistA = null,
        fiedDistB = null,
        fiedDateDeparture = null,
        fiedDateDelivery = null;
    let dataArr = [];

    let distances = [
        {
            a: "Минск",
            b: "Гродно",
            d: 281,
        },
        {
            a: "Минск",
            b: "Витебск",
            d: 201,
        },
        {
            a: "Минск",
            b: "Брест",
            d: 328,
        },
        {
            a: "Минск",
            b: "Гомель",
            d: 173,
        },
        {
            a: "Минск",
            b: "Могилёв",
            d: 201,
        },
        {
            a: "Гродно",
            b: "Минск",
            d: 275,
        },
        {
            a: "Гродно",
            b: "Витебск",
            d: 445,
        },
        {
            a: "Гродно",
            b: "Брест",
            d: 239,
        },
        {
            a: "Гродно",
            b: "Гомель",
            d: 500,
        },
        {
            a: "Гродно",
            b: "Могилёв",
            d: 482,
        },
        {
            a: "Витебск",
            b: "Минск",
            d: 290,
        },
        {
            a: "Витебск",
            b: "Гродно",
            d: 445,
        },
        {
            a: "Витебск",
            b: "Брест",
            d: 551,
        },
        {
            a: "Витебск",
            b: "Гомель",
            d: 330,
        },
        {
            a: "Витебск",
            b: "Могилёв",
            d: 143,
        },
        {
            a: "Брест",
            b: "Минск",
            d: 343,
        },
        {
            a: "Брест",
            b: "Гродно",
            d: 239,
        },
        {
            a: "Брест",
            b: "Витебск",
            d: 626,
        },
        {
            a: "Брест",
            b: "Гомель",
            d: 500,
        },
        {
            a: "Брест",
            b: "Могилёв",
            d: 535,
        },
        {
            a: "Гомель",
            b: "Гродно",
            d: 500,
        },
        {
            a: "Гомель",
            b: "Витебск",
            d: 329,
        },
        {
            a: "Гомель",
            b: "Брест",
            d: 533,
        },
        {
            a: "Гомель",
            b: "Минск",
            d: 173,
        },
        {
            a: "Гомель",
            b: "Могилёв",
            d: 179,
        },
        {
            a: "Могилев",
            b: "Гродно",
            d: 482,
        },
        {
            a: "Могилев",
            b: "Витебск",
            d: 143,
        },
        {
            a: "Могилев",
            b: "Брест",
            d: 535,
        },
        {
            a: "Могилев",
            b: "Гомель",
            d: 179,
        },
        {
            a: "Могилев",
            b: "Минск",
            d: 201,
        },
    ];

    let prices = [
        {
            method: "Самолёт",
            price: 300
        },
        {
            method: "Такси",
            price: 200
        },
        {
            method: "Частный водитель",
            price: 250
        },
        {
            method: "Курьер",
            price: 150
        },
    ];

    function showForm() {

        let deliveryMethods = ['Самолёт', 'Такси', 'Частный Водитель', 'Курьер'];
        let destinations = ['Минск', 'Гродно', 'Витебск', 'Брест', 'Гомель', 'Могилёв'];
    
        let form = document.createElement("form");
        form.classList.add("form");
    
    
        let script = document.querySelector("script");
        document.body.insertBefore(form, script);
    
        let inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("placeholder", "введите ФИО");
        inputName.setAttribute("name", "fio");
        inputName.classList.add('input');
        inputName.required = "true";
        form.appendChild(inputName);
    
        let inputTel = document.createElement("input");
        inputTel.setAttribute("type", "tel");
        inputTel.setAttribute("placeholder", "введите номер телефона");
        inputTel.setAttribute("name", "phone");
        inputTel.classList.add('input')
        inputTel.required = "true";
        form.appendChild(inputTel);
    
        let inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("placeholder", "введите email");
        inputEmail.setAttribute("name", "email");
        inputEmail.classList.add('input')
        inputEmail.required = "true";
        form.appendChild(inputEmail);

        let methodDelivery = document.createElement("select");
        methodDelivery.setAttribute("name", "methodDelivery");
        methodDelivery.classList.add('select');
        methodDelivery.required = "true";
        form.appendChild(methodDelivery);
    
        let methodDeliveryOption = createSelects(deliveryMethods);
        methodDeliveryOption.map(option => {
            methodDelivery.append(option);
        })
    
        let now = document.createElement("input");
        now.setAttribute("type", "datetime");
        now.classList.add('input');
        now.disabled = true;
        now.setAttribute("name", "now");
    
        let nowDay = new Date();
        now.value = `${nowDay.getFullYear()} / ${nowDay.getMonth() + 1} / ${nowDay.getDate()} , ${nowDay.getHours()}:${nowDay.getMinutes()}:${nowDay.getSeconds()} ` ;
    
        
        
        form.appendChild(now);
    
        let departure = document.createElement("select");
        departure.setAttribute("name", "departure");
        departure.classList.add('select');
        departure.required = "true";
        form.appendChild(departure);
    
        let departureOption = createSelects(destinations);
        departureOption.map(option => {
            departure.append(option);
        })
    
    
        let destination = document.createElement("select");
        destination.setAttribute("name", "destination");
        destination.classList.add('select');
        destination.required = "true";
        form.appendChild(destination);
    
        let destinationOption = createSelects(destinations);
        destinationOption.map(option => {
            destination.append(option);
        })
    
        let dateDeparture = document.createElement("input");
        dateDeparture.setAttribute("type", "date");
        dateDeparture.setAttribute("name", "dateDeparture");
        dateDeparture.classList.add('input');
        dateDeparture.required = "true";
        form.appendChild(dateDeparture);
    
        let dateDestination = document.createElement("input");
        dateDestination.setAttribute("type", "date");
        dateDestination.setAttribute("name", "dateDestination");
        dateDestination.classList.add('input');
        dateDestination.required = "true";
        form.appendChild(dateDestination);
    
        let btn = document.createElement("button");
        btn.setAttribute("type", "submit");
        btn.classList.add('btn');
        btn.innerText = 'Рассчитать стоимость';
        form.appendChild(btn);
    
        form.addEventListener("submit", (e) => {
            formHandler(e, form, departure, destination)
        })
    
    }
    
    function createSelects(data) {
        return data.map(elem => {
            let option = document.createElement("option");
            option.setAttribute("value", elem);
            option.innerText = elem;
            return option;
        })
    }
    
    function formHandler(e, conteiner, dep, dest) {
        e.preventDefault();
        if (dep.value == dest.value) return
        [...conteiner.children].map((elem, i) => {
            if(elem.tagName != "BUTTON") dataArr[i] = elem.value;
        });
            [
            fieldName, 
            fieldPhone,
            fieldEmail,
            fielddeliveryMethods,
            fieldDateCurrent,
            fiedDistA, 
            fiedDistB,
            fiedDateDeparture,
            fiedDateDelivery,  
        ] = dataArr;
    
        console.log(dataArr);
        let price = calculation();
        showCalculation(fieldDateCurrent, price, fiedDistA, fiedDistB, fiedDateDeparture, fiedDateDelivery, fieldName, fieldPhone, fieldEmail);
    }

    function calculation() {
        let distA = fiedDistA,
            distB = fiedDistB,
            method = fielddeliveryMethods;
        let dist = distances.find(elem => {
            if((elem.a == distA || elem.b == distA) && (elem.a == distB || elem.b == distB )) {
                return elem;
            }
        })
        let coof = prices.find(elem => elem.method == method ? elem : null)
        return dist.d * coof.price
    }
    
    function showCalculation(fieldDateCurrent, price, fiedDistA, fiedDistB, fiedDateDeparture, fiedDateDelivery, fieldName, fieldPhone, fieldEmail) {
        if(document.body.lastChild.className != "price") {
            let priceFinaly = document.createElement("div");
            priceFinaly.setAttribute("class", "price");
            priceFinaly.innerText = `Дата расчёта ${fieldDateCurrent} `  + `Стоимость доставки ${price} ` + `Путь доставки ${fiedDistA} (${fiedDateDeparture})  => ${fiedDistB} (${fiedDateDelivery}) ` + `Информация о заказчике: ФИО - ${fieldName} , телефон - ${fieldPhone} , электронная почта - ${fieldEmail} `;

            document.body.append(priceFinaly)
        } else {
            document.body.lastChild.innerText = `Дата расчёта ${fieldDateCurrent} `  + `Стоимость доставки ${price} ` + `Путь доставки ${fiedDistA} (${fiedDateDeparture})  => ${fiedDistB} (${fiedDateDelivery}) ` + `Информация о заказчике: ФИО - ${fieldName} , телефон - ${fieldPhone} , электронная почта - ${fieldEmail}`;
        }
    }

    showForm()

}


window.addEventListener('DOMContentLoaded' , delivery);