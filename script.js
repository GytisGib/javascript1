//pirma programa
// let vidurkis = 8.2;
// let lankomumas = true;

// if(vidurkis>=8.5 && lankomumas){
//     console.log(`Jusu vidurkis yra ${vidurkis} ir lankomumas geras, todel stipendija gausite`);
// } else{
//     console.log("deja, stipendija jums nepriklauso");
// }
//antra programa
// console.log("labas")
// let pajamos = 750;
// let vaikai = 0;

// if(pajamos>=800 && vaikai ===0){
// console.log("sveikinu paskola gausite");

// } else if(pajamos>=1000 && vaikai ===1){
// console.log("paskola gausite");

// } else if(pajamos>= 1200 && vaikai ===2){
//     console.log("paskola gausite taip pat");

// }else{
//     console.log("negausite paskolos");
// }
console.log("Metu laikai")
let menuo = "Sausi";
switch (menuo){
    case `Gruodis`:
    case `Sausis`:
    case `Vasaris`:
    console.log(`tu ivedei ${menuo}, tai yra ziemos menesis`);
break;
    case `Kovas`:
    case `Balandis`:
    case `Geguze`:
    console.log(`tu ivedei ${menuo}, tai yra pavasario menesis`);
break;
    case `Birzelis`:
    case `Liepa`:
    case `Rugpjutis`:
    console.log(`tu ivedei ${menuo}, tai yra vasaros menesis`);
break;
    case `Rugsejis`:
    case `Spalis`:
    case `Lapkritis`:
    console.log(`tu ivedei ${menuo}, tai yra rudens menesis`);
    break;
    default:
        console.log("Tokio menesio nera")
}

