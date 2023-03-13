let products = [
    {
        id : "0",
        name: "rebook",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo 
            minus commodi sunt consectetur, doloremque enim?`,
        price: 4150,
        img: "./imgs/sbrdila1.jpeg",
        qt : 0
    },
    {
        id : "1",
        name: "nike",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo 
            minus commodi sunt consectetur, doloremque enim?`,
        price: 1500,
        img: "./imgs/sbrdila2.jpeg",
        qt : 0
    },
    {
        id : "2",
        name: "new balance",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo 
            minus commodi sunt consectetur, doloremque enim?`,
        price: 2150,
        img: "./imgs/sbrdila3.jpeg",
        qt : 0
    },
    {
        id : "3",
        name: "rebook",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo
            minus commodi sunt consectetur, doloremque enim?`,
        price: 3150,
        img: "./imgs/sbrdila1.jpeg",
        qt : 0
    },
    {
        id : "4",
        name: "new balance",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo
            minus commodi sunt consectetur, doloremque enim?`,
        price: 1700,
        img: "./imgs/sbrdila2.jpeg",
        qt : 0
    },
    {
        id : "5",
        name: "new balance",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda laboriosam quisquam beatae dolore. Explicabo 
            minus commodi sunt consectetur, doloremque enim?`,
        price: 2150,
        img: "./imgs/sbrdila3.jpeg",
        qt : 0
    }
];
let increment = 1;
let Tootal = 0;
let root = document.getElementById("root");
let bigDiv = document.createElement('div');
let totalDiv = document.createElement('div');

let total = 0;
let total_price = []
root = products.map((product , index ) => {

let picDiv = document.createElement('div');
let container = document.createElement('div');
let textDiv = document.createElement('div');
let lastDiv = document.createElement('div');
let svgDelete = document.createElement('i');
let quantDiv = document.createElement('div');
    
let names = document.createElement('h2');
    names.innerHTML = product.name;


let descriptions = document.createElement('p');
let btnsDiv= document.createElement('div')
    
    
let images = document.createElement('img');
    
    
let likeBtn = document.createElement('button');
    likeBtn.innerText = ("Like")
    likeBtn.setAttribute('id', 'likeButton')

let deletebtn = document.createElement('button');
    deletebtn.setAttribute('id', "delete");


let priceSpan = document.createElement('span');
let plus = document.createElement('button');
let quantity = document.createElement('span');
let minus = document.createElement('button');


    root.appendChild(bigDiv);           //affecting bigDIV to the root
    bigDiv.appendChild(container)       //affecting container that has every product to the big div
    bigDiv.appendChild(totalDiv);
    picDiv.appendChild(images);         //affecting the picture to her div

    container.append(picDiv,textDiv,lastDiv);      //affecting div of the picture to the container

    textDiv.appendChild(names);            //affecting products names to the div
    textDiv.appendChild(descriptions);     //affecting products description to the div

    btnsDiv.append(likeBtn, deletebtn)

    textDiv.appendChild(btnsDiv);     //affecting like btn to the 2nd div

    
    lastDiv.append(priceSpan,quantDiv);
    priceSpan.setAttribute("id","totalPrice") //affecting price span to last div
    

    quantDiv.append(plus,quantity,minus)
    //setting the attributes needed
    // quantity.innerHTML = 1;
    

    quantDiv.setAttribute('id','quantDiv')
    bigDiv.setAttribute('id', "bigDiv");
    container.setAttribute('id', "container");
    picDiv.setAttribute('id', "picDiv");
    textDiv.setAttribute('id', "textDiv");
    lastDiv.setAttribute('id', "lastDiv");
    quantity.setAttribute("id","product_quantity");
    quantity.setAttribute("min", "0")
    
    plus.addEventListener('click', () => {
        product.qt++

        quantity.innerHTML = product.qt;
        priceSpan.innerHTML = product.qt*product.price
        total = total+product.qt*product.price;
        total_price[product.id] = product.qt*product.price
        Tootal = total_price.reduce((acc,val)=>{return acc + val},0);
        totalDiv.innerText = Tootal+" DH";

        
    });
    
    // const product_quantity = document.getElementById("product_quantity")

    minus.addEventListener('click', () => {
        product.qt--;
        if(product.qt < 0){

            product.qt = 0
        }
        quantity.innerHTML = product.qt;
        priceSpan.innerHTML = product.qt*product.price
        Tootal = total_price.reduce((acc,val)=>{acc + val},0);
        totalDiv.innerText = Tootal;
        
    });
    quantity.innerHTML = product.qt;
    
    
    //end of setting attributes
    images.setAttribute ('src', product.img)
    descriptions.innerHTML = product.description;
    
    svgDelete.setAttribute('class', "fa-solid fa-trash")
    deletebtn.setAttribute('type', 'reset')
    deletebtn.appendChild(svgDelete);
    
    
    plus.setAttribute('class', "fa-solid fa-plus")
    minus.setAttribute('class', "fa-solid fa-minus")
    
    priceSpan.innerHTML = product.qt*product.price

    
})

