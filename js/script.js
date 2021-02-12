let open = document.getElementById('open-btn'),
    //mainInfo = document.getElementsByClassName('main-info'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employers_btn = document.getElementsByTagName('button')[3],
    
    count_budget_value = document.querySelector('.count-budget-value'),
    time_value = document.querySelector('.time-value'),
    choose_item = document.querySelector('.choose-item'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
    price,
    yourName,
    discount

open.addEventListener('click', () => {
    let timer = setTimeout(start, 2000);
    // money = prompt("Ваш бюджет?", "");
        
    // while (isNaN(money) || money == "" || money == null) {
    //     money = prompt("Ваш бюджет?", "");  
    // }
    // budget_value.textContent = money;

    // name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();
    //time = 21;
    //price = 100
    
    

    //  discount = prompt("do you have discount", "");

    // discount_value.addEventListener('change', () => {
        
    //     let discount = discount_value.value;

    //     if ( discount === "true") {
    //         discount_value.style.backgroundColor = 'green';
        
    //      } else {
    //         discount_value.style.backgroundColor = 'red';
    //      }
    //  });





    // discount = prompt("do you have discount", "true");

    // discount_value.addEventListener('change', () => {
    //     let discount = discount_value.value;
    //       if((typeof(discount) === 'true' )) {
    //           console.log('it cannot be possible');
    //           mainList.discount = true;
    //               } else {
    //                   console.log('there are only 24 hours in day');
    //                   mainList.discount = false;
    //               }; 
      
    //        if ( mainList.discount == true) {
    //         discount_value.style.backgroundColor = 'green';
          
    //        } else {
    //           discount_valueen_value.style.backgroundColor = 'red';
    //        }
    
    // });



});

function start() {
    money = prompt("Ваш бюджет?", "");
        
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?", "");  
    }
    budget_value.textContent = money;

    name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();
}

goods_btn.addEventListener('click', () => {
    for (let i = 0; i < goods_item.length; i++) {
       
        let a = goods_item[i].value;
        
        if (typeof(a) === 'string' &&  a.length < 50 ) {
            console.log('Everthing is okay');
            mainList.shopGoods[i] = a;
            goods_value.textContent = mainList.shopGoods;
         } else {
            console.log(i);
            i--;
           }
       } 


});

choose_item.addEventListener('change', () => {
    let items = choose_item.value;
    if (isNaN(items) && items != '') {
       mainList.shopItems = items.split(",");
       mainList.shopItems.sort();

       items_value.textContent = mainList.shopItems;
   }   
});

time_value.addEventListener('change', () => {
    let time = time_value.value;
    if(time < 0 ) {
        console.log('it cannot be possible');
        mainList.open = false;
    } else if (time > 8 && time < 20) {
        console.log('time to work');
        mainList.open = true;
        } else if(time < 24) {
            console.log('it is too late');
            mainList.open = false;
            } else {
                console.log('there are only 24 hours in day');
                mainList.open = false;
            }; 

     if ( mainList.open == true) {
        isopen_value.style.backgroundColor = 'green';
    
     } else {
        isopen_value.style.backgroundColor = 'red';
     }

});

budget_btn.addEventListener('click', () => {
    count_budget_value.value = money / 30;
});


employers_btn.addEventListener('click', () => {
    for (let i = 0; i < hire_employers_item.length; i++) {
           
        let name = hire_employers_item[i].value;
        mainList.employers[i] = name;
       
        employers_value.textContent += mainList.employers[i] + ',';
    }
});


const mainList = {
    budget: money,
    shopName: name,
    open: false,
    shopGoods: [],
    employers: [],
    discount: false,
    shopItems: [],
    makeDiscount: function makeDiscount() {
            if (mainList.discount == true) {
                price = (price/100)*80;
            }
        },
        
   }



// arr.forEach(function(item,i,arr) {
//          console.log((i + 1) + ": " + item + "У нас вы можете купить: " + arr + ".");
//      });

// //arr.unshift(0);

// alert("У нас вы можете купить: " + arr);
//  console.log(arr);


//  let options = ["Товари", "услуги", "бити"];
     

// console.log(Object.keys(options).length);


console.log(mainList);


let number = 33721;
console.log(3*3*7*2*1);
console.log(126 ** 3);


