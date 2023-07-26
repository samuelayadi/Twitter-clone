
$(document).ready(function () {
  // Toggle for Small Screens 
  $("#togglebtn").click(function(){
    $("#sidebar").show("1000")
    $(this).hide("1000")
    $("#togglebtn2").show("1000")
  })

    $("#togglebtn2").click(function () {
      $("#sidebar").hide("1000");
      $(this).hide("1000");
      $("#togglebtn").show("1000");
    });

   
});

