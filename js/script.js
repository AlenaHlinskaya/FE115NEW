let Calc = function() {

    this.turnOn = function() {
        this.on = confirm('Включить калькулятор?');
        if(this.on === true) {
            this.get();
        } else {
            alert('До свидания!');
        }
    }
    this.get = function() {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.operation();
    };
    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    };
    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result)
    };
};

let calc = new Calc();
// calc.turnOn();

let Calc2 = function() {
    Calc.apply(this, arguments);

    
};

let calc2 = new Calc2();
console.log(calc2);

calc2.turnOn();