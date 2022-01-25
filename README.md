Módulo 3 - React

# Ejercicio de evaluación final

**URL del ejercicio: [Harry Potter](#)**

Desarrollar una página web con React con un listado de personajes de Harry Potter, que permita filtrar por el nombre del personaje y la casa a la que pertenece.

## 0. Preparación

- [x] Clonar repositorio
- [x] Crear proyecto con React Starter Kit
- [x] Bocetar esquema

## 1. Listado de personajes

- [x] Utilizar servicio de [hp-api.herokuapp.com](http://hp-api.herokuapp.com/) que devuelve información de los personajes de Harry Potter filtrados por casa a la que pertenecen.
- [x] Pintar información de los personajes: foto, nombre y especie.
- [x] Mostrar imagen por defecto si no existe.

## 2. Filtrado de personajes

- [x] Buscar personajes por nombre completo (en mayúsculas o minúsculas).
- [x] Escuchar y controlar `input`.

## 3. Filtrado por casa

- [ ] Buscar personajes por casa (casa por defecto: Gryffindor).
- [ ] Escuchar y controlar `select`.

## 4. Componentes del listado de personajes

- [ ] Componente para el filtro del nombre (`Filters`).
- [ ] Componente para el listado de personajes (`CharacterList`).
- [ ] Componente para cada personaje del listado (`CharacterCard`).
- [ ] Componente para el detalle de cada personaje (`CharacterDetail`).

## 5. Detalle del personaje

- [ ] Información de cada personaje a pantalla completa: foto, nombre, casa, si está vivo o muerto, género, especie y nombres alternativos.
- [ ] Usar rutas con `react-router-dom` (ocultar componente `CcharacterList` y mostrar componente `CharacterCard`).

## 6. Calidad

- [ ] Usar etiqueta `<form />`
- [ ] Evitar comportamiento por defecto del formulario.
- [ ] Mostrar mensaje de aviso si no se obtienen resultados de búsqueda.
- [ ] Filtrar independientemente de que se escriba en mayúsculas o minúsculas.
- [ ] Mantener los resultados filtrados al volver del detalle del personaje.

## 7. Bonus: mejoras visuales

- [ ] Mostrar icono de cada casa en el detalle del personaje.
- [ ] Maquetar con algún sistema de `grid`.
- [ ] Adaptar a dispositivos pequeños.

## 8. Bonus: URL compartible

- [ ] Ver el detalle del personaje a través de su URL.
- [ ] Mostrar mensaje de error si la URL no existe.

## 9. Bonus: ordenación

- [ ] Ordenar listado de persponajes alfabéticamente.

## 10. Bonus: más filtros

- [ ] Filtrar, por ejemplo, por género.

## 11. Bonus: botón reset

- [ ] Volver al listado inicial.

---

# Installation and setup

Requirements: you need `node` and `npm` installed on your computer.

### Clone the repo

```
git clone URL
```

### Install the dependencies

```
npm install
```

### Run the app

```
npm start
```

Go to [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Deploy for production environment

```
npm run build
```

---

# My React Starter Kit ✨

- NPM dependencies: `node-sass` `node-uuid` `react-router-dom@5.3.0` `prop-types`
- Services: API and Local Storage
- Publish in GitHub Pages: `npm run githubpages`

---

_Happy coding!_
