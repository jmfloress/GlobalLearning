function isDeveloperLangueage(language) {
    aux = 'There are no ' + language + ' developers in the conference'
    const list1 = [
        { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
        { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
      ];
      for (let i = 0; i < list1.length; i++) {
        if (list1[i].language.toLocaleLowerCase() == language.toLocaleLowerCase()) {
            aux = `${list1[i].firstName} from ${list1[i].country} was the first ${list1[i].language} developer in the conference`;
            break;
        }
    }
    return aux;
}
// console.log(isDeveloperLangueage('C#'));
console.log(isDeveloperLangueage('python'));


