function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Imagens/foto-manha.png'
        document.body.style.background = '#f2f1ed'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'Imagens/foto-tarde.png'
        document.body.style.background = '#9a655f'
    } else {
        // BOA NOITE!
        img.src = 'Imagens/foto-noite.png'
        document.body.style.background = '#120f15'
    }
}