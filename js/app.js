document.addEventListener('DOMContentLoaded',function(){
    changeDarkMode();

});

function changeDarkMode(){

    // Variable Local de la funcion 
    let img = document.createElement('img');
    img.classList.add('dark-mode-btn');
    img.setAttribute('id','svg-dark-mode');
    btnDrakMode = document.querySelector('#dark-mode-btn');
    btnDrakMode.appendChild(img);
    let svgDarkMode = document.querySelector('#svg-dark-mode');
    
    
    if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        svgDarkMode.src = '/img/darkMode.svg';
    } else {
        document.body.classList.remove('dark-mode');
        svgDarkMode.src = '/img/darkModeSun.svg';
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        console.log(event.matches)
        
        const newColorScheme = event.matches ? "dark" : "light";
        if(newColorScheme==='dark'){
            document.body.classList.add('dark-mode');
            svgDarkMode.src = '/img/darkModeSun.svg';
        }else{
            document.body.classList.remove('dark-mode');
            svgDarkMode.src = '/img/darkMode.svg';

        }
    });

    
    btnDrakMode.addEventListener('click', function() {
      
        let isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            svgDarkMode.src = '/img/darkModeSun.svg';
        } else {
            document.body.classList.add('dark-mode');
            svgDarkMode.src = '/img/darkMode.svg';
        }
    });
}

