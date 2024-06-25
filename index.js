//EJERCICIO 1
//Calcular el área de un triángulo dado la base y la altura
var inputBase = document.getElementById("base");
var inputAltura = document.getElementById("altura");
var res = document.getElementById("res");
var btn = document.getElementById("button");
function calcularArea(base, altura) {
    res.innerHTML = '';
    var result = document.createElement('p');
    if (base > 0 && altura > 0) {
        var area = (base * altura) / 2;
        result.textContent = "El area del triangulo es: ".concat(area);
        res.appendChild(result);
    }
    else {
        result.textContent = 'Debe ingresar valores superiores a 0';
        res.appendChild(result);
    }
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
    e.preventDefault();
    var base = Number(inputBase.value);
    var altura = Number(inputAltura.value);
    calcularArea(base, altura);
});
//EJERCICIO 2
//Dividir dos números e imprimir el resultado, manejar la excepción de división por cero
var inputOne = document.getElementById("one");
var inputTwo = document.getElementById("two");
var resTwo = document.getElementById("resTwo");
var btnTwo = document.getElementById("btn");
function dividir(numOne, numTwo) {
    resTwo.innerHTML = '';
    var division = numOne / numTwo;
    var result = document.createElement('p');
    if (numOne === 0) {
        result.textContent = 'No se pueden dividir 0 unidaes';
        resTwo.appendChild(result);
    }
    else if (numTwo === 0) {
        result.textContent = 'No se puede dividir por 0';
        resTwo.appendChild(result);
    }
    else {
        result.textContent = "El resultado de la divisi\u00F3n es: ".concat(division.toFixed(2));
        resTwo.appendChild(result);
    }
}
btnTwo.addEventListener('click', function (e) {
    e.preventDefault();
    var numOne = Number(inputOne.value);
    var numTwo = Number(inputTwo.value);
    dividir(numOne, numTwo);
});
//EJERCICIO 3
//Verificar si un número es positivo, negativo o cero
var inputNum = document.getElementById("num");
var resThree = document.getElementById("resThree");
var btnThree = document.getElementById("btnThree");
function isPositive(num) {
    resThree.innerHTML = '';
    var result = document.createElement('p');
    if (num > 0) {
        result.textContent = 'Usted ingreso un numero positivo';
        resThree.appendChild(result);
    }
    else if (num < 0) {
        result.textContent = 'Usted ingreso un numero negativo';
        resThree.appendChild(result);
    }
    else {
        result.textContent = 'Usted ingreso 0';
        resThree.appendChild(result);
    }
}
btnThree.addEventListener('click', function (e) {
    e.preventDefault();
    var num = Number(inputNum.value);
    isPositive(num);
});
////EJERCICIO 4
//Imprimir los números del 1 al 10 utilizando un bucle do-while
var resFour = document.getElementById("resFour");
var btnPrint = document.getElementById("print");
function printNum(num) {
    while (num <= 10) {
        var result = document.createElement('p');
        result.textContent = "".concat(num);
        resFour.appendChild(result);
        console.log(num);
        num++;
    }
}
btnPrint.addEventListener('click', function (e) {
    e.preventDefault();
    var num = 0;
    printNum(num);
});
////EJERCICIO 5
//Crear una clase llamada "Persona" con atributos nombre y edad, y un método para imprimir los datos
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () { return this.name; };
    ;
    Person.prototype.setName = function (name) { this.name = name; };
    ;
    Person.prototype.getAge = function () { return this.age; };
    ;
    Person.prototype.setAge = function (age) { this.age = age; };
    ;
    Person.prototype.getData = function () {
        var messagge = "Nombre: ".concat(this.name, ", Edad: ").concat(this.age);
        return messagge;
    };
    return Person;
}());
var inputName = document.getElementById("name");
var inputAge = document.getElementById("age");
var btnFive = document.getElementById("btnFive");
var resFive = document.getElementById("resFive");
btnFive.addEventListener('click', function (e) {
    e.preventDefault();
    var userName = inputName.value;
    var userAge = Number(inputAge.value);
    var user = new Person(userName, userAge);
    var result = document.createElement('p');
    result.textContent = user.getData();
    resFive.appendChild(result);
});
//EJERCICIO 6
//Calcular el promedio de tres números
var inputNumOne = document.getElementById("numOne");
var inputNumTwo = document.getElementById("numTwo");
var inputNumThree = document.getElementById("numThree");
var resSix = document.getElementById("resSix");
var btnSix = document.getElementById("btnSix");
function takeAverage(a, b, c) {
    resSix.innerHTML = "";
    var average = (a + b + c) / 3;
    var result = document.createElement('p');
    result.textContent = "El promedio de ".concat(a, ", ").concat(b, ", ").concat(c, " es igual a: ").concat(average.toFixed(4));
    resSix.appendChild(result);
}
btnSix.addEventListener('click', function (e) {
    e.preventDefault();
    var a = Number(inputNumOne.value);
    var b = Number(inputNumTwo.value);
    var c = Number(inputNumThree.value);
    takeAverage(a, b, c);
});
//EJERCICIO 7
//Convertir una cadena de texto en un número entero, manejar la excepción de formato incorrecto
var inputString = document.getElementById("text");
var btnSeven = document.getElementById("btnSeven");
var resSeven = document.getElementById("resSeven");
function convertToNumber(text) {
    resSeven.innerHTML = "";
    var textConvert = Number.parseInt(text);
    var result = document.createElement('p');
    if (isNaN(textConvert)) {
        result.textContent = "El caracter ingresado no es un numero.";
        resSeven.appendChild(result);
    }
    else {
        result.textContent = "La conversion a numero entero es igual a: ".concat(textConvert);
        resSeven.appendChild(result);
    }
}
btnSeven.addEventListener('click', function (e) {
    e.preventDefault();
    var text = inputString.value;
    convertToNumber(text);
});
//EJERCICIO 8
//Verificar si un año es bisiesto o no
var inputDate = document.getElementById("date");
var resEigth = document.getElementById("resEigth");
var btnEigth = document.getElementById("btnEigth");
function isBisiesto(date) {
    resEigth.innerHTML = "";
    var result = document.createElement('p');
    if (date % 400 === 0) {
        result.textContent = "El ".concat(date, " es bisiesto");
        resEigth.appendChild(result);
    }
    else if (date % 100 === 0) {
        result.textContent = "El ".concat(date, " NO es bisiesto");
        resEigth.appendChild(result);
    }
    else if (date % 4 === 0) {
        result.textContent = "El ".concat(date, " es bisiesto");
        resEigth.appendChild(result);
    }
    else {
        result.textContent = "El a\u00F1o ".concat(date, " NO es bisiesto");
        resEigth.appendChild(result);
    }
}
btnEigth.addEventListener('click', function (e) {
    e.preventDefault();
    var date = Number(inputDate.value);
    isBisiesto(date);
});
//EJERCICIO 9
//Leer números del usuario hasta que se ingrese un valor negativo, luego imprimir la suma de los números ingresado
var btnNine = document.getElementById("btnNine");
var resNine = document.getElementById("resNine");
function addNumbers() {
    resNine.innerHTML = "";
    var result = document.createElement('p');
    var sum = 0;
    var num = 0;
    while (num >= 0) {
        sum += num;
        num = Number(prompt("Ingrese un número o un valor negativo para finalizar:"));
    }
    ;
    result.textContent = "La suma total es: ".concat(sum);
    resNine.appendChild(result);
}
btnNine.addEventListener("click", addNumbers);
//EJERCICIO 10
//Crear una clase llamada "Rectangulo" con atributos base y altura, y un método para calcular el área.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.getBase = function () { return this.base; };
    ;
    Rectangulo.prototype.setBase = function (base) { this.base = base; };
    ;
    Rectangulo.prototype.getAltura = function () { return this.altura; };
    ;
    Rectangulo.prototype.setAltura = function (altura) { this.altura = altura; };
    ;
    Rectangulo.prototype.calcArea = function (base, altura) {
        var area = base * altura;
        return area;
    };
    return Rectangulo;
}());
var inputBaseTen = document.getElementById("baseTen");
var inputAlturaTen = document.getElementById("alturaTen");
var resTen = document.getElementById("resTen");
var btnTen = document.getElementById("btnTen");
btnTen.addEventListener('click', function (e) {
    e.preventDefault();
    var base = Number(inputBaseTen.value);
    var altura = Number(inputAlturaTen.value);
    var rectangulo = new Rectangulo(base, altura);
    var result = document.createElement('p');
    result.textContent = "El area del rect\u00E1ngulo es: ".concat(rectangulo.calcArea(base, altura));
    resTen.appendChild(result);
});
