console.log("cafeen.js is running...");

//Start of café js
const image_tab = document.getElementById('tab1')
const room_tab = document.getElementById('tab2')
const map_tab = document.getElementById('tab3')
const image_container = document.getElementById('container1')
const room_container = document.getElementById('container2')
const map_container = document.getElementById('container3')
const hover1 = document.getElementById('tab1')
const hover2 = document.getElementById('tab2')
const hover3 = document.getElementById('tab3')


//change between tabs starts here
function openImage() {
    image_container.style.display = 'flex';
    room_container.style.display ='none';
    map_container.style.display ='none';
}

function openDrawing() {
    image_container.style.display = 'none';
    room_container.style.display ='block';
    map_container.style.display ='none';
}

function openMap() {
    image_container.style.display = 'none';
    room_container.style.display ='none';
    map_container.style.display ='block';
}
//change between tabs ends here

//change tab colors starts here
function tabOne() {
    image_tab.style.color ='#6E6AE3'
    image_tab.style.borderBottom = 'solid 5px #6E6AE3'
    room_tab.style.color ='#1D1D1D'
    room_tab.style.borderBottom = 'solid 5px #DEE1E0'
    map_tab.style.color ='#1D1D1D'
    map_tab.style.borderBottom = 'solid 5px #DEE1E0'
}

function tabTwo() {
    image_tab.style.color ='#1D1D1D'
    image_tab.style.borderBottom = 'solid 5px #DEE1E0'
    room_tab.style.color ='#6E6AE3'
    room_tab.style.borderBottom = 'solid 5px #6E6AE3'
    map_tab.style.color ='#1D1D1D'
    map_tab.style.borderBottom = 'solid 5px #DEE1E0'
}

function tabThree() {
    image_tab.style.color ='#1D1D1D'
    image_tab.style.borderBottom = 'solid 5px #DEE1E0'
    room_tab.style.color ='#1D1D1D'
    room_tab.style.borderBottom = 'solid 5px #DEE1E0'
    map_tab.style.color ='#6E6AE3'
    map_tab.style.borderBottom = 'solid 5px #6E6AE3'
}
//change tab colors ends here

//hover starts here

//hover ends here

//event listeners list starts here
//change tabs
image_tab.addEventListener('click', openImage);
room_tab.addEventListener('click', openDrawing);
map_tab.addEventListener('click', openMap);

//change tab colors
image_tab.addEventListener('click', tabOne);
room_tab.addEventListener('click', tabTwo);
map_tab.addEventListener('click', tabThree);
//event listeners list ends here

//end of cafe js