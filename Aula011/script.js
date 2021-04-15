function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você ultrapassou o limite de velocidade permitida! <strong>MULTADO.</strong></p>`
    }
    res.innerHTML += `<p>Seja responsável use sempre o sinto de segurança!</p>`
}