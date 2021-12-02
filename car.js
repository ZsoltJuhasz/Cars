/*
* File: car.ts
* Author: Juhász Zsolt
* Copyright: 2021, Juhász Zsolt
* Group: Szoft 2 N
* Date: 2021-12-02
* Github: https://github.com/ZsoltJuhasz/
* Licenc: GNU GPL
*/
var Jarmu = /** @class */ (function () {
    function Jarmu() {
    }
    return Jarmu;
}());
var jarmu = new Jarmu();
jarmu.id = 6;
jarmu.plate = "ABC-123";
jarmu.color = "kék";
jarmu.brand = "Suzuki";
jarmu.year = 1996;
jarmu.capacity = 1400;
jarmu.fuel = "benzin";
jarmu.price = 3000000;
jarmu.sold = false;
var myName = "Juhász Zsolt";
console.log(myName);
console.log(jarmu.id, jarmu.plate);
