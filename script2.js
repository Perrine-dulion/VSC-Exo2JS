const resultatIf = document.getElementById('resultat_if');
const nb = parseInt(prompt('Encoder une note de 0 à 20'));

if(isNaN(nb)) {
    resultatIf.innerHTML = `Do you speak french? 0 à 20 Kontadit`;
}
else if (nb === 20) {
    resultatIf.innerHTML = `Excellent`;
}
else if(nb >= 17 && nb < 19) {
    resultatIf.innerHTML = `Tres bien`;
}

else if(nb >= 13 && nb < 16) {
    resultatIf.innerHTML = `Bien`;
}

else if(nb >= 10 && nb < 12) {
    resultatIf.innerHTML = `Suffisant`;
}

else if(nb >= 8 && nb < 9) {
    resultatIf.innerHTML = `Insuffisant`;
}

else if(nb >= 0 && nb < 7) {
    resultatIf.innerHTML = `Echec`;
}