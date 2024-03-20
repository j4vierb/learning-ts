# Modulo 4

## Objetivos

1. Explicar las ventajas del uso de tipos en funciones
2. Escribir funciones que tengan parámetros necesarios, opcionales, predeterminados y de REST
3. Definir los tipos de funciones mediante el uso de interfaces o alias de tipos

## Creación de funciones en TypeScript

En JavaScript no se especifican los tipos de datos para los parámetros, no se realizan comprobación de tipos y no se comprueban el número de argumentos. 

```ts
function add(x: number, y: number): number {
    return x + y;
}

let addNumber = function (x: number, y: number): number {
    return x + y;
}

let addTwo = (x: number, y: number): number => x + y;

console.log(addNumber(1, 2) + add(3, 4) + addTwo(5, 6));
```

Los parametros obligatorios son como se mostraron en anteriormente. Por otro lado, los parámetros opcionales se definen por ejemplo `function addNumbers(x: number, y?: number): number`. Los parámetros predeterminados se pueden usar así `add(x: number, y = 0)`. 

## Parámetros de REST

Si se quiere trabajar con varios parámetros como un grupo se pueden usar los parámetros rest. Se tratan como un número sin límite de parámetros opcionales.

```ts
let addAllNumber = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number = firstNumber;
    for(let i = 0; i < restOfNumbers.length; i++) {
        if(isNaN(restOfNumbers[i])) { continue; }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}
```

## Parámetros de objeto desconstruido

```ts
interface Message {
    text: string;
    sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(text + sender);
}
```

