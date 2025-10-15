// js/genres.js
document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('genres-list');
  if(!container) return;

  GENRES.forEach(g => {
    const el = document.createElement('a');
    el.className = 'card';
    el.href = `genre.html?genre=${encodeURIComponent(g.id)}`;
    el.innerHTML = `
      <img src="${g.cover}" alt="${g.title}" style="width:100%;height:140px;object-fit:cover;border-radius:8px">
      <h3 style="margin-top:10px">${g.title}</h3>
      <p class="muted">${g.description}</p>
    `;
    container.appendChild(el);
  });
});

