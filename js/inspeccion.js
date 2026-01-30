// PTI Inspection Form - JavaScript
// =================================

// State
let itemStates = {};
let photos = {};

// Categories Data
const sitioCategories = [
    {
        id: 'acceso',
        title: '1.- Acceso',
        items: [
            { id: '1.1', name: 'Camino de Acceso' },
            { id: '1.2', name: 'Limpieza Exterior' },
            { id: '1.3', name: 'Candado y Acceso Principal' },
            { id: '1.4', name: 'Escaleras de Acceso (Inmueble y Azotea)' },
            { id: '1.5', name: 'Limpieza General Interior' }
        ]
    },
    {
        id: 'seguridad',
        title: '2.- Seguridad',
        items: [
            { id: '2.1', name: 'Condición de la Malla Ciclónica' },
            { id: '2.2', name: 'Condición de Cimentación de Malla Ciclónica' },
            { id: '2.3', name: 'Condición de Muros' },
            { id: '2.4', name: 'Condición del Alambre de Púas y Concertina' },
            { id: '2.5', name: 'Puerta del Sitio con Candado y/o Llave' },
            { id: '2.6', name: 'Condición de la Puerta Principal' },
            { id: '2.7', name: 'Cámaras o Sistema de Monitoreo' }
        ]
    },
    {
        id: 'tierras',
        title: '3.- Sistema de Tierras',
        items: [
            { id: '3.1', name: 'Condición del Cable' },
            { id: '3.2', name: 'Condición de las Soldaduras' },
            { id: '3.3', name: 'Prueba de Resistividad' },
            { id: '3.4', name: 'Condición de Registros / Cámaras de Inspección' },
            { id: '3.5', name: 'Conexiones para Aterrizar la Torre' },
            { id: '3.6', name: 'Conexiones para Aterrizar la Malla y/o Muros' }
        ]
    },
    {
        id: 'electrico',
        title: '4.- Sistema Eléctrico',
        items: [
            { id: '4.1', name: 'Estado del Nicho Eléctrico' },
            { id: '4.2', name: 'Candado de Seguridad y Protección' },
            { id: '4.3', name: 'Registros Eléctricos (Condiciones)' },
            { id: '4.4', name: 'Postes (Condición)' },
            { id: '4.5', name: 'Transformador o Subestación' },
            { id: '4.6', name: 'Tierras del Sistema Eléctrico' }
        ]
    },
    {
        id: 'general',
        title: '5.- Sitio en General',
        items: [
            { id: '5.1', name: 'Condición y Nivel de Grava' },
            { id: '5.2', name: 'Malla Antivegetal (Antipasto)' },
            { id: '5.3', name: 'Protección de Nicho' },
            { id: '5.4', name: 'Drenaje del Sitio Libre y Funcionando' },
            { id: '5.5', name: 'Verificar Pintura Exterior e Interior' },
            { id: '5.6', name: 'Grietas o Asentamiento en Base de Torre' },
            { id: '5.7', name: 'Grietas o Asentamiento en Dados' },
            { id: '5.8', name: 'Grietas o Asentamiento en Base de Equipos' }
        ]
    }
];

const torreCategories = [
    {
        id: 'miembros',
        title: '6.- Miembros',
        items: [
            { id: '6.1', name: 'Miembros de la Torre Dañados' },
            { id: '6.2', name: 'Miembros Flojos' },
            { id: '6.3', name: 'Miembros Faltantes' },
            { id: '6.4', name: 'Escalera de Ascenso' },
            { id: '6.5', name: 'Tornillos en Bridas Completos' },
            { id: '6.6', name: 'Tornillos en Bridas de Abajo hacia Arriba' },
            { id: '6.7', name: 'Tornillos en Celosías Completos' },
            { id: '6.8', name: 'Condición de Soldadura Entre Pierna y Brida' },
            { id: '6.9', name: 'Condición del Cable de Vida' },
            { id: '6.10', name: 'Condición de Step Bolt y Equipo de Seguridad' },
            { id: '6.11', name: 'Dren de las Piernas de la Torre' },
            { id: '6.12', name: 'Grout (Que Cuente y Esté en Buen Estado)' },
            { id: '6.13', name: 'Verificar Estado del Camuflaje' },
            { id: '6.14', name: 'Verticalidad' }
        ]
    },
    {
        id: 'acabado',
        title: '7.- Acabado',
        items: [
            { id: '7.1', name: 'Condición de la Pintura' },
            { id: '7.2', name: 'Condición del Galvanizado' },
            { id: '7.3', name: 'Oxidación' }
        ]
    },
    {
        id: 'luces',
        title: '8.- Luces de la Torre',
        items: [
            { id: '8.1', name: 'Sistema de Balizamiento Instalado (Tipo)' },
            { id: '8.2', name: 'Sistema de Luz Funcionando Correctamente' },
            { id: '8.3', name: 'Tubería, Cajas y Sujetadores' },
            { id: '8.4', name: 'Condición del Cable' },
            { id: '8.5', name: 'Condición de la Fotocelda' },
            { id: '8.6', name: 'Condición del Controlador' },
            { id: '8.7', name: 'Condición de las Luces' }
        ]
    },
    {
        id: 'tierrasTorre',
        title: '9.- Sistema de Tierras en la Torre',
        items: [
            { id: '9.1', name: 'Tapas y Registros' },
            { id: '9.2', name: 'Conexiones Exotérmicas' },
            { id: '9.3', name: 'Condición del Cable' },
            { id: '9.4', name: 'Sujeción, Condición y Tipo' },
            { id: '9.5', name: 'Aterrizaje de las Piernas de la Torre' },
            { id: '9.6', name: 'Aterrizaje de las Retenidas' },
            { id: '9.7', name: 'Aterrizaje de Malla Ciclónica' },
            { id: '9.8', name: 'Aterrizaje de Mastil-Monopolo' },
            { id: '9.9', name: 'Aterrizaje de Portacablera' },
            { id: '9.10', name: 'Oxidación' },
            { id: '9.11', name: 'Pararrayo e Cable (Condición)' },
            { id: '9.12', name: 'Condición del Sistema de Tierra en General' }
        ]
    },
    {
        id: 'retenidas',
        title: '10.- Retenidas',
        items: [
            { id: '10.1', name: 'Condición de los Dados de Concreto' },
            { id: '10.2', name: 'Condición de las Anclas' },
            { id: '10.3', name: 'Condición de Uniones Entre Retenidas y Anclas' },
            { id: '10.4', name: 'Retenidas Libres de Oxidación' },
            { id: '10.5', name: 'Tensión de las Retenidas (Visual)' },
            { id: '10.6', name: 'Condición de Tornillos y Sujetadores' }
        ]
    },
    {
        id: 'cimentacion',
        title: '11.- Cimentación de Torre',
        items: [
            { id: '11.1', name: 'Erosión' },
            { id: '11.2', name: 'Condición de Acabado en Dados' }
        ]
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    document.getElementById('fecha-inicio').value = now.toISOString().split('T')[0];
    document.getElementById('hora-entrada').value = now.toTimeString().slice(0, 5);
    
    renderCategories();
    updateProgress();
});

