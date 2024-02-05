const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});


const cards = [
    {
        cardimg: "./dist/image/redshoescomplet.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/grayshoes.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/redshoescomplet.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/grayshoes.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/redshoescomplet.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/grayshoes.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/redshoescomplet.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
    {
        cardimg: "./dist/image/grayshoes.png",
        shoesname: "Quickiins Mens Shoes",
        number: "$90.00",
        price: "$70.00",
        star: "./dist/image/Group27505.png",
        shopping: "./dist/image/shopping.png",
    },
]


const cardcontainer = document.getElementById("cardcontainer")


cards.forEach((cards) => {
    const cardelement = document.createElement("div")
    cardelement.className = "card_border"

    cardelement.innerHTML = `
    <img class="" src="${cards.cardimg}"  alt="redshoescomplet">
    <div class="pt-[18px] pr-[14px] pb-[30px] pl-[14px]">
     <div class="flex justify-between">
     <div>
    <p class=" text-[18px]  font-Poppins pt-[18px]   font-[500]
    ">${cards.shoesname}</p>
    <div class="flex gap-[4px] pt-[3px] ">
    <p class=" text-[18px] font-poopins font-[500] text-[#999999] ">${cards.number}</p>
    <p class=" text-[18px] font-poppins font-[500] text-[#FF0000]">${cards.price}</p>
    </div>
    <img class="pt-[14px]" src="${cards.star}" alt="star">
     </div>
    <div class="pt-[29px]">
    <img  src="${cards.shopping}" alt="shopping">
    </div>
     </div>
    </div>
    `
    cardcontainer.appendChild(cardelement)
})


// tab//
function navtabs(tabs) {
    const tablets = document.querySelectorAll('.tablets')
    tablets.forEach(content => {
        content.style.display = 'none'
    })
    const threetab = document.querySelectorAll(".threebtn button")
    threetab.forEach(content => {
        content.classList.remove('text-black')

    })
    const select = document.getElementById(tabs)
    select.style.display = 'block'
    const activeTab = document.querySelector(button[onclick = "navtabs('${tabs}')"])
    activeTab.classList.add('text-black')


}


// tab//

navtabs('tab1')

function navtabs(tabs) {
    const tablets = document.querySelectorAll('.tablets')
    tablets.forEach(content => {
        content.style.display = 'none'
    })
    const threetab = document.querySelectorAll(".threebtn button")
    threetab.forEach(content => {
        content.classList.remove('text_black')

    })
    const select = document.getElementById(tabs)
    select.style.display = 'block'
    const activeTab = document.querySelector(`button[onclick = "navtabs('${tabs}')"]` )
    activeTab.classList.add('text_black')


}
navtabs('tab1')


 const card1 =[ 
    {
        images:"./dist/image/footlocker.png",
        price: "Price:",
        dollor: "€179,99",
        btn: "Best Price",
        Size: "Size:",
        
        
    },
    {
        images:"./dist/image/sidesstep.png",
        price: "Price:",
        dollor: "€179,99",
        btn: "Best Price",
        Size: "Size:",  
    },
    {
        images:"./dist/image/footlocker.png",
        price: "Price:",
        dollor: "€179,99",
        btn: "Best Price",
        Size: "Size:",
    },
    {
        images:"./dist/image/sidesstep.png",
        price: "Price:",
        dollor: "€179,99",
        btn: "Best Price",
        Size: "Size:",
    }
 ]

const cardcontainerone = document.getElementById("cardcontainerone")

card1.forEach((card1) => {
    const firstcard = document.createElement("div")
    firstcard.className = "card_2"
    
    firstcard.innerHTML = `
    <img class="" src="${card1.images}"  alt="footlocker">
    <div class="pt-[28px] pr-[16px] pb-[31px] cursor-pointer pl-[19px] ">
    <div class="flex items-center justify-between">
    <div class="gap-[17px] flex">
    <h2 class="font-poppins flex cursor-pointer text-[#333333] font-[400] text-[16px]">${card1.price}</h2>
    <h2 class="font-poppins flex cursor-pointer text-[#000000] font-[600] text-[20px]">${card1.dollor}</h2></div>
     <h3 class="font-poppins font-[400] cursor-pointer text-[10px] pt-[4px] pr-[10px] pb-[3px] pl-[11px] bg-[#28A745] hover:bg-gradient-to-r hover:from-blue-900 hover:to-[#1976D2]  hover:shadow-5xl duration-300 rounded-[6px] text-[#FFFFFF] border-[1px]">${card1.btn}</h3>
     </div>
     <h3 class="font-poppins font-[400] cursor-pointer text-[16px]">${card1.Size}</h3>
 <div class="flex gap-[11.74px] pt-[10px]">
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">41</h4>
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">42</h4>
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">43</h4>
 </div>
 <div class="flex gap-[11.74px] pt-[11.74px]">
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">44</h4>
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">45</h4>
 <h4 class="font-poppins font-[500] cursor-pointer text-[#181818] text-[16px] pt-[8px] pb-[7px] px-[32px]  border-[1px] rounded-[40px] ">46</h4>
 </div>
 <h4 class="font-poppins font-[400] cursor-pointer text-[16px] text-[#454729] pt-[19px]">View this product as:</h4>
 <h4 class="font-poppins font-[600] cursor-pointer text-[16px] text-[#007BFF] pt-[8px]">Foot Locker NL</h4>
    </div>
    `
    cardcontainerone.appendChild(firstcard)
})
 
//  
// const cardcontainerone = document.getElementById("cardcontainerone")


// cardone.forEach((cardone) => {
//     const cardelement = document.createElement("div")
    

//     cardelement.innerHTML = `
//     <img class="" src="${cardone.cardimg}"  alt="redshoescomplet">
//     <div class="pt-[18px] pr-[14px] pb-[30px] pl-[14px]">
//      <div class="flex justify-between">
//      <div>
//     <p class=" text-[18px]  font-Poppins pt-[18px]   font-[500]
//     ">${cards1.shoesname}</p>
//     <div class="flex gap-[4px] pt-[3px] ">
//     <p class=" text-[18px] font-poopins font-[500] text-[#999999] ">${cards1.number}</p>
//     <p class=" text-[18px] font-poppins font-[500] text-[#FF0000]">${cardstwo.price}</p>
//     </div>
//     <img class="pt-[14px]" src="${cardstwo.star}" alt="star">
//      </div>
//     <div class="pt-[29px]">
//     <img  src="${cardstwo.shopping}" alt="shopping">
//     </div>
//      </div>
//     </div>
//     `
//     cardcontainerone.appendChild(cardelement)
// }) 
