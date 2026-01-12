const oggi = new Date();
const dataCalendario = oggi;

function stampaData() {
    document.getElementById("d1").innerHTML = dataCalendario.toLocaleString('en-US', { month: 'short'});
}

stampaData();


function spostaCalendario(direction) {
   
    const contenitore = document.getElementById('griglia');

    const arrayDiDiv = [...contenitore.children];

    arrayDiDiv.forEach(div => {
        div.setAttribute('tabindex', '0'); 
        div.setAttribute('role', 'button'); 
    });

    if(direction == "right") dataCalendario.setMonth(dataCalendario.getMonth() + 1);
    else dataCalendario.setMonth(dataCalendario.getMonth() - 1);

    stampaData();

    if(dataCalendario.getMonth() == 3 || dataCalendario.getMonth() == 5 || dataCalendario.getMonth() == 8 || dataCalendario.getMonth() == 10) {
        arrayDiDiv[30].style.display = 'none';
    } else if(dataCalendario.getMonth() == 1) {
        arrayDiDiv[28].style.display = 'none';
        arrayDiDiv[29].style.display = 'none';
        arrayDiDiv[30].style.display = 'none';
    } else {
        arrayDiDiv[28].style.display = 'block';
        arrayDiDiv[29].style.display = 'block';
        arrayDiDiv[30].style.display = 'block';
    }
}