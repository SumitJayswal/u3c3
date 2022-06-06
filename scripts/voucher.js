
// let wallet = JSON.parse(localStorage.getItem("user"));
// const walleth3 = document.querySelector('walleth3');
// walleth3.innerText = "Your wallet : " + wallet.amount;





// let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

// fetch(url).then(function (res) {
//     return res.json()
// }).then(function (res) {
//     console.log(res[0].vouchers)
//     display(res[0].vouchers)
// }).catch(function (err) {
//     console.log(err);
// })


// let display = (data) => {
//     data.forEach(function (ele){
//         let voucher_list = document.querySelector("#vouchers-list");

//         let voucher = document.createElement("div");
//         voucher.setAttribute("class","voucher")

//         let img = document.createElement("img");
//         img.src = ele.image;

//         let name = document.createElement("h3");
//         name.setAttribute("class", "name")
//         name.innerText = ele.name;


//         let price = document.createElement("p");
//         price.setAttribute("class", "price");
//         price.innerText = ele.price;

//         let buy = document.createElement("button");
//         buy.setAttribute("class", "buy")
//         buy.innerText="buy"
//         buy.addEventListener("click", function(){
//             buyfunc(ele)
//         })
//         voucher.append(img,name,price,buy);
//         voucher_list.append(voucher);
//     })
// }

// let buyfunc = (ele) => {
//     let wallet = JSON.parse(localStorage.getItem("user"));

//     if(wallet.amount>ele.price){
//         walllet.amount = wallet.amount - ele.price;
//         localStorage.setItem("user", JSON.stringify(wallet))
//         alert("Hurray! purchase successful")

//         let walleth3 = document.querySelector("#walleth3");
//         walleth3.innerText = "Your wallet : " + wallet.amount;
//     }
//     else if(wallet.amount < Element.price){
//         alert("Sorry! insufficient balance")
//     }
// }


let getData = async() =>{
    try {
        let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
        let res = await fetch(url);
        let data = await res.json();
        append(data[0].vouchers)
    } catch (error) {
        console.log(error);
    }
}

getData();

let append = (data) =>{
    let container = document.getElementById("voucher_list");
    data.forEach((el) => {
        let div = document.createElement('div');
        div.classList = "voucher";

        let image = document.createElement('img')
        image.src = el.image;

        let h3 = document.createElement('h3');
        h3.innerText = el.name;

        let p = document.createElement('p');
        p.innerText = el.price;

        let button = document.createElement('button');
        button.innerText = "Buy"
        button.classList = "buy_voucher";
        button.addEventListener("click", function(){
            buyVoucher(el);
        })


        div.append(image, h3, p, button);
        container.append(div);
    });
}