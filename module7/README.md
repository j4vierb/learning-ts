# Modulo 7

## Objetivos

- Organizar el código mediante módulos
- Importar una biblioteca de tipos externa

## Organización del código con módulos

Los modulos proporcionan una forma de organizar y clasificar el código, lo que permite agrupar el código relacionado. 

```ts
/* greeting.ts */
export function returnGreeting(greeting: string) {
    console.log("The message is: " + greeting);
}

/* main.ts */
import { returnGreeting } from "greeting";
```

## Compilación de módulos

Los módulos se importan entre sí mediante un cargador de módulos. En tiempo de ejecución, el cargador de módulos busca y ejecuta todas las dependencias de un módulo antes de ejecutarlo. 

## Acceso a bibliotecas de tipos externas

En JavaScript se usan bibliotecas externas en el código mediante la instrucción `requires`. En TypeScript, se obtiene acceso a ellas mediante la intrucción `import`.

