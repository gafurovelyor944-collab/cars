// =========================
// CAR DATA
// =========================

const cars = {

    amg: {
        brand: "MERCEDES-AMG",
        name: "AMG GT",
        category: "PERFORMANCE",

        image:
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mercedes-AMG GT — спортивное купе, созданное для высокой динамики. Мощный двигатель, современная аэродинамика и точное управление объединяются в одном автомобиле.",

        power: "585 HP",
        acceleration: "3.2 SEC",
        speed: "315 KM/H",
        drive: "AWD",
        engine: "4.0 V8",
        transmission: "9-SPEED",
        year: "2026"
    },


    gclass: {
        brand: "MERCEDES-BENZ",
        name: "G-CLASS",
        category: "SUV",

        image:
            "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=90",

        description:
            "Mercedes-Benz G-Class сочетает узнаваемый дизайн, высокий уровень комфорта и возможности для движения по сложным дорогам.",

        power: "577 HP",
        acceleration: "4.5 SEC",
        speed: "240 KM/H",
        drive: "AWD",
        engine: "4.0 V8",
        transmission: "9-SPEED",
        year: "2026"
    },


    sclass: {
        brand: "MERCEDES-BENZ",
        name: "S-CLASS",
        category: "LUXURY",

        image:
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=90",

        description:
            "S-Class — флагманский представительский автомобиль, сочетающий роскошный интерьер, современные технологии и высокий уровень комфорта.",

        power: "496 HP",
        acceleration: "4.8 SEC",
        speed: "250 KM/H",
        drive: "4MATIC",
        engine: "3.0 I6",
        transmission: "9-SPEED",
        year: "2026"
    },


    porsche: {
        brand: "PORSCHE",
        name: "911",
        category: "SPORT",

        image:
            "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=90",

        description:
            "Porsche 911 — легендарный спортивный автомобиль с узнаваемым дизайном и высокой точностью управления.",

        power: "480 HP",
        acceleration: "3.7 SEC",
        speed: "308 KM/H",
        drive: "RWD",
        engine: "3.0 FLAT-6",
        transmission: "8-SPEED",
        year: "2026"
    },


    bmw: {
        brand: "BMW",
        name: "M4",
        category: "BMW M",

        image:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=90",

        description:
            "BMW M4 создан для тех, кто ценит спортивный характер, мощность и точное управление.",

        power: "503 HP",
        acceleration: "3.4 SEC",
        speed: "290 KM/H",
        drive: "RWD",
        engine: "3.0 I6",
        transmission: "8-SPEED",
        year: "2026"
    },


    audi: {
        brand: "AUDI",
        name: "RS7",
        category: "QUATTRO",

        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90",

        description:
            "Audi RS7 Sportback объединяет динамику спортивного автомобиля, практичность и фирменную систему полного привода quattro.",

        power: "591 HP",
        acceleration: "3.6 SEC",
        speed: "305 KM/H",
        drive: "QUATTRO",
        engine: "4.0 V8",
        transmission: "8-SPEED",
        year: "2026"
    }

};


// =========================
// OPEN CAR
// =========================

function openCar(carId) {

    const car = cars[carId];

    if (!car) return;


    document.getElementById("modalCarImage").src =
        car.image;

    document.getElementById("modalCarBrand").textContent =
        car.brand;

    document.getElementById("modalCarName").textContent =
        car.name;

    document.getElementById("modalCarCategory").textContent =
        car.category;

    document.getElementById("modalCarDescription").textContent =
        car.description;

    document.getElementById("modalPower").textContent =
        car.power;

    document.getElementById("modalAcceleration").textContent =
        car.acceleration;

    document.getElementById("modalSpeed").textContent =
        car.speed;

    document.getElementById("modalDrive").textContent =
        car.drive;

    document.getElementById("modalEngine").textContent =
        car.engine;

    document.getElementById("modalTransmission").textContent =
        car.transmission;

    document.getElementById("modalYear").textContent =
        car.year;


    document.getElementById("carModal")
        .classList.add("active");


    document.body.style.overflow = "hidden";
}


// =========================
// CLOSE CAR
// =========================

function closeCar() {

    document.getElementById("carModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


// =========================
// CLOSE BY BACKGROUND
// =========================

const carModal =
    document.getElementById("carModal");


if (carModal) {

    carModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeCar();
            }

        }
    );

}


// =========================
// CLOSE BY ESC
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeCar();
        }

    }
);