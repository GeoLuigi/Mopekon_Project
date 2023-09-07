import{Mokepon} from "mokepon_classes.js";

const mokeponInfo = [
    {name: "Hipodoge", image: "./assets/mokepons_mokepon_hipodoge_attack.png"},
    {name: "Capipepo", image: "./assets/mokepons_mokepon_capipepo_attack.png"},
    {name: "Ratigueya", image: "./assets/mokepons_mokepon_ratigueya_attack.png"}
];

let mokepons = {};

for (const info of mokeponInfo) {
    let mokepon = new Mokepon(info.name, info.image, info.health);
    mokepons[info.name.toLowerCase()] = mokepon;
}

// Adding attacks to mokepons

console.log();