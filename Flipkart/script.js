let chvar = 200 ;
function imgchange(){
    console.log('pressed')
    document.querySelector('.picture').innerHTML = `
        <div class="img-pic" style=" transform : translatex(-${chvar}%); ">        
                <img src="images/l1.webp" alt="" width="100%">
                <img src="images/l2.jpg" alt="" width="100%">
                <img src="images/l3.jpg" alt="" width="100%">
        </div>`
    chvar += 100 ;
    if (chvar >= 300 ) {
        chvar = 0   
    }
}

