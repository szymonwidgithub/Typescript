var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(person.name, person.surname, person.age, person.role);
}
function filterPersons(persons, criteria) {
    var filteredP = persons.filter(function (p) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return p[fieldName] === criteria[fieldName];
        });
    });
    return filteredP;
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log(users.forEach(logPerson));
console.log(admins.forEach(logPerson));
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var newtab = __spreadArray(__spreadArray([], users), admins);
console.log(newtab);
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
var filter25age = newtab.filter(function (p) { return p.age > 25; });
console.log(filter25age.forEach(logPerson));
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
var filtered = filterPersons(newtab, { name: 'Adam' });
console.log(filtered);
