$(document).ready(function(){

  $("#rsvpinfo").submit(function(event){
  var name=$("input#name").val();
  var date=$("input#date").val();
  var description=$("input#description").val();
  var startdate=$("input#startdate").val();
  var starttime=$("input#starttime").val();

  $(".name").append(name);
  $(".date").append(date);
  $(".description").append(description);
  $(".startdate").append(startdate);
  $(".starttime").append(starttime);

  $(".message").show();
  $(".form").hide();


  event.preventDefault();
  });
});
