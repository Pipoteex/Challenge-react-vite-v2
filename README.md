# React + TypeScript + Tailwind - Challenge

¡Bienvenido/a! Este challenge busca evaluar tus habilidades en **React**, **TypeScript** y **TailwindCSS**. Tendrás aproximadamente **30 minutos** para completarlo.

# CHALLENGE 2

Este challenge evalúa tus habilidades para trabajar con modales, formularios controlados, manejo de estado y listas dinámicas usando **React**, **TypeScript** y **TailwindCSS**.

## Objetivo

Crear una aplicación donde el usuario pueda:

- Abrir un modal con un formulario.
- Agregar elementos a una lista.
- Eliminar elementos de dicha lista.

## Funcionalidades Requeridas

### Agregar elemento

- Un botón principal llamado **"Agregar elemento"** que abre un modal.

### Modal con Formulario

El modal debe contener un formulario con los siguientes campos:

- **Nombre**: campo de texto (`<input type="text" />`)
- **Categoría**: select con las siguientes opciones:
  - `"Opción A"`
  - `"Opción B"`

### Al enviar el formulario

- El modal se **cierra automáticamente**.
- El nuevo objeto se **agrega a una lista** visible.

### Lista de elementos

Cada elemento debe:

- Mostrar su **nombre** y **categoría**.
- Tener un **botón para eliminarlo individualmente**.

## Estructura de Datos

```ts
interface Item {
  id: number;
  name: string;
  category: string;
}

