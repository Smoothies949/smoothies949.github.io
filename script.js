let demoState = {
  notes: [],
  lastDeletedNote: null,
  activeFeatures: new Set(),
  currentLanguage: 'en',
  timer: {
    duration: 25 * 60,
    remaining: 25 * 60,
    isRunning: false,
    interval: null,
    initialized: false
  },
  focus: {
    isActive: false
  },
  voice: {
    isRecording: false
  },
  noise: {
    context: null,
    oscillator: null,
    isPlaying: false,
    initialized: false
  },
  accessibility: {
    initialized: false
  },
  literalLanguage: {
    enabled: false
  },
  scrollAnimations: {
    initialized: false
  },
  draggableTimer: {
    initialized: false
  }
};

const translations = {
  // Complete English translations object for script.js
// Replace your existing 'en' object with this complete version:

en: {
  // Sticky Bar
  'sticky.free': 'Free To Use',
  'sticky.journey': 'Be part of Cocoon\'s journey! Your insights help me create the perfect browsing experience.',
  'sticky.share': 'Share Your Thoughts →',
  
  // Control Panel
  'control.helper': 'Click to disable',
  
  // Focus
  'focus.scroll': 'Scroll down to see focus mode in action!',
  
  // Timer
  'timer.focus': 'Focus Timer',
  'timer.start': 'Start',
  'timer.pause': 'Pause',
  'timer.reset': 'Reset',
  
  // Notes
  'notes.header': '🧠 Quick Brain Dump',
  'notes.placeholder': 'Capture your thoughts instantly...',
  'notes.voice': '🎙️ Voice',
  'notes.save': '💾 Save',
  'notes.undo': '↶ Undo',
  
  // Accessibility
  'accessibility.header': '♿ Accessibility',
  'accessibility.contrast': 'Contrast',
  'accessibility.saturation': 'Saturation',
  'accessibility.fontSize': 'Font Size',
  
  // Background Noise
  'noise.header': '🔊 Background Noise',
  'noise.select': 'Select ambient sound...',
  'noise.rain': '🌧️ Rain',
  'noise.forest': '🌲 Forest',
  'noise.ocean': '🌊 Ocean Waves',
  'noise.white': '📻 White Noise',
  'noise.coffee': '☕ Coffee Shop',
  'noise.volume': 'Volume',
  'noise.play': '▶️ Play',
  'noise.stop': '⏹️ Stop',
  
  // Site Blocker
  'blocker.header': '🚫 Site Blocker',
  'blocker.placeholder': 'Enter website to block...',
  'blocker.add': '+ Block',
  'blocker.active': '🔒 Blocking Active',
  'blocker.pause': '⏸️ Pause 5min',
  
  // Font Controls
  'font.header': '🔤 Font Controls',
  'font.family': 'Font Family',
  'font.default': 'System Default',
  'font.friendly': 'Reading-friendly Font',
  'font.size': 'Font Size',
  'font.lineHeight': 'Line Height',
  'font.reset': '↺ Reset',
  'font.reading': '📖 Reading Mode',
  
  // Navigation
  'nav.features': 'Features',
  'nav.reviews': 'Reviews',
  'nav.founder': 'Founder Message',
  'nav.join': 'Join the Journey',
  
  // Hero Section
  'hero.title': 'Transform Your Digital Life in 60 Seconds',
  'hero.subtitle': 'Stop Struggling with Digital Overwhelm',
  'hero.description': 'Be part of Cocoon and help it grow into a true \'All-in-one\' extension!',
  'hero.primary': 'Use Cocoon - For Free',
  'hero.demo': 'Try Live Demo',
  
  // Social Proof
  'social.title': 'Trusted by Leading AI Assistants & Me',
  'social.rating': 'I Give It ⭐⭐⭐⭐⭐',
  'social.users': '50K+ Active Users',
  'social.me': 'just me',
  'social.approved': 'AI-Approved Tools',
  'social.friendly': 'User friendly',
  
  // Problems Section
  'problems.title': 'Tired of Digital Chaos Ruining Your Focus?',
  'problems.subtitle': 'You\'re not alone. These pain points destroy productivity and peace of mind for millions every day:',
  'problems.overwhelming.title': 'Overwhelming Websites',
  'problems.overwhelming.desc': 'Too many flashing ads, autoplaying videos, and cluttered interfaces that assault your senses and derail your concentration.',
  'problems.time.title': 'Time Blindness & Procrastination',
  'problems.time.desc': 'Hours disappear into social media scrolls and rabbit holes while important tasks remain undone, creating stress and guilt.',
  'problems.cognitive.title': 'Cognitive Overload',
  'problems.cognitive.desc': 'Your brain feels tired from processing too much information, making it impossible to think clearly or make decisions.',
  'problems.barriers.title': 'Accessibility Barriers',
  'problems.barriers.desc': 'Websites ignore user needs with harsh colors, tiny fonts, and confusing navigation that make browsing painful.',
  'problems.mental.title': 'Mental Health Impact',
  'problems.mental.desc': 'Constant digital overwhelm increases anxiety, depression, and burnout, affecting your real-world relationships and well-being.',
  'problems.cat.title': 'Secret Cat Therapy',
  'problems.cat.desc': 'Sometimes you just need a cute cat to remind you that the internet can still be a wonderful place. 🐱',
  
  // Solutions Section
  'solutions.title': 'Finally, A Digital Sanctuary That Actually Works',
  'solutions.subtitle': 'Cocoon transforms your browsing experience with gentle, intelligent tools designed by someone who truly understands the struggle.',
  'solutions.focus.title': 'Instant Focus Mode',
  'solutions.focus.desc': 'Dim distractions and highlight what matters with one click. Perfect for minds that need visual simplification.',
  'solutions.focus.feat1': 'Adjustable dimming intensity',
  'solutions.focus.feat2': 'Smart content recognition',
  'solutions.focus.feat3': 'Works on ANY website',
  'solutions.focus.feat4': 'Keyboard shortcuts',
  'solutions.focus.try': 'Try Focus Mode',
  'solutions.accessibility.title': 'Sensory-Friendly Controls',
  'solutions.accessibility.desc': 'Customize colors, contrast, motion, and fonts to match your sensory needs. No more eye strain or visual overwhelm.',
  'solutions.accessibility.feat1': 'Real-time color adjustments',
  'solutions.accessibility.feat2': 'Motion reduction settings',
  'solutions.accessibility.feat3': 'Reading-friendly fonts',
  'solutions.accessibility.feat4': 'High contrast modes',
  'solutions.accessibility.try': 'Try Color and Contrast Slider',
  'solutions.notes.title': 'Brain Dump & Memory Aid',
  'solutions.notes.desc': 'Capture fleeting thoughts instantly with voice notes and quick text. Never lose an important idea again.',
  'solutions.notes.feat1': 'Voice recording capability',
  'solutions.notes.feat2': 'Auto bullet-point formatting',
  'solutions.notes.feat3': 'Instant note saving',
  'solutions.notes.feat4': 'Searchable note history',
  'solutions.notes.try': 'Try Brain Dump',
  'solutions.communication.title': 'Communication Support',
  'solutions.communication.desc1': 'Understand',
  'solutions.communication.idiom': 'idioms and sarcasm',
  'solutions.communication.tooltip': 'Figures of speech explained clearly',
  'solutions.communication.desc2': 'with our literal language translator. Navigate social media safely.',
  'solutions.communication.feat1': 'Idiom translation tool tips',
  'solutions.communication.feat2': 'Sarcasm detection',
  'solutions.communication.feat3': 'Comment filtering',
  'solutions.communication.feat4': 'Pre-written responses',
  'solutions.communication.try': 'Try Communication Aid',
  'solutions.soundscapes.title': 'Calming Soundscapes',
  'solutions.soundscapes.desc': 'Block jarring sounds and replace them with peaceful background noise. Create your perfect audio environment.',
  'solutions.soundscapes.feat1': 'Nature sounds library',
  'solutions.soundscapes.feat2': 'White/pink/brown noise',
  'solutions.soundscapes.feat3': 'Volume normalization',
  'solutions.soundscapes.feat4': 'Sound blocking filters',
  'solutions.soundscapes.try': 'Try Background Sounds',
  'solutions.timer.title': 'Gentle Time Management',
  'solutions.timer.desc': 'Draggable Pomodoro timer that follows you across tabs. Visual progress tracking without pressure or stress.',
  'solutions.timer.feat1': 'Customizable work/break periods',
  'solutions.timer.feat2': 'Visual and audio cues',
  'solutions.timer.feat3': 'Cross-tab persistence',
  'solutions.timer.feat4': 'Gentle notifications',
  'solutions.timer.try': 'Try Focus Timer',
  
  // Demo Section
  'demo.title': '🎯 Experience Focus Mode Right Here',
  'demo.desc1': 'This paragraph demonstrates how focus mode works. When you click "Try Focus Mode" below, everything else will dim while this content remains highlighted and easy to read.',
  'demo.desc2': 'You can also test our literal language feature.',
  'demo.idiom1': 'It\'s raining cats and dogs',
  'demo.tooltip1': 'It\'s raining very heavily',
  'demo.desc3': 'outside, but don\'t worry -',
  'demo.idiom2': 'that\'s just a piece of cake',
  'demo.tooltip2': 'that\'s very easy',
  'demo.desc4': 'to understand with our translator!',
  'demo.try': 'Try it:',
  'demo.toggleFocus': 'Toggle Focus Mode',
  'demo.or': 'or',
  'demo.enableLiteral': 'Enable Literal Language',
  
  // Testimonials
  'testimonials.title': 'What REAL Users Are Saying',
  'testimonials.chatgpt.text': 'As an AI assistant, I wish all my users had access to Cocoon\'s focus tools. The user-friendly design is exactly what the internet needs - thoughtful, gentle, and genuinely helpful.',
  'testimonials.chatgpt.role': 'AI Assistant, OpenAI (A Human who isn\'t Biased)',
  'testimonials.claude.text': 'Cocoon solves problems I didn\'t even know I had. The accessibility features are game-changing for anyone who finds standard websites overwhelming. This is how the web should work for everyone.',
  'testimonials.claude.role': 'AI Assistant, Anthropic (Human)',
  'testimonials.bard.text': 'Finally, a browser extension made for people who want a calmer internet experience. The literal language translator alone has saved me countless misunderstandings. Cocoon gets it.',
  'testimonials.bard.role': 'AI Assistant, Google (At least the name sounds human)',
  
  // Use Cases
  'usecases.title': 'Perfect for Every Situation',
  'usecases.work.tab': '🏢 At Work',
  'usecases.study.tab': '📚 Studying',
  'usecases.social.tab': '💬 Social Media',
  'usecases.work.title': 'Maximize Workplace Productivity',
  'usecases.work.desc': 'Turn your browser into a professional powerhouse. Block distractions, customize your reading experience, and maintain laser focus during work hours with enterprise-grade productivity tools.',
  'usecases.work.feat1.bold': 'Smart Website Blocking',
  'usecases.work.feat1.desc': '- automatically blocks social media during work hours',
  'usecases.work.feat2.bold': 'Professional Timer',
  'usecases.work.feat2.desc': '- Pomodoro technique for maximum productivity',
  'usecases.work.feat3.bold': 'Meeting Notes',
  'usecases.work.feat3.desc': '- quick capture without leaving your browser',
  'usecases.work.feat4.bold': 'Professional Typography',
  'usecases.work.feat4.desc': '- optimize fonts for long document reading',
  'usecases.work.try': 'Try Professional Setup',
  'usecases.study.title': 'Deep Focus Learning Environment',
  'usecases.study.desc': 'Create the perfect study bubble. Whether you\'re researching, writing papers, or taking online courses, Cocoon eliminates distractions and enhances concentration with scientifically-designed focus tools.',
  'usecases.study.feat1.bold': 'One Element Focus',
  'usecases.study.feat1.desc': '- dim everything except what you\'re reading',
  'usecases.study.feat2.bold': 'Study Timer',
  'usecases.study.feat2.desc': '- scientifically optimized focus sessions',
  'usecases.study.feat3.bold': 'Research Notes',
  'usecases.study.feat3.desc': '- capture insights and citations instantly',
  'usecases.study.feat4.bold': 'Calm Background Sounds',
  'usecases.study.feat4.desc': '- white noise and nature sounds for concentration',
  'usecases.study.try': 'Try Study Environment',
  'usecases.social.desc': 'Yeah sorry it will be kinda awkward to show all this in a website - just download the extension trust me it\'s good!',
  'usecases.social.feat1': '✅ Set healthy time limits',
  'usecases.social.feat2': '✅ Filter out confrontational language',
  'usecases.social.feat3': '✅ Translate sarcasm and idioms',
  'usecases.social.feat4': '✅ Pre-written responses for difficult situations',
  'usecases.social.try': 'Get Early Access',
  
  // Final CTA
  'cta.title': 'Ready to Experience Cocoon for Free?',
  'cta.desc': 'Join Cocoon and help shape the future of a more productive and accessible browsing. The Extension where your voice matters in creating something extraordinary!',
  'cta.button': 'Get Free Access',
  'cta.urgency': '🌟 Early access edition - help me make it perfect for you!',
  
  // Founder Section
  'founder.label': 'Founder Message',
  'founder.title': 'Built by Someone Who Gets It',
  'founder.greeting': 'Hiyayaya!',
  'founder.intro': 'I\'m the person who made this tool! 😄',
  'founder.honesty': 'Okay, I know some parts of this don\'t exactly scream professionalism, but I wanted to have as much fun as possible making it—otherwise it would\'ve felt like a chore.',
  'founder.why': 'I created this because I was seriously struggling online. I read so many productivity tips that I ended up juggling three different devices, tweaking system settings nonstop, and still not getting anywhere. It got ridiculous.',
  'founder.solution': 'So I figured—why not build a tool that actually solves the problems I was facing? Fast forward through months of learning how to (yes, the learning curve was horrendous), and… well, this is what came out of it! 🎉',
  'founder.hope': 'Anyway, I hope you enjoy using it as much as I enjoyed making it. There\'s a feedback form in the footer—I\'d love to hear your thoughts and keep improving it!',
  'founder.role': 'Cocoon Creator',
  
  // Footer
  'footer.tagline': 'Your digital sanctuary for mindful browsing.',
  'footer.made': 'Made with 💚',
  'footer.support': 'Support',
  'footer.share': 'Share Your Experience',
  'footer.legal': 'Legal',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.copyright': '© 2025 Cocoon. All rights reserved'
},
    fr: {
  // Existing translations
  'sticky.free': 'Utilisation Gratuit',
  'sticky.journey': 'Rejoignez l\'aventure Cocoon ! Vos commentaires m\'aident à créer l\'expérience de navigation parfaite.',
  'sticky.share': 'Partagez Vos idées →',
  'focus.scroll': 'Faites défiler vers le bas pour voir le mode concentration en action !',
  'timer.focus': 'Minuteur de Concentration',
  'timer.start': 'Démarrer',
  'timer.pause': 'Pause',
  'timer.reset': 'Réinitialiser',
  'notes.header': '🧠 Vidage Rapide du Cerveau',
  'notes.placeholder': 'Saisir vos pensées instantanément...',
  'notes.voice': '🎙️ Voix',
  'notes.save': '💾 Enregistrer',
  'notes.undo': '↶ Défaire',
  'accessibility.header': '♿ Accessibilité',
  'accessibility.contrast': 'Contraste',
  'accessibility.saturation': 'Saturation',
  'accessibility.fontSize': 'Taille de Police',
  'noise.header': '🔊 Bruit de Fond',
  'noise.select': 'Sélectionnez un son ambiant...',
  'noise.rain': '🌧️ Pluie',
  'noise.forest': '🌲 Forêt',
  'noise.ocean': '🌊 Vagues de l\'Océan',
  'noise.white': '📻 Bruit Blanc',
  'noise.coffee': '☕ Café',
  'noise.volume': 'Volume',
  'noise.play': '▶️ Lecture',
  'noise.stop': '⏹️ Arrêt',
  'blocker.header': '🚫 Bloqueur de Sites',
  'blocker.placeholder': 'Entrez le site web à bloquer...',
  'blocker.add': '+ Bloquez',
  'blocker.active': '🔒 Blocage est activé',
  'blocker.pause': '⏸️ Pause 5 minutes',
  'font.header': '🔤 Contrôles de Police',
  'font.family': 'Famille de Police',
  'font.default': 'Système par Défaut',
  'font.friendly': 'Police Conviviale',
  'font.size': 'Taille de Police',
  'font.lineHeight': 'Hauteur de Ligne',
  'font.reset': '↺ Réinitialiser ',
  'font.reading': '📖 Mode Lecture',
  'nav.features': 'Fonctionnalités',
  'nav.reviews': 'Avis',
  'nav.founder': 'Message du Fondateur',
  'nav.join': 'Rejoindre l\'Aventure',
  'hero.title': 'Transformez Votre Vie Numérique en 60 Secondes',
  'hero.subtitle': 'Arrêtez de Lutter Contre la Surcharge Numérique',
  'hero.description': 'Rejoignez Cocoon et aidez-la à devenir une véritable extension \'Tout-en-un\' !',
  'hero.primary': 'Utilisez Cocoon - Gratuitement',
  'hero.demo': 'Essayer la Démo en Direct',

  // Missing translations - Social Proof
  'social.title': 'Approuvé par les Assistants IA Leaders & Moi',
  'social.rating': 'Je lui donne ⭐⭐⭐⭐⭐',
  'social.users': 'Plus de cinquante milles Utilisateurs Actifs',
  'social.me': 'juste moi',
  'social.approved': 'Outils Approuvés par l\'IA',
  'social.friendly': 'Convivial',

  // Problems Section
  'problems.title': 'Fatigué du Chaos Numérique qui Ruine Votre Concentration ?',
  'problems.subtitle': 'Vous n\'êtes pas seul. Ces points douloureux détruisent la productivité et la tranquillité d\'esprit de millions de personnes chaque jour :',
  'problems.overwhelming.title': 'Sites Web Accablants',
  'problems.overwhelming.desc': 'Trop de publicités clignotantes, de vidéos à lecture automatique et d\'interfaces encombrées qui agressent vos sens et font dimunuer votre concentration.',
  'problems.time.title': 'Cécité Temporelle et Procrastination',
  'problems.time.desc': 'Les heures disparaissent dans les réseaux sociaux et les terriers de lapin tandis que les tâches importantes restent inachevées, créant stress et culpabilité.',
  'problems.cognitive.title': 'Surcharge Cognitive',
  'problems.cognitive.desc': 'Votre cerveau est fatigué de traiter trop d\'informations, rendant impossible de penser clairement ou de prendre des décisions.',
  'problems.barriers.title': 'Barrières d\'Accessibilité',
  'problems.barriers.desc': 'Les sites web ignorent les besoins des utilisateurs avec des couleurs agressives, des polices minuscules et une navigation confuse qui rendent la navigation douloureuse.',
  'problems.mental.title': 'Impact sur la Santé Mentale',
  'problems.mental.desc': 'La surcharge numérique constante augmente l\'anxiété, la dépression et l\'épuisement, affectant vos relations réelles et votre bien-être.',
  'problems.cat.title': 'Thérapie Secrète par les Chats',
  'problems.cat.desc': 'Parfois, vous avez juste besoin d\'un chat mignon pour vous rappeler qu\'Internet peut encore être un endroit merveilleux. 🐱',

  // Solutions Section
  'solutions.title': 'Enfin, un Sanctuaire Numérique qui Fonctionne Vraiment',
  'solutions.subtitle': 'Cocoon transforme votre expérience de navigation avec des outils doux et intelligents conçus par quelqu\'un qui comprend vraiment la lutte.',
  'solutions.focus.title': 'Mode Concentration Instantané',
  'solutions.focus.desc': 'Atténuez les distractions et mettez en évidence ce qui compte en un clic. Parfait pour les esprits qui ont besoin de simplification visuelle.',
  'solutions.focus.feat1': 'Intensité d\'atténuation ajustable',
  'solutions.focus.feat2': 'Reconnaissance intelligente du contenu',
  'solutions.focus.feat3': 'Fonctionne sur N\'IMPORTE QUEL site web',
  'solutions.focus.feat4': 'Raccourcis clavier',
  'solutions.focus.try': 'Essayer le Mode Concentration',
  'solutions.accessibility.title': 'Contrôles Adaptés aux Sens',
  'solutions.accessibility.desc': 'Personnalisez les couleurs, le contraste, le mouvement et les polices selon vos besoins sensoriels. Fini la fatigue oculaire ou la surcharge visuelle.',
  'solutions.accessibility.feat1': 'Ajustements de couleur en temps réel',
  'solutions.accessibility.feat2': 'Paramètres de réduction de mouvement',
  'solutions.accessibility.feat3': 'Polices conviviales pour la lecture',
  'solutions.accessibility.feat4': 'Modes à contraste élevé',
  'solutions.accessibility.try': 'Essayer le Curseur Couleur et Contraste',
  'solutions.notes.title': 'Vidage de Cerveau & Aide-Mémoire',
  'solutions.notes.desc': 'Capturez instantanément vos pensées fugaces avec des notes vocales et du texte rapide. Ne perdez plus jamais une idée importante.',
  'solutions.notes.feat1': 'Capacité d\'enregistrement vocal',
  'solutions.notes.feat2': 'Formatage automatique en puces',
  'solutions.notes.feat3': 'Sauvegarde instantanée de notes',
  'solutions.notes.feat4': 'Historique de notes consultable',
  'solutions.notes.try': 'Essayer le Vidage de Cerveau',
  'solutions.communication.title': 'Support de Communication',
  'solutions.communication.desc1': 'Comprenez-les',
  'solutions.communication.idiom': 'idiomes et le sarcasme',
  'solutions.communication.tooltip': 'Figures de style expliquées clairement',
  'solutions.communication.desc2': 'avec notre traducteur de langage littéral. Naviguez sur les réseaux sociaux en sécurité.',
  'solutions.communication.feat1': 'Info-bulles de traduction d\'idiomes',
  'solutions.communication.feat2': 'Détection de sarcasme',
  'solutions.communication.feat3': 'Filtrage de commentaires',
  'solutions.communication.feat4': 'Réponses pré-écrites',
  'solutions.communication.try': 'Essayer l\'Aide à la Communication',
  'solutions.soundscapes.title': 'Paysages Sonores Apaisants',
  'solutions.soundscapes.desc': 'Bloquez les sons stridents et remplacez-les par un bruit de fond paisible. Créez votre environnement audio parfait.',
  'solutions.soundscapes.feat1': 'Bibliothèque de sons de la nature',
  'solutions.soundscapes.feat2': 'Bruit blanc/rose/brun',
  'solutions.soundscapes.feat3': 'Normalisation du volume',
  'solutions.soundscapes.feat4': 'Filtres de blocage du son',
  'solutions.soundscapes.try': 'Essayer les Sons d\'Arrière-plan',
  'solutions.timer.title': 'Gestion Douce du Temps',
  'solutions.timer.desc': 'Minuteur Pomodoro déplaçable qui vous suit à travers les onglets. Suivi visuel des progrès sans pression ni stress.',
  'solutions.timer.feat1': 'Périodes de travail/pause personnalisables',
  'solutions.timer.feat2': 'Signaux visuels et audio',
  'solutions.timer.feat3': 'Persistance inter-onglets',
  'solutions.timer.feat4': 'Notifications douces',
  'solutions.timer.try': 'Essayer le Minuteur de Concentration',

  // Demo Section
  'demo.title': '🎯 Expérimentez le Mode Concentration Ici Même',
  'demo.desc1': 'Ce paragraphe démontre comment fonctionne le mode Concentration. Quand vous cliquez sur "Essayer le Mode Concentration" ci-dessous, tout le reste s\'atténuera tandis que ce contenu reste mis en évidence et facile à lire.',
  'demo.desc2': 'Vous pouvez aussi tester notre fonction de langage littéral.',
  'demo.idiom1': 'Il pleut des cordes',
  'demo.tooltip1': 'Il pleut très fort',
  'demo.desc3': 'dehors, mais ne vous inquiétez pas -',
  'demo.idiom2': 'c\'est du gâteau',
  'demo.tooltip2': 'c\'est très facile',
  'demo.desc4': 'à comprendre avec notre traducteur !',
  'demo.try': 'Essayez :',
  'demo.toggleFocus': 'Basculer le Mode Concentration',
  'demo.or': 'ou',
  'demo.enableLiteral': 'Activer le Langage Littéral',

  // Testimonials
  'testimonials.title': 'Ce que Disent les VRAIS Utilisateurs',
  'testimonials.chatgpt.text': 'En tant qu\'assistant IA, j\'aimerais que tous mes utilisateurs aient accès aux outils de concentration de Cocoon. Le design convivial est exactement ce dont Internet a besoin - réfléchi, doux et vraiment utile.',
  'testimonials.chatgpt.role': 'Assistant IA, OpenAI (Un Humain qui n\'est pas Biaisé)',
  'testimonials.claude.text': 'Cocoon résout des problèmes que je ne savais même pas avoir. Les fonctionnalités d\'accessibilité changent la donne pour quiconque trouve les sites web standards accablants. C\'est ainsi que le web devrait fonctionner pour tout le monde.',
  'testimonials.claude.role': 'Assistant IA, Anthropic (Humain)',
  'testimonials.bard.text': 'Enfin, une extension de navigateur faite pour les gens qui veulent une expérience Internet plus calme. Le traducteur de langage littéral seul m\'a évité d\'innombrables malentendus. Cocoon comprend.',
  'testimonials.bard.role': 'Assistant IA, Google (Au moins le nom sonne humain)',

  // Use Cases
  'usecases.title': 'Parfait pour Chaque Situation',
  'usecases.work.tab': '🏢 Au Travail',
  'usecases.study.tab': '📚 Études',
  'usecases.social.tab': '💬 Réseaux Sociaux',
  'usecases.work.title': 'Maximisez la Productivité au Travail',
  'usecases.work.desc': 'Transformez votre navigateur en centrale électrique professionnelle. Bloquez les distractions, personnalisez votre expérience de lecture et maintenez une concentration laser pendant les heures de travail avec des outils de productivité de niveau entreprise.',
  'usecases.work.feat1.bold': 'Blocage Intelligent de Sites Web',
  'usecases.work.feat1.desc': '- bloque automatiquement les réseaux sociaux pendant les heures de travail',
  'usecases.work.feat2.bold': 'Minuteur Professionnel',
  'usecases.work.feat2.desc': '- Technique Pomodoro pour une productivité maximale',
  'usecases.work.feat3.bold': 'Notes de Réunion',
  'usecases.work.feat3.desc': '- capture rapide sans quitter votre navigateur',
  'usecases.work.feat4.bold': 'Typographie Professionnelle',
  'usecases.work.feat4.desc': '- optimise les polices pour la lecture de longs documents',
  'usecases.work.try': 'Essayer la Configuration Professionnelle',
  'usecases.study.title': 'Environnement d\'Apprentissage à concentration Profond',
  'usecases.study.desc': 'Créez la bulle d\'étude parfaite. Que vous fassiez de la recherche, rédigiez des articles ou suiviez des cours en ligne, Cocoon élimine les distractions et améliore la concentration avec des outils de concentration scientifiquement conçus.',
  'usecases.study.feat1.bold': 'Concentrez sur Un Élément',
  'usecases.study.feat1.desc': '- atténue tout sauf ce que vous lisez',
  'usecases.study.feat2.bold': 'Minuteur d\'Étude',
  'usecases.study.feat2.desc': '- sessions de concentration scientifiquement optimisées',
  'usecases.study.feat3.bold': 'Notes de Recherche',
  'usecases.study.feat3.desc': '- capture instantanée d\'insights et de citations',
  'usecases.study.feat4.bold': 'Sons d\'Arrière-plan Calmes',
  'usecases.study.feat4.desc': '- bruit blanc et sons de la nature pour la concentration',
  'usecases.study.try': 'Essayer l\'Environnement d\'Étude',
  'usecases.social.desc': 'Ouais désolé, ce sera un peu gênant de montrer tout ça dans un site web - téléchargez simplement l\'extension, faites-moi confiance, c\'est bien !',
  'usecases.social.feat1': '✅ Définir des limites de temps saines',
  'usecases.social.feat2': '✅ Filtrer le langage conflictuel',
  'usecases.social.feat3': '✅ Traduire le sarcasme et les idiomes',
  'usecases.social.feat4': '✅ Réponses pré-écrites pour les situations difficiles',
  'usecases.social.try': 'Obtenir l\'Accès Anticipé',

  // Final CTA
  'cta.title': 'Prêt à Expérimenter Cocoon Gratuitement ?',
  'cta.desc': 'Rejoignez Cocoon et aidez à façonner l\'avenir d\'une navigation plus productive et accessible. L\'Extension où votre voix compte dans la création de quelque chose d\'extraordinaire !',
  'cta.button': 'Obtenir l\'Accès Gratuit',
  'cta.urgency': '🌟 Édition d\'accès anticipé - aidez-moi à la rendre parfaite pour vous !',

  // Founder Section
  'founder.label': 'Message du Fondateur',
  'founder.title': 'Construit par Quelqu\'un qui Comprend',
  'founder.greeting': 'Salut !',
  'founder.intro': 'Je suis la personne qui a créé cet outil ! 😄',
  'founder.honesty': 'D\'accord, je sais que certaines parties de ceci ne crient pas exactement le professionnalisme, mais je voulais m\'amuser autant que possible en le créant - sinon ça aurait ressemblé à une corvée.',
  'founder.why': 'J\'ai créé ceci parce que je galérais sérieusement en ligne. J\'ai lu tellement de conseils de productivité que j\'ai fini par jongler avec trois appareils différents, peaufiner constamment les paramètres système, et n\'arriver toujours nulle part. C\'est devenu ridicule.',
  'founder.solution': 'Alors j\'ai pensé - pourquoi ne pas construire un outil qui résout réellement les problèmes auxquels je faisais face ? Après des mois d\'apprentissage de comment faire (oui, la courbe d\'apprentissage était horrible), et... eh bien, voici ce qui en est sorti ! 🎉',
  'founder.hope': 'Quoi qu\'il en soit, j\'espère que vous prendrez autant de plaisir à l\'utiliser que j\'en ai eu à le créer. Il y a un formulaire de commentaires dans le pied de page - j\'adorerais entendre vos pensées et continuer à l\'améliorer !',
  'founder.role': 'Créateur de Cocoon',

  // Footer
  'footer.tagline': 'Votre sanctuaire numérique pour une navigation consciente.',
  'footer.made': 'Fait avec 💚',
  'footer.support': 'Support',
  'footer.share': 'Partagez Votre Expérience',
  'footer.legal': 'Légal',
  'footer.privacy': 'Politique de Confidentialité',
  'footer.terms': 'Conditions d\'Utilisation',
  'footer.copyright': '© 2025 Cocoon. Tous droits réservés'
}
};

