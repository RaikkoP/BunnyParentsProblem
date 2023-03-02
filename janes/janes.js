function arvuta() {
    let ring = document.getElementById("jooks").value;
    let porgandid = 0;
    let parsed = parseInt(ring)
    if(parsed <= 0){
        document.getElementById(tulemus).innerHTML= `Sisestage mitte negatiivne arv ja proovige uuesti!`;
    }
    while (parsed > 0) {
        if(parsed%2 === 0){
            porgandid += parsed;
        }
        parsed -= 1;
    }
    document.getElementById("tulemus").innerHTML= `Porgandite koguarv on ${porgandid}`;
}