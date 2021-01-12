var currSelected = 0;
// Renders html/css loop animation untill AfRAMES a-assets are loaded
document.querySelector('a-assets').addEventListener('loaded', function (evt) {
    document.querySelector('.loading-overlay').style.display = 'none';
    document.querySelector('.btns-wings').style.display = 'flex';
});

// Toggles wing visiblity according to selected btn
function changeWings(param) {
    let prevWings = document.querySelector('.wings' + currSelected);
    let wingsToChange = document.querySelector('.wings' + param);

    prevWings.setAttribute('visible', `false`)
    currSelected = param;
    wingsToChange.setAttribute('visible', `true`)
}