document.addEventListener('DOMContentLoaded', function() {
  const startTime = performance.now();
  
  detectLanguage();
  switchLanguage(demoState.currentLanguage);
  
  demoState.cachedElements = {
    floatingTimer: document.getElementById('floating-timer'),
    floatingNotes: document.getElementById('floating-notes'),
    floatingAccessibility: document.getElementById('floating-accessibility'),
    floatingNoise: document.getElementById('floating-background-noise'),
    notesPanel: document.getElementById('notes-panel')
  };
  
  setupLazyImageLoading();
  
  setTimeout(() => {
    const loadTime = performance.now() - startTime;
    console.log(`Page initialized in ${loadTime.toFixed(2)}ms`);
    showNotification('🎉 Welcome to Cocoon! Click any demo button to try features!');
  }, 1500);
});

function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
  if (urlLang && translations[urlLang]) {
    demoState.currentLanguage = urlLang;
  } else {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      demoState.currentLanguage = 'fr';
    } else {
      demoState.currentLanguage = 'en';
    }
  }
}

function switchLanguage(lang) {
  if (!translations[lang]) return;

  demoState.currentLanguage = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`).classList.add('active');

  updatePageLanguage();

  // Fix late overwrite issue
  setTimeout(() => {
    updatePageLanguage();
  }, 100);

  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
}

function initializeI18n() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${demoState.currentLanguage}`).classList.add('active');
  
  updatePageLanguage();
}

