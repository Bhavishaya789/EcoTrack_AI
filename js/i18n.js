/* EcoTrack AI - Internationalization (i18n) */

const translations = {
  en: {
    // Sidebar Navigation
    dashboard: "Dashboard", reports: "Reports", calculator: "Calculator",
    history: "History", aiInsights: "AI Insights", leaderboard: "Leaderboard",
    offsetTools: "Offset Tools", logout: "⬡ Logout",
    // Dashboard Header
    dashboardTitle: "Dashboard", realtime: "REAL-TIME",
    logData: "+ Log Data",
    // EcoScore Section
    yourEcoScore: "Your EcoScore", points: "POINTS",
    dailyStreak: "DAILY STREAK", welcomeMsg: "Welcome! your adventure to Net Zero begins here. Log your first activity.",
    // Impact Breakdown
    impactBreakdown: "Impact Breakdown", thisMonth: "This Month",
    transportation: "TRANSPORTATION", electricity: "ELECTRICITY", dietMeals: "DIET & MEALS",
    // Emission Analytics
    emissionAnalytics: "Emission Analytics",
    // Quick Log
    quickLog: "Quick Log Today", transport: "Transport", food: "Food",
    logTransport: "Log Transport", logFood: "Log Food", logElectricity: "Log Electricity",
    // Recent Activity
    recentActivity: "Recent Activity", noActivity: "No activity yet. Start logging!",
    // AI Tips
    aiTips: "AI Tips", loadingTips: "Loading AI tips...",
    // Leaderboard
    topEcoWarriors: "Top Eco-Warriors", viewAll: "View All",
    // General
    loading: "Loading...", save: "Save", cancel: "Cancel", submit: "Submit",
    today: "Today", week: "This Week", month: "This Month", year: "This Year",
    kg: "kg", co2: "CO₂", score: "Score",
  },
  hi: {
    // Sidebar Navigation
    dashboard: "डैशबोर्ड", reports: "रिपोर्ट", calculator: "कैलकुलेटर",
    history: "इतिहास", aiInsights: "AI अंतर्दृष्टि", leaderboard: "लीडरबोर्ड",
    offsetTools: "ऑफसेट टूल्स", logout: "⬡ लॉगआउट",
    // Dashboard Header
    dashboardTitle: "डैशबोर्ड", realtime: "रियल-टाइम",
    logData: "+ डेटा लॉग करें",
    // EcoScore Section
    yourEcoScore: "आपका ईकोस्कोर", points: "अंक",
    dailyStreak: "दैनिक स्ट्रीक", welcomeMsg: "स्वागत है! नेट ज़ीरो की ओर आपकी यात्रा यहाँ से शुरू होती है। अपनी पहली गतिविधि लॉग करें।",
    // Impact Breakdown
    impactBreakdown: "प्रभाव विश्लेषण", thisMonth: "इस महीने",
    transportation: "परिवहन", electricity: "बिजली", dietMeals: "आहार और भोजन",
    // Emission Analytics
    emissionAnalytics: "उत्सर्जन विश्लेषण",
    // Quick Log
    quickLog: "आज का त्वरित लॉग", transport: "परिवहन", food: "भोजन",
    logTransport: "परिवहन लॉग करें", logFood: "भोजन लॉग करें", logElectricity: "बिजली लॉग करें",
    // Recent Activity
    recentActivity: "हालिया गतिविधि", noActivity: "अभी तक कोई गतिविधि नहीं। लॉग करना शुरू करें!",
    // AI Tips
    aiTips: "AI सुझाव", loadingTips: "AI सुझाव लोड हो रहे हैं...",
    // Leaderboard
    topEcoWarriors: "शीर्ष ईको-योद्धा", viewAll: "सभी देखें",
    // General
    loading: "लोड हो रहा है...", save: "सहेजें", cancel: "रद्द करें", submit: "सबमिट करें",
    today: "आज", week: "इस सप्ताह", month: "इस महीने", year: "इस वर्ष",
    kg: "किग्रा", co2: "CO₂", score: "स्कोर",
  }
};

let currentLang = localStorage.getItem('ecotrack_lang') || 'en';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ecotrack_lang', lang);
  applyTranslations();
  // Update active button style
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.style.background = btn.dataset.lang === lang 
      ? 'var(--primary)' : 'rgba(255,255,255,0.05)';
    btn.style.color = btn.dataset.lang === lang ? '#000' : '#fff';
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// Apply on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  // Style active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.style.background = btn.dataset.lang === currentLang 
      ? 'var(--primary)' : 'rgba(255,255,255,0.05)';
    btn.style.color = btn.dataset.lang === currentLang ? '#000' : '#fff';
  });
});
