let btn = document.getElementById('btn');
let input = document.getElementById('text');
btn.addEventListener('click' , ()=> {
    text.select();
    let vinput = input.value;
    
    setInterval(info,1000)

    function info(){
        navigator.clipboard.writeText(vinput);
    }
})