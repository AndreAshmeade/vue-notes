const app = Vue.createApp({
  //data, functions
  template: "<h2> I am the template </h2>",
});

app.mount("#app");

const info = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      showBooks: true,
      books: [
        { title: "name of the wind", author: "patrick rothfuss",  img:'assets/1.jpg', isFav: true},
        { title: "the way of kings", author: "brandon sanderson", img:'assets/2.jpg', isFav: false},
        { title: "the final empire", author: "brandon sanderson", img:'assets/3.jpg', isFav: true},
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      book.showBooks = !this.showBooks;
    },
    toggleFav(book){
      book.isFav = !book.isFav;
    },
  },
    computed:{
      filteredBooks(){
        return this.books.filter((book) => book.isFav); 
      }
    }
});

info.mount("#info");

const area = Vue.createApp({
  data() {
    return {
      showLocation: true,
      country: "United States Of America",
      state: "New Jeresy",
      city: "paterson",
      address: "432 east 23rd Street",
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowArea() {
      this.showLocation = !this.showLocation;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

area.mount("#area");

const counter = Vue.createApp({
  data() {
    return { count: 4 };
  },
});


const vm = counter.mount("#app");

console.log(vm.$data.count); // => 4
console.log(vm.count); // => 4

// Assigning a value to vm.count will also update $data.count
vm.count = 5;
console.log(vm.$data.count); // => 5

// ... and vice-versa
vm.$data.count = 6;
console.log(vm.count); // => 6

// Challenge - Add to Favs
//  - attach a click event to catch li tag (for each book)
//  - when a user clicks an li, toggle the 'isFav' property of that book 












