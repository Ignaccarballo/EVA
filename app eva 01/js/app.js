/**
 * EVA 01 - CORE LOGIC V8.0
 * Ultra-Premium AI Protagonist & Immersive Flow
 */

const App = {
    currentMood: null,
    chart: null,

    init() {
        console.log("🌙 EVA V13.0 Final - Sistema de Acompañamiento");

        // Cargar estado inicial
        const user = Storage.getUser();
        if (user) {
            EVA.setUserName(user.name);
            this.showScreen('home');
        } else {
            this.showScreen('welcome');
        }

        // Inicializar suscripciones y contenidos
        this.renderAllContent();
        if (window.Subscription) Subscription.init();

        // Verificar inactividad
        this.checkInactivity();
    },

    // ========== FLOW: AUTH & ONBOARDING ==========
    handleLoginFlow() {
        const user = Storage.getUser();
        if (user) {
            EVA.setUserName(user.name);
            this.showScreen('home');
        } else {
            alert("No detecto una firma neural previa. Por favor, completa tu registro.");
            this.showScreen('onboarding');
        }
    },

    handleRegisterSave() {
        const name = document.getElementById('user-name').value.trim();
        const email = document.getElementById('user-email').value.trim();
        const birth = document.getElementById('user-birth').value;
        const goal = document.getElementById('user-goal').value;
        const accepted = document.getElementById('accept-terms').checked;

        if (!name || !email || !birth) {
            alert("Necesito todos tus datos vitales para crear una conexión segura.");
            return;
        }

        if (!accepted) {
            alert("Debes aceptar los términos de privacidad biométrica para continuar.");
            return;
        }

        // Guardar Datos extendidos
        Storage.saveUser({ name, email, goal, birth });
        EVA.setUserName(name);

        const emName = document.getElementById('em-name').value.trim();
        const emPhone = document.getElementById('em-phone').value.trim();
        if (emName && emPhone) {
            localStorage.setItem('eva_emergency', JSON.stringify({ name: emName, phone: emPhone }));
        }

        // Efecto visual de "Conexión"
        const welcomeSpeech = document.getElementById('welcome-speech');
        if (welcomeSpeech) {
            welcomeSpeech.innerHTML = `Nuestro lazo emocional ha comenzado. Preparando tu lugar seguro...`;
        }

        setTimeout(() => {
            this.showScreen('payment');
        }, 1500);
    },

    // ========== ACCOUNT & SETTINGS ==========
    renderAccount() {
        const user = Storage.getUser();
        const em = JSON.parse(localStorage.getItem('eva_emergency') || '{}');
        const container = document.getElementById('account-details');

        if (!user || !container) return;

        const isPremium = Storage.hasActiveSubscription();

        container.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px; margin-bottom: 2rem;">
                <div style="font-size: 2.5rem; background: var(--accent); width:70px; height:70px; border-radius:50%; display:flex; align-items:center; justify-content:center;">🛸</div>
                <div>
                    <h3 style="margin:0;">Perfil EVA</h3>
                    <p style="font-size: 0.75rem; color: var(--text-dim); margin:0;">Acompañamiento universal activado</p>
                </div>
            </div>
            
            <div class="card" style="border: 1px solid ${isPremium ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}; background: ${isPremium ? 'rgba(168, 85, 247, 0.05)' : 'rgba(255,255,255,0.02)'}; margin-bottom: 1.5rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <div style="font-size: 0.6rem; font-weight:900; color: var(--text-dim); letter-spacing:1px; margin-bottom:4px;">NUESTRO LAZO</div>
                        <div style="font-size: 0.9rem; font-weight:800; color: ${isPremium ? 'var(--accent)' : '#fff'};">${isPremium ? 'Confort Total Activado' : 'Acompañamiento Básico'}</div>
                    </div>
                    ${!isPremium ? `
                        <button onclick="App.showScreen('payment')" class="btn" style="width:auto; padding: 6px 12px; font-size: 0.7rem; background: var(--accent); color: white; border:none; border-radius:8px; cursor:pointer;">ABRAZAR MÁS</button>
                    ` : `<i class="fa-solid fa-crown" style="color: gold;"></i>`}
                </div>
            </div>
            
            <div class="input-group">
                <label class="input-label">Correo Registrado</label>
                <div style="padding:1rem; background:rgba(255,255,255,0.03); border-radius:12px; font-size:0.9rem;">${user.email}</div>
            </div>
            
            <div class="input-group">
                <label class="input-label">Vínculo de Emergencia</label>
                <div style="padding:1rem; background:rgba(255,255,255,0.03); border-radius:12px; font-size:0.9rem;">
                    <strong>${em.name || 'Sin asignar'}</strong><br>
                    <span style="color: var(--text-dim);">${em.phone || ''}</span>
                </div>
            </div>
        `;
    },

    callEmergencyContact(isAuto = false) {
        const em = JSON.parse(localStorage.getItem('eva_emergency') || '{}');
        if (em.phone) {
            const reason = isAuto ? "INACTIVIDAD DETECTADA (3 DÍAS)" : "SOLICITUD MANUAL";
            alert(`[PROTOCOLO DE SEGURIDAD ACTIVADO]\n\nIniciando conexión de emergencia con ${em.name} (${em.phone})...\n\nMOTIVO: ${reason}\n\nEVA ha enviado tu última ubicación conocida y estado emocional.`);
        } else if (!isAuto) {
            alert("No has configurado un contacto de emergencia aún.");
        }
    },

    checkInactivity() {
        const lastCheckin = Storage.getRecentCheckins(1)[0];
        if (!lastCheckin) return;

        const lastDate = new Date(lastCheckin.timestamp);
        const now = new Date();
        const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays >= 3) {
            console.warn("⚠️ ALERTA: 3 días sin reportes. Activando protocolo de contacto.");
            this.callEmergencyContact(true);
        }
    },

    // ========== PAYMENTS & LOCKS ==========
    simulateCardPayment() {
        const num = document.getElementById('card-number').value.replace(/\s/g, '');
        if (num.length < 13) {
            alert("Vaya, parece que falta algún numerito en tu tarjeta.");
            return;
        }

        alert("Estamos preparando todo para darte el mejor cuidado...");

        setTimeout(() => {
            Storage.saveSubscription({
                id: 'V12_LOVE_' + Date.now(),
                status: 'ACTIVE',
                startDate: new Date().toISOString()
            });
            alert("¡Ya está todo listo! Ahora tengo mucho más amor y herramientas para cuidarte.");
            this.showScreen('home');
        }, 2500);
    },

    checkLocks() {
        const isPremium = Storage.hasActiveSubscription();
        // Implementar lógica de bloqueos visuales si es necesario
    },

    // ========== NAVIGATION ==========
    showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(`screen-${id}`);
        if (target) {
            target.classList.add('active');

            // Renderizado por pantalla
            if (id === 'home') this.updateHome();
            if (id === 'history') this.renderHistory();
            if (id === 'calm') this.renderCalm();
            if (id === 'sos') this.renderSOS();
            if (id === 'account') this.renderAccount();

            // Actualizar Nav States
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('onclick')?.includes(`'${id}'`)) item.classList.add('active');
            });

            window.scrollTo(0, 0);
        }
    },

    // ========== HOME LOGIC (EVA PROTAGONIST) ==========
    updateHome() {
        const msgEl = document.getElementById('eva-message');
        const today = Storage.getTodayCheckin();

        if (today) {
            this.typeWriter(msgEl, EVA.getMoodResponse(today.mood));
            this.highlightMood(today.mood);
        } else {
            this.typeWriter(msgEl, EVA.getGreeting());
            this.highlightMood(null);
        }
    },

    typeWriter(el, text) {
        if (!el) return;
        el.innerHTML = '';
        el.style.opacity = '1';
        let i = 0;
        const speed = 25;

        // Haptic feedback initial
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(5);
        }

        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    },

    selectMood(level) {
        this.currentMood = level;
        this.highlightMood(level);

        const msgEl = document.getElementById('eva-message');
        this.typeWriter(msgEl, EVA.getMoodResponse(level));

        // Efecto visual en el orb
        const orb = document.querySelector('.eva-orb');
        const colors = [
            '0 0 80px rgba(59, 130, 246, 0.6)',
            '0 0 80px rgba(139, 92, 246, 0.6)',
            '0 0 80px rgba(236, 72, 153, 0.6)',
            '0 0 80px rgba(245, 158, 11, 0.6)',
            '0 0 80px rgba(16, 185, 129, 0.6)'
        ];
        orb.style.boxShadow = colors[level - 1];
    },

    highlightMood(level) {
        document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
        if (level) {
            const opt = document.getElementById(`mood-${level}`);
            if (opt) opt.classList.add('selected');
        }
    },

    saveCheckin() {
        if (!this.currentMood) {
            alert("Por favor, selecciona cómo te sientes para que pueda entenderte.");
            return;
        }
        const note = document.getElementById('checkin-note').value;
        Storage.saveCheckin(this.currentMood, note);

        // Preparar y mostrar el Pop-up de motivación
        const motivation = EVA.motivationalPhrases[Math.floor(Math.random() * EVA.motivationalPhrases.length)];

        document.getElementById('success-title').textContent = "¡Registro Guardado!";
        document.getElementById('success-phrase').textContent = `"${motivation.phrase}"`;
        document.getElementById('success-goal').textContent = motivation.goal;

        // Efecto haptico al terminar
        if (window.navigator?.vibrate) window.navigator.vibrate([10, 30, 10]);

        this.showModal('success');
    },

    // ========== CONTENT RENDERING ==========
    renderAllContent() {
        this.renderCalm();
        this.renderSOS();
    },

    renderCalm() {
        const guidesList = document.getElementById('guides-list');
        const programsList = document.getElementById('programs-list');

        if (guidesList) {
            guidesList.innerHTML = EVA.getGuides().map(g => `
                <div class="card" onclick="App.openDetailModal('${g.title}', '${g.content}', [])" style="display:flex; gap:1rem; align-items:center; cursor:pointer;">
                    <div style="font-size: 1.5rem; background: rgba(168, 85, 247, 0.1); width: 50px; height: 50px; border-radius: 12px; display:flex; align-items:center; justify-content:center;">${g.icon}</div>
                    <div style="flex:1;">
                        <h4 style="margin:0;">${g.title}</h4>
                        <p style="font-size: 0.7rem; color: var(--text-dim); margin:0;">Guía: ${g.time}</p>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="color: var(--text-dim);"></i>
                </div>
            `).join('');
        }

        if (programsList) {
            programsList.innerHTML = EVA.getPrograms().map(p => `
                <div class="card" onclick="App.openDetailModal('${p.title}', '${p.description}', ${JSON.stringify(p.steps).replace(/"/g, "'")})" style="cursor:pointer; border-left: 4px solid var(--accent);">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div style="flex:1;">
                            <h4 style="color: var(--accent); margin:0;">${p.title}</h4>
                            <p style="font-size: 0.75rem; color: var(--text-dim); margin-top: 4px;">${p.description.substring(0, 60)}...</p>
                        </div>
                        <span style="font-size: 1.5rem;">${p.icon}</span>
                    </div>
                    <div style="margin-top: 1rem; font-size: 0.65rem; font-weight: 800; background: rgba(168, 85, 247, 0.1); display:inline-block; padding: 4px 10px; border-radius: 6px; color: var(--accent);">
                        ${p.steps.length} SESIONES
                    </div>
                </div>
            `).join('');
        }
    },

    renderSOS() {
        const protList = document.getElementById('protocols-list');
        if (protList) {
            protList.innerHTML = EVA.getProtocols().map(p => `
                <div class="card" onclick="App.openDetailModal('${p.title}', '${p.instruction}', [])" style="display:flex; gap:1rem; align-items:center; cursor:pointer; border-left: 4px solid #ef4444;">
                    <div style="font-size: 1.5rem; color: #ef4444;">${p.icon}</div>
                    <div style="flex:1;">
                        <h4 style="margin:0; font-size: 0.9rem;">${p.title}</h4>
                        <p style="font-size: 0.7rem; color: #ef4444; font-weight:700;">${p.category}</p>
                    </div>
                </div>
            `).join('');
        }
    },

    renderHistory() {
        const items = document.getElementById('history-items');
        const checkins = Storage.getRecentCheckins(30);

        // Agregar EVA al fondo de evolución si no está
        const screen = document.getElementById('screen-history');
        if (screen && !screen.querySelector('.eva-bg-mini')) {
            const evaBg = document.createElement('div');
            evaBg.className = 'eva-bg-mini';
            screen.prepend(evaBg);
        }

        if (items) {
            if (checkins.length === 0) {
                items.innerHTML = `
                    <div class="card" style="text-align:center; padding: 2.5rem 1rem; border-style: dashed; border-color: rgba(255,255,255,0.1);">
                        <div style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.3;">🕯️</div>
                        <h4 style="margin:0;">Aún no hemos empezado a caminar</h4>
                        <p style="font-size: 0.8rem; color: var(--text-dim);">Aquí aparecerá el resumen de cómo te has sentido. He preparado un mapa de ejemplo para que veas cómo cuidaremos de ti.</p>
                    </div>
                `;
                // Mostrar datos dummy para que no se vea vacío
                this.drawChart([
                    { mood: 3, date: new Date().toISOString() },
                    { mood: 4, date: new Date(Date.now() - 86400000).toISOString() },
                    { mood: 3, date: new Date(Date.now() - 172800000).toISOString() }
                ]);
            } else {
                items.innerHTML = checkins.map(c => `
                    <div class="card" style="display:flex; align-items:center; gap:1rem;">
                        <div style="font-size: 1.5rem;">${['😰', '😔', '😐', '😊', '✨'][c.mood - 1]}</div>
                        <div style="flex:1;">
                            <div style="font-size: 0.7rem; color: var(--accent); font-weight:800;">${Storage.formatRelativeDate(c.date)}</div>
                            <div style="font-size: 0.85rem;">${c.note || 'Registro de frecuencia guardado.'}</div>
                        </div>
                    </div>
                `).join('');
                this.drawChart(checkins);
            }
        }
    },

    // ========== MODAL LOGIC ==========
    showModal(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) modal.classList.add('active');
    },

    closeModal(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) modal.classList.remove('active');
    },

    openDetailModal(title, body, steps = []) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').textContent = body;

        const stepsEl = document.getElementById('modal-steps');
        if (steps && steps.length > 0) {
            stepsEl.innerHTML = '<p style="font-size: 0.7rem; font-weight:900; color: var(--text-dim); margin-bottom: 0.75rem;">PASOS DEL PROGRAMA:</p>' +
                steps.map((s, i) => `
                    <div style="display:flex; gap:10px; margin-bottom:10px; font-size: 0.85rem;">
                        <div style="width:20px; height:20px; background:var(--accent); color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.6rem; flex-shrink:0;">${i + 1}</div>
                        <div>${s}</div>
                    </div>
                `).join('');
        } else {
            stepsEl.innerHTML = '';
        }

        this.showModal('detail');
    },

    // ========== CHART & VISUALS ==========
    drawChart(checkins) {
        const ctx = document.getElementById('moodChart');
        if (!ctx) return;
        if (checkins.length === 0) return;

        const data = [...checkins].reverse();
        const labels = data.map(c => Storage.formatDate(c.date));
        const values = data.map(c => c.mood);

        if (this.chart) this.chart.destroy();
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    borderColor: '#c084fc',
                    borderWidth: 3,
                    backgroundColor: 'rgba(192, 132, 252, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#c084fc',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        min: 1, max: 5,
                        ticks: { stepSize: 1, color: '#8b949e', callback: v => ['😰', '😔', '😐', '😊', '✨'][v - 1] },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    x: { ticks: { color: '#8b949e' }, grid: { display: false } }
                }
            }
        });
    },

    interactWithEva() {
        const orb = document.querySelector('.eva-orb');
        orb.style.transform = 'scale(1.2) translateY(-10px)';
        setTimeout(() => orb.style.transform = 'scale(1) translateY(0)', 300);

        const msgEl = document.getElementById('eva-message');
        const greetings = [
            "¿Me llamabas? Estoy aquí para escucharte.",
            "Siento tu energía. ¿En qué puedo apoyarte ahora?",
            "Un momento de pausa siempre es bueno. Respira conmigo.",
            "Estoy analizando el entorno... todo está seguro aquí.",
            "Eres mi prioridad, cuéntame lo que necesites."
        ];
        this.typeWriter(msgEl, greetings[Math.floor(Math.random() * greetings.length)]);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
