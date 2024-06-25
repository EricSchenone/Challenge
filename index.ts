//EJERCICIO 1
//Calcular el área de un triángulo dado la base y la altura

const inputBase = document.getElementById("base") as HTMLInputElement;
const inputAltura = document.getElementById("altura") as HTMLInputElement;
const res = document.getElementById("res") as HTMLElement;
const btn = document.getElementById("button") as HTMLButtonElement;


function calcularArea(base: number, altura: number) {
    res.innerHTML = '';
    const result = document.createElement('p');
    if (base > 0 && altura > 0) {
        const area: number = (base * altura) / 2;

        result.textContent = `El area del triangulo es: ${area}`;
        res.appendChild(result);
    } else {
        result.textContent = 'Debe ingresar valores superiores a 0';
        res.appendChild(result);
    }

}

btn?.addEventListener('click', (e) => {
    e.preventDefault()
    const base: number = Number(inputBase.value);
    const altura: number = Number(inputAltura.value);

    calcularArea(base, altura);
});

//EJERCICIO 2
//Dividir dos números e imprimir el resultado, manejar la excepción de división por cero

const inputOne = document.getElementById("one") as HTMLInputElement;
const inputTwo = document.getElementById("two") as HTMLInputElement;
const resTwo = document.getElementById("resTwo") as HTMLElement;
const btnTwo = document.getElementById("btn") as HTMLButtonElement;

function dividir(numOne: number, numTwo: number) {
    resTwo.innerHTML = '';
    const division = numOne / numTwo
    const result = document.createElement('p');

    if (numOne === 0) {
        result.textContent = 'No se pueden dividir 0 unidaes';
        resTwo.appendChild(result)
    } else if (numTwo === 0) {
        result.textContent = 'No se puede dividir por 0';
        resTwo.appendChild(result);
    } else {
        result.textContent = `El resultado de la división es: ${division.toFixed(2)}`;
        resTwo.appendChild(result);
    }

}

btnTwo.addEventListener('click', (e) => {
    e.preventDefault()

    const numOne: number = Number(inputOne.value);
    const numTwo: number = Number(inputTwo.value);

    dividir(numOne, numTwo)

})

//EJERCICIO 3
//Verificar si un número es positivo, negativo o cero

const inputNum = document.getElementById("num") as HTMLInputElement;
const resThree = document.getElementById("resThree") as HTMLElement;
const btnThree = document.getElementById("btnThree") as HTMLButtonElement;

function isPositive(num: number) {
    resThree.innerHTML = '';
    const result = document.createElement('p');
    if (num > 0) {
        result.textContent = 'Usted ingreso un numero positivo';
        resThree.appendChild(result);
    } else if (num < 0) {
        result.textContent = 'Usted ingreso un numero negativo';
        resThree.appendChild(result);
    } else {
        result.textContent = 'Usted ingreso 0';
        resThree.appendChild(result);
    }
}

btnThree.addEventListener('click', (e) => {
    e.preventDefault();

    const num: number = Number(inputNum.value);
    isPositive(num);
})

////EJERCICIO 4
//Imprimir los números del 1 al 10 utilizando un bucle do-while

const resFour = document.getElementById("resFour") as HTMLElement;
const btnPrint = document.getElementById("print") as HTMLButtonElement;

function printNum(num: number) {

    while (num <= 10) {
        const result = document.createElement('p');
        result.textContent = `${num}`;
        resFour.appendChild(result)
        console.log(num);
        num++;
    }
}

btnPrint.addEventListener('click', (e) => {
    e.preventDefault();

    const num: number = 0;
    printNum(num);
})

////EJERCICIO 5
//Crear una clase llamada "Persona" con atributos nombre y edad, y un método para imprimir los datos


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string { return this.name };
    setName(name: string) { this.name = name };

    getAge(): number { return this.age };
    setAge(age: number) { this.age = age };

    getData(): string {
        const messagge: string = `Nombre: ${this.name}, Edad: ${this.age}`;
        return messagge;
    }
}

const inputName = document.getElementById("name") as HTMLInputElement;
const inputAge = document.getElementById("age") as HTMLInputElement;
const btnFive = document.getElementById("btnFive") as HTMLButtonElement;
const resFive = document.getElementById("resFive") as HTMLElement;

btnFive.addEventListener('click', (e) => {
    e.preventDefault();
    const userName: string = inputName.value;
    const userAge: number = Number(inputAge.value);

    const user: Person = new Person(userName, userAge);

    const result = document.createElement('p');
    result.textContent = user.getData();
    resFive.appendChild(result);
})

//EJERCICIO 6
//Calcular el promedio de tres números

