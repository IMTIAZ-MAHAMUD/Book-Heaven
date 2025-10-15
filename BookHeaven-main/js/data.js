// js/data.js
// Demo dataset used by the front-end to populate pages.
// Later: Replace these arrays with fetch() calls to PHP endpoints returning JSON (e.g., /api/genres.php, /api/books.php).

const GENRES = [
  { id: "Fantasy", title: "Fantasy", cover: "https://picsum.photos/seed/fantasy/640/360", description: "Magic, quests, & wonder." },
  { id: "SciFi", title: "Science Fiction", cover: "https://picsum.photos/seed/scifi/640/360", description: "Futuristic worlds and tech." },
  { id: "Mystery", title: "Mystery", cover: "https://picsum.photos/seed/mystery/640/360", description: "Whodunits and twists." },
  { id: "NonFic", title: "Non-Fiction", cover: "https://picsum.photos/seed/nonfic/640/360", description: "Real stories & ideas." }
];

const BOOKS = [
  { id: "b1", title: "The Moon's Library", author: "A. Sky", genre: "Fantasy", price: 9.99, rating: 4.6, featured: true, cover: "https://picsum.photos/seed/b1/480/320", blurb: "A traveling librarian finds a hidden collection..." },
  { id: "b2", title: "Quantum Paths", author: "S. Byte", genre: "SciFi", price: 12.50, rating: 4.2, featured: true, cover: "https://picsum.photos/seed/b2/480/320", blurb: "Time folds when you least expect it..." },
  { id: "b3", title: "The Locked Drawer", author: "M. Clue", genre: "Mystery", price: 7.49, rating: 4.0, featured: false, cover: "https://picsum.photos/seed/b3/480/320", blurb: "When a letter appears with no sender..." },
  { id: "b4", title: "Practical Things", author: "K. Sage", genre: "NonFic", price: 15.00, rating: 4.7, featured: true, cover: "https://picsum.photos/seed/b4/480/320", blurb: "How to structure your projects..." },
  { id: "b5", title: "Forest of Maps", author: "L. Tree", genre: "Fantasy", price: 8.00, rating: 3.9, featured: false, cover: "https://picsum.photos/seed/b5/480/320", blurb: "Cartographers get lost in the maps..." }
];
