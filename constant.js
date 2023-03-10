let listContainer = document.getElementById('listContainer');
let cartListContainer = document.getElementById('cartListContainer');
let backBtn = document.getElementById('backBtn');

export let hotels = [
  {
    name: 'PIZZAHUT',
    id: 'O1',
    image: 'assets/3r3bmreg_biryani_120x90_07_July_22.png',
    offer: 25,
    menu: [
      { item: 'Veg Cheese Pizza', price: 200 },
      { item: 'Chicken Tandoori Pizza', price: 150 },
      { item: 'Cheese Burger', price: 180 },
      { item: 'Mushroom Pizza', price: 150 },
    ],
  },
  {
    name: 'KFC',
    id: 'T2',
    image: 'assets/drawn-delicious-chicken-biryani_23-2148721815.jpg',
    offer: 30,
    menu: [
      { item: 'Crispy Chicken', price: 200 },
      { item: 'Popcorn Chicken', price: 150 },
      { item: 'Chicken Burger', price: 180 },
      { item: 'Lolipop Chicken', price: 150 },
      { item: 'Coke', price: 100 },
      { item: 'Pepsi', price: 180 },
    ],
  },
  {
    name: 'VALARMATHI',
    id: 'TH3',
    image: 'assets/3r3bmreg_biryani_120x90_07_July_22.png',
    offer: 10,
    menu: [
      { item: 'NattuKozhi ChickenBiryani', price: 200 },
      { item: 'Mutton Biryani', price: 150 },
      { item: 'Poricha Kozhi', price: 180 },
      { item: 'Parotta', price: 150 },
      { item: 'NattuKozhi varuval', price: 100 },
    ],
  },
  {
    name: 'ABITHA HOTEL',
    id: 'FO4',
    image: 'assets/drawn-delicious-chicken-biryani_23-2148721815.jpg',
    offer: 20,
    menu: [
      { item: 'Chicken Biryani', price: 200 },
      { item: 'Beef Biryani', price: 150 },
      { item: 'Mutton Biryani', price: 180 },
      { item: 'Beef Chukka', price: 100 },
      { item: 'Chicken Chukka', price: 130 },
    ],
  },
];
let hotelDiv;
let setHotelCard = (hotelClassVal, hotelIdVal) => {
  hotelDiv = document.createElement('div');
  hotelDiv.className = hotelClassVal;
  hotelDiv.id = hotelIdVal;
  listContainer.appendChild(hotelDiv);
};
let setImage = (imgClassVal, imgSrc) => {
  const imgDiv = document.createElement('img');
  imgDiv.setAttribute('src', imgSrc);
  imgDiv.className = imgClassVal;
  hotelDiv.appendChild(imgDiv);
};
let setName = (hotelClassVal, hotelTitle) => {
  const nameDiv = document.createElement('div');
  nameDiv.className = hotelClassVal;
  nameDiv.appendChild(document.createTextNode(hotelTitle));
  hotelDiv.appendChild(nameDiv);
};
let setOffer = (hotelClassVal, percentageAmt) => {
  const offerDiv = document.createElement('div');
  offerDiv.className = hotelClassVal;
  offerDiv.appendChild(document.createTextNode(percentageAmt + '%off'));
  hotelDiv.appendChild(offerDiv);
};

