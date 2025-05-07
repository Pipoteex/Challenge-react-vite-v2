# React + TypeScript + Tailwind - Challenge

¡Bienvenido/a! Este challenge busca evaluar tus habilidades en **React**, **TypeScript** y **TailwindCSS**. Tendrás aproximadamente **30 minutos** para completarlo.

## Descripción

Crea una aplicación que muestre un **listado de productos** (puedes usar un arreglo estático o un archivo JSON simulado). La aplicación debe permitir:

1. **Buscar** productos por nombre.
2. **Filtrar** productos por categoría (por ejemplo: “Todos”, “Electrónica”, “Ropa”).
3. **Favoritar** (marcar/desmarcar) un producto y cambiar su apariencia (por ejemplo, mostrar un ícono o un color diferente).
4. **Eliminar** un producto del listado.

## Adicional:

-   Usar una API gratis de su preferencia para obtener los datos.
-   Agregar paginacion cada 20 elementos a la lista.

## Requisitos

-   **React + TypeScript**: Debes crear componentes y usar tipado TS.
-   **TailwindCSS**: Para los estilos (No excluyente).

## Puntos a Evaluar

1. **Estructura de Componentes**
    - Separación clara de responsabilidades (barra de búsqueda, filtro, listado, tarjeta de producto, etc.).
2. **Manejo de Estado**
    - Uso adecuado de Hooks (useState, etc.) para la búsqueda, filtro, favoritos y eliminación.
3. **Tipado**
    - Definir tipos/interfases y usarlos en props y estados.
4. **Uso de Tailwind**
    - Clases de utilidades, responsive, hover states.
5. **Buenas Prácticas**
    - Código limpio, legible y organizado.
6. **Rendimiento**
    - Uso de las herramientas de react para evitar renderizados innecesarios.

## Datos de ayuda:
const items = [
  { id: 1, name: "Samsung Smartphone", category: "Electronics", price: 120000, availability: true },
  { id: 2, name: "Basic White T-Shirt", category: "Clothing", price: 7500, availability: true },
  { id: 3, name: "All Products", category: "All", price: 0, availability: true },
  { id: 4, name: "Lenovo Laptop", category: "Electronics", price: 230000, availability: false },
  { id: 5, name: "Winter Jacket", category: "Clothing", price: 18500, availability: true },
  { id: 6, name: "Featured Product", category: "All", price: 9999, availability: false }
];
