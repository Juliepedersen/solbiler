const biler = [
    {
        bilmaerke: "Ford",
        billede: "images/ford.jpg",
        billedtekst: "Billede af bil",
        kategori: "Budget",
        personer: "4",
        kufferter: "0",
        lejepris: "DKK1400,00"
    },
    {
        bilmaerke: "Mazda",
        billede: "images/mazda.jpg",
        billedtekst: "Billede af bil",
        kategori: "Mellemklasse",
        personer: "5",
        kufferter: "3",
        lejepris: "DKK1600,00"
    },
    {
        bilmaerke: "BMW",
        billede: "images/bmw.jpg",
        billedtekst: "Billede af bil",
        kategori: "Mellemstor",
        personer: "6",
        kufferter: "4",
        lejepris: "DKK1800,00"
    }
];

const sektion = document.getElementById('bil_sektion');
const skabelon = document.getElementById('skabelon_output');
const personer = document.getElementById('personer');
const kufferter = document.getElementById('kufferter');
const formular = document.getElementById('formular');
const afhentningsdato = document.getElementById('afhentning');
const afleveringsdato = document.getElementById('aflevering');

formular.addEventListener("submit", function (event) {
    event.preventDefault();
    if (valideDatoer(afhentningsdato.value, afleveringsdato.value)) {
        sektion.innerHTML = ""; 
        for (const bil of biler) {
            if (kufferter.value <= bil.kufferter && personer.value <= bil.personer) {
                const klon = skabelon.content.cloneNode(true);
                const bilMM = klon.querySelector(".bilMM");
                const billedtag = klon.querySelector("img");
                const kategori = klon.querySelector(".kategori");
                const antalpersoner = klon.querySelector(".antalpersoner");
                const antalkufferter = klon.querySelector(".antalkufferter");
                const lejeudgift = klon.querySelector(".lejeudgift");

                billedtag.src = bil.billede;
                billedtag.alt = bil.billedtekst;
                bilMM.textContent = bil.bilmaerke;
                kategori.textContent += bil.kategori;
                antalkufferter.textContent += bil.kufferter;
                antalpersoner.textContent += bil.personer;
                lejeudgift.textContent = bil.lejepris;

                sektion.appendChild(klon);
            }
        }
    } else {
        sektion.innerText = "Afleveringsdatoen skal ligge efter afhentingsdatoen.";
    }

})

function valideDatoer(afhentningsdato, afleveringsdato) {
    const afhentning = new Date(afhentningsdato);
    const aflevering = new Date(afleveringsdato);
    if (afhentning > aflevering) {
        return false;
    } else {
        return true;
    }
}


