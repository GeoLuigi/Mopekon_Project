export class Mokepon {
    constructor(name, image, health = 3) {
        this.name = name;
        this.image = image;
        this.health = health;
    }
}

export class WaterMokepon extends Mokepon {
    attacks = [
        {name: "💧", id: "water-attack-button"},
        {name: "💧", id: "water-attack-button"},
        {name: "💧", id: "water-attack-button"},
        {name: "🔥", id: "fire-attack-button"},
        {name: "🌱", id: "earth-attack-button"},
    ];
}

export class FireMokepon extends Mokepon {
    attacks = [
        {name: "🔥", id: "fire-attack-button"},
        {name: "🔥", id: "fire-attack-button"},
        {name: "🔥", id: "fire-attack-button"},
        {name: "💧", id: "water-attack-button"},
        {name: "🌱", id: "earth-attack-button"},
    ];
}

export class EarthMokepon extends Mokepon {
    attacks = [
        {name: "🌱", id: "earth-attack-button"},
        {name: "🌱", id: "earth-attack-button"},
        {name: "🌱", id: "earth-attack-button"},
        {name: "🔥", id: "fire-attack-button"},
        {name: "💧", id: "water-attack-button"},
    ];
}