const input = document.querySelectorAll('.input-container');
const btn = document.querySelectorAll('.btn');

input.forEach((e) => {

    e.addEventListener('click', () => {
        // console.log('click')
        e.classList.remove('border border-dark');
    })

}); 



btn.forEach( (e) => {

    e.addEventListener('click',()=>{
        // console.log('click')
        e.classList.toggle('active');
    })

});