

function media(formulario) {

    formulario.addEventListener('click', (e) => {
        e.preventDefault()
    })  

    n1 = parseFloat(formulario.nota1.value)
    n2 = parseFloat(formulario.nota2.value)
    n3 = parseFloat(formulario.nota3.value)
    n4 = parseFloat(formulario.nota4.value)

    const somaNotas = n1 + n2 + n3 + n4
    const media = somaNotas / 4

    let situacao

    console.log(somaNotas)
    console.log(media)

    if (media >= 6) situacao = 'Aprovado'
    if (media <4 ) situacao = 'Reprovado'
    if (media >=4 && media<6) situacao = 'IFA'

    document.getElementById('resp').textContent = situacao

}