const inputNumOne = document.getElementById("numOne") as HTMLInputElement;
const inputNumTwo = document.getElementById("numTwo") as HTMLInputElement;
const inputNumThree = document.getElementById("numThree") as HTMLInputElement;
const resSix = document.getElementById("resSix") as HTMLElement;
const btnSix = document.getElementById("btnSix") as HTMLButtonElement;

function takeAverage(a: number, b: number, c: number) {
    resSix.innerHTML = "";
    const average: number = (a + b + c) / 3;
    const result = document.createElement('p');

    result.textContent = `El promedio de ${a}, ${b}, ${c} es igual a: ${average.toFixed(4)}`;
    resSix.appendChild(result);

}

btnSix.addEventListener('click', (e) => {
    e.preventDefault()

    const a: number = Number(inputNumOne.value);
    const b: number = Number(inputNumTwo.value);
    const c: number = Number(inputNumThree.value);
    takeAverage(a, b, c);

})

//EJERCICIO 7
//Convertir una cadena de texto en un número entero, manejar la excepción de formato incorrecto

const inputString = document.getElementById("text") as HTMLInputElement;
const btnSeven = document.getElementById("btnSeven") as HTMLButtonElement;
const resSeven = document.getElementById("resSeven") as HTMLElement;

function convertToNumber(text: string) {
    resSeven.innerHTML = "";
    const textConvert: number = Number.parseInt(text);
    const result = document.createElement('p');

    if (isNaN(textConvert)) {
        result.textContent = `El caracter ingresado no es un numero.`
        resSeven.appendChild(result);
    } else {
        result.textContent = `La conversion a numero entero es igual a: ${textConvert}`
        resSeven.appendChild(result);
    }
}

btnSeven.addEventListener('click', (e) => {
    e.preventDefault();
    const text: string = inputString.value;
    convertToNumber(text)
})

//EJERCICIO 8
//Verificar si un año es bisiesto o no
const inputDate = document.getElementById("date") as HTMLInputElement;
const resEigth = document.getElementById("resEigth") as HTMLElement;
const btnEigth = document.getElementById("btnEigth") as HTMLButtonElement;

function isBisiesto(date: number) {
    resEigth.innerHTML = "";
    const result = document.createElement('p');

    if (date % 400 === 0) {
        result.textContent = `El ${date} es bisiesto`;
        resEigth.appendChild(result);
    } else if (date % 100 === 0) {
        result.textContent = `El ${date} NO es bisiesto`;
        resEigth.appendChild(result);
    } else if (date % 4 === 0) {
        result.textContent = `El ${date} es bisiesto`;
        resEigth.appendChild(result);
    } else {
        result.textContent = `El año ${date} NO es bisiesto`;
        resEigth.appendChild(result);
    }
}

btnEigth.addEventListener('click', (e) => {
    e.preventDefault();

    const date: number = Number(inputDate.value);
    isBisiesto(date);
})

//EJERCICIO 9
//Leer números del usuario hasta que se ingrese un valor negativo, luego imprimir la suma de los números ingresado

const btnNine = document.getElementById("btnNine") as HTMLButtonElement;
const resNine = document.getElementById("resNine") as HTMLElement;

function addNumbers() {
    resNine.innerHTML = "";
    const result = document.createElement('p')
    let sum: number = 0;
    let num: number = 0;

    while (num >= 0) {
        sum += num;
        num = Number(prompt("Ingrese un número o un valor negativo para finalizar:"));
    };

    result.textContent = `La suma total es: ${sum}`;
    resNine.appendChild(result);
}

btnNine.addEventListener("click", addNumbers);

//EJERCICIO 10
//Crear una clase llamada "Rectangulo" con atributos base y altura, y un método para calcular el área.

class Rectangulo {
    private base: number;
    private altura:number;

    constructor( base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    getBase(): number { return this.base };
    setBase( base : number) { this.base = base };

    getAltura(): number { return this.altura };
    setAltura( altura: number ) { this.altura = altura };

    calcArea( base: number, altura: number): number {
        const area: number = base * altura;
        return area;
    }
}

const inputBaseTen = document.getElementById("baseTen") as HTMLInputElement;
const inputAlturaTen = document.getElementById("alturaTen") as HTMLInputElement;
const resTen = document.getElementById("resTen") as HTMLElement;
const btnTen = document.getElementById("btnTen") as HTMLButtonElement;


btnTen.addEventListener('click', (e) => {
    e.preventDefault();
    const base: number = Number(inputBaseTen.value);
    const altura: number = Number(inputAlturaTen.value);
    const rectangulo : Rectangulo = new Rectangulo(base, altura);

    const result = document.createElement('p');
    result.textContent = `El area del rectángulo es: ${rectangulo.calcArea(base, altura)}`;
    resTen.appendChild(result);
    
})

