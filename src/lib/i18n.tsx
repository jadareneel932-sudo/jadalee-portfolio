import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = string;

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English",    flag: "🇺🇸" },
  { code: "es", label: "Español",    flag: "🇪🇸" },
  { code: "fr", label: "Français",   flag: "🇫🇷" },
  { code: "pt", label: "Português",  flag: "🇧🇷" },
  { code: "de", label: "Deutsch",    flag: "🇩🇪" },
  { code: "it", label: "Italiano",   flag: "🇮🇹" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "pl", label: "Polski",     flag: "🇵🇱" },
  { code: "ro", label: "Română",     flag: "🇷🇴" },
  { code: "cs", label: "Čeština",    flag: "🇨🇿" },
  { code: "hu", label: "Magyar",     flag: "🇭🇺" },
  { code: "sv", label: "Svenska",    flag: "🇸🇪" },
  { code: "no", label: "Norsk",      flag: "🇳🇴" },
  { code: "da", label: "Dansk",      flag: "🇩🇰" },
  { code: "fi", label: "Suomi",      flag: "🇫🇮" },
  { code: "ru", label: "Русский",    flag: "🇷🇺" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "el", label: "Ελληνικά",  flag: "🇬🇷" },
  { code: "tr", label: "Türkçe",     flag: "🇹🇷" },
  { code: "he", label: "עברית",      flag: "🇮🇱" },
  { code: "ar", label: "العربية",    flag: "🇸🇦" },
  { code: "hi", label: "हिन्दी",     flag: "🇮🇳" },
  { code: "bn", label: "বাংলা",      flag: "🇧🇩" },
  { code: "ur", label: "اردو",       flag: "🇵🇰" },
  { code: "zh", label: "中文",        flag: "🇨🇳" },
  { code: "ja", label: "日本語",      flag: "🇯🇵" },
  { code: "ko", label: "한국어",      flag: "🇰🇷" },
  { code: "th", label: "ภาษาไทย",    flag: "🇹🇭" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "id", label: "Indonesia",  flag: "🇮🇩" },
  { code: "ms", label: "Melayu",     flag: "🇲🇾" },
  { code: "tl", label: "Filipino",   flag: "🇵🇭" },
  { code: "sw", label: "Kiswahili",  flag: "🇰🇪" },
];

