//Movement Animation
const card = document.getElementById('card')
const container = document.getElementById('container');
const centerImg = document.getElementById('center-img');

container.addEventListener('mousemove',(e) => {
    // console.log(e.pageX ,e.pageY);
    // console.log(window.innerWidth / 2 - e.pageX, window.innerHeight / 2 - e.pageY);
    let xAxis = (window.innerWidth/2- (e.pageX-400))/8;
    let yAxis = (window.innerHeight / 2 - e.pageY)/8;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    centerImg.style.transform = "translateZ(180px)";
});
container.addEventListener('mouseenter' , (e) => {
    card.style.transition = "all .1s ease";
});
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all .5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    centerImg.style.transform = "translateZ(0px)";
});

// ---img-
