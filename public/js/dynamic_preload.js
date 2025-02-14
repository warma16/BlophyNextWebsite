function preloadImage(image){
    const preloadLink = document.createElement("link");
    preloadLink.href = image;
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);

}

function preloadImages(images){
    images.forEach(image => {
        preloadImage(image);
    });
}

const backgrounds = [
'backgrounds/close_to_me.png',
    'backgrounds/virtual_space.png',
    'backgrounds/xrtjh.png',
    'backgrounds/fengyu.png',
    'backgrounds/gloria_in_excelsis_deo.png'
];

preloadImages(backgrounds);
