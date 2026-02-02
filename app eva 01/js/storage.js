/**
 * Storage Manager - Manejo de datos locales
 * Usa localStorage para persistir datos del usuario
 */

const Storage = {
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    },

    formatRelativeDate(dateStr) {
        const date = new Date(dateStr);
        const now = new Date();
        const diffInHours = Math.abs(now - date) / 36e5;

        if (diffInHours < 1) return 'Hace unos momentos';
        if (diffInHours < 24) return `Hace ${Math.floor(diffInHours)} horas`;
        return this.formatDate(dateStr);
    },
    // Claves de almacenamiento
    KEYS: {
        USER: 'eva_user',
        CHECKINS: 'eva_checkins',
        SETTINGS: 'eva_settings',
        SUBSCRIPTION: 'eva_subscription'
    },

    // ============ USUARIO ============

    // Guardar datos del usuario
    saveUser(userData) {
        const data = {
            name: userData.name,
            email: userData.email,
            goal: userData.goal,
            termsAccepted: true,
            createdAt: userData.createdAt || new Date().toISOString(),
            lastVisit: new Date().toISOString()
        };
        localStorage.setItem(this.KEYS.USER, JSON.stringify(data));
        return data;
    },

    // Obtener datos del usuario
    getUser() {
        const data = localStorage.getItem(this.KEYS.USER);
        return data ? JSON.parse(data) : null;
    },

    // Verificar si es primera vez
    isFirstTime() {
        return !this.getUser();
    },

    // Actualizar última visita
    updateLastVisit() {
        const user = this.getUser();
        if (user) {
            user.lastVisit = new Date().toISOString();
            localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
        }
    },

    // ============ CHECK-INS ============

    // Guardar un check-in
    saveCheckin(moodLevel, note = '') {
        const checkins = this.getCheckins();
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        const checkin = {
            id: Date.now(),
            date: today,
            timestamp: new Date().toISOString(),
            mood: moodLevel,
            note: note.trim()
        };

        // Verificar si ya existe un check-in de hoy
        const todayIndex = checkins.findIndex(c => c.date === today);
        if (todayIndex >= 0) {
            // Actualizar el existente
            checkins[todayIndex] = checkin;
        } else {
            // Agregar nuevo
            checkins.push(checkin);
        }

        localStorage.setItem(this.KEYS.CHECKINS, JSON.stringify(checkins));
        return checkin;
    },

    // Obtener todos los check-ins
    getCheckins() {
        const data = localStorage.getItem(this.KEYS.CHECKINS);
        return data ? JSON.parse(data) : [];
    },

    // Obtener check-in de hoy
    getTodayCheckin() {
        const today = new Date().toISOString().split('T')[0];
        const checkins = this.getCheckins();
        return checkins.find(c => c.date === today) || null;
    },

    // Verificar si ya hizo check-in hoy
    hasCheckinToday() {
        return this.getTodayCheckin() !== null;
    },

    // Obtener últimos N check-ins
    getRecentCheckins(count = 15) {
        const checkins = this.getCheckins();
        return checkins
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    },

    // Obtener estadísticas
    getStats() {
        const checkins = this.getCheckins();
        if (checkins.length === 0) {
            return {
                total: 0,
                average: 0,
                streak: 0,
                bestDay: null,
                worstDay: null
            };
        }

        // Promedio de ánimo
        const sum = checkins.reduce((acc, c) => acc + c.mood, 0);
        const average = (sum / checkins.length).toFixed(1);

        // Racha actual (días consecutivos)
        const streak = this.calculateStreak(checkins);

        // Mejor y peor día
        const sorted = [...checkins].sort((a, b) => b.mood - a.mood);

        return {
            total: checkins.length,
            average: parseFloat(average),
            streak,
            bestDay: sorted[0],
            worstDay: sorted[sorted.length - 1]
        };
    },

    // Calcular racha de días consecutivos
    calculateStreak(checkins) {
        if (checkins.length === 0) return 0;

        const sortedDates = checkins
            .map(c => c.date)
            .sort((a, b) => new Date(b) - new Date(a));

        let streak = 0;
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        for (const dateStr of sortedDates) {
            const checkDate = new Date(dateStr);
            checkDate.setHours(0, 0, 0, 0);

            const diffDays = Math.round((currentDate - checkDate) / (1000 * 60 * 60 * 24));

            if (diffDays === streak) {
                streak++;
            } else if (diffDays > streak) {
                break;
            }
        }

        return streak;
    },

    // ============ SUSCRIPCIÓN ============

    // Guardar suscripción
    saveSubscription(subscriptionData) {
        const data = {
            id: subscriptionData.id,
            status: subscriptionData.status,
            startDate: subscriptionData.startDate,
            planId: subscriptionData.planId,
            amount: subscriptionData.amount,
            lastChecked: new Date().toISOString()
        };
        localStorage.setItem(this.KEYS.SUBSCRIPTION, JSON.stringify(data));
        return data;
    },

    // Obtener suscripción
    getSubscription() {
        const data = localStorage.getItem(this.KEYS.SUBSCRIPTION);
        return data ? JSON.parse(data) : null;
    },

    // Verificar si tiene suscripción activa
    hasActiveSubscription() {
        const subscription = this.getSubscription();
        if (!subscription) return false;
        return subscription.status === 'ACTIVE';
    },

    // Remover suscripción
    removeSubscription() {
        localStorage.removeItem(this.KEYS.SUBSCRIPTION);
    },

    // ============ CONFIGURACIÓN ============

    // Guardar configuración
    saveSettings(settings) {
        const current = this.getSettings();
        const updated = { ...current, ...settings };
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(updated));
        return updated;
    },

    // Obtener configuración
    getSettings() {
        const data = localStorage.getItem(this.KEYS.SETTINGS);
        return data ? JSON.parse(data) : {
            notifications: true,
            reminderTime: '09:00',
            theme: 'dark'
        };
    },

    // ============ UTILIDADES ============

    // Exportar todos los datos
    exportData() {
        return {
            user: this.getUser(),
            checkins: this.getCheckins(),
            settings: this.getSettings(),
            exportedAt: new Date().toISOString()
        };
    },

    // Importar datos
    importData(data) {
        if (data.user) {
            localStorage.setItem(this.KEYS.USER, JSON.stringify(data.user));
        }
        if (data.checkins) {
            localStorage.setItem(this.KEYS.CHECKINS, JSON.stringify(data.checkins));
        }
        if (data.settings) {
            localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data.settings));
        }
    },

    // Limpiar todos los datos
    clearAll() {
        localStorage.removeItem(this.KEYS.USER);
        localStorage.removeItem(this.KEYS.CHECKINS);
        localStorage.removeItem(this.KEYS.SETTINGS);
    },

    // Formatear fecha para mostrar
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return date.toLocaleDateString('es-AR', options);
    },

    // Formatear fecha relativa
    formatRelativeDate(dateStr) {
        const date = new Date(dateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        const diffDays = Math.round((today - date) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Hoy';
        if (diffDays === 1) return 'Ayer';
        if (diffDays < 7) return `Hace ${diffDays} días`;
        return this.formatDate(dateStr);
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}
