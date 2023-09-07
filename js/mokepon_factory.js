import{EarthMokepon, FireMokepon, WaterMokepon} from "./mokepon_classes.js";

const mokeponInfo = [
    {name: "Hipodoge", image: "./assets/mokepons_mokepon_hipodoge_attack.png", type: "water"},
    {name: "Capipepo", image: "./assets/mokepons_mokepon_capipepo_attack.png", type: "earth"},
    {name: "Ratigueya", image: "./assets/mokepons_mokepon_ratigueya_attack.png", type: "fire"},
];

let mokepons = {};

for (const info of mokeponInfo) {
    let mokepon;

    switch (info.type) {
        case "water":
            mokepon = new WaterMokepon(info.name, info.image, info.health);
            break;
        case "earth":
            mokepon = new EarthMokepon(info.name, info.image, info.health);
            break;
        case "fire":
            mokepon = new FireMokepon(info.name, info.image, info.health);
            break;
    }
    mokepons[info.name.toLowerCase()] = mokepon;
}

export {mokepons};