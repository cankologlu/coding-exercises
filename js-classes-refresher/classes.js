// Shared properties title: string
//                   isCheckedOut: boolean
//                   ratings:[number?]
//         methods getAverageRating();
//                 toggleCheckoutStatus();
//                 addRating();

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(is) {
    this._isCheckedOut = is;
  }
  getAverageRating() {
    if (this._ratings.length === 0) {
      console.log("No ratings yet!");
    } else {
      let averageRating = this._ratings.reduce((acc, curr) => acc);
      return Math.floor(averageRating / this._ratings.length);
    }
  }
  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
    return this._isCheckedout;
  }
  addRating(num) {
    if (typeof num !== "number") {
      console.log("Rating has to be a number!");
    } else {
      this._ratings.push(num);
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
  if (this._songs.length === 0 || this._songs.length === 1) {
    console.log(`There ${this._songs.length === 0 ? "are no songs": "is only 1 song"} in this album`)
  }
    let shuffledSongs = []; //array we return
    let shuffleOrder = []; //array of random numbers to shuffle songs from and follow to push on the list

// Condition to keep on addin into shuffleOrder random numbers
  while (shuffleOrder.length < this._songs.length) {
    // console.log("i am runing")
  let randomNumber = Math.floor(Math.random() * this._songs.length)
  // console.log("shuffleOrderlength is:", shuffleOrder.length)
  // console.log("songs length:", this._songs.length)
  // console.log("shuffleOrder is:", shuffleOrder)
  // console.log("randomNumber is:",randomNumber)
//Condition to check if the generated number exist in our list
 if (!shuffleOrder.includes(randomNumber)) {
   shuffleOrder.push(randomNumber)
 }
continue;
}
// Once while loop is done use forEach to push the songs into shuffledSongs array
// console.log("shuffleOrder before foreEach",shuffleOrder)

shuffleOrder.forEach (songOrderNumber => {shuffledSongs.push(this._songs[songOrderNumber]); });
console.log(shuffleOrder)
return shuffledSongs;
  }
}

const historyOfEverything = new Book(
  "A short History of Nearly Everything",
  "Bill Bryson",
  544
);

// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.isCheckedOut = true;
// console.log(historyOfEverything.isCheckedOut);
// console.log(historyOfEverything.ratings);
// console.log(historyOfEverything.title);
// console.log(historyOfEverything.author);
// console.log(historyOfEverything.pages);
// historyOfEverything.toggleCheckoutStatus()
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.toggleCheckoutStatus()
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating('horse')
// historyOfEverything.addRating(23)
// console.log(historyOfEverything.ratings);
// historyOfEverything.addRating(15)
// historyOfEverything.addRating(39)
// console.log(historyOfEverything.ratings);
// console.log(historyOfEverything.getAverageRating())

const speed = new Movie("Speed", "Jan de Bont", 116);

// console.log(speed.isCheckedOut);
// speed.toggleCheckoutStatus();
// console.log(speed.isCheckedOut);
// speed.isCheckedOut = false;
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log(speed.ratings);
// console.log(speed.getAverageRating());

const album = new CD ("ride the lightning", "metallica", ["fight fire with fire", 'ride the lightning', "fade to black"])

console.log(album.songs)
console.log(album.shuffle())