function updatePageLanguage() {
  const lang = demoState.currentLanguage;
  const t = translations[lang];
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      element.placeholder = t[key];
    }
  });
}

function showFeature(feature, showNotifications = true) {
  hideAllFeatures();
  
  switch(feature) {
    case 'timer':
      initializeTimer();
      document.getElementById('floating-timer').style.display = 'flex';
      demoState.activeFeatures.add('timer');
      break;
    case 'notes':
      initializeNotes();
      document.getElementById('floating-notes').style.display = 'block';
      demoState.activeFeatures.add('notes');
      break;
    case 'accessibility':
      initializeAccessibility();
      document.getElementById('floating-accessibility').style.display = 'block';
      demoState.activeFeatures.add('accessibility');
      break;
    case 'noise':
      document.getElementById('floating-background-noise').style.display = 'block';
      demoState.activeFeatures.add('noise');
      break;
  }
  
  updateControlPanel();
}

function hideAllFeatures() {
  const elements = demoState.cachedElements;
  if (elements) {
    elements.floatingTimer.style.display = 'none';
    elements.floatingNotes.style.display = 'none';
    elements.floatingAccessibility.style.display = 'none';
    elements.floatingNoise.style.display = 'none';
    elements.notesPanel.classList.remove('show');
  } else {
    document.getElementById('floating-timer').style.display = 'none';
    document.getElementById('floating-notes').style.display = 'none';
    document.getElementById('floating-accessibility').style.display = 'none';
    document.getElementById('floating-background-noise').style.display = 'none';
    document.getElementById('notes-panel').classList.remove('show');
  }
  
  document.getElementById('floating-site-blocker').style.display = 'none';
  document.getElementById('floating-font-controls').style.display = 'none';
  
  demoState.activeFeatures.clear();
  updateControlPanel();
}

