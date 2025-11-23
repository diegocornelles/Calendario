const calendarEl = document.getElementById('calendar');
const modalBg = document.getElementById('modalBg');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// 24 ejemplos, puedes modificar y personalizar las pistas!
const doors = [
  {
    title: 'Día 1: 🎵 Una pista musical',
    content: `<p>Empieza la cuenta atrás con esta canción navideña:<br>
      <a href="https://www.youtube.com/watch?v=3JWTaaS7LdU" target="_blank">Nat King Cole - The Christmas Song</a></p>`
  },
  {
    title: 'Día 2: ✉️ Un acertijo',
    content: `<p>¿Qué ciudad española es famosa por su Palacio Real y la Puerta del Sol?</p>
      <p><em>Pista: ¡Allí no duermen ni los gatos!</em></p>`
  },
  {
    title: 'Día 3: ❤️ Mensaje romántico',
    content: `<p>Hoy solo quiero recordarte: <br><b>“Contigo, cada día es el mejor regalo.”</b></p>`
  },
  {
    title: 'Día 4: 🌌 Juego visual',
    content: `<p>¿Reconoces este lugar de Madrid?<br>(Busca fotos del Templo de Debod y compáralas)</p>`
  },
  {
    title: 'Día 5: 🥘 Sabor especial',
    content: `<p>Pista... piensa en una tapa muy típica y rica...<br><b>Bocadillo de calamares</b></p>`
  },
  {
    title: 'Día 6: 📷 Imagen misteriosa',
    content: `<p>Busca una foto antigua tuya en Madrid. ¿La tienes?<br>🎁 Pronto veremos más pistas…</p>`
  },
  {
    title: 'Día 7: 🧩 Puzzle',
    content: `<p>Piensa en una letra: inicia la ciudad misteriosa y suena como “M”.</p>`
  },
  {
    title: 'Día 8: 🎬 Cine',
    content: `<p>Busca una película ambientada en la capital de España.<br>¿Te suena "<b>Las chicas del cable</b>"?</p>`
  },
  {
    title: 'Día 9: 👫 Plan juntos',
    content: `<p>¿Qué te gustaría hacer en una gran ciudad llena de luces y sorpresas?<br>¡Pronto tendrás que decidirlo!</p>`
  },
  {
    title: 'Día 10: ☕ Café',
    content: `<p>Imagina un chocolate caliente en una plaza mágica… <br>(¿Plaza Mayor?)</p>`
  },
  {
    title: 'Día 11: 📜 Palabra secreta',
    content: `<p>“Sol” puede ser algo más que un astro en el centro de España…</p>`
  },
  {
    title: 'Día 12: 🥰 Un recuerdo',
    content: `<p>Piensa en nuestro último viaje juntos.<br>Pista: El próximo tiene tren rápido 🚄</p>`
  },
  {
    title: 'Día 13: 🎨 Arte',
    content: `<p>Si fueras a un museo mañana, ¿cuál elegirías?<br>(¿Thyssen, Prado o Reina Sofía?)</p>`
  },
  {
    title: 'Día 14: 🎤 Canción española',
    content: `<p><a href="https://www.youtube.com/watch?v=kXYiU_JCYtU" target="_blank">Escucha esta canción sorpresa</a>. ¡Mañana, más pistas!</p>`
  },
  {
    title: 'Día 15: 🕺 Salida especial',
    content: `<p>Pronto haremos un <b>plan muy especial</b> juntos.<br>¿Te atreverías a bailar en la Gran Vía?</p>`
  },
  {
    title: 'Día 16: 🎄 Navidad',
    content: `<p>Las luces de navidad nos esperan… <br>¿Dónde te gustaría verlas prendidas?</p>`
  },
  {
    title: 'Día 17: 🚇 Viaje',
    content: `<p>Pista clave: El destino tiene <b>Metro</b> y está en el corazón de España.</p>`
  },
  {
    title: 'Día 18: 💌 Poema',
    content: `<p>“En tus ojos encuentro<br>la magia de cada ciudad,<br>pero solo una<br>brilla como la navidad.”</p>`
  },
  {
    title: 'Día 19: 📷 Foto juntos',
    content: `<p>¿Cuál es tu foto favorita juntos?<br>Guárdala, la usaremos pronto…</p>`
  },
  {
    title: 'Día 20: 🛍️ Sorpresa',
    content: `<p>Te espera un paseo por mercados navideños.<br>¿Qué comprarías primero?</p>`
  },
  {
    title: 'Día 21: 🎠 Tradición',
    content: `<p>Dicen que hay que comerse 12 uvas para tener suerte… ¿Dónde lo harías?</p>`
  },
  {
    title: 'Día 22: ✨ Estrella',
    content: `<p>“Sigue la estrella más brillante de la capital.”<br>Pista clave: Está en la bandera de la ciudad.</p>`
  },
  {
    title: 'Día 23: 📍 Última pista',
    content: `<p>Mañana sabrás nuestro destino.<br>¿Te late el corazón tan rápido como el AVE?</p>`
  },
  {
    title: 'Día 24: 🎁 La gran sorpresa',
    content: `<h3 style="color:#c0392b;">¡Nos vamos a Madrid!<br>🎉🚄<br>2 días para vivir una Navidad inolvidable</h3>
      <p style="font-size:1.18em;">Prepara la maleta.<br>Hoy empieza nuestra mejor aventura juntos.</p>`
  },
];

// Crear las 24 puertas
for(let i=0; i<24; i++) {
  const doorEl = document.createElement('button');
  doorEl.classList.add('door');
  doorEl.textContent = i+1;
  doorEl.addEventListener('click', () => {
    const d = doors[i];
    openModal(d.title, d.content);
  });
  calendarEl.appendChild(doorEl);
}

// Modal
function openModal(title, content) {
  modalTitle.innerHTML = title;
  modalBody.innerHTML = content;
  modalBg.classList.add('active');
}

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
  modalBg.classList.remove('active');
});
modalBg.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
});
