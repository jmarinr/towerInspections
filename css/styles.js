/* =============================================
   PTI Maintenance System - Shared Styles
   ============================================= */

/* CSS Variables */
:root {
    /* Primary Colors */
    --primary: #0A2540;
    --primary-light: #1a3a5c;
    --primary-dark: #061827;
    
    /* Accent Colors */
    --accent: #FF6B35;
    --accent-light: #ff8a5c;
    --accent-dark: #e55520;
    
    /* Semantic Colors */
    --success: #10B981;
    --success-light: #D1FAE5;
    --success-dark: #059669;
    
    --warning: #F59E0B;
    --warning-light: #FEF3C7;
    --warning-dark: #D97706;
    
    --danger: #EF4444;
    --danger-light: #FEE2E2;
    --danger-dark: #DC2626;
    
    --info: #3B82F6;
    --info-light: #DBEAFE;
    --info-dark: #2563EB;
    
    /* Gray Scale */
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #4B5563;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;
    
    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    
    /* Transitions */
    --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset & Base */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
    min-height: 100vh;
    color: var(--gray-900);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* =============================================
   Form Header Component
   ============================================= */
.form-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-lg);
}

.form-header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.form-header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.back-btn {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.back-btn:hover {
    background: rgba(255,255,255,0.2);
    transform: translateX(-2px);
}

.form-header-logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.form-header-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.form-header-title {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.3px;
}

.form-header-subtitle {
    font-size: 12px;
    opacity: 0.8;
    font-weight: 500;
}

.form-header-actions {
    display: flex;
    gap: 10px;
}

.header-btn {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.header-btn:hover {
    background: rgba(255,255,255,0.2);
}

/* =============================================
   Progress Bar Component
   ============================================= */
.progress-section {
    padding: 16px 20px;
    background: rgba(0,0,0,0.2);
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.progress-label {
    font-size: 13px;
    font-weight: 500;
    opacity: 0.9;
}

.progress-value {
    font-size: 22px;
    font-weight: 800;
}

.progress-bar {
    height: 10px;
    background: rgba(255,255,255,0.15);
    border-radius: 5px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--success) 0%, #34D399 100%);
    border-radius: 5px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-stats {
    display: flex;
    gap: 20px;
    margin-top: 12px;
    flex-wrap: wrap;
}

.progress-stat {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
}

.stat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.stat-dot.complete { background: var(--success); }
.stat-dot.na { background: var(--gray-400); }
.stat-dot.pending { background: var(--warning); }

/* =============================================
   Main Content Area
   ============================================= */
.form-main {
    max-width: 900px;
    margin: 0 auto;
    padding: 24px 20px 40px;
}

/* =============================================
   Card Component
   ============================================= */
.card {
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    margin-bottom: 20px;
    border: 1px solid var(--gray-100);
    overflow: hidden;
}

.card-header {
    padding: 18px 22px;
    background: linear-gradient(to right, var(--gray-50), white);
    border-bottom: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--gray-800);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.card-title-icon {
    width: 24px;
    height: 24px;
    color: var(--accent);
}

.card-body {
    padding: 22px;
}

/* =============================================
   Info Banner Component
   ============================================= */
.info-banner {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 18px;
    background: linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 100%);
    border: 1px solid rgba(59,130,246,0.15);
    border-radius: var(--radius-lg);
    margin-bottom: 20px;
}

.info-banner-icon {
    width: 22px;
    height: 22px;
    color: var(--info);
    flex-shrink: 0;
    margin-top: 1px;
}

.info-banner-content {
    flex: 1;
}

.info-banner-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 4px;
}

.info-banner-text {
    font-size: 13px;
    color: var(--gray-600);
    line-height: 1.6;
}

/* =============================================
   Form Elements
   ============================================= */
.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

@media (max-width: 640px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}

.form-group {
    position: relative;
}

.form-group-full {
    grid-column: 1 / -1;
}

.label {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 8px;
}

.required {
    color: var(--danger);
    margin-left: 4px;
    font-weight: 700;
}

.tooltip-trigger {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--gray-200);
    border: none;
    color: var(--gray-500);
    font-size: 11px;
    font-weight: 700;
    cursor: help;
    margin-left: 8px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.tooltip-trigger:hover {
    background: var(--accent);
    color: white;
}

.input, .select, .textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-md);
    background: white;
    color: var(--gray-900);
    outline: none;
    transition: var(--transition);
    font-family: inherit;
}

.input::placeholder {
    color: var(--gray-400);
    font-weight: 400;
}

.input:hover, .select:hover {
    border-color: var(--gray-300);
}

.input:focus, .select:focus, .textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
}

.input.error {
    border-color: var(--danger);
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
    animation: shake 0.4s ease;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
}

.input.success {
    border-color: var(--success);
}

.input-hint {
    font-size: 12px;
    color: var(--gray-500);
    margin-top: 6px;
}

