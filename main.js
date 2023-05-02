class Ksiazka {
  constructor(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  opiszKsiazke() {
    let przeczytana = "została";

    if (this.isRead === false) {
      przeczytana = "nie została przeczytana";
    }

    return `Książka ma tytuł ${this.title}, autorem jest ${this.author} i ${przeczytana} przeczytana.`;
  }
}

let ksiazka = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", "przeczytana");

let ksiazka1 = new Ksiazka(
  "Harry Potter i Kamień Filozoficzny",
  "J. K. Rowling",
  true
);

let ksiazka2 = new Ksiazka("Władca Pierścieni", "J. R. R. Tolkien", false);

let ksiazka3 = new Ksiazka("Opowieści z Narnii", "C. S. Lewis", false);

let ksiazki = [ksiazka1, ksiazka2, ksiazka3];

const iloscPrzeczytanych = (array) => {
  let przeczytanePozycje = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].isRead === true) {
      przeczytanePozycje++;
    }
    console.log(array[i].opiszKsiazke());
  }
  return przeczytanePozycje;
};

console.log(iloscPrzeczytanych(ksiazki));
