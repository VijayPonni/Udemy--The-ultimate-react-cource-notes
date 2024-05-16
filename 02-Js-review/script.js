const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const books = getBooks();

console.log(books);

const bookTitles = books.map((book) => book.title ?? "No TITLE");

console.log(bookTitles);

const essentialData = books.map((book) => {
  const { title, author } = book;
  return {
    title: title ?? "NO",
    author: author ?? "NO",
  };
});

console.log(essentialData);

const booksListAbove500Pages = books.filter((book) => book.pages > 500);
console.log(booksListAbove500Pages);

const booksListBelow500Pages = books.filter((book) => book.pages < 500);
console.log(booksListBelow500Pages);

const adventureBooks = books.filter((book) => {
  const genres = book.genres;
  return genres?.find((genre) => genre === "adventure");
});

console.log(adventureBooks);

const totalPages = books.reduce((acc, book) => {
  console.log(acc);
  console.log(book.pages);
  return acc + book.pages;
}, 0);

console.log(totalPages);

const sortedByPages = books.sort((a, b) => a.pages - b.pages);
console.log(sortedByPages.map((res) => res.title));

// function totalReviewCount(book) {
//   const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
//   const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0;
//   console.log(librarythingCount);
//   return goodreadsCount + librarythingCount;
// }

// console.log(getBook(3));
// console.log(totalReviewCount(getBook(3)));

// Destructuring

// const harryPotterBook = getBook(4);

// harryPotterBook;
// const { author, id, pages, genres } = harryPotterBook;

// genres;

// const [primaryGenre, secondaryGenre] = genres;

// primaryGenre;
// secondaryGenre;

// const gameOfThrones = getBook(5);

// gameOfThrones;

// const { id, author, pages, genres, ...otherDetails } = gameOfThrones;

// const spreadedGameofThrons = {
//   ...gameOfThrones,
//   added_property: "I am added",
//   author: "Vijay S",
// };
// spreadedGameofThrons;

// genres;

// const spreadedGenres = ["", ...genres];

// spreadedGenres;

const newBook = {
  id: 6,
  title: "Velpaari volume-1",
  author: "SU Venkatesan M.P",
};

// const updatedBooks = [...books, newBook];
const addedBooks = books.push(newBook);

books;
addedBooks;

const updatedBooks = books.map((book) =>
  book.id === 6 ? { ...book, title: "Velpaari Combined", pages: 2000 } : book
);
updatedBooks;

*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

// console.log("hi");

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
}
