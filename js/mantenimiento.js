// PTI Maintenance Form - JavaScript
// ==================================

// State
let siteType = 'rawland';
let activityStates = {};
let expandedId = null;

// Activities Data
const activities = {
    rawland: [
        {id:1,name:'Limpieza General del Sitio/Deshierbe',location:'Esquina 1'},
        {id:2,name:'Limpieza General del Sitio/Deshierbe',location:'Esquina 2'},
        {id:3,name:'Limpieza General del Sitio/Deshierbe',location:'Esquina 3'},
        {id:4,name:'Limpieza General del Sitio/Deshierbe',location:'Esquina 4'},
        {id:5,name:'Retiro de Maleza',location:'Sitio General'},
        {id:6,name:'Aplicación de Herbicida',location:'Sitio General'},
        {id:7,name:'Impermeabilización Losa',location:'Nicho Eléctrico'},
        {id:8,name:'Engrasado y/o Lubricado de Candado-Chapa',location:'Acceso'},
        {id:9,name:'Engrasado y/o Lubricado de Candado',location:'Nicho Eléctrico'},
        {id:10,name:'Limpieza General de Nicho',location:'Nicho Eléctrico'},
        {id:11,name:'Limpieza de Registros',location:'Eléctrico'},
        {id:12,name:'Aplicar Galvanox en Soldadura',location:'Pierna de Torre'},
        {id:13,name:'Aplicar Galvanox en Soldadura',location:'Base de Equipos'},
        {id:14,name:'Aplicar Galvanox en Soldadura',location:'Portacablera'},
        {id:15,name:'Aplicación de Galvanox Esquineros y Portón',location:'Malla Ciclónica'},
        {id:16,name:'Aplicar Grasa Penetrox',location:'Barra de Tierra'},
        {id:17,name:'Limpieza de Registros',location:'Sistema de Tierra'},
        {id:18,name:'Aplicar Pintura en Registros',location:'Sistema de Tierra'},
        {id:19,name:'Engrasado y/o Lubricado de Bisagras del Registro',location:'Sistema de Tierra'},
        {id:20,name:'Revisión de Controlador de Luces',location:'Balizamiento'},
        {id:21,name:'Revisar y/o Cambio de Focos Luces',location:'Balizamiento'},
        {id:22,name:'Revisar y/o Cambio de Fotocelda',location:'Balizamiento'},
        {id:23,name:'Fijar, Ajustar y/o Cambio de Foco',location:'Lámpara SubUrbana'},
        {id:24,name:'Fijar y/o Ajustar Incluye Bajante',location:'Pararrayo'},
        {id:25,name:'Prueba Sistema de Tierra',location:'Medición'},
        {id:26,name:'Ajuste, Apriete o Fijación de Escalerilla Ascenso',location:'Step Bolts'},
        {id:27,name:'Verificar y/o Ajuste',location:'Línea de Vida'},
        {id:28,name:'Verificar Voltaje en QO2 Luces',location:'Balizamiento'},
        {id:29,name:'Estado de Extintores',location:'Sitio General'},
        {id:30,name:'Estado de Extintores',location:'Nicho Eléctrico'}
    ],
    rooftop: [
        {id:1,name:'Limpieza General del Sitio',location:'Esquina 1'},
        {id:2,name:'Limpieza General del Sitio',location:'Esquina 2'},
        {id:3,name:'Limpieza General del Sitio',location:'Esquina 3'},
        {id:4,name:'Limpieza General del Sitio',location:'Esquina 4'},
        {id:5,name:'Impermeabilización Dados',location:'Dado 1-2'},
        {id:6,name:'Impermeabilización Dados',location:'Dado 3-4'},
        {id:7,name:'Impermeabilización Base de Equipos',location:'Equipo 1-2-3'},
        {id:8,name:'Impermeabilización Dado',location:'Dado Torre'},
        {id:9,name:'Engrasado y/o Lubricado de Candado/Chapa',location:'Acceso'},
        {id:10,name:'Engrasado y/o Lubricado de Candado',location:'Nicho Eléctrico'},
        {id:11,name:'Limpieza General de Nicho',location:'Nicho Eléctrico'},
        {id:12,name:'Limpieza de Registros',location:'Eléctrico'},
        {id:13,name:'Aplicar Galvanox en Soldadura',location:'Pierna de Torre'},
        {id:14,name:'Aplicar Galvanox en Soldadura',location:'Base de Equipos'},
        {id:15,name:'Aplicar Galvanox en Soldadura',location:'Portacablera'},
        {id:16,name:'Aplicación de Galvanox Esquineros y Portón',location:'Malla Ciclónica'},
        {id:17,name:'Aplicar Grasa Penetrox',location:'Barra de Tierra'},
        {id:18,name:'Limpieza de Registros',location:'Sistema de Tierra'},
        {id:19,name:'Aplicar Pintura en Registros',location:'Sistema de Tierra'},
        {id:20,name:'Engrasado y/o Lubricado de Bisagras',location:'Sistema de Tierra'},
        {id:21,name:'Revisión de Controlador de Luces',location:'Balizamiento'},
        {id:22,name:'Revisar y/o Cambio de Focos Luces',location:'Balizamiento'},
        {id:23,name:'Revisar y/o Cambio de Fotocelda',location:'Balizamiento'},
        {id:24,name:'Fijar, Ajustar y/o Cambio de Foco',location:'Lámpara SubUrbana'},
        {id:25,name:'Fijar y/o Ajustar Incluye Bajante',location:'Pararrayo'},
        {id:26,name:'Prueba Sistema de Tierra',location:'Medición'},
        {id:27,name:'Ajuste de Escalerilla Ascenso',location:'Step Bolts'},
        {id:28,name:'Verificar y/o Ajuste',location:'Línea de Vida'},
        {id:29,name:'Verificar Voltaje en QO2 Luces',location:'Balizamiento'}
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    document.getElementById('fecha').value = now.toISOString().split('T')[0];
    document.getElementById('hora').value = now.toTimeString().slice(0,5);
    renderActivities();
});

