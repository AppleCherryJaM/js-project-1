
let positionProm = 0;
let slidesToShowProm = 4;

window.addEventListener('resize',showProm);

const slidesToScrollProm = 1;
const trackProm = document.querySelector(".track-prom");
const containerProm = document.querySelector(".container_prom");
const itemProm = document.querySelector(".promotion_item");
const itemsProm = document.querySelectorAll(".promotion_item");
const btn_backProm = document.querySelector(".btn_backProm");
const btn_nextProm = document.querySelector(".btn_nextProm");
const btn_back_circleProm = document.querySelector(".btn_back_circleProm");
const btn_next_circleProm = document.querySelector(".btn_next_circleProm");
const widthItemsForContainerProm =  itemProm.clientWidth * slidesToShowProm + (adaptWithScreen * slidesToShowProm);
const itemWidthProm = itemProm.clientWidth + adaptWithScreen;
const movePositionProm = slidesToScrollProm * itemWidthProm;
const itemsCountProm = PROMOTIONS.length;

containerProm.style.width = `${widthItemsForContainerProm}px`

function widthContainerProm(){
    const widthItemsForContainerProm =  itemProm.clientWidth * slidesToShowProm + (adaptWithScreen() * slidesToShowProm);
    containerProm.style.width = `${widthItemsForContainerProm}px`;
    itemsProm.forEach((itemsProm) => {
        itemsProm.style.marginRight = `${adaptWithScreen()}px`;
    });
}
window.addEventListener('resize',widthContainerProm);

btn_next_circleProm.addEventListener('click',function (){slideNextProm(btn_next_circleProm, btn_back_circleProm)});
btn_nextProm.addEventListener('click',function (){slideNextProm(btn_nextProm, btn_backProm)});
btn_back_circleProm.addEventListener('click', function (){slideBackProm(btn_next_circleProm, btn_back_circleProm)});
btn_backProm.addEventListener('click', function (){slideBackProm(btn_nextProm, btn_backProm)});

function slideNextProm(btnN, btnB){
    const itemsLeft = itemsCountProm -  (Math.abs(positionProm) + slidesToShowProm * itemWidthProm) / itemWidthProm;
    positionProm -= itemsLeft > slidesToScrollProm ? movePositionProm : itemsLeft * itemWidthProm;
    checkButtonsProm(btnN, btnB);
    setPositionProm();
}
function slideBackProm(btnN, btnB){
    const itemsLeft = Math.abs(positionProm) / itemWidthProm;
    positionProm += itemsLeft > slidesToScrollProm ? movePositionProm : itemsLeft * itemWidthProm;
    checkButtonsProm(btnN, btnB);
    setPositionProm();
}

const setPositionProm = () =>{
    trackProm.style.transform = `translateX(${positionProm}px)`
}

const checkButtonsProm = (btnN, btnB) =>{
    btnB.disabled = positionProm === 0;
    btnN.disabled = positionProm <=  -(itemsCountProm - slidesToShowProm) * itemWidthProm;
}