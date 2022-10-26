/*
Создать класс Car, который имеет поля model, color, year, и методы
engineStart и engineStop.

Методы должны работать по такому принципу: при вызове engineStart,
нужно выводить сообщение «Red Mercedes 2014 engine started»,
используя данные созданной машины. EngineStop должен работать по
такому же принципу.

Нужно создать два разных объекта машин с помощью этого класса, и
вызвать методы этих объектов.

Загрузите ссылку на гитхаб-репозиторий.
*/

class Car{
    constructor(color, model, year){
        this.color = color;
        this.model = model;
        this.year = year;
    };

    engine_start(){
        console.log(`${this.color} ${this.model} ${this.year} engine started`);
    };

    engine_stop(){
        console.log(`${this.color} ${this.model} ${this.year} engine stopped`);
    };
}

let auto_1 = new Car(`Red`, `Mercedes`, `2014`);
auto_1.engine_start();
auto_1.engine_stop();
let auto_2 = new Car(`Black`, `BMW`, `2014`);
auto_2.engine_start();
auto_2.engine_stop();