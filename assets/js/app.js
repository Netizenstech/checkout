$(document).ready(function(){
    
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").click(function(){
      
      current_fs = $(this).parents('fieldset');
      next_fs = $(this).parents('fieldset').next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });

  /* Do not Delete this commented js */
  
//   $(".previous").click(function(){
      
//       current_fs = $(this).parents('fieldset');
//       previous_fs = $(this).parents('fieldset').prev();
      
//       //Remove class active
//       $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
//       //show the previous fieldset
//       previous_fs.show();
  
//       //hide the current fieldset with style
//       current_fs.animate({opacity: 0}, {
//           step: function(now) {
//               // for making fielset appear animation
//               opacity = 1 - now;
  
//               current_fs.css({
//                   'display': 'none',
//                   'position': 'relative'
//               });
//               previous_fs.css({'opacity': opacity});
//           }, 
//           duration: 600
//       });
//   });
  
  $(".submit").click(function(){
      return false;
  })
      
  });

  $("select").change(function() {
    $(this).css('color','#25335C')
 })

 $("input").change(function() {
    $(this).css('color','#25335C')
 })