let checkBox;
let checkBoxDiv;
let setCheckBox = (hotelId) => {
  checkBoxDiv = document.createElement('div');
  checkBoxDiv.className = 'check-box-container';
 
  for (let c = 0; c < hotel.menu.length; c++) {
   
    checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box';
    checkBox.id = `${hotelId}${[c]}`;
    checkBox.value = hotel.menu[c].item;
    checkBox.dataset.value2 = hotel.menu[c].price;
    checkBox.onclick=()=>clickCheckBox();
    checkBoxDiv.appendChild(checkBox);
    
    
 
  }
};
let clickCheckBox = () => {
 if(checkBox.checked){
  var cartDetails = document.createElement('div');
  cartDetails.classList.add('flex');
  cartDetails.id = 'cartDetails';
  ////
  let cartItems = document.createElement('div');
  cartItems.classList.add('cart-Items');
  cartItems.id = 'cartItems';
  cartItems.innerText = 'Chicken Biryani';
  ////
  let itemQuantity = document.createElement('div');
  itemQuantity.classList.add('item-quantity', 'flex');
  itemQuantity.id = 'itemQuantity';
  ////
  let removeCartItem = document.createElement('img');
  removeCartItem.id = 'removeCartItem';
  removeCartItem.src='assets/icons8-minus-30.png';
  ////
  let cartItemCount = document.createElement('div');
  cartItemCount.id = 'cartItemCount';
  cartItemCount.innerText = '1';
  ////
  let addCartItem = document.createElement('img');
  addCartItem.id = 'addCartItem';
  addCartItem.src='assets/icons8-add-button-25.png';
  ////
  let cartItemRate = document.createElement('div');
  cartItemRate.id = 'cartItemRate';
  cartItemRate.innerText = '₹120';
  ////
  let cartDelete = document.createElement('img');
  cartDelete.id = 'cartDelete';
  cartDelete.src='assets/icons8-close.svg';
  ////
  itemQuantity.append(removeCartItem, cartItemCount, addCartItem);
  cartDetails.append(cartItems, itemQuantity, cartItemRate,cartDelete);
  cartListContainer.appendChild(cartDetails);
 }
 else{
  console.log("eee")
 }
    
  }
 
let menuDiv;
let setMenuName = () => {
  menuDiv = document.createElement('div');
  menuDiv.className = 'menu-div';

  for (let j = 0; j < hotel.menu.length; j++) {
    let item = hotel.menu[j].item;
    let menuName = document.createElement('div');
    menuName.className = 'menu-name';
    menuName.innerText = item;
    menuDiv.appendChild(menuName);
  }
};
let priceDiv;
let setPriceValue = () => {
  priceDiv = document.createElement('div');
  priceDiv.className = 'price-div';

  for (let k = 0; k < hotel.menu.length; k++) {
    let value = '\u20B9' + hotel.menu[k].price;
    let priceValue = document.createElement('div');
    priceValue.className = 'price-value';
    priceValue.innerText = value;
    priceDiv.appendChild(priceValue);
  }
};

let setMenuContainer = (menuClassVal, menuIdVal) => {
  let menuList = document.createElement('div');
  menuList.classList.add(menuClassVal);
  menuList.id = menuIdVal;
  setMenuName();
  setPriceValue();
  menuList.append(checkBoxDiv,menuDiv,priceDiv);
  listContainer.appendChild(menuList);
};
let hotel;
export let setHotelAndMenuList = () => {
  for (let i = 0; i < hotels.length; i++) {
    hotel = hotels[i];
    let hotelName = hotel.name;
    let hotelOffer = hotel.offer;
    let hotelId = hotel.id;
    let hotelImage = hotel.image;

    setHotelCard('hotel', hotelName);
    setImage('hotel-image', hotelImage);
    setName('hotel-name', hotelName);
    setOffer('hotel-offer', hotelOffer);
    setCheckBox(hotelId);
    setMenuContainer('menu-container', hotelId);
    // clickCheckBox();

    let menuView = (selectedHotel) => {
      document.getElementById(selectedHotel).style.visibility = 'visible';
      document.getElementById(hotel.name).style.visibility = 'hidden';
      document.getElementById('hotelContHeading').style.boxShadow =
        ' 1px 1px 4px 4px rgb(42, 42, 42)';
      document.getElementById('hotelContHeading').innerText = 'Menu';
      document.getElementById('hotelContHeading').style.padding = '4px 16px';
    };
    hotelDiv.onclick = () => menuView(hotelId);
    backBtn.addEventListener('click', () => {
      document.getElementById(hotelId).style.visibility = 'hidden';
      document.getElementById(hotel.name).style.visibility = 'visible';
      document.getElementById('hotelContHeading').innerText = 'Restaurants';
      document.getElementById('hotelContHeading').style.padding = '8px 28px';
      document.getElementById('hotelContHeading').style.boxShadow = '';
      document.getElementById('hotelContHeading').style.background = '';
    });
  }
};
