/**
 * EVA 01 - Gestión de Suscripción Oficial (V13.0 Final)
 * Integración con PayPal Hosted Buttons
 */

const Subscription = {
    config: {
        hostedButtonId: '3P8LXQ9DAVWL6',
    },

    init() {
        console.log('💳 Sistema de Suscripción Final Activo');
        this.renderPayPalButton();
        return true;
    },

    renderPayPalButton() {
        // Buscamos el contenedor específico de la imagen del usuario
        const containerId = "paypal-container-" + this.config.hostedButtonId;
        const container = document.getElementById(containerId);

        if (!container || typeof paypal === 'undefined') {
            console.warn('Esperando a PayPal o contenedor no encontrado...');
            return;
        }

        container.innerHTML = '';

        // Lógica de HostedButtons según la imagen del usuario
        paypal.HostedButtons({
            hostedButtonId: this.config.hostedButtonId,
            // Agregamos callbacks para activar la app tras el pago
            onApprove: (data, actions) => {
                this.handleSubscriptionSuccess(data);
            }
        }).render("#" + containerId);
    },

    handleSubscriptionSuccess(data) {
        // En botones de hosting, 'data' contiene la info de la transacción
        const subData = {
            id: data.orderID || ('PAY-' + Date.now()),
            status: 'ACTIVE',
            startDate: new Date().toISOString(),
            source: 'PayPal Real'
        };

        Storage.saveSubscription(subData);
        alert("¡Tu lazo con EVA ahora es total! Ya puedes disfrutar de todo mi cuidado sin límites.");

        if (window.App) {
            App.showScreen('home');
        }
    }
};
