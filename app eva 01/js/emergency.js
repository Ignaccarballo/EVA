/**
 * Emergency Manager
 * Sistema de alerta por inactividad
 */

const Emergency = {
    // Configuración
    INACTIVITY_LIMIT_DAYS: 3,

    // Inicializar
    init() {
        console.log('🚨 Inicializando sistema de emergencia...');
        this.checkInactivity();
    },

    // Guardar contacto
    saveContact(name, phone) {
        const contact = { name, phone };
        localStorage.setItem('eva_emergency_contact', JSON.stringify(contact));
        return contact;
    },

    // Obtener contacto
    getContact() {
        const data = localStorage.getItem('eva_emergency_contact');
        return data ? JSON.parse(data) : null;
    },

    // Verificar inactividad
    checkInactivity() {
        const contact = this.getContact();
        if (!contact) return; // No hay contacto configurado

        const lastVisit = this.getLastActivityDate();
        const daysInactive = this.calculateDaysInactive(lastVisit);

        console.log(`⏱️ Días de inactividad: ${daysInactive}`);

        if (daysInactive >= this.INACTIVITY_LIMIT_DAYS) {
            this.triggerAlert(contact, daysInactive);
        }
    },

    // Obtener fecha de última actividad de los registros
    getLastActivityDate() {
        const checkins = Storage.getCheckins();
        if (checkins.length === 0) return new Date(); // Si no hay registros, usar hoy

        // Ordenar por fecha descendente
        checkins.sort((a, b) => new Date(b.date) - new Date(a.date));
        return new Date(checkins[0].date);
    },

    // Calcular días
    calculateDaysInactive(lastDate) {
        const today = new Date();
        lastDate = new Date(lastDate);

        // Reset horas
        today.setHours(0, 0, 0, 0);
        lastDate.setHours(0, 0, 0, 0);

        const diffTime = Math.abs(today - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },

    // Disparar alerta (Simulada para frontend)
    triggerAlert(contact, days) {
        // En una app real, esto llamaría a un backend
        console.warn(`🚨 ALERTA: Usuario inactivo por ${days} días. Contactando a ${contact.name}...`);

        // Simulación visual
        setTimeout(() => {
            alert(`⚠️ ALERTA DE SEGURIDAD SIMULADA\n\nEVA ha detectado ${days} días de inactividad.\n\nEn un entorno real, se enviaría un SMS a:\n${contact.name} (${contact.phone})\n\n"El usuario no ha realizado su registro diario."`);
        }, 3000);
    }
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Emergency;
}
