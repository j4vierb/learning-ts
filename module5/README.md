# Modulo 5

## Objetivos 

1. Explicar cómo puede usar las clases de TypeScript para describir la forma de los objetos.
2. Declarar una clase mediante TypeScript.
3. Crear una instancia de una clase con TypeScript.
4. Aplicar modificadores de acceso a una clase.
5. Definir las propiedades estáticas en una clase.
6. Declarar una clase que amplía otra clase.
7. Declarar una interfaz para asegurar la forma de la clase.
8. Determinar cuándo utilizar una interfaz o una clase para definir la estructura de un objeto.

## Introducción

Las clases permiten expresar patrones comunes orientados a objetos de una manera estándar. Una clase encapsula datos para el objeto. Los datos y el comportamiento se incluyen en la clase, pero los detalles de ambos pueden quedar ocultos para la persona que trabaja con el objeto en el código.

## Componentes

Las propiedades son los datos (o atributos) del objeto. El constructor es una función especial que se usa para crear e inicializar objetos basados en la clase. Los descriptores de acceso son un tipo de función que se usa para aplicar get o set al valor de las propiedades. Los métodos son funciones que definen los comportamientos o acciones que puede realizar el objeto. 

## Modificadores de acceso

`public` si no especifica un modificador de acceso, el valor predeterminado es público. Si se modifica algun componente con la palabra clave `private`, no se puede tener acceso a él desde fuera de la clase contenedora. Se puede tener acceso a los componentes declarados como `protected` dentro de las clases derivadas.

## Propiedades estáticas

Estas propiedades y métodos de las clases definidos se vuelven parte de la instancia, esto es que son propiedad de la instancia. Todas las instancias de una clase comparten las propiedades y los métodos **estáticos**.

Cuando se quiere acceder a una propiedad estática se hace uso de `ClassName.propertyName` en lugar de `this`.

## Herencia

Se puede tener por ejemplo una clase Carro, como base. Luego, se puede especificar aún más ya que hay carros electricos que extienden de la clase base. Motivos para usar herencia:

1. Reusabilidad del código
2. Se puede utilizar una base para derivar cualquier número de subclases en una jerarquía
3. Se pueden hacer cambios en el código en partes especificas

## Invalidación de un método

Cuando se sobreescribe un método de la clase base se dice que el método de esta es **invalidada**.

## Interfaces para hacer contratos de código

Como bien se sabe, las interfaces se pueden utilizar para hacer contratos de código, por tanto, se pueden describir las propiedades requeridas dentro de un objeto y sus tipos. 

