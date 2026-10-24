<div align="center">

# 🌸 Programación III 🌸

<p align="center">
  <b>Desarrollando experiencias web modernas, interactivas y escalables ✨</b>
</p>

<!-- Badges pastel de dos tonos como en la imagen -->
<p align="center">
  <img src="https://img.shields.io/badge/MATERIA-PROGRAMACI%C3%93N_III-ffb6c1?style=for-the-badge&labelColor=555555&color=ffb6c1" alt="Materia" />
  <img src="https://img.shields.io/badge/ESTADO-EN_PROGRESO-fbcce7?style=for-the-badge&labelColor=555555&color=fbcce7" alt="Estado" />
  <img src="https://img.shields.io/badge/STACK-FULLSTACK_JS%2FTS-e8c5e5?style=for-the-badge&labelColor=555555&color=e8c5e5" alt="Stack" />
</p>

<!-- Iconos de tecnologías centrados -->
<p align="center">
  <a href="#-mini-conceptos-claves-explicados-fácil">
    <img src="https://skillicons.dev/icons?i=html,css,js,ts,nestjs,react,github&theme=dark" alt="Tech Stack" />
  </a>
</p>

---

### 🎀 Información General

👩‍💻 **Estudiante:** Karen Lizeth Inapanta Carrera  
📚 **Asignatura:** Programación III  
🎀 **Enfoque:** Desarrollo Web Fullstack (Frontend & Backend)  

---

</div>

## 📌 Tabla de Contenidos

* [🌸 Sobre este Repositorio](#-sobre-este-repositorio)
* [💡 Guía Rápida: ¿Cómo funciona una Web?](#-guía-rápida-cómo-funciona-una-web)
* [📚 Mini Conceptos Claves (Explicados Fácil)](#-mini-conceptos-claves-explicados-fácil)
  * [🌐 1. HTML5 (El Esqueleto)](#-1-html5-el-esqueleto)
  * [🎨 2. CSS3 (La Ropa y el Maquillaje)](#-2-css3-la-ropa-y-el-maquillaje)
  * [⚡ 3. JavaScript (El Cerebro)](#-3-javascript-el-cerebro)
  * [🛡️ 4. TypeScript (El Superpoder de JS)](#-4-typescript-el-superpoder-de-js)
  * [🦁 5. NestJS (El Servidor / Backend)](#-5-nestjs-el-servidor--backend)
  * [⚛️ 6. ReactJS (Las Pantallas / Frontend)](#-6-reactjs-las-pantallas--frontend)
* [🛠️ Requisitos e Instalación](#-requisitos-e-instalación)
* [📁 Estructura del Repositorio](#-estructura-del-repositorio)

---

## 🌸 Sobre este Repositorio

¡Bienvenid@ a mi repositorio de **Programación III**! 💕 En este espacio iré guardando todos mis ejercicios, talleres y proyectos del semestre. La idea es aprender paso a paso cómo se construyen las aplicaciones web actuales de forma limpia, bonita y profesional.

> 💖 *"Programar no es solo lógica, ¡también es el arte de crear cosas increíbles!"*

---

## 💡 Guía Rápida: ¿Cómo funciona una Web?

Para entender lo que veremos en la materia, piensa en una casa 🏠:

| Parte | En Desarrollo Web | ¿Qué hace? |
| :--- | :--- | :--- |
| **Frontend (Cliente)** | HTML, CSS, JavaScript y React | Es todo lo que la usuaria **ve y toca** en la pantalla. |
| **Backend (Servidor)** | NestJS y TypeScript | Es todo lo que ocurre **detrás de escenas** (base de datos, seguridad, guardar información). |
| **API** | Peticiones HTTP (GET, POST, etc.) | Es el **mensajero** que lleva datos entre el Frontend y el Backend. |

---

## 📚 Mini Conceptos Claves (Explicados Fácil)

### 🌐 1. HTML5 (El Esqueleto)
Es el lenguaje básico que sirve para poner el texto, las imágenes, los botones y los formularios en la pantalla. Sin HTML no hay nada que mostrar.

```html
<!-- 🌸 Un botón muy básico en HTML -->
<button class="mi-boton">Haz Clic Aquí 💕</button>
```

### 🎨 2. CSS3 (La Ropa y el Maquillaje)
Es lo que hace que la página se vea bonita. Sirve para cambiar los colores, los tamaños, las fuentes, poner fondos rosa o pastel, y acomodar los elementos para que se vean bien en celulares y computadoras.

```css
/* 🌸 Dándole estilo visual al botón */
.mi-boton {
  background-color: #ffb6c1;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
}
```

### ⚡ 3. JavaScript (El Cerebro)
Es el lenguaje que le da acción e interactividad a la página. Permite que al presionar un botón pasen cosas (abrir una ventana emergente, cargar fotos sin recargar la página, validar si escribiste bien tu correo, etc.).

```javascript
// 🌸 Una función súper simple en JS
function darBienvenida(nombre) {
  return "¡Hola " + nombre + "! Bienvenida a Programación III ✨";
}
```

### 🛡️ 4. TypeScript (El Superpoder de JS)
Es una versión mejorada de JavaScript. Su mayor ventaja es que te obliga a **definir qué tipo de dato** estás usando (texto, número, verdadero/falso). Esto evita que cometas errores mientras escribes código.

```typescript
// 🌸 En TS definimos si algo es un texto (string) o un número (number)
let estudiante: string = "Karen";
let notaFinal: number = 10;
```

### 🦁 5. NestJS (El Servidor / Backend)
Es una herramienta (framework) hecha con TypeScript que nos ayuda a crear el servidor de forma organizada. Aquí es donde se crean los **servicios y APIs** que reciben la información, la procesan y la guardan en una base de datos.

```typescript
// 🌸 Un controlador simple que responde mensajes en el servidor
@Controller('mensajes')
export class MensajesController {
  @Get()
  obtenerSaludo(): string {
    return '¡Hola desde el servidor con NestJS! 🦁💖';
  }
}
```

### ⚛️ 6. ReactJS (Las Pantallas / Frontend)
Es una librería super popular creada por Facebook/Meta que sirve para armar las interfaces visuales usando **bloques reutilizables llamados componentes** (como si fueran piezas de Lego 🧩).

```jsx
// 🌸 Un componente de React que cuenta clics
import { useState } from 'react';

export const ContadorDeAmor = () => {
  const [corazones, setCorazones] = useState(0);

  return (
    <button onClick={() => setCorazones(corazones + 1)}>
      Enviar Corazón 💖 {corazones}
    </button>
  );
};
```

---

## 🛠️ Requisitos e Instalación

Para ejecutar los proyectos de esta materia en tu computadora necesitas:

1. **Clonar este repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/programacion-iii.git
   ```

2. **Programas necesarios:**
   * 🟢 [Node.js](https://nodejs.org/) (Para poder ejecutar código de JS/TS)
   * 🐙 [Git](https://git-scm.com/) (Para subir tu código)
   * 💻 [VS Code](https://code.visualstudio.com/) (El editor de código recomendado)

---

## 📁 Estructura del Repositorio

```text
├── 01-html-css/         # 🌐 Prácticas de diseño y maquetación visual
├── 02-javascript/       # ⚡ Lógica, eventos e interactividad
├── 03-typescript/       # 🛡️ Tipado estático y buenas prácticas
├── 04-nestjs/           # 🦁 Creación de servidores, rutas y APIs
├── 05-reactjs/          # ⚛️ Pantallas interactivas y componentes
└── README.md            # 💖 Portada del repositorio
```

---

<div align="center">

*✨ ¡Escribiendo código bonito, entendible y funcional! ✨*

</div>