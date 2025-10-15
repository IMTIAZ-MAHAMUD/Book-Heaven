// js/book.js
function q(name){ return new URLSearchParams(location.search).get(name); }

document.addEventListener('DOMContentLoaded', () => {
  const id = q('id');
  const container = document.getElementById('book-page');
  if(!id || !container){
    if(container) container.innerHTML = '<div class="card">Book not found</div>';
    return;
  }

  const book = BOOKS.find(b => b.id === id);
  if(!book){
    container.innerHTML = '<div class="card">Book not found</div>';
    return;
  }

  const html = `
    <aside class="card">
      <img src="${book.cover}" alt="${book.title}" style="width:100%;border-radius:8px;margin-bottom:12px">
      <div><strong>Price:</strong> $${book.price.toFixed(2)}</div>
      <div><strong>Rating:</strong> ${book.rating}</div>
      <div class="book-actions">
        <!-- Later: implement add-to-cart POST to PHP -->
        <button class="btn" onclick="alert('Add to cart (hook to PHP later)')">Add to cart</button>
        <button class="btn btn-outline" onclick="alert('Save to wishlist (server later)')">Save</button>
      </div>
    </aside>

    <section class="card book-meta">
      <h1>${book.title}</h1>
      <p class="muted">by ${book.author} • Genre: <a href="genre.html?genre=${encodeURIComponent(book.genre)}">${book.genre}</a></p>
      <p style="margin-top:12px">${book.blurb}</p>

      <hr style="margin:18px 0">
      <h3>About this demo</h3>
      <p class="muted">This page is client-side only. Replace the JS dataset with an AJAX call to a PHP endpoint to load real content (example below).</p>

      <pre style="background:#f4f6fb;padding:10px;border-radius:8px;font-size:12px;">
// Example: later replace data lookup with fetch to backend:
// fetch('/api/book.php?id=${encodeURIComponent(book.id)}')
//   .then(r => r.json()).then(data => { /* render */ });
      </pre>
    </section>
  `;

  container.innerHTML = html;

  // back link: either go back history or to genre page
  const back = document.getElementById('back-link');
  back.href = `genre.html?genre=${encodeURIComponent(book.genre)}`;
  back.textContent = `← Back to ${book.genre}`;
});

