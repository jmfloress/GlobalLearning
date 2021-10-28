function allLanguage() {
    aux = true;
    const list = [
        { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
        { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
      ];
    language = list[0].language;
    for (let i = 1; i < list.length; i++) {
        if (list[i].language.toLocaleLowerCase() != language.toLocaleLowerCase()) {
            aux = false;
            break;
        }
    }
    return aux;
}

console.log(allLanguage());