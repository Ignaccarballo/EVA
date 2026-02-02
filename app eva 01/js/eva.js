/**
 * EVA - Intelligence & Content (V7.0)
 * Massive Content Expansion: Protocols, Programs, and Daily Guides
 */

const EVA = {
  userName: '',

  icons: {
    support: "fa-solid fa-hand-holding-heart",
    resilience: "fa-solid fa-shield-halved",
    sos: "fa-solid fa-life-ring",
    evolution: "fa-solid fa-chart-line",
    morning: "fa-solid fa-sun",
    afternoon: "fa-solid fa-cloud-sun",
    evening: "fa-solid fa-moon",
    night: "fa-solid fa-star-and-crescent"
  },

  // ========== 1. PROTOCOLOS DE CRISIS (SOS) ==========
  crisisProtocols: [
    {
      id: "sos1",
      title: "Respiración 4-4-8 (Vagus Reset)",
      instruction: "Esta técnica activa el nervio vago, informando a tu cerebro que estás a salvo. 1. Busca un lugar donde puedas cerrar los ojos. 2. Inhala profundamente por la nariz durante 4 segundos, sintiendo cómo se expande tu diafragma. 3. Retén el aire durante 4 segundos, permitiendo que el oxígeno sature tus células. 4. Exhala muy lentamente por la boca durante 8 segundos, como si soplaras un hilo de seda. Repite esto 5 veces. La exhalación larga es la clave para reducir el cortisol.",
      icon: "🌬️",
      category: "ANSIEDAD AGUDA"
    },
    {
      id: "sos2",
      title: "Protocolo 5-4-3-2-1 (Grounding)",
      instruction: "Útil cuando los pensamientos intrusivos te alejan del presente. 1. Identifica 5 cosas que veas (un cuadro, una planta, una mancha). 2. Identifica 4 cosas que puedas tocar y concéntrate en su textura (la tela de tu ropa, la madera de la mesa). 3. Escucha 3 sonidos distintos (el tráfico, un pájaro, tu propia respiración). 4. Identifica 2 olores (tu perfume, el olor del café). 5. Identifica 1 cosa que puedas saborear. Esto reconecta tu corteza prefrontal y apaga la amígdala.",
      icon: "👁️",
      category: "DESPERSONALIZACIÓN"
    },
    {
      id: "sos3",
      title: "Inmersión Térmica (Shock Vagal)",
      instruction: "Cuando el sistema nervioso está en 'loop' de pánico, un cambio de temperatura radical puede romper el ciclo. Sumerge tu cara en agua helada por 15 segundos o sostén un cubo de hielo en la mano hasta que se derrita. El cerebro prioriza la señal térmica sobre la señal de ansiedad, provocando un descenso inmediato del ritmo cardíaco.",
      icon: "❄️",
      category: "ATAQUE DE PÁNICO"
    },
    {
      id: "sos4",
      title: "Abrazo de Mariposa (EMDR Simple)",
      instruction: "Técnica de estimulación bilateral derivada de la terapia EMDR. Cruza tus brazos sobre tu pecho, con las puntas de los dedos de cada mano apoyadas sobre los hombros opuestos. Alterna toques suaves (izquierdo, derecho, izquierdo...) de forma rítmica. Este movimiento ayuda al cerebro a procesar información emocional que ha quedado 'atascada' durante un evento estresante.",
      icon: "🦋",
      category: "SOBRECARGA EMOCIONAL"
    },
    {
      id: "sos5",
      title: "Escritura de Purga Catártica",
      instruction: "Cuando el ruido mental no cesa, transfiérelo al papel. Toma un papel y escribe sin filtro TODO lo que sientes, sin importar el orden o la ortografía. Hazlo durante 5 minutos seguidos. Al terminar, rompe el papel físicamente. Esto simboliza la liberación de la carga mental y reduce la rumiación.",
      icon: "✍️",
      category: "RUMIACIÓN"
    },
    {
      id: "sos6",
      title: "Relajación Progresiva de Jacobson",
      instruction: "Técnica para liberar tensión física acumulada. Tensa con todas tus fuerzas los músculos de tus pies durante 5 segundos y luego suelta de golpe. Sube a las pantorrillas, muslos, glúteos, abdomen, manos y cara. Nota el contraste entre la tensión extrema y la relajación profunda. La mente no puede estar ansiosa si el cuerpo está relajado.",
      icon: "🧘",
      category: "TENSIÓN FÍSICA"
    }
  ],

  // ========== 2. PROGRAMAS DE RESILIENCIA (LECTURA PROFUNDA) ==========
  programs: [
    {
      id: "prog_resilience",
      title: "Fortaleza Mental & Estoicismo Moderno",
      description: "Un viaje profundo de 7 etapas diseñado para reprogramar tu respuesta ante el caos. Basado en los principios de Marco Aurelio y Séneca, combinados con Terapia Cognitivo-Conductual contemporánea. Aprenderás a construir una ciudadela interna inexpugnable ante las presiones externas.",
      steps: [
        "Fase 1: La Dicotomía del Control - Análisis exhaustivo de tus fuentes de ansiedad. Clasificación técnica entre lo externo (inalcanzable) y lo interno (tu única jurisdicción).",
        "Fase 2: Autocompasión Radical y Diálogo Interno - Auditoría de tu voz crítica. Implementación de técnicas de reencuadre positivo para transformar el autosabotaje en autogestión.",
        "Fase 3: El Observador Imparcial - Ejercicios de visualización para ver tus pensamientos como flujos de datos externos, eliminando la identificación emocional inmediata.",
        "Fase 4: Gratitud Táctica ante la Adversidad - Metodología para extraer valor de experiencias traumáticas previas, convirtiendo el dolor en infraestructura emocional.",
        "Fase 5: Preformatio Malorum (Visualización de Escenarios) - Entrenamiento preventivo. Diseño de planes de contingencia emocional para los peores escenarios posibles.",
        "Fase 6: Amor Fati y Aceptación Radical - Integración de la realidad presente como el único punto de acción. Eliminación de la resistencia inútil al destino.",
        "Fase 7: El Manifiesto de la Ciudadela - Creación de tu código de conducta personal para tiempos de crisis. Definición de valores innegociables."
      ],
      icon: "🛡️"
    },
    {
      id: "prog_selfesteem",
      title: "Reconstrucción Sistémica del Valor Propio",
      description: "Un protocolo intensivo para neutralizar la voz crítica interna y reconstruir la identidad desde una base sólida y objetiva. Este programa no busca 'sentirse bien', busca 'ver con claridad' tu valor real en el tejido humano.",
      steps: [
        "Módulo 1: Rastreo y Auditoría de la Crítica - Identificación de patrones de insulto mental y su origen histórico (voces externas internalizadas).",
        "Módulo 2: Desmantelamiento de Etiquetas Cognitivas - Desglose de generalizaciones como 'soy un fracaso' en hechos específicos y manejables.",
        "Módulo 3: Inventario de Capital Humano - Identificación y registro detallado de situaciones de resiliencia, empatía y resolución en tu historia personal.",
        "Módulo 4: Arquitectura de Límites Personales - Entrenamiento en la asertividad como mecanismo de defensa de la energía vital. El 'No' como herramienta de amor.",
        "Módulo 5: El Ritual de la Mirada Objetiva - Práctica de reconocimiento facial y corporal sin juicio estético, reconectando con la biología y el esfuerzo de existir."
      ],
      icon: "💎"
    },
    {
      id: "prog_social",
      title: "Reconexión con el Mundo",
      description: "Programa para personas que llevan mucho tiempo en soledad o aislamiento. Pasos pequeños y seguros para volver a sentir la conexión humana sin ansiedad.",
      steps: [
        "Fase 1: Observación Social - Ve a un parque o café. Solo observa. No interactúes. Entiende que eres parte del tejido social simplemente por estar ahí.",
        "Fase 2: Micro-interacciones - Saluda al cajero, pregunta la hora, mantén la mirada 1 segundo más. Son 'pesas' para tu músculo social.",
        "Fase 3: El Valor de la Vulnerabilidad - Llama a alguien de confianza. No digas 'estoy bien'. Di 'estoy pasando un momento raro'. La verdad conecta.",
        "Fase 4: Clubes de Interés Sugerido - Busca comunidades online o físicas sobre algo que ames (lectura, cine, tejido). El interés común elimina el miedo al juicio.",
        "Fase 5: Servicio al Otro - Ayudar a alguien más es la forma más rápida de salir de la propia rumiación. Busca cómo ser útil hoy."
      ],
      icon: "🤝"
    }
  ],

  // ========== 3. GUÍAS DIARIAS (CONSEJOS DE VIDA) ==========
  guides: [
    {
      id: "g1",
      title: "Optimización de Sistemas Biológicos (Ritual de Inicio)",
      content: "Tu cerebro funciona como un sistema operativo biológico que requiere calibración técnica al despertar para evitar fallos cognitivos. 1. Cuarentena Digital: No permitas el ingreso de inputs externos (redes, prensa) durante los primeros 45 minutos. 2. Fotobiomodulación: Exponte a la radiación solar directa para regular el eje HPA y optimizar la secreción de cortisol matutino. 3. Rehidratación con Electrolitos: 500ml de agua con sodio natural para reactivar la conductividad neuronal y eliminar la niebla mental persistente.",
      icon: "☀️",
      time: "PROTOCOLO MAÑANA"
    },
    {
      id: "g2",
      title: "Gestión de la Fatiga Cognitiva",
      content: "Si sientes que no puedes concentrarte, es que tu cerebro ha acumulado demasiada adenosina. Realiza una pausa de 'No Input'. Siéntate sin música, sin lectura, sin nada durante 5 minutos. Mira a lo lejos para relajar los músculos ciliares de tus ojos. Esta pequeña desconexión recarga tu capacidad de toma de decisiones para el resto de la tarde.",
      icon: "🧠",
      time: "TARDE"
    },
    {
      id: "g3",
      title: "Descompresión Nocturna",
      content: "La calidad de tu sueño determina tu ansiedad del día siguiente. A las 20:00, escribe todos tus pendientes en una hoja física; sácalos de tu cabeza. A las 21:00, reduce las luces al mínimo. El cerebro secreta melatonina solo en penumbra. Toma una ducha caliente para bajar tu temperatura corporal central (esto induce el sueño profundo). Eres un ser biológico, respeta tus ciclos.",
      icon: "🌙",
      time: "NOCHE"
    },
    {
      id: "g4",
      title: "Alimentación para la Mente",
      content: "Hay una conexión directa entre tu intestino y tu cerebro (Vía Vagal). Intenta incluir alimentos fermentados y reduce los azúcares procesados. Cuando tengas un pico de ansiedad, evita la cafeína y opta por magnesio o infusiones de valeriana. Tu dieta es el combustible de tu estabilidad emocional. Come despacio, agradeciendo cada nutriente.",
      icon: "🍃",
      time: "DIARIO"
    }
  ],

  // ========== LÓGICA DE PERSONALIZACIÓN ==========
  greetings: {
    morning: ["Buen día. Empecemos con suavidad.", "Respira el aire de la mañana.", "Un nuevo amanecer para ti.", "Hola, ¿qué tal si hoy nos tratamos con cariño?"],
    afternoon: ["Hola. ¿Cómo fluye tu tarde?", "Haz una pausa. Te lo mereces.", "Tómate un té y respira.", "¿Cómo va el peso del día? Aquí estoy."],
    evening: ["Buenas noches. Ya puedes soltar el día.", "Te acompaño en este descanso.", "El sol se oculta, tu paz aumenta.", "Es momento de empezar a bajar las revoluciones."],
    night: ["Es tarde. Estoy aquí cuidando tu paz.", "Descansa. Mañana es una nueva oportunidad.", "Silencio y calma para ti.", "Shhh... el mundo duerme, tú también puedes hacerlo."]
  },

  motivationalPhrases: [
    { phrase: "No eres tus pensamientos, eres el observador de ellos.", goal: "Identifica un pensamiento hoy y míralo pasar sin juzgarlo." },
    { phrase: "Incluso el roble más fuerte empezó siendo una pequeña semilla que aguantó la lluvia.", goal: "Haz una pausa de 5 minutos y respira profundamente, agradeciendo tu resistencia." },
    { phrase: "Tu valor no disminuye en base a tu incapacidad de ver tu propia grandeza ahora mismo.", goal: "Escribe una cosa pequeña que hayas hecho bien hoy." },
    { phrase: "El descanso también es productividad. Tu mente te lo agradecerá.", goal: "Apaga las pantallas 30 minutos antes de dormir hoy." },
    { phrase: "Cada emoción es un dato, no un destino.", goal: "Observa qué sensación física acompaña a tu emoción actual." }
  ],

  moodResponses: {
    1: ["Día difícil. Siento que estés pasando por esto. Aquí estoy para sostenerte.", "No te exijas nada hoy. Solo existir ya es suficiente esfuerzo.", "Tu crisis es real y válida. Respira conmigo, no estás solo.", "Permítete sentir esto sin juzgarte. Estoy a tu lado."],
    2: ["Lo veo gris hoy. Vamos paso a paso, sin prisa.", "A veces estar mal es la respuesta más lógica. Te escucho.", "Baja la marcha. El mundo puede esperar un poco.", "Entiendo tu cansancio emocional. Descansemos juntos un momento."],
    3: ["Equilibrio. Un buen lugar para observar el mundo.", "Presente y en paz. Disfruta de esta neutralidad.", "Ni arriba ni abajo. Solo aquí.", "Un momento de calma estable. Aprovechemos para recargar."],
    4: ["Me alegra verte con esa luz interna.", "Esa energía te sienta muy bien.", "Disfruta de este bienestar, te lo has ganado.", "Qué bueno sentir tu progreso hoy. ¡Sigue brillando!"],
    5: ["¡Épico! Disfruta de este estado de gracia.", "Qué alegría sentir tu bienestar pleno. ¡Contágialo!", "Brilla con toda tu fuerza. Estos momentos son tesoros.", "Estás en flujo total. Disfruta cada segundo de este Zen."]
  },

  setUserName(name) { this.userName = name; },

  getGreeting() {
    const hours = new Date().getHours();
    let time = 'morning';
    if (hours >= 12 && hours < 18) time = 'afternoon';
    else if (hours >= 18 && hours < 22) time = 'evening';
    else if (hours >= 22 || hours < 5) time = 'night';

    const options = this.greetings[time];
    return this.personalize(options[Math.floor(Math.random() * options.length)]);
  },

  getMoodResponse(level) {
    const res = this.moodResponses[level] || ["Aquí estoy para ti."];
    return this.personalize(res[Math.floor(Math.random() * res.length)]);
  },

  personalize(msg) {
    return msg;
  },

  getProtocols() { return this.crisisProtocols; },
  getPrograms() { return this.programs; },
  getGuides() { return this.guides; }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = EVA; }
