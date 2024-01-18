const data = {
    "banky": [
        {
            name: "Bank of Springfield",
            location: "123 Main St, Springfield, IL",
            overall_score: 85,
            opening_hours: "9:00 AM - 5:00 PM",
            loan_interest_rate: "3.5%"
        },
        {
            name: "Capital City Bank",
            location: "456 Elm St, Capital City, CA",
            overall_score: 44,
            opening_hours: "8:30 AM - 4:30 PM",
            loan_interest_rate: "4.0%"
        },
        {
            name: "Metro Financial",
            location: "789 Oak St, Metroville, NY",
            overall_score: 92,
            opening_hours: "10:00 AM - 7:00 PM",
            loan_interest_rate: "3.75%"
        },
        {
            name: "Riverside Savings & Loan",
            location: "101 River Rd, Riverside, TX",
            overall_score: 22,
            opening_hours: "9:00 AM - 6:00 PM",
            loan_interest_rate: "3.9%"
        }
    ]
};

let pocetKliknuti = 0;

function zvysujCislo() {
    pocetKliknuti++;
    document.getElementById("pocetKliknuti").innerText = pocetKliknuti;
}


const seznamBankElement = document.getElementById("seznamBank");
const vstupVyhledavani = document.getElementById("vstupVyhledavani");

function vykresliBanky(banky) {
    seznamBankElement.innerHTML = "";
    banky.forEach(banka => {
        const polozkaBanky = document.createElement("li");
        polozkaBanky.className = "polozka-banky";

        const oblibeneTlacitko = document.createElement("span");
        oblibeneTlacitko.className = "oblibene-tlacitko";
        oblibeneTlacitko.innerHTML = "❤️ Oblíbené";
        oblibeneTlacitko.addEventListener('click', () => {
            pridejDoOblibenych(banka);
            zvysujCislo();
        });
        oblibeneTlacitko.addEventListener('click', () => pridejDoOblibenych(banka));

        const tridaSkore = ziskejTriduSkore(banka.overall_score);

        polozkaBanky.innerHTML = `<h3>${banka.name}</h3>
                                      <p>${banka.location}</p>
                                      <p>Celkové skóre: <span class="${tridaSkore}">${banka.overall_score}</span></p>
                                      <p>Otevírací doba: ${banka.opening_hours}</p>
                                      <p>Úroková míra půjčky: ${banka.loan_interest_rate}</p>`;
        polozkaBanky.appendChild(oblibeneTlacitko);
        seznamBankElement.appendChild(polozkaBanky);
    });
}

function pridejDoOblibenych(banka) {
    alert(`Přidáno do oblíbených: ${banka.name}!`);
}

function ziskejTriduSkore(skore) {
    if (skore < 30) {
        return "červená-skóre";
    } else if (skore < 55) {
        return "oranžový-skóre";
    } else {
        return "zelený-skóre";
    }
}

function filtrujBanky(dotaz) {
    const filtrovaneBanky = data.banky.filter(banka => banka.name.toLowerCase().includes(dotaz.toLowerCase()));
    vykresliBanky(filtrovaneBanky);
}


vykresliBanky(data.banky);


vstupVyhledavani.addEventListener("input", (udalost) => {
    filtrujBanky(udalost.target.value);
});