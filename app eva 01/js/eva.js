/**
 * EVA - Intelligence & Content (V7.0)
 * Massive Content Expansion: Protocols, Programs, and Daily Guides
 */

const EVA = {
  userName: '',

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
      title: "Fortaleza Mental & Estoicismo",
      description: "Un viaje profundo de 7 etapas para entrenar tu mente en la distinción entre lo que controlas y lo que no. Basado en principios de Terapia Cognitivo-Conductual y filosofía estoica.",
      steps: [
        "Día 1: Dicatotomía del Control - Haz una lista de lo que te angustia. Tacha todo lo que no dependa estrictamente de ti. Enfoca tu energía solo en el resto.",
        "Día 2: Autocompasión Radical - Háblate como le hablarías a un niño pequeño que tiene miedo. Sustituye el 'debí haber hecho' por 'hice lo que pude con lo que sabía'.",
        "Día 3: El Observador Imparcial - Imagina que tus emociones son nubes. Míralas pasar sin identificarte con ellas. Tú eres el cielo, no la nube.",
        "Día 4: Gratitud ante la Adversidad - Encuentra un aprendizaje en un momento difícil de tu pasado. ¿Qué fuerza desarrollaste gracias a ese problema?",
        "Día 5: Visualización Negativa - No para asustarte, sino para prepararte. Imagina el peor escenario y diseña un plan simple. El miedo se disuelve ante la acción.",
        "Día 6: Amor Fati (Amor al Destino) - Acepta el presente tal cual es. Deja de luchar contra la realidad. Solo desde la aceptación puedes transformar.",
        "Día 7: El Mapa del Futuro - Escribe tu manifiesto personal. ¿Quién quieres ser en la tormenta? Define 3 valores innegociables para tu vida."
      ],
      icon: "🛡️"
    },
    {
      id: "prog_selfesteem",
      title: "Reconstrucción del Amor Propio",
      description: "El aislamiento suele alimentar una voz crítica destructiva. Este programa está diseñado para silenciar esa voz y reconstruir tu identidad desde el valor real.",
      steps: [
        "Semana 1: Rastreo de Crítica - Anota cada vez que te insultas mentalmente. Identifica de quién era esa voz originalmente (padres, maestros, sociedad).",
        "Semana 2: Desmitificación de Etiquetas - 'Soy un fracaso' no es un hecho, es un pensamiento. Cámbialo por: 'He tenido resultados que no esperaba'.",
        "Semana 3: El Inventario de Belleza Interna - Lista 10 situaciones donde fuiste amable, paciente o resiliente. Esas son tus verdaderas credenciales.",
        "Semana 4: Límites como Autodefensa - Aprender a decir 'no' a otros es decirte 'sí' a ti mismo. Identifica 2 situaciones donde necesites poner un límite.",
        "Semana 5: El Ritual del Espejo - Mírate a los ojos 1 minuto al día. Sin juzgar. Solo reconoce la humanidad y el esfuerzo que hay detrás de esa mirada."
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
      title: "Ritual de Inicio de Sistemas",
      content: "Tu cerebro es un sistema biológico que necesita calibración al despertar. 1. No toques el teléfono los primeros 15 minutos. 2. Exponte a la luz solar directa (aunque esté nublado) para regular tu ritmo circadiano. 3. Bebe 500ml de agua con una pizca de sal marina. Esto despierta tus neuronas y prepara tu dopamina para un día productivo, reduciendo la niebla mental matutina.",
      icon: "☀️",
      time: "MAÑANA"
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
    morning: ["Buen día, {name}. Empecemos con suavidad.", "Respira el aire de la mañana, {name}.", "Un nuevo amanecer para ti.", "Hola {name}, ¿qué tal si hoy nos tratamos con cariño?"],
    afternoon: ["Hola, {name}. ¿Cómo fluye tu tarde?", "Haz una pausa, {name}. Te lo mereces.", "Tómate un té y respira.", "¿Cómo va el peso del día, {name}? Aquí estoy."],
    evening: ["Buenas noches, {name}. Ya puedes soltar el día.", "{name}, te acompaño en este descanso.", "El sol se oculta, tu paz aumenta.", "{name}, es momento de empezar a bajar las revoluciones."],
    night: ["Es tarde, {name}. Estoy aquí cuidando tu paz.", "Descansa, {name}. Mañana es una nueva oportunidad.", "Silencio y calma para ti.", "Shhh... el mundo duerme, tú también puedes hacerlo, {name}."]
  },

  moodResponses: {
    1: ["Día difícil, {name}. Siento que estés pasando por esto. Aquí estoy para sostenerte.", "No te exijas nada hoy. Solo existir ya es suficiente esfuerzo.", "Tu crisis es real y válida. Respira conmigo, no estás solo.", "Permítete sentir esto sin juzgarte. Estoy a tu lado."],
    2: ["Lo veo gris hoy. Vamos paso a paso, sin prisa.", "A veces estar mal es la respuesta más lógica. Te escucho.", "Baja la marcha, {name}. El mundo puede esperar un poco.", "Entiendo tu cansancio emocional. Descansemos juntos un momento."],
    3: ["Equilibrio. Un buen lugar para observar el mundo.", "Presente y en paz. Disfruta de esta neutralidad.", "Ni arriba ni abajo. Solo aquí, {name}.", "Un momento de calma estable. Aprovechemos para recargar."],
    4: ["Me alegra verte con esa luz interna.", "Esa energía te sienta muy bien, {name}.", "Disfruta de este bienestar, te lo has ganado.", "Qué bueno sentir tu progreso hoy. ¡Sigue brillando!"],
    5: ["¡Épico! Disfruta de este estado de gracia, {name}.", "Qué alegría sentir tu bienestar pleno. ¡Contágialo!", "Brilla con toda tu fuerza. Estos momentos son tesoros.", "Estás en flujo total. Disfruta cada segundo de este Zen."]
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
    return msg.replace(/{name}/g, this.userName || 'amigo/a');
  },

  getProtocols() { return this.crisisProtocols; },
  getPrograms() { return this.programs; },
  getGuides() { return this.guides; }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = EVA; }