.input-error {
    font-size: 12px;
    color: var(--danger);
    margin-top: 6px;
    display: none;
    font-weight: 500;
}

.input.error ~ .input-error {
    display: flex;
    align-items: center;
    gap: 6px;
}

.textarea {
    resize: vertical;
    min-height: 80px;
}

.select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 40px;
}

.input-group {
    display: flex;
    gap: 10px;
}

.input-group .input {
    flex: 1;
}

.icon-btn {
    padding: 12px 16px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-md);
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    color: var(--gray-500);
}

.icon-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(255,107,53,0.05);
}

.icon-btn.loading {
    pointer-events: none;
}

.icon-btn.loading svg {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* =============================================
   Photo Upload Component
   ============================================= */
.photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.photo-upload {
    position: relative;
}

.photo-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.photo-required {
    width: 6px;
    height: 6px;
    background: var(--danger);
    border-radius: 50%;
}

.photo-box {
    border: 2px dashed var(--gray-300);
    border-radius: var(--radius-lg);
    padding: 28px 16px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    background: white;
    position: relative;
    overflow: hidden;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.photo-box:hover {
    border-color: var(--accent);
    background: rgba(255,107,53,0.02);
}

.photo-box.filled {
    border: 2px solid var(--success);
    padding: 0;
}

.photo-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    color: var(--gray-400);
}

.photo-text {
    font-size: 14px;
    color: var(--gray-700);
    font-weight: 600;
}

.photo-hint {
    font-size: 12px;
    color: var(--gray-400);
    margin-top: 4px;
}

.photo-preview {
    width: 100%;
    height: 140px;
    object-fit: cover;
    display: block;
}

.photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.photo-box.filled:hover .photo-overlay {
    opacity: 1;
}

.photo-overlay-text {
    color: white;
    font-size: 13px;
    font-weight: 600;
}

/* =============================================
   Summary Component
   ============================================= */
.summary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
}

.summary-item {
    text-align: center;
    padding: 22px 16px;
    border-radius: var(--radius-lg);
    position: relative;
    overflow: hidden;
}

.summary-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
}

.summary-item.complete {
    background: linear-gradient(to bottom, var(--success-light), white);
}

.summary-item.complete::before {
    background: linear-gradient(90deg, var(--success), #34D399);
}

.summary-item.na {
    background: linear-gradient(to bottom, var(--gray-100), white);
}

.summary-item.na::before {
    background: var(--gray-400);
}

.summary-item.pending {
    background: linear-gradient(to bottom, var(--warning-light), white);
}

.summary-item.pending::before {
    background: linear-gradient(90deg, var(--warning), #FBBF24);
}

.summary-number {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
}

.summary-number.complete { color: var(--success); }
.summary-number.na { color: var(--gray-500); }
.summary-number.pending { color: var(--warning); }

.summary-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 10px;
}

.summary-label.complete { color: var(--success); }
.summary-label.na { color: var(--gray-500); }
.summary-label.pending { color: var(--warning); }

/* =============================================
   Submit Button
   ============================================= */
.submit-btn {
    width: 100%;
    padding: 18px 28px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    border: none;
    border-radius: var(--radius-lg);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    box-shadow: 0 8px 24px rgba(10, 37, 64, 0.3);
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(10, 37, 64, 0.4);
}

.submit-btn:active:not(:disabled) {
    transform: translateY(0);
}

.submit-btn:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    box-shadow: none;
}

/* =============================================
   Footer Note
   ============================================= */
.footer-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 20px;
    background: var(--warning-light);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: var(--radius-md);
    font-size: 13px;
    color: #92400E;
    margin-top: 20px;
    text-align: center;
}

/* =============================================
   Toast Notification
   ============================================= */
.toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--gray-900);
    color: white;
    padding: 16px 24px;
    border-radius: var(--radius-lg);
    font-size: 14px;
    font-weight: 600;
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 90%;
}

.toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
}

.toast.success { background: var(--success); }
.toast.error { background: var(--danger); }
.toast.warning { background: var(--warning); color: var(--gray-900); }
.toast.info { background: var(--info); }

/* =============================================
   Utility Classes
   ============================================= */
.hidden {
    display: none !important;
}

.text-center {
    text-align: center;
}

.mt-4 { margin-top: 16px; }
.mb-4 { margin-bottom: 16px; }

/* =============================================
   Responsive Adjustments
   ============================================= */
@media (max-width: 640px) {
    .form-header-top {
        padding: 12px 16px;
    }

    .form-header-title {
        font-size: 15px;
    }

    .form-main {
        padding: 16px;
    }

    .card-body {
        padding: 16px;
    }

    .photo-grid {
        grid-template-columns: 1fr;
    }

    .summary-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .summary-item {
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        text-align: left;
    }

    .summary-item::before {
        width: 4px;
        height: 100%;
        top: 0;
        left: 0;
        right: auto;
    }

    .summary-number {
        font-size: 28px;
    }

    .summary-label {
        margin-top: 0;
    }
}
