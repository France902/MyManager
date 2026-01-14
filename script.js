const oggi = new Date();
const dataCalendario = oggi;

function stampaData() {
    document.getElementById("d1").innerHTML = dataCalendario.toLocaleString('en-US', { month: 'short'});
}

stampaData();


function generaGrigliaOraria() {
    const container = document.getElementById('griglia');
    
    container.innerHTML = '';

    for (let ora = 0; ora < 24; ora++) {
        
        const stringaOra = ora.toString().padStart(2, '0') + ':00';

        const cellaOra = document.createElement('div');
        cellaOra.className = 'grid-item';
        cellaOra.style.height = '50px';
        cellaOra.style.border = 'none';
        cellaOra.style.background = 'none';
        cellaOra.textContent = stringaOra;
        container.appendChild(cellaOra);

        
        for (let giorno = 0; giorno < 7; giorno++) {
            const cellaGiorno = document.createElement('div');
            cellaGiorno.className = 'grid-item';
            cellaGiorno.style.backgroundColor = 'white';
            
            cellaGiorno.style.height = '50px'; 
            container.appendChild(cellaGiorno);
        }
    }

const arrayOrari = [...container.children];

const COLONNE = 8;
let isMouseDown = false; 

const coloriVivaci = [
    '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1', 
    '#00F5FF', '#FFD700', '#FF8C00', '#ADFF2F', '#FF00FF'
];


document.addEventListener('mouseup', () => isMouseDown = false);

for (let i = 0; i < arrayOrari.length; i++) {
    
    
    const applicaLogica = (elemento, indice, united = true) => {
        if(elemento.style.backgroundColor != 'white') return;
        elemento.style.backgroundColor = coloriVivaci[Math.floor(Math.random() * coloriVivaci.length)];

        const sopra = indice - COLONNE;
        const sotto = indice + COLONNE;
        if(united) {
            if (sopra >= 0 && arrayOrari[sopra].style.backgroundColor != 'white') {
                elemento.style.backgroundColor = arrayOrari[sopra].style.backgroundColor;
                elemento.style.borderTop = 'solid ' + elemento.style.backgroundColor + ' 1px';
                arrayOrari[sopra].style.borderBottom = 'solid ' + arrayOrari[sopra].style.backgroundColor + ' 1px';
            }
            if (sotto < arrayOrari.length && arrayOrari[sotto].style.backgroundColor != 'white') {
                elemento.style.backgroundColor = arrayOrari[sotto].style.backgroundColor;
                elemento.style.borderBottom = 'solid ' + elemento.style.backgroundColor + ' 1px';
                arrayOrari[sotto].style.borderTop = 'solid ' + arrayOrari[sotto].style.backgroundColor + ' 1px';
            }
        }
    };

    
    arrayOrari[i].addEventListener('mousedown', function(e) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input-cella');
        
        input.addEventListener('mousedown', (e) => e.stopPropagation());
        
        arrayOrari[i].appendChild(input);

        if (e.target.tagName === 'INPUT') return;
        
        isMouseDown = true;
        applicaLogica(this, i, false);
    });

    
    arrayOrari[i].addEventListener('mouseenter', function() {
        if (isMouseDown) {
            applicaLogica(this, i);
        }
    });
}

    generaGrigliaGiorni();
}

function generaGrigliaGiorni() {
    const containerGiorni = document.getElementById('griglia_giorni');
    const arrayGiorni = [...containerGiorni.children];

    for(let i=dataCalendario.getDay();i<7;i++) {
        switch(i) {
            case 0:
                arrayGiorni[i].innerHTML = "Dom";
                break;
            case 1:
                arrayGiorni[i].innerHTML = "Lun";
                break;
            case 2:
                arrayGiorni[i].innerHTML = "Mar";
                break;
            case 3:
                arrayGiorni[i].innerHTML = "Mer";
                break;
            case 4:
                arrayGiorni[i].innerHTML = "Gio";
                break;
            case 5:
                arrayGiorni[i].innerHTML = "Ven";
                break;
            case 6:
                arrayGiorni[i].innerHTML = "Sab";
                break;
        }
        arrayGiorni[i].innerHTML += "<br>" + (dataCalendario.getDate() + (i-dataCalendario.getDay()));
    }

    for(let i=dataCalendario.getDay();i>-1;i--) {
        switch(i) {
            case 0:
                arrayGiorni[i].innerHTML = "Dom";
                break;
            case 1:
                arrayGiorni[i].innerHTML = "Lun";
                break;
            case 2:
                arrayGiorni[i].innerHTML = "Mar";
                break;
            case 3:
                arrayGiorni[i].innerHTML = "Mer";
                break;
            case 4:
                arrayGiorni[i].innerHTML = "Gio";
                break;
            case 5:
                arrayGiorni[i].innerHTML = "Ven";
                break;
            case 6:
                arrayGiorni[i].innerHTML = "Sab";
                break;
        }
        arrayGiorni[i].innerHTML += "<br>" + (dataCalendario.getDate() + (i-dataCalendario.getDay()));
    }
}

function spostaCalendario(direction) {
    if(direction == "right") dataCalendario.setDate(dataCalendario.getDate() + 7);
    else dataCalendario.setDate(dataCalendario.getDate() - 7);
    stampaData();
    generaGrigliaGiorni();
}


window.onload = generaGrigliaOraria;
