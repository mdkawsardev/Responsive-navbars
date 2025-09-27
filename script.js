let toggleBtn = document.querySelector('.toggle');
let point = 0;
(()=>{
    toggleBtn.addEventListener('click', () => {
        point++;
        if(point %2 !== 0) {
        let menutItem = document.querySelector('.navbar ul');
        menutItem.classList.remove('d-none');
        document.querySelector('.close').classList.remove('d-none');
        document.querySelector('.open').classList.add('d-none');
    } else {
        let menutItem = document.querySelector('.navbar ul');
        menutItem.classList.add('d-none');
        document.querySelector('.close').classList.add('d-none');
        document.querySelector('.open').classList.remove('d-none');
    }
    console.log(point)
})
})()
