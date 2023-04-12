document.addEventListener('mousemove', (event) => {
    if (event.target !== document.querySelector('.back') && event.target !== document.querySelector('.arrow')) {
        document.querySelector('.back').style.width = '60px';
        document.querySelector('.arrow').innerHTML = '←';
        console.log(event.target);
        return;
    }
    document.querySelector('.back').style.width = '300px';
    
    document.querySelector('.arrow').innerHTML = '← вернуться на главную';
});

