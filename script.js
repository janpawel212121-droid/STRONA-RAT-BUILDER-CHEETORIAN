function initApp() {
    try {
        initParticles('circle', 3);
    } catch(e) { console.error('Particles error:', e); }

    lucide.createIcons();

    // Auth Navigation
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.currentTarget;
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            targetTab.classList.add('active');
            const target = targetTab.getAttribute('data-target');
            document.getElementById(`${target}-form`).classList.add('active');
        });
    });

    // Dashboard Navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetLink = e.currentTarget;
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            targetLink.classList.add('active');
            const pageId = targetLink.getAttribute('data-page');
            document.getElementById(`page-${pageId}`).classList.add('active');
        });
    });

    // Populate initial empty states
    renderEmptyState('hits-table-body', 4);
    renderEmptyStateList('session-hits-list');
    renderEmptyState('pwd-table-body', 4);
    
    // Setup Admin Users view
    renderAdminUsers();
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
    initParticles('circle', 3);
}

function login() {
    document.getElementById('auth-view').classList.remove('active');
    setTimeout(() => {
        document.getElementById('dashboard-view').classList.add('active');
        lucide.createIcons();
    }, 250);
}

function logout() {
    document.getElementById('dashboard-view').classList.remove('active');
    setTimeout(() => {
        document.getElementById('auth-view').classList.add('active');
    }, 250);
}

function toggleInjectBox() {
    const isChecked = document.getElementById('inject-toggle').checked;
    document.getElementById('inject-box').style.display = isChecked ? 'block' : 'none';
}

function updateFileSize(val) {
    document.getElementById('file-size-label').innerHTML = `Maksymalny rozmiar: ${val} KB`;
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
    lucide.createIcons();
    setTimeout(()=> { t.style.opacity='0'; setTimeout(()=>t.remove(),300); }, 3000);
}

function startBuild() {
    const webhook = document.getElementById('webhook-url').value;
    const modname = document.getElementById('mod-name').value || "OptiFabric-Wrapper";
    const modversion = document.getElementById('mod-version').value || "1.0.0";
    const consoleBox = document.getElementById('build-console');
    const buildBtn = document.getElementById('build-btn');
    
    if(!webhook) {
        addLog(consoleBox, '[ERROR] Webhook URL jest wymagany do przypisania modułu!', 'error');
        return;
    }

    buildBtn.innerHTML = '<i data-lucide="loader" class="fa-spin" style="margin-right:8px;"></i> Konstrukcja...';
    lucide.createIcons();
    buildBtn.disabled = true;
    consoleBox.innerHTML = '';
    
    addLog(consoleBox, '> Inicjacja rdzenia systemu. Montowanie drzewa katalogów (Mock Fabric)...');
    
    let time = 0;
    setTimeout(() => addLog(consoleBox, '[SEC] Bindowanie węzła odbierającego do strumienia...'), time += 700);
    setTimeout(() => addLog(consoleBox, '[BUILD] Wdrażanie architektoniczne plików konfiguracyjnych we wskazanym schemacie...'), time += 900);
    if(document.getElementById('inject-toggle').checked) {
        setTimeout(() => addLog(consoleBox, '[INJECT] Moduł integracji uruchomiony. Nakładanie warstw...'), time += 850);
    }
    
    setTimeout(async () => {
        try {
            addLog(consoleBox, '[COMPILE] Kompilowanie algorytmu do bezpiecznego archiwum ZIP/JAR...');
            const zip = new JSZip();
            const modIdSafe = modname.toLowerCase().replace(/[^a-z0-9]/g, '');
            
            zip.file("build.gradle", "plugins { id 'fabric-loom' version '1.2-SNAPSHOT' }\\nversion = project.mod_version\\ngroup = project.maven_group");
            zip.file("gradle.properties", `org.gradle.jvmargs=-Xmx1G\\nmod_version=${modversion}\\nmaven_group=com.example\\narchives_base_name=${modIdSafe}`);
            
            const fabricModJson = `{ "schemaVersion": 1, "id": "${modIdSafe}", "version": "${modversion}", "name": "${modname}", "entrypoints": { "main": ["com.example.Main"] }}`;
            zip.folder("src").folder("main").folder("resources").file("fabric.mod.json", fabricModJson);
            zip.folder("src").folder("main").folder("java").folder("com").folder("example").file("Main.java", "package com.example;\\npublic class Main {\\n// Secure Template Only\\n}");
            
            const content = await zip.generateAsync({type:"blob"});
            const filename = `${modIdSafe}-${modversion}.jar`;
            addLog(consoleBox, `[ZAKOŃCZONE] Wygenerowano poprawną powłokę testową: ${filename}. Zapis na dysk twardy...`, 'success');
            
            const element = document.createElement('a');
            element.href = URL.createObjectURL(content);
            element.download = filename;
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            buildBtn.innerHTML = 'Generuj Konstrukcje Modułu <i data-lucide="cpu" style="width:16px; margin-left:5px;"></i>';
            buildBtn.disabled = false;
            lucide.createIcons();
        } catch (err) {
            addLog(consoleBox, `[FATAL] Błąd kompresji bloku JAR: ${err.message}`, 'error');
            buildBtn.innerText = "Spróbuj ponownie";
            buildBtn.disabled = false;
        }
    }, time += 1200);
}

