// js/home.js
// Inject featured books from BOOKS (data.js). Simple demo logic.

function createBookCard(book){
  const a = document.createElement('a');
  a.className = 'card book-card';
  a.href = `book.html?id=${encodeURIComponent(book.id)}`;
  a.innerHTML = `
    <img src="${book.cover}" alt="${book.title}">
    <div class="title">${book.title}</div>
    <div class="meta">${book.author} • $${book.price.toFixed(2)} • ⭐ ${book.rating}</div>
  `;
  return a;
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('featured-list');
  if(!list) return;
  const featured = BOOKS.filter(b => b.featured);
  featured.forEach(b => list.appendChild(createBookCard(b)));
});
