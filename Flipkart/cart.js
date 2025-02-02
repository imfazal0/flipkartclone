let carvar = localStorage.getItem('cart');
let carvar1 = JSON.parse(carvar);
let cart= carvar1 || [];

cartfun();
function cartfun() {    
    let html = document.querySelector('.cart-page')
    let totalhtml = '';
    cart.forEach(index => {
        totalhtml += `
            <div class="cart-item">
            <div class="pro-car-img">
                    <img style=" overflow:hidden" src="${index.image}" alt="">
                </div>
                <div class="pro-cart-about">
                    <div class="cart-about-id">
                        Product-id : ${index.itemId}
                        </div>
                        <div class="cart-about-name">
                        ${index.name}
                        </div>
                        <div class="cart-about-quantity">
                        Quantity : ${index.quantity}
                        </div>
                        <div class="cart-about-price">
                        <div> <p>$${index.price*index.quantity}</p></div><div> <p style="color : gray;">$${index.price} * ${index.quantity}</p> </div> 
                        
                        <div class="npm11">
                        <div>
                        <button class="additem-button" data-value=${index.itemId} >Add-item</button>
                        </div>
                        <div>
                        <button class="removeitem-button" data-value=${index.itemId} >Remove-item</button>
                        </div>
                        </div>
                    </div>
                    
                    </div>
            </div>`

        });
        if (cart == []) {
            html.innerHTML= ``
        }
        else{
            html.innerHTML=totalhtml
        }
        
        invoice()
        additembutton()
        removeitembutton()
        
    }
        
        function additembutton(){
            document.querySelectorAll('.additem-button').forEach((button) => {
                button.addEventListener('click' , (event)=>{
                    cart.forEach(element => {
                                if(element.itemId === button.dataset.value)
                                {
                                    element.quantity+=1
                                    localStorage.setItem('cart',JSON.stringify(cart))
                                    cartfun();
                                }
                                
                            
                            });                    
                        })
                    });
                }
        
        function removeitembutton(){
            document.querySelectorAll('.removeitem-button').forEach((button) => {
                button.addEventListener('click' , (event)=>{
                    let index = cart.findIndex(item =>item.itemId === button.dataset.value);
                    console.log(index);
                    
                    cart.forEach(element => {
                        if(element.itemId === button.dataset.value)
                            {
                                    if (element.quantity <=1 ) {
                                        cart.splice(index,1)
                                        localStorage.setItem('cart',JSON.stringify(cart))
                                        cartfun()
                                    }
                                    else{
                                        element.quantity -=1
                                        localStorage.setItem('cart',JSON.stringify(cart))
                                        cartfun();
                                    }
                                }
                                
                            });                    
                        })
                    });
            


        }

        
function invoice(){
    let totalvalue = 0 ;
    cart.forEach(index => {
        totalvalue += index.quantity*Number(index.price);
    });
    document.querySelector('.cart-value-1').innerHTML = `$ ${totalvalue}`
    let deliverycharge =0 ;
    if (totalvalue >= 200) {
        document.querySelector('.dilivery-charge-1').innerHTML = `Free Delivery`
        
    }
    else{
        deliverycharge = 40;
        document.querySelector('.dilivery-charge-1').innerHTML = `$ 40 Delivery charge `
        
    }

    document.querySelector('.payable-amount-1').innerHTML = `$ ${totalvalue+deliverycharge}`


}
        