// Toast
function showToast(msg, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Site Type Selection
function selectSiteType(type) {
    siteType = type;
    activityStates = {};
    expandedId = null;
    document.querySelectorAll('.site-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    renderActivities();
    updateProgress();
    showToast(`Sitio ${type === 'rawland' ? 'Rawland' : 'Rooftop'} seleccionado`, 'success');
}

// Render Activities
function renderActivities() {
    const list = document.getElementById('activity-list');
    const acts = activities[siteType];
    document.getElementById('activity-count').textContent = acts.length;
    
    list.innerHTML = acts.map((act, idx) => {
        const key = `${siteType}-${act.id}`;
        const state = activityStates[key] || {};
        const isComplete = state.status === 'complete' && state.photoBefore && state.photoAfter;
        const isNA = state.status === 'na';
        const isOpen = expandedId === act.id;
        
        return `
        <div class="activity-item ${isComplete ? 'complete' : ''} ${isNA ? 'na' : ''}">
            <div class="activity-header" onclick="toggleActivity(${act.id})">
                <div class="activity-number ${isComplete ? 'complete' : ''} ${isNA ? 'na' : ''}">${isComplete ? '✓' : idx + 1}</div>
                <div class="activity-info">
                    <div class="activity-name">${act.name}</div>
                    <div class="activity-location">${act.location}</div>
                </div>
                <div class="activity-badges">
                    ${state.photoBefore ? '<div class="photo-badge before"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>' : ''}
                    ${state.photoAfter ? '<div class="photo-badge after"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>' : ''}
                </div>
                <svg class="activity-arrow ${isOpen ? 'open' : ''}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="activity-expanded ${isOpen ? 'open' : ''}">
                <div class="status-btn-group">
                    <button type="button" class="status-btn ${state.status === 'complete' ? 'active-complete' : ''}" onclick="event.stopPropagation(); setStatus(${act.id}, 'complete')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Completado
                    </button>
                    <button type="button" class="status-btn ${state.status === 'na' ? 'active-na' : ''}" onclick="event.stopPropagation(); setStatus(${act.id}, 'na')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        No Aplica
                    </button>
                </div>
                
                <div class="${state.status === 'complete' ? '' : 'hidden'}" id="photos-${act.id}">
                    <div class="photo-grid">
                        <div class="photo-upload">
                            <div class="photo-label"><span class="photo-required"></span>Foto ANTES</div>
                            <div class="photo-box ${state.photoBefore ? 'filled' : ''}" onclick="event.stopPropagation(); ${state.photoBefore ? `removePhoto(${act.id}, 'before')` : `document.getElementById('photo-before-${act.id}').click()`}">
                                ${state.photoBefore ? 
                                    `<img src="${state.photoBefore}" class="photo-preview"><div class="photo-overlay"><span class="photo-overlay-text">Eliminar</span></div>` :
                                    `<svg class="photo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg><div class="photo-text">Tomar foto</div><div class="photo-hint">antes del trabajo</div>`
                                }
                            </div>
                            <input type="file" id="photo-before-${act.id}" accept="image/*" capture="environment" class="hidden" onchange="handlePhoto(event, ${act.id}, 'before')">
                        </div>
                        <div class="photo-upload">
                            <div class="photo-label"><span class="photo-required"></span>Foto DESPUÉS</div>
                            <div class="photo-box ${state.photoAfter ? 'filled' : ''}" onclick="event.stopPropagation(); ${state.photoAfter ? `removePhoto(${act.id}, 'after')` : `document.getElementById('photo-after-${act.id}').click()`}">
                                ${state.photoAfter ? 
                                    `<img src="${state.photoAfter}" class="photo-preview"><div class="photo-overlay"><span class="photo-overlay-text">Eliminar</span></div>` :
                                    `<svg class="photo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg><div class="photo-text">Tomar foto</div><div class="photo-hint">después del trabajo</div>`
                                }
                            </div>
                            <input type="file" id="photo-after-${act.id}" accept="image/*" capture="environment" class="hidden" onchange="handlePhoto(event, ${act.id}, 'after')">
                        </div>
                    </div>
                    <div style="margin-top:12px">
                        <label class="label">Observaciones</label>
                        <textarea class="textarea" placeholder="Describa el trabajo realizado..." onclick="event.stopPropagation()" onchange="updateObs(${act.id}, this.value)">${state.obs || ''}</textarea>
                    </div>
                </div>
                
                <div class="${state.status === 'na' ? '' : 'hidden'}" id="reason-${act.id}">
                    <label class="label">Motivo por el cual no aplica</label>
                    <input type="text" class="input" placeholder="Ej: No hay malla ciclónica en este sitio..." onclick="event.stopPropagation()" value="${state.reason || ''}" onchange="updateReason(${act.id}, this.value)">
                </div>
            </div>
        </div>`;
    }).join('');
}

// Toggle Activity
function toggleActivity(id) {
    expandedId = expandedId === id ? null : id;
    renderActivities();
}

// Set Status
function setStatus(id, status) {
    const key = `${siteType}-${id}`;
    activityStates[key] = { ...activityStates[key], status };
    renderActivities();
    updateProgress();
}

// Handle Photo
function handlePhoto(e, id, type) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
        showToast('Imagen muy grande. Máximo 5MB.', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
        const key = `${siteType}-${id}`;
        const field = type === 'before' ? 'photoBefore' : 'photoAfter';
        activityStates[key] = { ...activityStates[key], [field]: ev.target.result };
        renderActivities();
        updateProgress();
        showToast(`Foto ${type === 'before' ? 'ANTES' : 'DESPUÉS'} agregada`, 'success');
    };
    reader.readAsDataURL(file);
}

// Remove Photo
function removePhoto(id, type) {
    const key = `${siteType}-${id}`;
    const field = type === 'before' ? 'photoBefore' : 'photoAfter';
    activityStates[key] = { ...activityStates[key], [field]: null };
    renderActivities();
    updateProgress();
}

// Update Observations
function updateObs(id, value) {
    const key = `${siteType}-${id}`;
    activityStates[key] = { ...activityStates[key], obs: value };
}

// Update Reason
function updateReason(id, value) {
    const key = `${siteType}-${id}`;
    activityStates[key] = { ...activityStates[key], reason: value };
}

// Update Progress
function updateProgress() {
    const acts = activities[siteType];
    let complete = 0, na = 0;
    
    acts.forEach(a => {
        const state = activityStates[`${siteType}-${a.id}`] || {};
        if (state.status === 'complete' && state.photoBefore && state.photoAfter) complete++;
        if (state.status === 'na') na++;
    });
    
    const total = acts.length;
    const pending = total - complete - na;
    const percent = Math.round(((complete + na) / total) * 100);
    
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('stat-complete').textContent = complete;
    document.getElementById('stat-na').textContent = na;
    document.getElementById('stat-pending').textContent = pending;
    document.getElementById('summary-complete').textContent = complete;
    document.getElementById('summary-na').textContent = na;
    document.getElementById('summary-pending').textContent = pending;
    
    const btn = document.getElementById('submit-btn');
    const text = document.getElementById('submit-text');
    if (percent === 100) {
        btn.disabled = false;
        text.textContent = 'Generar Reporte';
    } else {
        btn.disabled = true;
        text.textContent = `Complete todas las actividades (${percent}%)`;
    }
}

// Logo Upload
function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            document.getElementById('logo-upload').classList.add('hidden');
            const preview = document.getElementById('logo-preview');
            preview.src = ev.target.result;
            preview.classList.remove('hidden');
            showToast('Logo agregado', 'success');
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    document.getElementById('logo-upload').classList.remove('hidden');
    document.getElementById('logo-preview').classList.add('hidden');
    document.getElementById('logo-input').value = '';
}

// GPS Location
function getLocation() {
    const btn = document.getElementById('gps-btn');
    const input = document.getElementById('coordenadas');
    btn.classList.add('loading');
    input.value = 'Obteniendo ubicación...';
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                input.value = pos.coords.latitude.toFixed(6) + ', ' + pos.coords.longitude.toFixed(6);
                input.classList.add('success');
                btn.classList.remove('loading');
                showToast('Ubicación GPS capturada', 'success');
            },
            (err) => {
                input.value = '';
                btn.classList.remove('loading');
                showToast('No se pudo obtener ubicación', 'error');
            },
            { enableHighAccuracy: true, timeout: 15000 }
        );
    } else {
        btn.classList.remove('loading');
        showToast('GPS no soportado', 'error');
    }
}

// Generate Report
function generateReport() {
    const data = {
        siteType,
        proveedor: document.getElementById('proveedor').value,
        idSitio: document.getElementById('id-sitio').value,
        nombreSitio: document.getElementById('nombre-sitio').value,
        tipoVisita: document.getElementById('tipo-visita').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        coordenadas: document.getElementById('coordenadas').value,
        direccion: document.getElementById('direccion').value,
        activities: activityStates
    };
    
    console.log('Report Data:', data);
    showToast('¡Reporte generado exitosamente!', 'success');
    
    // Here you could send to server or download as JSON
    // downloadReport(data);
}

function downloadReport(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte-${data.idSitio || 'pti'}-${data.fecha}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
