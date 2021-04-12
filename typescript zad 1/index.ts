
class Person{
    imie: string;
    nazwisko: string
    wiek: number
    constructor(imie: string , nazwisko:string , wiek:number){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    show(){
        document.body.innerHTML = `<h1>Hello ${this.imie} ${this.nazwisko} u have ${this.wiek}</h1>`;
    }
    }
 const person1 = new Person("szymon","widera",21);
 person1.show();