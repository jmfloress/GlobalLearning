function isLanguage(language) {
    aux = false;
    const list1 = [
        { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
        { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
      ];
    for (let i = 0; i < list1.length; i++) {
        if (list1[i].language.toLocaleLowerCase() == language.toLocaleLowerCase()) {
            aux = true;
            break;
        }
    }
    return aux;
}

console.log(isLanguage('java'));