console.log('Ustaw tło elementów HTML');


const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow')
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);