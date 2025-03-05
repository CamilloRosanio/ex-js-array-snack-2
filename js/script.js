/***********************************************************************
# DATA
***********************************************************************/

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];



/***********************************************************************
# SNACK 1
***********************************************************************/

function somma(a, b) {
    return a + b;
}

const longBooks = books.filter(book => {
    return book.pages > 300;
})
// console.log('Libri con 300+ pagine:', longBooks);

const longBooksTitles = longBooks.map(book => book.title);
// console.log('Titoli dei libri con 300+ pagine:', longBooksTitles);

// longBooksTitles.forEach(title => console.log('Stampa ciclica di ogni singolo titolo:', title));



/***********************************************************************
# SNACK 2
***********************************************************************/

const availableBooks = books.filter(book => {
    return book.available === true;
})
console.log('Libri disponibili:', availableBooks);

// VERSIONE INIZIALE
// const discountedBooks = availableBooks.map(book => {
//     const priceArray = book.price.split('');
//     const cifre = priceArray.filter(char => !isNaN(char));
//     const prezzo = Number(cifre.join(''));
//     const prezzoScontato = (prezzo * 0.8).toFixed(2);
//     const prezzoEuro = prezzoScontato + '€';
//     return { ...book, price: prezzoEuro }
// });

// VERSIONE COMPATTA
const discountedBooks = availableBooks.map(book => ({
    ...book,
    price: (Number(book.price.replace('€', '').trim()) * 0.8).toFixed(2) + '€'
}));


console.log('Libri disponibili scontati del 20%:', discountedBooks);

const fullPricedBook = discountedBooks.find(book => Number(book.price.replace('€', '').trim()) % 1 === 0);

console.log('Primo libro disponibile con prezzo intero:', fullPricedBook);