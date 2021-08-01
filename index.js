// assign variable to use in html to access images when moving slider from previous to next image
var an_img = document.querySelector('.mySlide-imgs');
// all the images needed for slider with javascript buttons
var allImages = ['thomas-despeyroux-YELKk7PUeUY-unsplash.jpg','roberto-motoi-amvDOVI9BiQ-unsplash.jpg', 'robin-davidson-w_7z6Ga03lo-unsplash.jpg', 
     'thomas-despeyroux-YELKk7PUeUY-unsplash.jpg', 'shutterstock_316978307.jpg', 'niagara-falls-blue.jpg'];
//  var allImages = ['pika3.png','pika1.png','pika2.png']
var curPicture=0; //current picture

function prev(){
        if(curPicture <= 0) 
        curPicture = allImages.length;
        curPicture--;
        return getPicture();

}

function next(){
    if(curPicture >= allImages.length -1)
    curPicture= -1;
    curPicture++;
    return getPicture();

}

function getPicture(){
    // update slider with new image using set attribute
    return an_img.setAttribute('src', './Images/' + allImages[curPicture]);

}

document.querySelector('.myButtonP').addEventListener('click', prev)