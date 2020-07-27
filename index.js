$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    var currentHour = moment().hours();
   // looping over html element with class .time-block which will be your textarea
   $(".time-block").each(function() {
     var blockHour = parseInt($(this).attr("id").split("-")[1]); //grabbing an id of textarea to find out which hours it's assigned to
     // check if we've moved past this time
     if (blockHour < currentHour) {
       $(this).addClass("past");
     }
     else if (blockHour === currentHour) {
       $(this).removeClass("past");
       $(this).addClass("present");
     }
     else {
       $(this).removeClass("past");
       $(this).removeClass("present");
       $(this).addClass("future");
     }
   });
  
    hourUpdater();
  
    // set up interval to check if current time needs to be update