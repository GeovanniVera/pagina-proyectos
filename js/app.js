document.addEventListener('DOMContentLoaded',function(){
    changeDarkMode();
});

function changeDarkMode(){
    
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        console.log(event.matches)
        const newColorScheme = event.matches ? "dark" : "light";
        if(newColorScheme==='dark'){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');

        }
    });

    btnDrakMode = document.querySelector('#dark-mode-btn');
    btnDrakMode.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
    });
}