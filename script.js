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
            
            cellaGiorno.style.height = '50px'; 
            container.appendChild(cellaGiorno);
        }
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
