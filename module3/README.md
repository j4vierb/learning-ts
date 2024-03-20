# Modulo 3

## Objetivos

1. Explicar las razones para usar una interfaz en TypeScript
2. Declarar una interfaz y crear una instancia de esta
3. Extender una interfaz
4. Declarar una interfaz con tipos de matrices personalizados

## Interfaces

Se pueden usar interfaces para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos, además componer tipos de objetos con nombre existentes en otros nuevos.

```ts
interface Node {
    id: number;
    next: Node | null;
    printId(): string;
}
```

Se nota que la interfaz no implementa los métodos ni las propiedades. Esto ya que lo que hacen las interfaces es describir un tipo. 

```ts
let head: Node = {
    id: 1,
    next: null,
    printId(): string {
	return this.id;
    }
}

head.next = {
    id: 2,
    next: null,
    printId(): string {
        return this.id;
    }
}
```

Si una clase y una interfaz implementan la misma estructura, ambas se pueden utilizar indistintibamente.

Las interfaces no tienen ninguna representación en tiempo de ejecución; son únicamente una construcción en tiempo de compilación.

## Razones para usar una interfaz

1. Crear nombres abreviados para tipos de uso frecuente.
2. Controlar la coherencia en un conjunto de objetos porque cada objeto que implmeneta la interfaz funciona bajo las mismas definiciones de tipo.
3. Describirlas API de JavaScript existentes, y aclarar los parámetros de función y los tipos de valor devueltos.

## Alias de tipo

La interfaz `Node` también puede ser representada usando el alias de tipo:

```ts
type Node = {
    id: number;
    next: Node | null;
    printId(): string;
}
```

Mientras que un alias es la definición de un tipo de datos, las interfaces son una manera de describir formas de datos. 

Las propiedades de una interfaz pueden ser obligatorias, opcionales o de solo lectura.

## Extensión de una interfaz

Las interfaces se pueden extender entre sí. Esto le permite copiar los miembros de una interfaz en otra.

Se aplican las siguientes reglas al extender una interfaz:

1. Se deben implementar todas las propiedades obligatorias de todas las interfaces.
2. Dos interfaces comparten una propiedad si son exactamente la misma.
3. Si hay dos interfaces con un propiedad que comparten nombre, pero con diferentes tipos, se debe declarar una nueva propiedad de manera que sea un subtipo de ambas interfaces.

## Creación de tipos indexables

Se pueden usar interfaces que describan los tipos de matriz en los que se puede indexar.

Estos tipos tiene una **signatura de índice** que describe el tipo que se puede usar para indexar el objeto. Por ejemplo,

```ts
interface HeapNodeArray {
    [index: number]: Node;
}

let heap: HeapNodeArray;
heap = [Node(1), Node(2), Node(3)];
let head: Node = heap[0];
```

### Ejemplo: Describir una API de JavaScript mediante una interfaz

Revisar archivo `API.ts`.