function hideFeature(feature) {
  switch(feature) {
    case 'timer':
      document.getElementById('floating-timer').style.display = 'none';
      break;
    case 'notes':
      document.getElementById('floating-notes').style.display = 'none';
      document.getElementById('notes-panel').classList.remove('show');
      break;
    case 'accessibility':
      document.getElementById('floating-accessibility').style.display = 'none';
      break;
    case 'noise':
      document.getElementById('floating-background-noise').style.display = 'none';
      stopNoise();
      break;
    case 'site-blocker':
      document.getElementById('floating-site-blocker').style.display = 'none';
      break;
    case 'font-controls':
      document.getElementById('floating-font-controls').style.display = 'none';
      break;
    case 'focus':
      if (demoState.focus.isActive) {
        toggleFocusMode();
      }
      break;
  }
  
  demoState.activeFeatures.delete(feature);
  updateControlPanel();
}

function updateControlPanel() {
  const panel = document.getElementById('feature-control-panel');
  const activeFeaturesList = document.getElementById('active-features-list');
  
  if (demoState.activeFeatures.size > 0) {
    panel.style.display = 'block';
    
    activeFeaturesList.innerHTML = '';
    demoState.activeFeatures.forEach(feature => {
      const chip = document.createElement('div');
      chip.className = 'feature-chip';
      chip.onclick = () => hideFeature(feature);
      chip.title = `Click to disable ${feature}`;
      
      const featureEmojis = {
        'timer': '⏱️',
        'notes': '📝',
        'accessibility': '♿',
        'noise': '🔊',
        'site-blocker': '🚫',
        'font-controls': '🔤',
        'focus': '🎯'
      };
      
      chip.textContent = featureEmojis[feature] || '❓';
      activeFeaturesList.appendChild(chip);
    });
  } else {
    panel.style.display = 'none';
  }
}

