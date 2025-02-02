    let innerhtml = ''
    productinfo.forEach(index => {
        num = Number(index.price) 
        num1 = num+ num*70/100
        const select =  document.querySelector('.pro-sec')
            select.innerHTML =      
                `<div class="pro-item">
                    <div class="pro-img">
                        <img src="${index.image}" alt="" width="200px"> 
                    </div>
                    <div class="pro-name">
                        <p>${index.name}</p>
                    </div>
                    <div class="pro-rating" style="display: flex;">
                        <img src="${index.rating.star}" alt="" width="200px" height="50px">
                        <p>${index.rating.ratingcount/10}</p>
                    </div>
                    <div class="price" >
                    <p  class="nnp">${index.price}</p>
                    <p class="before-price"> 70%off <s>$${num1} </s> </p>
                    </div>
                    <div class="pro-add-to-cart">
                        <button class="add-cart-button" data-item-id="${index.id}" data-item-img="${index.image}" data-item-price="${index.price}" data-item-name="${index.name}"  >Add To Cart</button>
                    </div>
                </div>`
                innerhtml += select.innerHTML 
    });
        
    document.querySelector('.pro-sec').innerHTML = innerhtml


    function addcartitem() {       
        document.querySelectorAll('.add-cart-button').forEach(button => {
            button.addEventListener('click', () =>{
                        let proId = button.dataset.itemId
                        let proImg = button.dataset.itemImg
                        let proName = button.dataset.itemName
                        let proPrice = button.dataset.itemPrice
                        let matchingItem ;
                        button.innerHTML = `<p>Added to Cart <i class="fa-solid fa-square-check" style=" color: yellow ; padding-left : 10px"></i></p> `
                        console.log();
                        
                        cart.forEach( element =>{
                            if (proId === element.itemId) {
                                matchingItem = element;
                            }
                        });
                        if (matchingItem) {
                            matchingItem.quantity+=1
                        }
                        else{
                            cart.push({
                                image : proImg,
                                itemId : proId,
                                quantity : 1,
                                price : proPrice,
                                name : proName
                                
                            });
                            savelocal();
                        }
                        });
});
}


function savelocal(){
            //save cart item into cart array
           localStorage.setItem('cart',JSON.stringify(cart))
                                
}
addcartitem();