// Toast
function showToast(msg, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Section Switching
function switchSection(section) {
    document.querySelectorAll('.section-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === section);
    });
    document.querySelectorAll('.insp-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById('section-' + section).classList.add('active');
}

// Render Categories
function renderCategories() {
    document.getElementById('sitio-categories').innerHTML = sitioCategories.map(cat => renderCategory(cat)).join('');
    document.getElementById('torre-categories').innerHTML = torreCategories.map(cat => renderCategory(cat)).join('');
}

function renderCategory(category) {
    return `
        <div class="insp-category">
            <div class="insp-category-header">
                <div class="insp-category-title">${category.title}</div>
                <span class="insp-category-count">${category.items.length} items</span>
            </div>
            ${category.items.map(item => renderItem(item)).join('')}
        </div>
    `;
}

function renderItem(item) {
    const state = itemStates[item.id] || {};
    return `
        <div class="insp-item">
            <div class="insp-item-header">
                <div class="insp-item-number">${item.id}</div>
                <div class="insp-item-name">${item.name}</div>
            </div>
            <div class="insp-item-controls">
                <div class="status-group">
                    <div class="status-opt bueno ${state.status === 'bueno' ? 'active' : ''}" onclick="setStatus('${item.id}', 'bueno')">Bueno</div>
                    <div class="status-opt regular ${state.status === 'regular' ? 'active' : ''}" onclick="setStatus('${item.id}', 'regular')">Regular</div>
                    <div class="status-opt malo ${state.status === 'malo' ? 'active' : ''}" onclick="setStatus('${item.id}', 'malo')">Malo</div>
                    <div class="status-opt na ${state.status === 'na' ? 'active' : ''}" onclick="setStatus('${item.id}', 'na')">N/A</div>
                </div>
                <div class="obs-input">
                    <input type="text" placeholder="Observaciones..." value="${state.obs || ''}" onchange="setObs('${item.id}', this.value)">
                </div>
            </div>
        </div>
    `;
}

// Set Status
function setStatus(itemId, status) {
    itemStates[itemId] = { ...itemStates[itemId], status };
    renderCategories();
    updateProgress();
}

// Set Observation
function setObs(itemId, value) {
    itemStates[itemId] = { ...itemStates[itemId], obs: value };
}

// Update Progress
function updateProgress() {
    const allItems = [...sitioCategories, ...torreCategories].reduce((acc, cat) => acc.concat(cat.items), []);
    const total = allItems.length;
    const completed = Object.keys(itemStates).filter(k => itemStates[k].status).length;
    const percent = Math.round((completed / total) * 100);
    
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('stat-complete').textContent = completed;
    document.getElementById('stat-pending').textContent = total - completed;
}

// GPS Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                document.getElementById('latitud').value = pos.coords.latitude.toFixed(6);
                document.getElementById('longitud').value = pos.coords.longitude.toFixed(6);
                showToast('Ubicación GPS capturada', 'success');
            },
            () => showToast('No se pudo obtener ubicación', 'error'),
            { enableHighAccuracy: true, timeout: 15000 }
        );
    }
}

// Photo Upload
function handlePhoto(e, type) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (ev) => {
        photos[type] = ev.target.result;
        const box = document.getElementById('photo-' + type + '-box');
        box.classList.add('filled');
        box.innerHTML = `<img src="${ev.target.result}" class="photo-preview"><div class="photo-overlay"><span class="photo-overlay-text">Cambiar foto</span></div>`;
        showToast('Foto agregada', 'success');
    };
    reader.readAsDataURL(file);
}

// Generate Report
function generateReport() {
    const data = {
        proveedor: document.getElementById('proveedor').value,
        nombreSitio: document.getElementById('nombre-sitio').value,
        numeroSitio: document.getElementById('numero-sitio').value,
        tipoSitio: document.getElementById('tipo-sitio').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
        fechaInicio: document.getElementById('fecha-inicio').value,
        horaEntrada: document.getElementById('hora-entrada').value,
        tipoTorre: document.getElementById('tipo-torre').value,
        alturaTorre: document.getElementById('altura-torre').value,
        direccion: document.getElementById('direccion').value,
        items: itemStates,
        photos
    };
    
    console.log('Inspection Report:', data);
    showToast('¡Reporte de inspección generado!', 'success');
}