export const translations = {
  en: {
    nav: { home: "Home", work: "Publications", interviews: "Interviews", photography: "Photography", eventPlanning: "Events", about: "About", contact: "Contact" },
    roles: ["Writer", "Content Creator", "Sports Journalist", "International Development"],
    tagline: '"Small cues. Big transformations."',
    viewWork: "View My Work",
    myStory: "My Story",
    fullStory: "Full Story",
    letsConnect: "Let's Connect",
    readWork: "Read the Work",
    readArticle: "Read Article",
    selectedWork: "Selected Work",
    featuredArticles: "Featured Articles",
    viewAllWork: "View All Work",
    whatReadersSay: "What Readers Say",
    visualPortfolio: "Visual Portfolio",
    inTheField: "In the Field",
    personBehindPen: "The Person Behind the Pen",
    meetMs: "Meet Ms. Lee",
    stayInLoop: "Stay in the Loop",
    neverMissStory: "Never Miss a Story",
    newsletterSub: "Join the community. Get Jada's latest pieces delivered straight to your inbox.",
    subscribe: "Subscribe",
    emailPlaceholder: "your@email.com",
    thankYou: "Thank you — welcome to the community.",
    readyExplore: "Ready to explore the world",
    throughLens: "through Jada's lens?",
    fromSidelines: "From sidelines to op-eds — explore published work, blog posts, and the stories that inspire, move, and connect.",
    scroll: "Scroll",
  },
  es: {
    nav: { home: "Inicio", work: "Trabajo", interviews: "Entrevistas", photography: "Fotografía", eventPlanning: "Planificación de Eventos", about: "Sobre mí", contact: "Contacto" },
    roles: ["Escritora", "Creadora de Contenido", "Periodista Deportiva", "Desarrollo Internacional"],
    tagline: '"Pequeñas señales. Grandes transformaciones."',
    viewWork: "Ver Mi Trabajo",
    myStory: "Mi Historia",
    fullStory: "Historia Completa",
    letsConnect: "Conectémonos",
    readWork: "Leer el Trabajo",
    readArticle: "Leer Artículo",
    selectedWork: "Trabajo Seleccionado",
    featuredArticles: "Artículos Destacados",
    viewAllWork: "Ver Todo el Trabajo",
    whatReadersSay: "Lo Que Dicen los Lectores",
    visualPortfolio: "Portafolio Visual",
    inTheField: "En el Campo",
    personBehindPen: "La Persona Detrás de la Pluma",
    meetMs: "Conoce a Ms. Lee",
    stayInLoop: "Mantente Informado",
    neverMissStory: "No Te Pierdas una Historia",
    newsletterSub: "Únete a la comunidad. Recibe los últimos artículos de Jada directamente en tu bandeja.",
    subscribe: "Suscribirse",
    emailPlaceholder: "tu@email.com",
    thankYou: "Gracias — bienvenido a la comunidad.",
    readyExplore: "¿Listo para explorar el mundo",
    throughLens: "a través de los ojos de Jada?",
    fromSidelines: "Desde las canchas hasta los editoriales — sigue las historias que inspiran y conectan.",
    scroll: "Desplazar",
  },
  fr: {
    nav: { home: "Accueil", work: "Travaux", interviews: "Entretiens", photography: "Photographie", eventPlanning: "Planification d'Événements", about: "À propos", contact: "Contact" },
    roles: ["Écrivaine", "Créatrice de Contenu", "Journaliste Sportive", "Développement International"],
    tagline: '"Petits indices. Grandes transformations."',
    viewWork: "Voir Mon Travail",
    myStory: "Mon Histoire",
    fullStory: "Histoire Complète",
    letsConnect: "Connectons-nous",
    readWork: "Lire le Travail",
    readArticle: "Lire l'Article",
    selectedWork: "Travaux Sélectionnés",
    featuredArticles: "Articles en Vedette",
    viewAllWork: "Voir Tout le Travail",
    whatReadersSay: "Ce que Disent les Lecteurs",
    visualPortfolio: "Portfolio Visuel",
    inTheField: "Sur le Terrain",
    personBehindPen: "La Personne Derrière la Plume",
    meetMs: "Rencontrez Ms. Lee",
    stayInLoop: "Restez Informé",
    neverMissStory: "Ne Manquez Pas une Histoire",
    newsletterSub: "Rejoignez la communauté. Recevez les derniers articles de Jada directement dans votre boîte mail.",
    subscribe: "S'abonner",
    emailPlaceholder: "votre@email.com",
    thankYou: "Merci — bienvenue dans la communauté.",
    readyExplore: "Prêt à explorer le monde",
    throughLens: "à travers le regard de Jada?",
    fromSidelines: "Des terrains aux éditoriaux — suivez les histoires qui inspirent et connectent.",
    scroll: "Défiler",
  },
  pt: {
    nav: { home: "Início", work: "Trabalho", interviews: "Entrevistas", photography: "Fotografia", eventPlanning: "Planejamento de Eventos", about: "Sobre", contact: "Contato" },
    roles: ["Escritora", "Criadora de Conteúdo", "Jornalista Esportiva", "Desenvolvimento Internacional"],
    tagline: '"Pequenas dicas. Grandes transformações."',
    viewWork: "Ver Meu Trabalho",
    myStory: "Minha História",
    fullStory: "História Completa",
    letsConnect: "Vamos Conectar",
    readWork: "Ler o Trabalho",
    readArticle: "Ler Artigo",
    selectedWork: "Trabalho Selecionado",
    featuredArticles: "Artigos em Destaque",
    viewAllWork: "Ver Todo o Trabalho",
    whatReadersSay: "O que os Leitores Dizem",
    visualPortfolio: "Portfólio Visual",
    inTheField: "No Campo",
    personBehindPen: "A Pessoa por Trás da Caneta",
    meetMs: "Conheça a Ms. Lee",
    stayInLoop: "Fique por Dentro",
    neverMissStory: "Não Perca uma História",
    newsletterSub: "Junte-se à comunidade. Receba os últimos artigos de Jada direto na sua caixa de entrada.",
    subscribe: "Inscrever-se",
    emailPlaceholder: "seu@email.com",
    thankYou: "Obrigado — bem-vindo à comunidade.",
    readyExplore: "Pronto para explorar o mundo",
    throughLens: "pelas lentes de Jada?",
    fromSidelines: "Das quadras aos editoriais — siga as histórias que inspiram e conectam.",
    scroll: "Rolar",
  },
  de: {
    nav: { home: "Startseite", work: "Arbeit", interviews: "Interviews", photography: "Fotografie", eventPlanning: "Eventplanung", about: "Über mich", contact: "Kontakt" },
    roles: ["Schriftstellerin", "Content-Creatorin", "Sportjournalistin", "Internationale Entwicklung"],
    tagline: '"Kleine Hinweise. Große Veränderungen."',
    viewWork: "Meine Arbeit ansehen",
    myStory: "Meine Geschichte",
    fullStory: "Vollständiger Artikel",
    letsConnect: "Lass uns verbinden",
    readWork: "Die Arbeit lesen",
    readArticle: "Artikel lesen",
    selectedWork: "Ausgewählte Arbeiten",
    featuredArticles: "Ausgewählte Artikel",
    viewAllWork: "Alle Arbeiten ansehen",
    whatReadersSay: "Was Leser sagen",
    visualPortfolio: "Visuelles Portfolio",
    inTheField: "Im Einsatz",
    personBehindPen: "Die Person hinter der Feder",
    meetMs: "Treffen Sie Ms. Lee",
    stayInLoop: "Bleib auf dem Laufenden",
    neverMissStory: "Verpasse keine Geschichte",
    newsletterSub: "Trete der Community bei. Erhalte Jadas neueste Beiträge direkt in dein Postfach.",
    subscribe: "Abonnieren",
    emailPlaceholder: "deine@email.com",
    thankYou: "Danke — willkommen in der Community.",
    readyExplore: "Bereit, die Welt zu erkunden",
    throughLens: "durch Jadas Objektiv?",
    fromSidelines: "Von der Seitenlinie bis zu Leitartikeln — folge den Geschichten, die inspirieren.",
    scroll: "Scrollen",
  },
  it: {
    nav: { home: "Home", work: "Lavori", interviews: "Interviste", photography: "Fotografia", eventPlanning: "Pianificazione Eventi", about: "Chi sono", contact: "Contatti" },
    roles: ["Scrittrice", "Creatrice di Contenuti", "Giornalista Sportiva", "Sviluppo Internazionale"],
    tagline: '"Piccoli segnali. Grandi trasformazioni."',
    viewWork: "Vedi i Miei Lavori",
    myStory: "La Mia Storia",
    fullStory: "Articolo Completo",
    letsConnect: "Connettiamoci",
    readWork: "Leggi i Lavori",
    readArticle: "Leggi l'Articolo",
    selectedWork: "Lavori Selezionati",
    featuredArticles: "Articoli in Evidenza",
    viewAllWork: "Vedi Tutti i Lavori",
    whatReadersSay: "Cosa Dicono i Lettori",
    visualPortfolio: "Portfolio Visivo",
    inTheField: "Sul Campo",
    personBehindPen: "La Persona Dietro la Penna",
    meetMs: "Incontra Ms. Lee",
    stayInLoop: "Rimani Aggiornato",
    neverMissStory: "Non Perdere una Storia",
    newsletterSub: "Unisciti alla community. Ricevi gli ultimi articoli di Jada direttamente nella tua casella.",
    subscribe: "Iscriviti",
    emailPlaceholder: "tua@email.com",
    thankYou: "Grazie — benvenuto nella community.",
    readyExplore: "Pronto a esplorare il mondo",
    throughLens: "attraverso gli occhi di Jada?",
    fromSidelines: "Dalle tribune agli editoriali — segui le storie che ispirano e connettono.",
    scroll: "Scorri",
  },
};

type Translations = typeof translations;
type FullTranslation = Translations["en"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: FullTranslation;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sc-lang") || "en";
    }
    return "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("sc-lang", l);
  };

  const t: FullTranslation =
    (translations as Record<string, FullTranslation>)[lang] ?? translations.en;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
