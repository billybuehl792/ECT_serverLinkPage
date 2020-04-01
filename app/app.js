function dropDown(){
    const contentItems = document.querySelectorAll('.contentContainer .contentItem')

    contentItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            var slider = item.querySelector('.slider');
            slider.classList.add('sliderActive');
            textAlter(item, false);
        });
        item.addEventListener('mouseout', () => {
            var slider = item.querySelector('.slider');
            slider.classList.remove('sliderActive');
            textAlter(item, true)
        });
    });
}

function textAlter(item, mode){
    var listItems = item.querySelectorAll('.serverText .textContainer .listItem');
    if (mode){
        listItems.forEach(listElem => {
            listElem.classList.remove('listOn');
        });
    } else {
        listItems.forEach(listElem => {
            listElem.classList.add('listOn');
        });
    }
}

const app = () => {
    dropDown();
}