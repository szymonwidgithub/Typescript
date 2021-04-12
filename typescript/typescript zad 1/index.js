var Person = (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "<h1>Hello " + this.imie + " " + this.nazwisko + " u have " + this.wiek + "</h1>";
    };
    return Person;
})();
var person1 = new Person("szymon", "widera", 21);
person1.show();
