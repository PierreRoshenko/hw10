const limit = 5;

function squeres() {
    const template = document.createElement('div');
    template.classList.add('template')
    for (let i = 0; i < limit; i++) {

        document.body.append(template)
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex'
        template.appendChild(row);

        for (let j = 0; j < limit; j++) {
            const squere = document.createElement("div");
            squere.classList.add("squere");

            row.appendChild(squere);

            function getRandomcolor() {
                return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
            }
            squere.style.backgroundColor = getRandomcolor();
            squere.style.height = "50px"
            squere.style.width = "50px"
            squere.style.margin = "1px"
            squere.style.border = "2px solid #000"
        }

    }
}

function newSqueres() {
    document.querySelector('.template').remove();
    squeres()
}

let abort = false

function dynamicSqures() {
    
    abort = false
    setInterval(() => {
        if (abort == true) {
            return
        }
        if (!document.querySelector('.template')) {
            squeres();
        }
        document.querySelector('.template').remove();
        squeres()

    }, 1000)
}

function stopDynamicSqures() {
    abort = true
}