function hideControlPanel() {
  // No longer needed since panel doesn't have close button
}

function enableAllDemos() {
  initializeTimer();
  initializeNotes();
  initializeScrollAnimations();
  
  document.getElementById('floating-timer').style.display = 'flex';
  document.getElementById('floating-notes').style.display = 'block';
  document.getElementById('floating-accessibility').style.display = 'block';
  document.getElementById('floating-background-noise').style.display = 'block';
  document.getElementById('floating-font-controls').style.display = 'block';
  
  demoState.activeFeatures.add('timer');
  demoState.activeFeatures.add('notes');
  demoState.activeFeatures.add('accessibility');
  demoState.activeFeatures.add('noise');
  demoState.activeFeatures.add('font-controls');
  
  updateControlPanel();
  showNotification('✨ All demos activated! This is just a preview - the real extension is 10x more powerful!');
}

function initializeTimer() {
  if (!demoState.timer.initialized) {
    updateTimerDisplay();
    setupDraggableTimer();
    demoState.timer.initialized = true;
  }
}

function initializeNotes() {
  if (!demoState.notes.initialized) {
    updateNotesDisplay();
    demoState.notes.initialized = true;
  }
}

function initializeScrollAnimations() {
  if (!demoState.scrollAnimations.initialized) {
    setupScrollAnimations();
    demoState.scrollAnimations.initialized = true;
  }
}

