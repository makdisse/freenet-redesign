// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap

//= require_tree .

$(document).ready(function() {

  //Setup the x-edit plugin
  $.fn.editable.defaults.mode = 'popup';
  $('.friend-note').editable();

  //
    $("[data-toggle='tooltip']").tooltip({
        placement: 'right',
        container: 'body',
    });

    $("[data-toggle='popover']").popover({
        container: 'body',
        html: 'true'
    }).click(function(e) {
        e.preventDefault();
     });

  $("#simpleModeBtn").button('toggle');

  //if have a hash open the modal
  if (window.location.hash) {
    $(window.location.hash).modal('show');
  }

//Simulate buttons usability
  $("#enable_buttons").change(function()  {
    if ($("#enable_buttons").prop("checked") ==  true) {
      $("#btn_n2ntm").attr('disabled',false);
      $("#btn_trust").attr('disabled',false);
      $("#btn_visibility").attr('disabled',false);
      $("#btn_remove").attr('disabled',false);
    } else {
      $("#btn_n2ntm").attr('disabled',true);
      $("#btn_trust").attr('disabled',true);
      $("#btn_visibility").attr('disabled',true);
      $("#btn_remove").attr('disabled',true);
    }


  })

})

