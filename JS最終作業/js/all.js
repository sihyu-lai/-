
// console.log(api_path,token);
const productList = document.querySelector('.productWrap');
const productSelect = document.querySelector('.productSelect');
const cartList = document.querySelector('.shoppingCart-tableList');


let productData=[];
let cartData=[];
// 初始化
function init(){
    getProductList();
    getCartList();
}
init();

// 串接外部產品api
function getProductList(){
    axios.get(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/products`)
    .then(function(response){
        productData=response.data.products;
        renderProductList();
    })
}
function combineProductHTMLItem(item){
  return`<li class="productCard">
  <h4 class="productType">新品</h4>
  <img src="${item.images}" alt="">
  <a href="#" class="js-addCart" id="addCardBtn" data-id="${item.id}">加入購物車</a>
  <h3>${item.title}</h3>
  <del class="originPrice">NT$${item.originprice}</del>
  <p class="nowPrice">NT$${item.price}</p>
  </li>
  
  `
};


function renderProductList(){
    let str='';
        productData.forEach(function(item){
            str+=combineProductHTMLItem(item);
        });
        productList.innerHTML = str;

}

// 下拉選單篩選功能
productSelect.addEventListener('change',function(e){
    // console.log(e.target.value);
    const category =e.target.value; // 確認值有無選取正確
    if(category=="全部"){
        renderProductList();
        return;
    };
    let str="";
    productData.forEach(function(item){
        if(item.category==category){
            str+=combineProductHTMLItem(item);
        };

    });
    productList.innerHTML = str;
})

// 購物車的ＡＰＩ
productList.addEventListener('click',function(e){
    e.preventDefault(); // 預設a連結 取消
    console.log(e.target.getAttribute('data-id'));
    let addCartClass = e.target.getAttribute('class');
    if(addCartClass!=="js-addCart"){
        return;
    };
    // 將購買數量新增至後端的api中
    let productId = e.target.getAttribute("data-id");
    console.log(productId);

    let numCheck =1;
    cartData.forEach(function(item){
        if(item.product.id===productId){
            numCheck = item.quantity+=1;
        };
    });
    // console.log(numCheck);
    axios.post(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/carts`,{
        "data": {
            "productId": productId,
            "quantity": numCheck
          }
    }).then(function(response){

        alert('加入購物車');
        getCartList();
    })
})

//「我的購物車」串接後台API
function getCartList(){
    axios.get(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/carts`)
    .then(function(response){
            // 成功會回傳的內容
        cartData = response.data.carts;
        let str = "";
        cartData.forEach(function(item){
            str+=`<tr>
            <td>
              <div class="cardItem-title">
                <img src="${item.product.images}" alt="">
                <p>${item.product.title}</p>
              </div>
            </td>
            <td>NT$${item.product.price}</td>
            <td>${item.quantity}</td>
            <td>NT$${item.product.price*item.quantity}</td>
            <td class="discardBtn">
              <a href="#" class="material-icons" data-id="${item.id}">
                clear
              </a>
            </td>
          </tr>`;
        });
        cartList.innerHTML = str;
        console.log(response.data.finalTotal)
        document.querySelector(".js-total").textContent = response.data.finalTotal;
    })
}

cartList.addEventListener('click',function(e){
    e.preventDefault();
    // console.log(e.target);
    const cartId = e.target.getAttribute("data-id");

    if(cartId== null){
      
        return;
    }
    //console.log(cardId);
     axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/carts/${cartId}`)
     .then(function(response){
         
         getCartList();
         alert('刪除單筆購物車資料成功');
     })
})
const discardAllBtn = document.querySelector(".discardAllBtn");
discardAllBtn.addEventListener('click',function(e){
    e.preventDefault();
    axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/carts/`)
    .then(function(response){
        alert('刪除全部購物車成功');
        getCartList();
    })
    .catch(function(response){
        alert('購物車已清空，請勿重複點擊')
    })
})

// 產生訂單api
const orderInFoBtn = document.querySelector('.orderInfo-btn');
orderInfoBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(cartData.length == 0){
        alert('購物車沒東西，請選擇產品');
        return;
    }
})

const customerName = document.querySelector("#customerName").value;
const customerPhone = document.querySelector("#customerPhone").value;
const customerEmail = document.querySelector("#customerEmail").value;
const customerAddress = document.querySelector("#customerAddress").value;
const customertradeWay = document.querySelector("#tradeWay").value;

if(customerName == ""||customerPhone==""||customerAddress==""||customertradeWay==""){
    alert('欄位不可以為空白');
    return;
}
//串接後台API
axios.post(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/orders`, {
        "data": {
            "user": {
                "name": customerName,
                "tel": customerPhone,
                "email": customerEmail,
                "address": customerAddress,
                "payment": customertradeWay
            }
        }
    }).then(function (response) {
        alert("訂單已傳輸成功!")
        getCartList();

        //步驟3-5：將送出資料後的表單還原初始狀態
        document.querySelector("#customerName").value = "";
        document.querySelector("#customerPhone").value = "";
        document.querySelector("#customerEmail").value = "";
        document.querySelector("#tradeWay").value = "";
        document.querySelector("#customerAddress").value = "ATM";
    })
});

