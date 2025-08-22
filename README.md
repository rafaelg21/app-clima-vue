
# App Clima - Vue.js

Este proyecto es una aplicación de consulta del clima desarrollada durante el curso de Vue.js. Permite buscar el clima actual de cualquier ciudad y país usando la API de OpenWeatherMap. La aplicación muestra información relevante como temperatura, condiciones meteorológicas y ubicación, todo en una interfaz moderna y responsiva.

## Funcionalidades Aprendidas y Aplicadas
- **Componentización:** Separación de la lógica en componentes reutilizables (Formulario, Resultado, Spinner, etc).
- **Props y Eventos:** Comunicación entre componentes padre e hijo usando props y emisión de eventos personalizados.
- **Reactividad:** Uso de la reactividad de Vue para actualizar la interfaz en tiempo real al buscar y mostrar el clima.
- **Ciclo de Vida:** Manejo de hooks del ciclo de vida para inicializar datos y reaccionar a cambios.
- **Directivas y Bindings:** Uso de directivas como `v-for`, `v-if`, `v-model` y bindings dinámicos para clases y atributos.
- **Consumo de APIs:** Integración con la API de OpenWeatherMap usando Axios para obtener datos en tiempo real.
- **Gestión de Errores:** Validación de formularios y manejo de errores de la API con mensajes claros para el usuario.
- **Estilos Modernos:** Uso de CSS moderno, imágenes de fondo y personalización visual para una mejor experiencia de usuario.
- **Buenas Prácticas:** Organización del código, estructura de carpetas profesional y uso de variables de entorno para la API Key.

## Demo en Producción
Puedes ver la aplicación funcionando en:  
[https://app-clima-qnr16o2mo-rafaelg21s-projects.vercel.app/](https://app-clima-qnr16o2mo-rafaelg21s-projects.vercel.app/)

## Instalación y Uso
1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Crea un archivo `.env.local` con tu API Key de OpenWeatherMap:
	```
	VITE_API_KEY=tu_api_key_aqui
	```
4. Inicia el servidor de desarrollo con `npm run dev`.

## Sobre el Autor
**Rafael Uzcategui**  
Email: rafaelg21@gmail.com  
Teléfono: +58 4145599527

Desarrollador Fullstack especializado en PHP, Laravel, Vue.js, Tailwind CSS y Bootstrap 5, JQuery. Bases de Datos, MySql, PostgreeSql. Apasionado por el aprendizaje y la creación de soluciones web modernas, tanto en frontend como en backend. Este proyecto forma parte de mi formación y práctica en Vue.js y buenas prácticas de desarrollo frontend.

---
¡Gracias por visitar el repositorio! Si tienes sugerencias o encuentras algún error, no dudes en abrir un issue o contactarme.
