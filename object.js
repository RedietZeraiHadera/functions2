// Given an array of objects, each object representing a person with a 
//name and age property, write a function that returns a new array containing the names of 
//all people who are 18 years old or older.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  function old(people) {
    const adults = [];
    for (let i = 0; i < people.length; i++) {
      if (people[i].age >= 18) {
        adults.push(people[i].name);
      }
    }
    return adults;
  }
  const adults = old(people);
console.log(adults);

// write a function that takes an array of objects, where each object represents 
//a product with a name, price, and category property. The function should return 
//an object that groups the products by their categories, with the category names
// as keys and the arrays of products as values.
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
 
function groupProductsByCategory(products) {
  const categories = [...new Set(products.map((product) => product.category))];
  const groupedProducts = {};
  categories.forEach((category) => {
    groupedProducts[category] = products.filter((product) => product.category === category);
  });
  return groupedProducts;
}







//Given an array of objects, where each object represents a student 
//with a name and an array of scores, write a function that returns a
// new array containing the names of all students whose average score is greater than or equal to 85.
const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  function topGrades(students) {
    return students.filter(student => {
      const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
      return average >= 85;
    }).map(student => student.name);
  }
  const topStudents = topGrades(students);
console.log(topStudents);

const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  car.age = function() {
    const currentYear = 2023
    const age = currentYear - this.year;
    return age;
  };
  console.log(car.age());
