function initializeAccessibility() {
  const panel = document.getElementById('floating-accessibility');
  if (panel) {
    panel.style.display = 'block';
  }
}

function setupScrollAnimations() {
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .step-card, .hero-content').forEach(el => {
      observer.observe(el);
    });
  }
}

function setupLazyImageLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '100px 0px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

function enableLiteralLanguage() {
  if (!demoState.literalLanguage.enabled) {
    demoState.literalLanguage.enabled = true;
    
    document.querySelectorAll('.literal-highlight').forEach(highlight => {
      highlight.classList.add('active');
    });
    
    showNotification('💬 Literal Language activated! Hover over highlighted phrases to see meanings.');
  } else {
    demoState.literalLanguage.enabled = false;
    
    document.querySelectorAll('.literal-highlight').forEach(highlight => {
      highlight.classList.remove('active');
    });
    
    showNotification('💬 Literal Language deactivated.');
  }
}

function showUseCase(caseId) {
  document.querySelectorAll('.use-case-content').forEach(content => {
    content.classList.remove('active');
  });
  
  document.querySelectorAll('.use-case-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const targetContent = document.getElementById(caseId + '-content');
  if (targetContent) {
    targetContent.classList.add('active');
  }
  
  document.querySelectorAll('.use-case-tab').forEach(tab => {
    if (tab.getAttribute('onclick').includes(`'${caseId}'`)) {
      tab.classList.add('active');
    }
  });
}

function setupDraggableTimer() {
  if (demoState.draggableTimer.initialized) return;
  
  const timer = document.getElementById('floating-timer');
  if (!timer) return;
  
  let isDragging = false;
  let startX, startY, initialX, initialY;

  timer.addEventListener('mousedown', initDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);

  function initDrag(e) {
    if (e.target.classList.contains('timer-button')) return;
    
    isDragging = true;
    timer.classList.add('dragging');
    
    startX = e.clientX;
    startY = e.clientY;
    initialX = timer.offsetLeft;
    initialY = timer.offsetTop;
  }

  function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    timer.style.left = (initialX + deltaX) + 'px';
    timer.style.top = (initialY + deltaY) + 'px';
    timer.style.right = 'auto';
    timer.style.bottom = 'auto';
  }

  function stopDrag() {
    isDragging = false;
    timer.classList.remove('dragging');
  }
  
  demoState.draggableTimer.initialized = true;
}

function startTimer() {
  if (!demoState.timer.isRunning) {
    demoState.timer.isRunning = true;
    demoState.timer.interval = setInterval(updateTimer, 2000);
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('pause-btn').style.display = 'inline-block';
    showNotification('⏱️ Focus session started! Stay strong! 💪');
  }
}

function pauseTimer() {
  if (demoState.timer.isRunning) {
    demoState.timer.isRunning = false;
    clearInterval(demoState.timer.interval);
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('pause-btn').style.display = 'none';
    showNotification('⏱️ Timer paused - take a breath');
  }
}

function resetTimer() {
  demoState.timer.isRunning = false;
  clearInterval(demoState.timer.interval);
  demoState.timer.remaining = demoState.timer.duration;
  updateTimerDisplay();
  document.getElementById('start-btn').style.display = 'inline-block';
  document.getElementById('pause-btn').style.display = 'none';
  showNotification('⏱️ Timer reset - ready for a fresh start!');
}

