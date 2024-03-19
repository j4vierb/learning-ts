# Modulo 2

## Objetivos de aprendizaje

1. Explicar las ventajas de declarar variables tipadas en TypeScript
2. Declarar variables mediante tipos primitivos
3. Declarar variables mediante tipos de objeto
4. Declarar variables mediante tipos de unión e intersección

## Tipos de datos

Existen cinco categorias para tipos de datos en TypeScript. Tipos primitivos, los tipos de objeto, los tipos de parámetros, el tipo `any` y los tipos `null` y `undefined`. 

### Tipos primitivos

Entre estos estan el tipo booleano, los tipos numéricos y el `BigInteger` y el tipo de cadena. Adicionalmente, estan los tipos `void`, `null` y `undefined`.

### Enumeraciones

Las enumeraciones son un conjunto de constantes relacionadas. Un elemento `enum` es un nombre simbólico para un conjunto de valores. Las enumeraciones se tratan como tipos de datos. Por ejemplo,

```ts
enum NodeType {
    Leaf,
    Root,
    Node,
}
```

Siempre que un procedimiento acepte un conjunto limitado de variables, se debe considerar la posibilidad de usar una enumeración.

Adicionalmente, los valores de un `enum` comienzan indexados desde 0. Por ejemplo, el `enum` de arriba `NodeType` inicia `Leaf` en 0, `Root` en 1 y `Node` en 2. Si se quiere que los valores de un `enum` sean distintos se puede inicializar `Leaf` con otro valor, por ejemplo, 3. De este modo, Root y Node tendrán valores de 4 y 5 respectivamente. 

### Tipo `any`

Es un tipo que puede representar cualquier valor de JavaScript sin restricciones. Permite llamar una propiedad que no existe para el tipo. Llamar a la variable como una función y aplicarle métodos para tipos cadena.

### Tipo `unknown`

Este tipo es parecido al tipo `any` ya que se le puede asignar cualquier valor. Sin embargo, no se puede acceder a las propiedades, tampoco se pueden llamar ni construir.

## Aserción de tipos

En dado caso que se necesite tratar una variable con otro tipo se puede utilizar aserción de tipos. Se pueden utilizar los siguientes formatos:

```ts
(random as string).toUpperCase();

(<string> random).toUpperCase();
```

## Tipos de unión

Describe un valor que puede ser uno de entre varios tipos.

```ts
let parent: number | string;

parent = "without-parent";
parent = 0;
```

## Tipos de intersección

Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propieades de los tipos existentes. 

```ts
interface Employee {
    employeeId: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
    employeeId: 0,
    age: 32,
    stockPlan: true
};
```

## Tipos literales

Es un subtipo más concreto de un tipo colectivo. Por ejemplo, `"hello world"` es un elemento de `string`, pero un elemento `string` no es `"Hello world"` dentro del sistema de tipos.

```ts
type testResult = "pass" | "fail" | "incomplete";
```

### Restricción literal

El proceso de pasar de un número infinito de casos posibles a uno finito más pequeño se denomina restricción.

## Colecciones y tuplas

Las colecciones se pueden definir lo siguiente:

```ts
// colecciones
let arraylist: number[] = [1, 2, 3];
let arraylist: Array<number> = [1, 2, 3];

// tupla
let node: [Node, Node] = [left, right];
```

