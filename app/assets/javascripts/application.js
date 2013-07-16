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
/*
prototype code. No comments, no best practices, total chaos...
*/
$(document).ready(function() {

  //Setup the x-edit plugin
  $.fn.editable.defaults.mode = 'popup';
  $('.friend-note').editable();

  //Setup all tooltip itens
  $("[data-toggle='tooltip']").tooltip({
    container: 'body',
  })
  //Hide the tooltip if the item is opened
  .click(function() {
    $(this).tooltip('hide');
  });

  //Setup all popover components
  $("[data-toggle='popover']").popover({
    container: 'body',
    html: 'true'
  }).click(function(e) {
    e.preventDefault();
  });

  //if have a hash in the url open the modal
  if (window.location.hash) {
    $(window.location.hash).modal('show');
  }

//Simulate buttons usability in the friends connections page
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

//Always toggle simpleModeBtn
$(".simpleModeBtn").button('toggle');

//Be sure that all advanced itens are hidden
//Used to fix the problem with input boxes
$(".advanced").hide();

//Simple and advanced mode - show and hide
$(".simpleModeBtn").click(function() {
  $(".advanced[data-parent='" + $(this).data("parenttohide") + "']").slideToggle("slow");
})
$(".advancedModeBtn").click(function() {
  $(".advanced[data-parent='" + $(this).data("parenttohide") + "']").slideToggle("slow");
})

//Workaround to keep the dropdown open when clicking on a input
$('.dropdown-menu').on('click', function(e){
  if($(this).hasClass('dropdown-menu-form')){
    e.stopPropagation();
  }
});

//Simulate the interaction in the labels dropdown
$(".label-item").change(function() {
  if ($(this).prop("checked") ==  true) {
    $("#labels-create").hide();
    $("#labels-edit").hide();
    $("#labels-apply").show();

  } else if ($(".label-item").prop("checked") ==  false) {
    //hide apply only if there is no label selected
    $("#labels-create").show();
    $("#labels-edit").show();
    $("#labels-apply").hide();
  }
})

  //show label actions if click on 'edit labels'
  $("#labels-edit").click(function() {
    $(".dropdown-menu-form input").hide();
    $("#labels-create").hide();
    $("#labels-edit").hide();
    $("#labels-doneedit").show();
    $(".label-action").show();
  });
  $("#labels-doneedit").click(function(){
    $(".dropdown-menu-form input").show();
    $("#labels-create").show();
    $("#labels-edit").show();
    $("#labels-doneedit").hide();
    $(".label-action").hide();
  })

//simulate better usability on file selection
$("table tr").click(function() {
  if ($(this).find("input").prop("checked") == true) {
    $(this).find("input").prop("checked",false);
  } else {
    $(this).find("input").prop("checked",true);
  }

})

//Auto toggle selected btns
$(".btn-toggled").button('toggle');

//Initiallize sliders
$('.slider').slider()  
.on('slide', function(ev){
  $("#"+$(this).data("target")).text(ev.value+" GB");
});


//FIXME: Verify for checked/unchecked in inputs
//Easy way to hide an element when another one is clicked
$("[data-on-click-hide]").click(function() {
  $("."+$(this).data("on-click-hide")).slideUp();
})
//Easy way to show an element when another one is clicked
$("[data-on-click-show]").click(function() {
  $("."+$(this).data("on-click-show")).show('slow');
})


        //Clone and modify the currently open app menu to paste it as in the navbar central portion
        var selected_menu = location.pathname.split('/')[location.pathname.split('/').length-1];
        var open_app  = $("#"+selected_menu).parents("li").clone();
        $(open_app).find("a").addClass("dropdown-toggle");
        $(open_app).find("a").attr("data-toggle","dropdown");
        $(open_app).find("a").append("<b class=\"caret\"></b>");
        $(open_app).find("ul li a").removeClass("dropdown-toggle").attr("data-toggle","");
        $(open_app).find("ul li a b").remove();
        $("#open-app").html($(open_app).html());



      })

