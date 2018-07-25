$(document).ready(function(){
$('#myCarousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoHeight: true
})

$(".schedule-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [1, 750, true]);
});
$(".talks-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [2, 750, true]);
});
$(".workshops-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [3, 750, true]);
});
$(".code-of-conduct-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [4, 750, true]);
});
$(".about-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [5, 750, true]);
});
$(".home-tab").click(function(e){
    e.preventDefault();
    $('#myCarousel').trigger("to.owl.carousel", [0, 750, true]);
});

});