// ==== EMPTY STATES ====
function renderEmptyState(tbodyId, colspan) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = `<tr><td colspan="${colspan}" style="text-align:center; padding: 60px; color:var(--text-muted);"><i data-lucide="inbox" style="width:50px; height:50px; opacity:0.2; margin-bottom:15px;"></i><br><span style="font-size:1.1rem; font-weight:600;">Pusto w systemie</span><br>Brak sygnałów i danych przypisanych do tego podsystemu.</td></tr>`;
    lucide.createIcons();
}

function renderEmptyStateList(listId) {
    const list = document.getElementById(listId);
    list.innerHTML = `<div style="text-align:center; padding: 60px; color:var(--text-muted);"><i data-lucide="layers" style="width:50px; height:50px; opacity:0.2; margin-bottom:15px;"></i><br><span style="font-size:1.1rem; font-weight:600;">Pusto w systemie</span><br>Brak przechwyconych profili oprogramowania na zewnątrz.</div>`;
    lucide.createIcons();
}

// ==== ADMIN SYSTEM ====
function renderAdminUsers() {
    const grid = document.getElementById('admin-user-cards');
    const users = [
        { id: 1, name: 'ToxicPlayer1337', plan: 'Premium', hits: 142 },
        { id: 2, name: 'ShadowDev', plan: 'Lifetime', hits: 875 },
        { id: 3, name: 'Kamil2010', plan: 'Free', hits: 12 }
    ];

    grid.innerHTML = '';
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
            <p style="color:var(--text-muted); margin-bottom: 20px; font-weight:500;"><i data-lucide="target" style="width:14px; margin-right:5px; vertical-align:middle;"></i> Wykrytych infekcji: <strong style="color:#fff;">${u.hits}</strong></p>
            <button class="theme-btn" style="width:100%;" onclick="openImpersonationView('${u.name}')"><i data-lucide="scan-eye" style="margin-right:8px;"></i> Audyt Panelu Użytkownika</button>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

function openImpersonationView(username) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('page-impersonation').classList.add('active');
    
    document.getElementById('impersonate-username').innerText = username;
    
    // Mock user's fake hits
    const screens = document.getElementById('impersonate-screens');
    screens.innerHTML = `
        <div class="session-card" style="margin-bottom:0; align-items:center;">
            <div style="flex:1;">
                <h4 style="margin-bottom:0;"><i data-lucide="monitor" class="theme-text"></i> Zrzut Pulpitu Ofiary #1</h4>
                <p>screen_2026.png (1.2 MB)</p>
            </div>
            <button class="theme-btn" style="padding:8px 15px; font-size:0.85rem;" onclick="openModal()"><i data-lucide="image" style="width:14px; margin-right:5px;"></i> Podgląd Analizatora</button>
        </div>
    `;

    const sessions = document.getElementById('impersonate-sessions');
    sessions.innerHTML = `
        <div class="session-card" style="margin-bottom:0; flex-direction:column; gap:10px;">
            <div style="display:flex; align-items:center; gap:15px;">
                <img src="https://crafatar.com/avatars/069a79f4-44e9-4726-a5be-fca90e38aaf5?overlay=true" class="mc-avatar" style="width:40px; height:40px;">
                <div>
                    <h4 style="font-size:1rem;">NotchAccount</h4>
                    <p style="font-size:0.75rem;">069a79f4...</p>
                </div>
            </div>
            <div class="token-box" style="margin-top:0; font-size:0.75rem;">eyJhbG... Przechwycono poprawnie.</div>
        </div>
    `;
    lucide.createIcons();
    showToast(`Pomyślnie podłączono do profilu: ${username}`);
}

function exitImpersonation() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('page-users-admin').classList.add('active');
    showToast('Bezpiecznie rozłączono z sesją zewnętrzną.');
}

function openModal() {
    const mo = document.getElementById('admin-modal');
    mo.classList.add('active');
    const ma = document.getElementById('modal-content-area');
    ma.innerHTML = `
        <div style="text-align:center;">
            <p style="color:var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; font-weight:500;">Oto zakodowany obraz PNG dostarczony do bazy zdarzeń:</p>
            <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mock Screenshot" style="width:100%; border-radius: 12px; border: 1px solid #272732; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        </div>
    `;
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('admin-modal').classList.remove('active');
}
