const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
function namesOld(people){
    const age = [];
    for(let i=0; i<people.length; i++){
        if(people[i].age>=18){
            age.push(people[i].name)
        }
    }
    return age;
}
const old = namesOld(people);
console.log(old);

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
function category(products){
    const grouped = {};
    for(i=0;i<products.length;i++){
        const category = products[i].category;
        if(!grouped[category]){
            grouped[category] = [];
        }
         grouped[category].push(products[i])
    }
    return grouped;
}
const grouped = category(products);
console.log(grouped);


const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];

  function topGrades(students){
    return students.filter(students=>{
        const average = student.scores.reduce
    })
  }
