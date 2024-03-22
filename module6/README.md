# Modulo 6

## Objetivos

1. Identificar los casos de uso de los genéricos.
2. Definir una función genérica.
3. Declarar una interfaz genérica.
4. Declarar una clase genérica.
5. Implementar restricciones genéricas.

## Tipos de datos genericos

Se crean funciones genéricas cuando el código sea una función o una clase que:

- Funciona con varios tipos de datos.
- Use ese tipo de datos en varios lugares.

```ts
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}
```

Al hacer uso de este código obtenemos que se puede agregar a items lo que queramos, evitando así que se revisen los tipos.

```ts
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
```

Los genéricos definen una o varias variables de tipo entre corchetes angulares para identificar el tipo o los tipos que se van a pasar al componente. Esto da lugar al siguiente uso:

```ts
let list: number[] = getArray<number>([1, 2, 3]);
```

En este caso, al utilizar la función con el parametro `number` se espera que se ingresen valores numericos. Produce un error si se pasan otro tipo de valores.

Si se omite la variable de tipo al llamar a la función, TypeScript deducirá el tipo, con datos simples, con datos complejos deduce el tipo `any`.

## Uso de varias variables de tipo

Por ejemplo,

```ts
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value;
}

let num = identity<number, string>(100, "hello");
let str = identity<string, string>("100", "hello");
let bol = identity<boolean, string>(true, "hello");
```

Al utilizar variables de tipo para crear componentes genéricos, solo se pueden usar las propiedades y los métodos de los objetos que están disponibles para cada tipo. Si se agrega una instrucción no valida para todos los tipos definidos TypeScript informa del problema en tiempo de compilación.

## Restricción generica

Al querer restringir los tipos de un parámetro de una función. Por ejemplo, se puede definir un tipo con los tipos validos.

```ts
type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value + value;
    console.log(message);
    return result;
}
```

También se puede restringir un tipo a la propiedad de otro objeto. Por ejemplo, al definir `function getPets<T, K extends keyof T>(pet: T, key: K)` se indica que `K` debe ser una llave de `T`.

Si se quiere comprobar el tipo de una clase, se puede usar la restricción de tipos `instanceof`.

## Ejercicios

Es posible definir una interfaz genérica, una interfaz genérica como un tipo de función, una interfaz genérica como un tipo de clase y definir una clase genérica.

Revisar modulo de microsoft sobre tipos genericos.

## Implementación de genéricos con tipos y clases personalizados

```ts
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}

class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}

class Truck extends Car {
    make = 'Truck';
    doors = 2
}

function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);
```

 Se puede definir una clase genérica de la siguiente manera:

```ts
class Class<W> {
    private _property: W;
}
```

