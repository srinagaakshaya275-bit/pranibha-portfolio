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
  var skillGrads = ['linear-gradient(135deg,#333,#111)', 'linear-gradient(135deg,#3a3a3a,#161616)'];

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
      b.style.setProperty('--bg-g', skillGrads[skillIndex(item) % 2]);
      b.innerHTML = '<span class="ct">' + esc(item) + '</span>';
      var n = rolesFor(item).length;
      if (n) b.innerHTML += '<span class="cs">Used in ' + n + (n === 1 ? ' role' : ' roles') + '</span>';
      b.setAttribute('aria-label', item);
    } else if (kind === 'svc') {
      b.className = 'card';
      b.style.setProperty('--bg-g', item.g);
      b.innerHTML = '<span class="ct">' + esc(item.title) + '</span><span class="cs">Type of work</span>';
    } else {
      b.className = 'card';
      b.style.setProperty('--bg-g', item.g);
      b.innerHTML = (item.now ? '<span class="badge">NOW PLAYING</span>' : '') +
        (kind === 'exp' ? '<span class="big">' + (i + 1) + '</span>' : '') +
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
      g = skillGrads[skillIndex(id) % 2]; title = id;
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
    $('mArt').innerHTML = '<span>' + esc(title) + '</span>';
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
      b.addEventListener('click', function () { playIntro(p.id); });
      li.appendChild(b); ul.appendChild(li);
    });
  }
  function chooseProfile(id) {
    var p = profiles.filter(function (x) { return x.id === id; })[0] || profiles[2];
    store.set('profile', p.id);
    $('profiles').hidden = true; $('app').hidden = false;
    $('navFace').style.setProperty('--c', p.color);
    $('heroDesc').textContent = p.desc;
    $('heroTag').textContent = p.tag;
    $('heroPlay').lastChild.textContent = ' ' + p.playLabel;
    buildRows(p);
    $('searchInput').value = ''; runSearch('');
    window.scrollTo({ top: 0 });
  }
  var introTimer = null;
  function playIntro(id) {
    var intro = $('intro'), word = $('introWord');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    word.innerHTML = '';
    'PRANIBHA'.split('').forEach(function (ch, i) {
      var sp = document.createElement('span'); sp.className = 'l'; sp.style.setProperty('--i', i); sp.textContent = ch; word.appendChild(sp);
    });
    $('profiles').hidden = true;
    intro.classList.remove('out', 'play'); intro.hidden = false;
    document.body.style.overflow = 'hidden';
    void intro.offsetWidth; intro.classList.add('play');
    var done = false;
    function finish() {
      if (done) return; done = true; clearTimeout(introTimer);
      document.removeEventListener('keydown', finish); intro.removeEventListener('click', finish);
      chooseProfile(id);
      intro.classList.add('out');
      setTimeout(function () { intro.hidden = true; document.body.style.overflow = ''; }, reduce ? 200 : 450);
    }
    document.addEventListener('keydown', finish); intro.addEventListener('click', finish);
    introTimer = setTimeout(finish, reduce ? 600 : 2450);
  }
  function showPicker() {
    $('app').hidden = true; $('profiles').hidden = false;
    $('profiles').querySelector('button').focus();
  }

  // ---------- wire up ----------
  renderProfilePicker();
  var saved = store.get('profile');
  if (saved) chooseProfile(saved); else $('profiles').hidden = false;

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
