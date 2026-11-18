(function () {
  var LINKEDIN = 'https://www.linkedin.com/in/pranibha-maheshwari-6314421bb/';

  var experience = [
    { id: 'masai', title: 'Senior Content Marketer', org: 'Masai', dates: 'Sep 2025 – Present', dur: '1 yr 3 mos', place: 'On-site', type: 'Full-time', now: true,
      url: 'https://www.linkedin.com/school/14593111/', g: 'linear-gradient(135deg,#e50914,#7a0a10)',
      skills: ['Copywriting', 'Digital Marketing', 'Advertising', 'Analytical Skills', 'Social Media Marketing'] },
    { id: 'ewards', title: 'Marketing Executive', org: 'eWards', dates: 'Sep 2024 – Aug 2025', dur: '1 yr', place: 'Kolkata', type: 'Full-time',
      url: 'https://www.linkedin.com/company/12905082/', g: 'linear-gradient(135deg,#0f6fd6,#0a2f66)',
      skills: ['Social Media Marketing', 'Customer Relationship Management (CRM)', 'Strategic Marketing', 'B2B Marketing Strategy', 'Retail Marketing'] },
    { id: 'zoutons', title: 'SEO Content Writer', org: 'Zoutons.com', dates: 'Jan 2024 – Sep 2024', dur: '9 mos', place: 'India · Hybrid', type: 'Full-time',
      g: 'linear-gradient(135deg,#e08a00,#7a3d00)',
      skills: ['Digital Marketing', 'Web Content Writing', 'Google Analytics', 'Teamwork'] },
    { id: 'teachief', title: 'Junior Research Associate', org: 'The Teachief Academy', dates: 'Dec 2022 – Jan 2024', dur: '1 yr 2 mos', place: 'Kolkata, West Bengal, India · Remote', type: 'Full-time',
      url: 'https://www.linkedin.com/company/78471669/', g: 'linear-gradient(135deg,#1f9d6b,#0b3d2c)',
      skills: ['Academic Journals', 'Teamwork'] },
    { id: 'cdri', title: 'Project Assistant', org: 'Central Drug Research Institute, Lucknow', dates: 'Mar 2022 – Jun 2022', dur: '4 mos', place: 'Lucknow, Uttar Pradesh, India', type: 'Full-time',
      g: 'linear-gradient(135deg,#7b4ae2,#2c1a66)', skills: [] }
  ];

  var education = [
    { id: 'banasthali', title: "Master's degree, Biotechnology", org: 'Banasthali Vidyapith', dates: '2018 – 2020',
      url: 'https://www.linkedin.com/school/15095083/', g: 'linear-gradient(135deg,#c2185b,#560a2b)' },
    { id: 'vivekananda', title: 'B.Sc., Zoology', org: 'Vivekananda College, University of Calcutta', dates: 'Jul 2015 – Jun 2018',
      g: 'linear-gradient(135deg,#00838f,#00323a)' }
  ];

  var skillGroups = [
    { name: 'Content & marketing', list: ['Copywriting', 'Web Content Writing', 'Digital Marketing', 'Social Media Marketing', 'Advertising', 'Strategic Marketing', 'B2B Marketing Strategy', 'Retail Marketing', 'Marketing'] },
    { name: 'Tools & analysis', list: ['Google Analytics', 'Customer Relationship Management (CRM)', 'Microsoft Excel', 'Analytical Skills', 'Research', 'Academic Journals'] },
    { name: 'Working style', list: ['Teamwork', 'Leadership', 'Problem Solving', 'Education', 'English'] }
  ];

  var services = [
    { id: 'seo', title: 'SEO content writing', g: 'linear-gradient(135deg,#e50914,#7a0a10)',
      desc: 'Articles and web pages written to be found and read. Built on her time as an SEO Content Writer at Zoutons.com.',
      roles: ['zoutons'], skills: ['Web Content Writing', 'Google Analytics'] },
    { id: 'copy', title: 'Copywriting', g: 'linear-gradient(135deg,#2f80ed,#0a2f66)',
      desc: 'Marketing copy for campaigns and ads. Part of her current work as Senior Content Marketer at Masai.',
      roles: ['masai'], skills: ['Copywriting', 'Advertising'] },
    { id: 'social', title: 'Social media content', g: 'linear-gradient(135deg,#e08a00,#7a3d00)',
      desc: 'Content and campaigns for social channels, from her roles at Masai and eWards.',
      roles: ['masai', 'ewards'], skills: ['Social Media Marketing'] },
    { id: 'b2b', title: 'B2B and retail marketing', g: 'linear-gradient(135deg,#1f9d6b,#0b3d2c)',
      desc: 'Marketing strategy and customer communication for business and retail brands, from her time at eWards.',
      roles: ['ewards'], skills: ['B2B Marketing Strategy', 'Retail Marketing', 'Customer Relationship Management (CRM)'] },
    { id: 'research', title: 'Research-backed writing', g: 'linear-gradient(135deg,#7b4ae2,#2c1a66)',
      desc: 'Writing that needs accuracy. She has a science degree and worked with academic journals as a Junior Research Associate.',
      roles: ['teachief'], skills: ['Research', 'Academic Journals'] }
  ];

  var profiles = [
    { id: 'hiring', name: 'Hiring Team', sub: 'Recruiters & managers', color: '#e50914',
      tag: 'Open to roles', playLabel: 'Contact on LinkedIn',
      desc: 'Senior Content Marketer at Masai. Started in biotechnology research, moved into SEO writing, then marketing, with five roles across content, SEO, CRM and research. Open any role for details.',
      order: ['experience', 'skills', 'education'] },
    { id: 'client', name: 'Client', sub: 'Freelance services', color: '#f2b705',
      tag: 'Freelance enquiries', playLabel: 'Message on LinkedIn',
      desc: 'Looking for freelance content? Pranibha writes SEO articles, copy, social content and research-backed pieces. See the type of work she does, then message her on LinkedIn.',
      order: ['services', 'experience', 'skills', 'education'] },
    { id: 'guest', name: 'Just Browsing', sub: 'Having a look around', color: '#27ae60',
      tag: 'Welcome', playLabel: 'View LinkedIn',
      desc: 'Pranibha Maheshwari is a content marketer at Masai. Browse her experience, skills and education, or use the search bar to look for something specific.',
      order: ['experience', 'skills', 'education'] }
  ];


  // ---------- illustrations (simple line icons) ----------
  var FULL_NAME = 'PRANIBHA MAHESHWARI';
  var ICONS = {
    pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
    megaphone: '<path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z"/><path d="M15 9a4 4 0 010 6M18 6a8 8 0 010 12"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/>',
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2.5 9 2.5 12 0v-5"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 001.3 2h12.4a1.5 1.5 0 001.3-2L14 9V3"/><path d="M7.5 15h9"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5z"/><path d="M4 19.5A2.5 2.5 0 006.5 22H20v-5"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    sheet: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/>',
    store: '<path d="M3 9l1-5h16l1 5M3 9v11h18V9"/><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 13h18"/>',
    star: '<path d="M12 2l3 7 7 .5-5.5 4.7L18 22l-6-4-6 4 1.5-7.8L2 9.5 9 9z"/>',
    chat: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    leaf: '<path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5-6"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'
  };
  var ICON_FOR = {
    masai: 'megaphone', ewards: 'target', zoutons: 'search', teachief: 'book', cdri: 'flask',
    banasthali: 'flask', vivekananda: 'leaf',
    seo: 'search', copy: 'pen', social: 'share', b2b: 'briefcase', research: 'flask',
    'Copywriting': 'pen', 'Web Content Writing': 'globe', 'Digital Marketing': 'trend', 'Social Media Marketing': 'share',
    'Advertising': 'megaphone', 'Strategic Marketing': 'target', 'B2B Marketing Strategy': 'briefcase', 'Retail Marketing': 'store', 'Marketing': 'megaphone',
    'Google Analytics': 'chart', 'Customer Relationship Management (CRM)': 'heart', 'Microsoft Excel': 'sheet', 'Analytical Skills': 'chart', 'Research': 'flask', 'Academic Journals': 'book',
    'Teamwork': 'users', 'Leadership': 'star', 'Problem Solving': 'bulb', 'Education': 'cap', 'English': 'chat'
  };
  function iconSvg(key, cls) {
    return '<svg class="' + (cls || 'art') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[ICON_FOR[key]] || ICONS.pen) + '</svg>';
  }
  var skillGradSets = [
    ['linear-gradient(135deg,#e50914,#6b0a10)', 'linear-gradient(135deg,#ff6a3d,#8a2410)', 'linear-gradient(135deg,#d81b60,#560a2b)'],
    ['linear-gradient(135deg,#2f80ed,#0a2f66)', 'linear-gradient(135deg,#00a3c4,#04384a)', 'linear-gradient(135deg,#5b5bd6,#1d1d5c)'],
    ['linear-gradient(135deg,#1f9d6b,#0b3d2c)', 'linear-gradient(135deg,#d4a017,#6b4a00)', 'linear-gradient(135deg,#7cb518,#2e4a07)']
  ];
  function skillGrad(name) {
    for (var gi = 0; gi < skillGroups.length; gi++) {
      var ix = skillGroups[gi].list.indexOf(name);
      if (ix > -1) return skillGradSets[gi][ix % 3];
    }
    return skillGradSets[0][0];
  }

  // ---------- arched wordmark ----------
  function archify(el, text, wrap, label) {
    el.setAttribute('aria-label', label || text);
    el.innerHTML = '';
    var n = text.length;
    text.split('').forEach(function (ch, i) {
      var t = n > 1 ? (i / (n - 1)) * 2 - 1 : 0;
      var a = document.createElement('span');
      a.className = 'a'; a.setAttribute('aria-hidden', 'true');
      a.style.setProperty('--y', (-(1 - t * t) * 0.09).toFixed(3) + 'em');
      a.style.setProperty('--r', (t * 3).toFixed(2) + 'deg');
      if (ch === ' ') a.classList.add('sp'); else a.textContent = ch;
      if (wrap) { var l = document.createElement('span'); l.className = 'l'; l.style.setProperty('--i', i); l.appendChild(a); el.appendChild(l); }
      else el.appendChild(a);
    });
  }

  var $ = function (id) { return document.getElementById(id); };
  var store = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
                set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} } };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function skillIndex(name) { var all = skillGroups.reduce(function (a, g) { return a.concat(g.list); }, []); return all.indexOf(name); }
  function rolesFor(skill) { return experience.filter(function (e) { return e.skills.indexOf(skill) > -1; }); }

  // ---------- cards ----------
  function card(kind, item, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.dataset.kind = kind; b.dataset.id = item.id || item;
    if (kind === 'skill') {
      b.className = 'card skill';
      b.style.setProperty('--bg-g', skillGrad(item));
      b.innerHTML = iconSvg(item) + '<span class="ct">' + esc(item) + '</span>';
      var n = rolesFor(item).length;
      if (n) b.innerHTML += '<span class="cs">Used in ' + n + (n === 1 ? ' role' : ' roles') + '</span>';
      b.setAttribute('aria-label', item);
    } else if (kind === 'svc') {
      b.className = 'card';
      b.style.setProperty('--bg-g', item.g);
      b.innerHTML = iconSvg(item.id) + '<span class="ct">' + esc(item.title) + '</span><span class="cs">Type of work</span>';
    } else {
      b.className = 'card';
      b.style.setProperty('--bg-g', item.g);
      b.innerHTML = (item.now ? '<span class="badge">NOW PLAYING</span>' : '') +
        iconSvg(item.id) +
        '<span class="ct">' + esc(item.title) + '</span><span class="cs">' + esc(item.org) + '</span>';
    }
    return b;
  }
  function row(title, kind, items) {
    var s = document.createElement('section');
    s.className = 'row';
    s.id = kind === 'exp' ? 'experience' : kind === 'edu' ? 'education' : 'skills-' + title;
    var h = document.createElement('h3'); h.textContent = title; s.appendChild(h);
    var t = document.createElement('div'); t.className = 'track';
    items.forEach(function (it, i) { t.appendChild(card(kind, it, i)); });
    s.appendChild(t);
    return s;
  }
  function buildRows(profile) {
    var wrap = $('rows'); wrap.innerHTML = '';
    var blocks = {
      experience: function () { wrap.appendChild(row('Career journey', 'exp', experience)); },
      skills: function () {
        skillGroups.forEach(function (g, i) { var r = row(g.name, 'skill', g.list); if (i === 0) r.id = 'skills'; wrap.appendChild(r); });
      },
      education: function () { wrap.appendChild(row('Education', 'edu', education)); },
      services: function () { var r = row('What Pranibha does', 'svc', services); r.id = 'services'; wrap.appendChild(r); }
    };
    profile.order.forEach(function (k) { blocks[k](); });
  }

  // ---------- modal ----------
  var lastFocus = null;
  function openModal(kind, id) {
    var m = $('modal'), art = $('mArt'), title, meta = '', desc = '', tagsLabel = '', tags = [], btns = '', g;
    if (kind === 'svc') {
      var sv = services.filter(function (x) { return x.id === id; })[0];
      g = sv.g; title = sv.title;
      meta = '<span class="match">Type of work</span>';
      desc = sv.desc;
      tagsLabel = 'Where it comes from';
      tags = sv.roles.map(function (r) { var e = experience.filter(function (x) { return x.id === r; })[0]; return { label: e.title + ' · ' + e.org, kind: 'exp', id: r }; })
        .concat(sv.skills.map(function (k) { return { label: k, kind: 'skill', id: k }; }));
      btns = '<a class="btn play" href="' + LINKEDIN + '" target="_blank" rel="noopener">Message on LinkedIn</a>';
    } else if (kind === 'skill') {
      var roles = rolesFor(id);
      g = skillGrad(id); title = id;
      meta = '<span class="match">Skill</span>';
      desc = roles.length ? 'Pranibha has used this skill in ' + roles.length + (roles.length === 1 ? ' role.' : ' roles.') : 'Listed on Pranibha\'s LinkedIn profile.';
      tagsLabel = roles.length ? 'Where it shows up' : '';
      tags = roles.map(function (r) { return { label: r.title + ' · ' + r.org, kind: 'exp', id: r.id }; });
    } else {
      var it = (kind === 'exp' ? experience : education).filter(function (x) { return x.id === id; })[0];
      g = it.g; title = it.title;
      if (kind === 'exp') {
        meta = (it.now ? '<span class="match">Now playing</span>' : '') + '<span>' + esc(it.dates) + '</span><span>' + esc(it.dur) + '</span><span class="rating">' + esc(it.type) + '</span>';
        desc = it.org + ' · ' + it.place;
        tagsLabel = it.skills.length ? 'Skills' : ''; tags = it.skills.map(function (s) { return { label: s, kind: 'skill', id: s }; });
      } else {
        meta = '<span>' + esc(it.dates) + '</span>'; desc = it.org;
      }
      if (it.url) btns = '<a class="btn play" href="' + it.url + '" target="_blank" rel="noopener">View on LinkedIn</a>';
    }
    art.style.setProperty('--bg-g', g);
    $('mArt').innerHTML = iconSvg(id, 'm-icon') + '<span>' + esc(title) + '</span>';
    $('mTitle').textContent = title;
    $('mMeta').innerHTML = meta;
    $('mDesc').textContent = desc;
    $('mTagsLabel').textContent = tagsLabel; $('mTagsLabel').hidden = !tagsLabel;
    var ul = $('mTags'); ul.innerHTML = '';
    tags.forEach(function (t) {
      var li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.textContent = t.label; b.dataset.kind = t.kind; b.dataset.id = t.id;
      b.addEventListener('click', function () { openModal(t.kind, t.id); });
      li.appendChild(b); ul.appendChild(li);
    });
    $('mBtns').innerHTML = btns;
    $('mTitle').parentNode.parentNode.querySelector('.m-art span').setAttribute('aria-hidden', 'true');
    if (m.hidden) lastFocus = document.activeElement;
    m.hidden = false; document.body.style.overflow = 'hidden';
    $('mClose').focus();
  }
  function closeModal() {
    $('modal').hidden = true; document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // ---------- search ----------
  function runSearch(q) {
    q = q.trim().toLowerCase();
    var rows = $('rows'), res = $('results');
    if (!q) { res.hidden = true; rows.hidden = false; return; }
    var grid = $('resultsGrid'); grid.innerHTML = '';
    var n = 0;
    experience.forEach(function (e, i) {
      var hay = [e.title, e.org, e.place, e.dates].concat(e.skills).join(' ').toLowerCase();
      if (hay.indexOf(q) > -1) { grid.appendChild(card('exp', e, i)); n++; }
    });
    education.forEach(function (e) {
      if ([e.title, e.org, e.dates].join(' ').toLowerCase().indexOf(q) > -1) { grid.appendChild(card('edu', e)); n++; }
    });
    skillGroups.forEach(function (g) { g.list.forEach(function (s) {
      if (s.toLowerCase().indexOf(q) > -1) { grid.appendChild(card('skill', s)); n++; }
    }); });
    $('resultsTitle').textContent = n ? 'Results for “' + q + '”' : 'No results for “' + q + '”';
    if (!n) grid.innerHTML = '<p class="empty">Try a skill like “SEO” or a company like “Masai”.</p>';
    rows.hidden = true; res.hidden = false;
    window.scrollTo({ top: 0 });
  }

  // ---------- profiles ----------
  function renderProfilePicker() {
    var ul = $('profileList'); ul.innerHTML = '';
    profiles.forEach(function (p) {
      var li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = '<span class="face" style="--c:' + p.color + '"></span><span class="pname">' + p.name + '</span><span class="psub">' + p.sub + '</span>';
      b.addEventListener('click', function () { pickThen(b, p.id); });
      li.appendChild(b); ul.appendChild(li);
    });
  }
  function chooseProfile(id) {
    var p = profiles.filter(function (x) { return x.id === id; })[0] || profiles[2];
    $('profiles').hidden = true; $('app').hidden = false;
    $('navFace').style.setProperty('--c', p.color);
    $('heroDesc').textContent = p.desc;
    $('heroTag').textContent = p.tag;
    $('heroPlay').lastChild.textContent = ' ' + p.playLabel;
    buildRows(p);
    $('searchInput').value = ''; runSearch('');
    window.scrollTo({ top: 0 });
  }
  var picking = false;
  function pickThen(btn, id) {
    if (picking) return; picking = true;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { playIntro(id); return; }
    $('profiles').classList.add('picked'); btn.classList.add('chosen');
    setTimeout(function () { playIntro(id); }, 850);
  }
  var introTimer = null;
  function playIntro(id) {
    var intro = $('intro'), word = $('introWord');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    archify(word, FULL_NAME, true);
    $('profiles').hidden = true;
    intro.classList.remove('out', 'play'); intro.hidden = false;
    document.body.style.overflow = 'hidden';
    void intro.offsetWidth; intro.classList.add('play');
    var done = false;
    function finish() {
      if (done) return; done = true; clearTimeout(introTimer);
      document.removeEventListener('keydown', finish); intro.removeEventListener('click', finish);
      chooseProfile(id); picking = false;
      intro.classList.add('out');
      setTimeout(function () { intro.hidden = true; document.body.style.overflow = ''; }, reduce ? 200 : 450);
    }
    document.addEventListener('keydown', finish); intro.addEventListener('click', finish);
    introTimer = setTimeout(finish, reduce ? 600 : 2450);
  }
  function showPicker() {
    $('profiles').classList.remove('picked');
    Array.prototype.forEach.call(document.querySelectorAll('.chosen'), function (e) { e.classList.remove('chosen'); });
    $('app').hidden = true; $('profiles').hidden = false;
    $('profiles').querySelector('button').focus();
  }

  // ---------- wire up ----------
  Array.prototype.forEach.call(document.querySelectorAll('.wordmark'), function (el) { archify(el, 'PM', false, 'Pranibha Maheshwari'); });
  renderProfilePicker();
  $('profiles').hidden = false;

  $('switchProfile').addEventListener('click', showPicker);
  $('logo').addEventListener('click', function () { $('searchInput').value = ''; runSearch(''); });
  $('heroInfo').addEventListener('click', function () { openModal('exp', 'masai'); });
  $('mClose').addEventListener('click', closeModal);
  $('modal').addEventListener('click', function (e) { if (e.target === $('modal')) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (!$('modal').hidden) closeModal(); else if ($('search').classList.contains('open') && !$('searchInput').value) $('search').classList.remove('open'); }
  });
  document.addEventListener('click', function (e) {
    var c = e.target.closest && e.target.closest('.card');
    if (c) openModal(c.dataset.kind, c.dataset.id);
  });
  $('searchBtn').addEventListener('click', function () {
    var s = $('search'); s.classList.toggle('open');
    if (s.classList.contains('open')) $('searchInput').focus(); else { $('searchInput').value = ''; runSearch(''); }
  });
  $('searchInput').addEventListener('input', function (e) { runSearch(e.target.value); });
  $('searchInput').addEventListener('blur', function () { if (!this.value) $('search').classList.remove('open'); });
  window.addEventListener('scroll', function () { $('nav').classList.toggle('solid', window.scrollY > 40); }, { passive: true });
})();
