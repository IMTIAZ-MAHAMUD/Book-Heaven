// js/genre.js
function q(name){
  return new URLSearchParams(location.search).get(name);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const genre = q('genre') || 'Fantasy';
  const title = document.getElementById('genre-title');
  title.textContent = `${genre}`;

  const grid = document.getElementById('books-grid');
  const books = BOOKS.filter(b => b.genre === genre);
  if(books.length === 0){
    grid.innerHTML = `<div class="card">No books found for ${genre}.</div>`;
    return;
  }
  books.forEach(b => {
    const card = document.createElement('a');
    card.className = 'card book-card';
    card.href = `book.html?id=${encodeURIComponent(b.id)}`;
    card.innerHTML = `
      <img src="${b.cover}" alt="${b.title}">
      <div class="title">${b.title}</div>
      <div class="meta">${b.author} • $${b.price.toFixed(2)} • ⭐ ${b.rating}</div>
    `;
    grid.appendChild(card);
  });
});
