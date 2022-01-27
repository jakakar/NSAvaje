
jQuery(document).ready(function() {

    // ...

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });

    // ...

});


function text(x){
    if(x==0) { 
      var el = document.getElementById('BezierCurveCanvas');
    var context = el.getContext("2d");
    context.moveTo(353, 393);
    context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
    context.bezierCurveTo(617, 530, 348, 777, 114, 644);
    context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
    context.bezierCurveTo(181, 197, 202, 359, 353, 393);
    context.lineTo(353, 393);
    context.fill();  
    context.stroke();
   
}else{
    
    var el = document.getElementById('BezierCurveCanvas');
    var context = el.getContext("2d");
    context.moveTo(353, 393);
    context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
    context.bezierCurveTo(617, 530, 348, 777, 114, 644);
    context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
    context.bezierCurveTo(181, 197, 202, 359, 353, 393);
    context.lineTo(353, 393);
    context.fill();  
    context.stroke();
}
}
   
 
 
    let colorInput = document.getElementById('colorpicker');
    let colorValue = colorInput.value;
   
    colorInput.addEventListener('input', () =>{

        var c = document.getElementById("BezierCurveCanvas");
        var context = c.getContext("2d");
        context.moveTo(353, 393);
        context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
        context.bezierCurveTo(617, 530, 348, 777, 114, 644);
        context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
        context.bezierCurveTo(181, 197, 202, 359, 353, 393);
        context.lineTo(353, 393);
        context.fill();  
        context.stroke();
        context.strokeStyle = colorInput.value;
        context.fillStyle = colorInput.value;
    });