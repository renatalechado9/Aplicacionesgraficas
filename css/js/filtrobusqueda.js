let arrayApi = ['Tech', 'Animals', 'People', 'Arch', 'Nature', 'Animals', 'People', 'Arch', 'Nature'],
    $intBuscar = document,
    comp = false,
    $contDiv

const addElement = (e, arr) => {
    let container = document.getElementById(e)
    arr.forEach((e, n) => {
        let { titulo, link } = e
        container.insertAdjacentHTML('beforeend',
            ` <figure class="card ${titulo.toLocaleLowerCase()}">
          <img src="${link}" alt="${titulo}">
          <figcaption>${titulo}</figcaption>
        </figure>`
        )
    })
}

function simularApi(e) {
    if (!document.getElementById(`${e}Div`)) {
        let rAApi = []
        const $conEl = document.getElementById(e)
        arrayApi.forEach(e => rAApi.push({ titulo: e, link: `https://placeimg.com/200/200/${e.toLocaleLowerCase()}` }))
        $conEl.insertAdjacentHTML('afterend', `<div id=${e}Div></div>`)
        $conEl.insertAdjacentHTML('afterend', `<input type="text" id=${e}Input placeholder='Ingrese elemento a buscar' >`)
        comp = `${e}Input`
        $intBuscar = document.getElementById(`${e}Input`)
        $contDiv = document.getElementById(`${e}Div`)
        addElement(`${e}Div`, rAApi)
    }
}

$intBuscar.addEventListener("keyup", (e) => {
    if (e.key === 'Escape') e.target.value = ''
    if (comp === e.target.id) {
        let $class = $contDiv.querySelectorAll('.card'),
            regex = RegExp(e.target.value, 'i')
        if (e.target.value.length === 0) {
            $class.forEach(e => e.classList.remove('fHidden'))
        } else {
            $class.forEach(e => regex.test(e.classList[1]) ?
                e.classList.remove('fHidden') :
                e.classList.add('fHidden'))
        }
    }
})

document.addEventListener('click', e => {
    if (e.target.matches('#btnIFiltro')) simularApi(e.target.id)
})