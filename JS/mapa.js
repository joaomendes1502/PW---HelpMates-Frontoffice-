$(document).ready(function() {
    $(".circle").hover(function() {
      $(".circle-info").fadeIn();
    }, function() {
      $(".circle-info").fadeOut();
    });
  });

  $(document).ready(function(){
    $(".hide").hide();
    
    
    $(".marker-kenya").click(function(){
      $(".hide").hide();
      $(".kenya-txt").fadeIn(300);
    });
    
      $(".marker-portugal").click(function(){
         $(".hide").hide();
      $(".portugal-txt").fadeIn(300);
    });
    
      $(".marker-brazil").click(function(){
         $(".hide").hide();
      $(".brazil-txt").fadeIn(300);
    });
  
  });

  $(document).ready(function() {
    $("#portugal-point").click(function() {
      $(".text-container").toggle();
    });
  });