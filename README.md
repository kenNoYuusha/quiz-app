# Javascript Quiz

Este proyecto es una aplicación de preguntas aleatorias sobre javascript construida en **React** con estilos en **Material UI**. Permite iniciar el juego moverte entre las preguntas y puedes reiniciar siempre que desees.

## Características

- **Iniciar juego**: Al iniciar se te iran mostrando 10 preguntas 1 por 1 aleatoriamente.
- **Elegir respuesta**: Elige tu respuesta y se te marcara si es correcta o incorrecta.
- **Boton de reset**: Para poder empezar de nuevo y mostrar 10 preguntas distintas.
- **Interfaz simple y moderna**: Estilos con **Material UI** para una experiencia de usuario amigable.
- **Persistenica**: Tu progreso sera persistido en localstorage

## Tecnologías usadas

- **React**: Para construir la interfaz de usuario.
- **Zustand**: Para manejar el estado global.
- **Material UI**: Para diseñar de manera rápida y eficiente.
  
## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/kenNoYuusha/quiz-app.git
   cd quiz-app
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta la app**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

## Estructura del proyecto

- **src/components**: Contiene los componentes reutilizables como `Question.tsx`.
- **src/App.tsx**: Punto principal de la aplicación.

## Mejoras a futuro

- Agregar soporte para hacer preguntas sobre diferentes tecnologias.

## Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o pull request.

## Licencia

[MIT](./LICENSE)
