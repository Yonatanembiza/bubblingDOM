document.getElementById('grandPa').addEventListener('click', function(){
    console.log("GrandPa also clicked because of the event at the child :) ")
})
document.getElementById('parent').addEventListener('click', function (event) {
    console.log('Parent clicked!');
});

document.getElementById('child').addEventListener('click', function (even) {
    console.log('Child clicked!');
});
