const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

list1.forEach(function(item) {
    let year = new Date().getFullYear() - item.age;
    let user = item.firstName + item.lastName[0].toLocaleLowerCase() + year;
    item.userName = user
})

console.log(list1);