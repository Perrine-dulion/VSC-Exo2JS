const resultatSwitch = document.getElementById('resultat_switch');
const grade = parseInt(prompt('Encoder une note de 0 à 20'));

switch (grade) {
    case 20: 
        resultatSwitch.innerHTML = 'Excellent'; 
        break;
    case (17-19): 
        resultatSwitch.innerHTML = 'Tres bien'; 
        break;
    case (13-16): 
        resultatSwitch.innerHTML = 'Bien'; 
        break;
    case (10-12): 
        resultatSwitch.innerHTML = 'Suffisant'; 
        break;
    case (8-9): 
        resultatSwitch.innerHTML = 'Insuffisant'; 
        break;
    case (0-7): 
        resultatSwitch.innerHTML = 'Echec'; 
        break;

    default: 
        
        if(isNaN(grade)) 
            resultatSwitch.innerHTML = 'Do you speak french?entre 0 et 20 kontadit'; 
        else 
            resultatSwitch.innerHTML = 'Valeur en dehors du scope !'; 
        break;
}