function updateTimer() {
  demoState.timer.remaining -= 2;
  updateTimerDisplay();
  
  if (demoState.timer.remaining <= 0) {
    pauseTimer();
    showNotification('🎉 Amazing work! Time for a well-deserved break! 🌟');
    demoState.timer.remaining = demoState.timer.duration;
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(demoState.timer.remaining / 60);
  const seconds = demoState.timer.remaining % 60;
  document.getElementById('timer-display').textContent = 
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function toggleNotesPanel() {
  const panel = document.getElementById('notes-panel');
  panel.classList.toggle('show');
  
  if (panel.classList.contains('show')) {
    document.getElementById('notes-textarea').focus();
  }
}

function toggleVoiceNote() {
  const btn = document.getElementById('voice-btn');
  
  if (demoState.voice.isRecording) {
    demoState.voice.isRecording = false;
    btn.textContent = '🎙️ Voice';
    btn.classList.remove('recording');
    showNotification('🎙️ Voice note saved! (This is a demo - real version records audio)');
  } else {
    demoState.voice.isRecording = true;
    btn.textContent = '⏹️ Stop';
    btn.classList.add('recording');
    showNotification('🎙️ Recording voice note... (Demo mode)');
    
    setTimeout(() => {
      if (demoState.voice.isRecording) {
        toggleVoiceNote();
      }
    }, 3000);
  }
}

function saveNote() {
  const textarea = document.getElementById('notes-textarea');
  const text = textarea.value.trim();
  
  if (text) {
    const processedText = text.replace(/^\* /gm, '• ');
    
    const newNote = {
      id: Date.now(),
      text: processedText,
      timestamp: new Date().toLocaleTimeString(),
      type: demoState.voice.isRecording ? 'voice' : 'text'
    };
    
    demoState.notes.unshift(newNote);
    demoState.lastDeletedNote = null;
    
    textarea.value = '';
    updateNotesDisplay();
    showUndoButton(false);
    showNotification('📝 Thought captured! Your brain is now lighter. ✨');
  }
}

function undoLastNote() {
  if (demoState.notes.length > 0) {
    demoState.lastDeletedNote = demoState.notes.shift();
    updateNotesDisplay();
    showUndoButton(true);
    showNotification('↶ Last note removed. Click undo again to restore it.');
  } else if (demoState.lastDeletedNote) {
    demoState.notes.unshift(demoState.lastDeletedNote);
    demoState.lastDeletedNote = null;
    updateNotesDisplay();
    showUndoButton(false);
    showNotification('↷ Note restored!');
  }
}

function showUndoButton(show) {
  const undoBtn = document.getElementById('undo-btn');
  if (show && (demoState.notes.length > 0 || demoState.lastDeletedNote)) {
    undoBtn.style.display = 'block';
  } else {
    undoBtn.style.display = 'none';
  }
}

function updateNotesDisplay() {
  const container = document.getElementById('notes-list');
  
  if (demoState.notes.length === 0) {
    container.innerHTML = '<p style="color: var(--neutral-500); font-style: italic; text-align: center; padding: 0.5rem; font-size: 12px;">Brain dump ready...</p>';
    showUndoButton(!!demoState.lastDeletedNote);
    return;
  }
  
  container.innerHTML = demoState.notes.slice(0, 3).map(note => `
    <div class="note-item">
      <div style="font-size: 12px;">${note.type === 'voice' ? '🎙️' : '📝'} ${note.text}</div>
      <div style="font-size: 10px; color: var(--neutral-500); margin-top: 2px;">${note.timestamp}</div>
    </div>
  `).join('');
  
  showUndoButton(true);
}

function updateAccessibility() {
  const contrast = document.getElementById('contrast-slider').value;
  const saturation = document.getElementById('saturation-slider').value;
  
  let accessibilityStyleElement = document.getElementById('accessibility-styles');
  if (!accessibilityStyleElement) {
    accessibilityStyleElement = document.createElement('style');
    accessibilityStyleElement.id = 'accessibility-styles';
    document.head.appendChild(accessibilityStyleElement);
  }
  
  accessibilityStyleElement.textContent = `
    body.accessibility-mode .hero,
    body.accessibility-mode .problems,
    body.accessibility-mode .solutions,
    body.accessibility-mode .testimonials,
    body.accessibility-mode .use-cases,
    body.accessibility-mode .final-cta,
    body.accessibility-mode .founder-section,
    body.accessibility-mode footer,
    body.accessibility-mode .focus-demo-text {
      filter: contrast(${contrast}%) saturate(${saturation}%) !important;
    }
  `;
  
  document.body.classList.add('accessibility-mode');
  
  document.getElementById('contrast-value').textContent = contrast + '%';
  document.getElementById('saturation-value').textContent = saturation + '%';
}

function playNoise() {
  const selector = document.getElementById('noise-selector');
  const type = selector.value;
  
  if (!type) {
    showNotification('🔊 Please select a sound type first');
    return;
  }
  
  stopNoise();
  
  if (!demoState.noise.initialized) {
    try {
      demoState.noise.context = new (window.AudioContext || window.webkitAudioContext)();
      demoState.noise.initialized = true;
    } catch (e) {
      showNotification('🔊 Audio not supported in this browser');
      return;
    }
  }
  
  const ctx = demoState.noise.context;
  
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  switch(type) {
    case 'rain':
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(120, ctx.currentTime);
      break;
    case 'forest':
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(80, ctx.currentTime);
      break;
    case 'ocean':
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(60, ctx.currentTime);
      break;
    case 'white':
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(200, ctx.currentTime);
      break;
    case 'coffee':
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(150, ctx.currentTime);
      break;
  }
  
  const volume = document.getElementById('noise-volume').value / 100 * 0.05;
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.start();
  
  demoState.noise.oscillator = oscillator;
  demoState.noise.gainNode = gainNode;
  demoState.noise.isPlaying = true;
  
  document.getElementById('play-noise').classList.add('active');
  showNotification(`🔊 ${type} sounds playing - find your zen! 🧘‍♀️`);
}

function stopNoise() {
  if (demoState.noise.oscillator) {
    try {
      demoState.noise.oscillator.stop();
    } catch (e) {}
    demoState.noise.oscillator = null;
    demoState.noise.isPlaying = false;
    document.getElementById('play-noise').classList.remove('active');
    showNotification('🔇 Peace and quiet restored');
  }
}

function updateNoiseVolume() {
  const volume = document.getElementById('noise-volume').value;
  document.getElementById('noise-volume-value').textContent = volume + '%';
  
  if (demoState.noise.gainNode) {
    const newVolume = volume / 100 * 0.1;
    demoState.noise.gainNode.gain.setValueAtTime(newVolume, demoState.noise.context.currentTime);
  }
}

function toggleFocusMode() {
  const overlay = document.getElementById('focus-overlay');
  const demoText = document.getElementById('focus-demo-text');
  const arrow = document.getElementById('focus-arrow');
  
  demoState.focus.isActive = !demoState.focus.isActive;
  
  if (demoState.focus.isActive) {
    overlay.classList.add('active');
    demoText.classList.add('focus-mode');
    arrow.classList.add('show');
    demoState.activeFeatures.add('focus');
    showNotification('🎯 Focus mode ON! Everything else fades away... ✨');
    
    setTimeout(() => {
      arrow.classList.remove('show');
    }, 4000);
  } else {
    overlay.classList.remove('active');
    demoText.classList.remove('focus-mode');
    arrow.classList.remove('show');
    demoState.activeFeatures.delete('focus');
    showNotification('🎯 Focus mode OFF - welcome back to the chaos! 😄');
  }
  
  updateControlPanel();
}

let catMessageShown = false;

function showCatMessage(message) {
  if (!catMessageShown) {
    showNotification(message);
    catMessageShown = true;
    setTimeout(() => { catMessageShown = false; }, 10000);
  }
}

function showCatCard() {
  showNotification('🐱 Secret cat discovered! The real extension has SO many more Easter eggs! Meow! 🎉');
}

function triggerTitleFall() {
  const title = document.getElementById('main-title');
  const heroContent = title.closest('.hero-content');
  
  title.classList.add('title-falling');
  
  setTimeout(() => {
    showCat1Reveal();
    showNotification('🎉 SURPRISE! You unlocked the secret cat celebration! 🐱✨');
  }, 1500);
  
  setTimeout(() => {
    title.classList.remove('title-falling');
    title.style.opacity = '1';
  }, 3000);
}

function showCat1Reveal() {
  const catModal = document.createElement('div');
  catModal.className = 'cat1-reveal';
  catModal.innerHTML = `
    <div class="cat-image-container" style="width: 250px; height: 250px; overflow: hidden; border-radius: 16px; margin-bottom: 15px;">
      <img src="cat1.gif" alt="Congratulations Cat!" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
    </div>
    <h3 style="margin: 10px 0; color: var(--primary-dark);">🎉 Congratulations! 🎉</h3>
    <p style="text-align: center; color: var(--neutral-600); margin-bottom: 15px;">You found the secret title interaction!</p>
    <button onclick="closeCat1Reveal()" style="background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s ease;">Close</button>
  `;
  
  document.body.appendChild(catModal);
  
  setTimeout(() => {
    catModal.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    closeCat1Reveal();
  }, 8000);
}

function closeCat1Reveal() {
  const catModal = document.querySelector('.cat1-reveal');
  if (catModal) {
    catModal.classList.remove('show');
    setTimeout(() => {
      if (catModal.parentNode) {
        catModal.parentNode.removeChild(catModal);
      }
    }, 500);
  }
}

function replaceWithCat4() {
  const founderCat = document.getElementById('founder-cat');
  
  founderCat.src = 'cat3.gif';
  founderCat.style.width = '120px';
  founderCat.style.height = '120px';
  founderCat.style.borderRadius = '16px';
  founderCat.style.transform = 'translateX(-50%) scale(1.1)';
  
  showNotification('🐱 The founder cat transformed! Meow-nificent discovery! 🎉✨');
  
  founderCat.style.animation = 'bounce 0.6s ease-in-out';
  
  founderCat.onclick = () => {
    showNotification('🐱 This cat has already been awakened! Find more secrets around the site! 🔍');
  };
}

function showWorkFeatures() {
  showNotification('🏢 Work setup activated! Your distraction-free workspace is ready.');
  
  initializeTimer();
  
  showSiteBlocker();
  showFeature('timer', false);
  showFeature('notes', false);
  showFontControls();
}

function showStudyFeatures() {
  showNotification('📚 Study mode activated! Ready for focused and productive learning.');
  
  initializeTimer();
  
  showSiteBlocker(); 
  showFeature('timer', false);
  showFeature('notes', false);
  toggleFocusMode();
  
  setTimeout(() => {
    const focusDemoElement = document.getElementById('focus-demo-text');
    if (focusDemoElement) {
      focusDemoElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 500);
}

function showWorkFeaturesFixed() {
  showNotification('🏢 Professional workspace activated! Optimized for maximum productivity.');
  
  hideAllFeatures();
  
  initializeTimer();
  initializeNotes();
  
  const timerElement = document.getElementById('floating-timer');
  const notesElement = document.getElementById('floating-notes');
  timerElement.style.display = 'flex';
  notesElement.style.display = 'block';
  
  demoState.activeFeatures.add('timer');
  demoState.activeFeatures.add('notes');
  
  document.getElementById('floating-site-blocker').style.display = 'block';
  demoState.activeFeatures.add('site-blocker');
  
  document.getElementById('floating-font-controls').style.display = 'block';
  demoState.activeFeatures.add('font-controls');
  
  if (demoState.focus.isActive) {
    toggleFocusMode();
  }
  
  updateControlPanel();
}

function showStudyFeaturesFixed() {
  showNotification('📚 Deep focus study environment activated! Perfect for learning.');
  
  hideAllFeatures();
  
  initializeTimer();
  initializeNotes();
  
  const timerElement = document.getElementById('floating-timer');
  const notesElement = document.getElementById('floating-notes');
  timerElement.style.display = 'flex';
  notesElement.style.display = 'block';
  
  demoState.activeFeatures.add('timer');
  demoState.activeFeatures.add('notes');
  
  document.getElementById('floating-background-noise').style.display = 'block';
  demoState.activeFeatures.add('noise');
  
  if (!demoState.focus.isActive) {
    toggleFocusMode();
  }
  
  updateControlPanel();
  
  setTimeout(() => {
    const focusDemoElement = document.getElementById('focus-demo-text');
    if (focusDemoElement) {
      focusDemoElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 500);
}

function showSocialFeatures() {
  // Implementation for social features would go here
}

function showSiteBlocker() {
  document.getElementById('floating-site-blocker').style.display = 'block';
  demoState.activeFeatures.add('site-blocker');
  updateControlPanel();
}

function showFontControls() {
  document.getElementById('floating-font-controls').style.display = 'block';
  demoState.activeFeatures.add('font-controls');
  updateControlPanel();
}

function addBlockedSite() {
  const input = document.getElementById('new-site-input');
  const site = input.value.trim();
  
  if (site && !site.includes(' ')) {
    const listContainer = document.getElementById('blocked-sites-list');
    const siteItem = document.createElement('div');
    siteItem.className = 'site-item';
    siteItem.innerHTML = `
      <span>🚫 ${site}</span>
      <button onclick="removeSite('${site}')" class="remove-btn">×</button>
    `;
    listContainer.appendChild(siteItem);
    input.value = '';
    showNotification(`🚫 ${site} added to block list!`);
  } else {
    showNotification('❌ Please enter a valid website (no spaces)');
  }
}

function removeSite(site) {
  const siteItems = document.querySelectorAll('.site-item');
  siteItems.forEach(item => {
    if (item.textContent.includes(site)) {
      item.remove();
      showNotification(`✅ ${site} removed from block list`);
    }
  });
}

function toggleBlocker() {
  const btn = document.getElementById('blocker-toggle');
  const isActive = btn.classList.contains('active');
  
  if (isActive) {
    btn.classList.remove('active');
    btn.textContent = '🔓 Blocking Disabled';
    showNotification('🔓 Site blocker disabled - access restored');
  } else {
    btn.classList.add('active');
    btn.textContent = '🔒 Blocking Active';
    showNotification('🔒 Site blocker enabled - distracting sites blocked');
  }
}

function pauseBlocker() {
  const btn = document.getElementById('blocker-pause');
  btn.textContent = '⏰ Paused (4:59)';
  showNotification('⏸️ Site blocker paused for 5 minutes');
  
  let countdown = 299;
  const countdownInterval = setInterval(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    btn.textContent = `⏰ Paused (${minutes}:${seconds.toString().padStart(2, '0')})`;
    countdown--;
    
    if (countdown < 0) {
      clearInterval(countdownInterval);
      btn.textContent = '⏸️ Pause 5min';
      showNotification('🔒 Site blocker reactivated');
    }
  }, 1000);
}

function updateFontFamily() {
  const selector = document.getElementById('font-family-selector');
  const selectedFont = selector.value;
  
  if (selectedFont === 'default') {
    document.body.style.fontFamily = '';
  } else {
    document.body.style.fontFamily = selectedFont;
  }
}

function updateFontSize() {
  const slider = document.getElementById('font-size-main');
  const value = slider.value;
  const valueDisplay = document.getElementById('font-size-main-value');
  
  valueDisplay.textContent = value + '%';
  document.body.style.fontSize = value + '%';
}

function updateLineHeight() {
  const slider = document.getElementById('line-height-slider');
  const value = slider.value;
  const valueDisplay = document.getElementById('line-height-value');
  
  valueDisplay.textContent = value + '%';
  document.body.style.lineHeight = (value / 100).toFixed(2);
}

function resetFontSettings() {
  document.body.style.fontFamily = '';
  document.body.style.fontSize = '';
  document.body.style.lineHeight = '';
  
  document.getElementById('font-family-selector').value = 'default';
  document.getElementById('font-size-main').value = 100;
  document.getElementById('line-height-slider').value = 150;
  document.getElementById('font-size-main-value').textContent = '100%';
  document.getElementById('line-height-value').textContent = '150%';
}

function toggleReadingMode() {
  const btn = document.getElementById('reading-mode');
  const isActive = btn.classList.contains('active');
  
  if (isActive) {
    btn.classList.remove('active');
    document.body.classList.remove('reading-mode');
    btn.textContent = '📖 Reading Mode';
  } else {
    btn.classList.add('active');
    document.body.classList.add('reading-mode');
    btn.textContent = '📖 Exit Reading';
    
    if (!document.getElementById('reading-mode-styles')) {
      const readingStyles = document.createElement('style');
      readingStyles.id = 'reading-mode-styles';
      readingStyles.textContent = `
        body.reading-mode {
          background: #f9f9f9 !important;
          line-height: 1.8 !important;
        }
        body.reading-mode p, body.reading-mode li {
          max-width: 700px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          font-size: 110% !important;
        }
      `;
      document.head.appendChild(readingStyles);
    }
  }
}

let notificationQueue = [];
let activeNotifications = [];
const maxActiveNotifications = 2;

function showNotification(message) {
  notificationQueue.push(message);
  processNotificationQueue();
}

function processNotificationQueue() {
  if (notificationQueue.length === 0 || activeNotifications.length >= maxActiveNotifications) {
    return;
  }

  const message = notificationQueue.shift();
  
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: ${80 + (activeNotifications.length * 80)}px;
    right: 20px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: var(--white);
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-xl);
    z-index: 10001;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 320px;
    font-size: 14px;
    border: 2px solid var(--white);
    line-height: 1.4;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  activeNotifications.push(notification);
  
  requestAnimationFrame(() => {
    notification.style.transform = 'translateX(0)';
  });
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      activeNotifications = activeNotifications.filter(n => n !== notification);
      
      activeNotifications.forEach((notif, index) => {
        notif.style.top = `${80 + (index * 80)}px`;
      });
      
      setTimeout(processNotificationQueue, 100);
    }, 300);
  }, 2500);
}

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

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (demoState.focus.isActive) {
      toggleFocusMode();
    }
    document.getElementById('notes-panel').classList.remove('show');
  }
  
  if (e.altKey && e.key === 'n') {
    e.preventDefault();
    showFeature('notes');
    toggleNotesPanel();
  }
  
  if (e.altKey && e.key === 't') {
    e.preventDefault();
    showFeature('timer');
  }
  
  if (e.altKey && e.key === 'f') {
    e.preventDefault();
    toggleFocusMode();
  }
});