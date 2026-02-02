# EVA 01 - Companion App

Tu compañera de acompañamiento emocional. Registro diario de ánimo y mensajes de calma.

## 🌟 Características

- **Registro de ánimo diario**: Guarda cómo te sientes cada día con emojis del 😔 al 😄
- **Mensajes contextuales**: EVA te saluda según la hora del día y responde a tu estado de ánimo
- **Historial de registros**: Visualiza tus últimos 14 días de check-ins
- **Estadísticas**: Ve tu racha, promedio y total de registros
- **PWA**: Instálala como app en tu móvil o escritorio
- **Offline-first**: Todos tus datos se guardan localmente (localStorage)

## 🛠️ Correcciones realizadas

El agente anterior creó la base de la aplicación, pero faltaban algunos detalles:

### ✅ Problemas corregidos:
1. **Iconos faltantes** - Se generó un icono personalizado (orbe púrpura) y se agregó en `assets/icons/`
2. **Service Worker path** - Se cambió de `/sw.js` a `./sw.js` para funcionar en desarrollo
3. **Manifest start_url** - Se cambió de `/` a `./` para mejor compatibilidad

## 🚀 Cómo ejecutar

### Opción 1: Servidor local (Python)
```powershell
python -m http.server 8080
```
Luego abre: http://localhost:8080

### Opción 2: Servidor local (Node.js)
```powershell
npx -y serve .
```

### Opción 3: Live Server (VS Code)
Usa la extensión "Live Server" en VS Code

## 📱 Instalar como PWA

1. Abre la app en Chrome/Edge
2. Click en el ícono de instalación en la barra de direcciones
3. ¡Listo! Ahora tienes EVA como app independiente

## 🎨 Personalización

- **Estilos**: Edita `css/styles.css`
- **Mensajes de EVA**: Edita `js/eva.js`
- **Lógica de la app**: Edita `js/app.js`
- **Almacenamiento**: Edita `js/storage.js`

## 🔐 Privacidad

Todos tus datos se guardan **localmente en tu navegador**. Nada se envía a servidores externos.

## 📂 Estructura del proyecto

```
app eva 01/
├── assets/
│   └── icons/          # Iconos de la PWA
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   ├── app.js          # Controlador principal
│   ├── eva.js          # Mensajes y personalidad
│   └── storage.js      # Gestión de datos
├── index.html          # HTML principal
├── manifest.json       # Manifest de la PWA
└── sw.js               # Service Worker
```

## 💜 Uso

1. **Primera vez**: Ingresa tu nombre
2. **Selecciona tu ánimo**: Elige del 😔 al 😄
3. **Agrega una nota** (opcional): Comparte algo si quieres
4. **Guarda**: Click en "Guardar mi día"
5. **Historial**: Ve tus registros pasados en la pestaña de historial

---

Hecho con 💜 para acompañarte en tu día a día.
