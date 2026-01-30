# PTI Maintenance System

Sistema de gestión de mantenimiento preventivo para Phoenix Tower International.

## 📁 Estructura

```
pti-maintenance-system/
├── index.html          # Menú principal
├── mantenimiento.html  # Formulario de mantenimiento preventivo
├── inspeccion.html     # Checklist de inspección
├── css/
│   └── styles.css      # Estilos compartidos
├── js/
│   ├── mantenimiento.js # Lógica de mantenimiento
│   └── inspeccion.js    # Lógica de inspección
└── README.md
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear repositorio
1. Ve a [github.com](https://github.com) → **New repository**
2. Nombre: `pti-maintenance-system`
3. Selecciona **Public**
4. Click **Create repository**

### Paso 2: Subir archivos
1. Descomprime el ZIP
2. En el repositorio, click **"uploading an existing file"**
3. Arrastra TODOS los archivos y carpetas
4. Click **Commit changes**

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**

### Paso 4: Acceder
Tu sitio estará en:
```
https://TU_USUARIO.github.io/pti-maintenance-system/
```

## 📱 Características

### Mantenimiento Preventivo
- ✅ 30 actividades Rawland / 29 Rooftop
- 📸 Fotos antes/después por actividad
- 📍 Captura GPS automática
- 📊 Barra de progreso en tiempo real

### Inspección de Sitio
- ✅ +50 items de inspección
- 🔄 Estados: Bueno/Regular/Malo/N/A
- 📝 Observaciones por item
- 📷 Fotografías del sitio

## 🛠️ Desarrollo Local

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

Abrir: `http://localhost:8000`

---
© 2025 Phoenix Tower International
