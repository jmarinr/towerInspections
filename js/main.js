/**
 * PTI Maintenance System - Shared Utilities
 * ==========================================
 * Common functions used across all forms
 */

// ============================================
// Toast Notification System
// ============================================
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.getElementById('toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    
    // Add icon based on type
    const icons = {
        success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
        error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };
    
    toast.innerHTML = (icons[type] || icons.info) + '<span>' + message + '</span>';
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add(type, 'show');
    });

    // Auto-hide after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ============================================
// GPS Location Functions
// ============================================
function getGPSLocation(callback, errorCallback) {
    if (!navigator.geolocation) {
        if (errorCallback) errorCallback('GPS no soportado en este dispositivo');
        return;
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coords = {
                latitude: position.coords.latitude.toFixed(6),
                longitude: position.coords.longitude.toFixed(6),
                accuracy: position.coords.accuracy
            };
            if (callback) callback(coords);
        },
        (error) => {
            let message = 'No se pudo obtener la ubicación';
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message = 'Permiso de ubicación denegado';
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = 'Ubicación no disponible';
                    break;
                case error.TIMEOUT:
                    message = 'Tiempo de espera agotado';
                    break;
            }
            if (errorCallback) errorCallback(message);
        },
        options
    );
}

// ============================================
// Form Validation Functions
// ============================================
function validateInput(input) {
    const value = input.value.trim();
    const isRequired = input.hasAttribute('data-required') || input.hasAttribute('required');
    
    if (isRequired && value === '') {
        input.classList.add('error');
        input.classList.remove('success');
        return false;
    } else if (value !== '') {
        input.classList.remove('error');
        input.classList.add('success');
        return true;
    } else {
        input.classList.remove('error', 'success');
        return true;
    }
}

function validateForm(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return true;

    let isValid = true;
    const requiredInputs = form.querySelectorAll('[data-required="true"], [required]');
    
    requiredInputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function setupValidationListeners(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.querySelectorAll('.input, .select, .textarea').forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateInput(input);
            }
        });
    });
}

// ============================================
// Photo Upload Functions
// ============================================
function handlePhotoUpload(fileInput, previewCallback, errorCallback) {
    const file = fileInput.files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        if (errorCallback) errorCallback('Por favor seleccione una imagen válida');
        fileInput.value = '';
        return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        if (errorCallback) errorCallback('La imagen es muy grande. Máximo 5MB.');
        fileInput.value = '';
        return;
    }

    // Read and return base64
    const reader = new FileReader();
    reader.onload = (e) => {
        if (previewCallback) previewCallback(e.target.result, file.name);
    };
    reader.onerror = () => {
        if (errorCallback) errorCallback('Error al leer la imagen');
    };
    reader.readAsDataURL(file);
}

// ============================================
// Date/Time Utilities
// ============================================
function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

function getCurrentTime() {
    return new Date().toTimeString().slice(0, 5);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatDateTime(dateString, timeString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T' + (timeString || '00:00'));
    return date.toLocaleString('es-CR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ============================================
// Local Storage Functions
// ============================================
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return null;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('Error removing from localStorage:', e);
        return false;
    }
}

// ============================================
// Report Generation Utilities
// ============================================
function generateReportId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `RPT-${timestamp}-${random}`.toUpperCase();
}

function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'report.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// Utility Helpers
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Initialize Common Elements
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Set default date/time for date and time inputs
    document.querySelectorAll('input[type="date"]').forEach(input => {
        if (!input.value && input.hasAttribute('data-default-today')) {
            input.value = getCurrentDate();
        }
    });

    document.querySelectorAll('input[type="time"]').forEach(input => {
        if (!input.value && input.hasAttribute('data-default-now')) {
            input.value = getCurrentTime();
        }
    });
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showToast,
        getGPSLocation,
        validateInput,
        validateForm,
        setupValidationListeners,
        handlePhotoUpload,
        getCurrentDate,
        getCurrentTime,
        formatDate,
        formatDateTime,
        saveToLocalStorage,
        loadFromLocalStorage,
        removeFromLocalStorage,
        generateReportId,
        downloadJSON,
        debounce,
        escapeHtml
    };
}
