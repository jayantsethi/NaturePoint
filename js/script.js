 
function fileInputs() {


  var $this = $(this);
      $val = $this.val();
      valArray = $val.split('\\');
      newVal = valArray[valArray.length-1];
      $button = $this.siblings('.button');
      $fakeFile = $this.siblings('.file-holder');
  if(newVal !== '') {
    //$button.text('File Chosen');
    if($fakeFile.length === 0) {
      $button.after('<div class="file-holder">' + newVal + '</div>');
    } else {
      $fakeFile.text(newVal);
    }
  }
};


function dosubscribe() {

  var loading = $('#subscribe .loading');
  var button = $('#form-button');

  loading.css('width', button.css('width'));
  loading.css('height', button.css('height'));

  loading.show();
  button.hide();

  var post_url = $('#subscribe-form').attr('url');

  $.ajax({
      type: "POST",
      url: post_url,
      enctype: 'multipart/form-data',
      data: new FormData($('#subscribe-form')[0]),
      cache: false,
      contentType: false,
      processData: false
    })
    .done(function(result){

      loading.hide();
      button.show();
      
      $('#subscribe-result').html(result);

      var thanks = $('.thanks')[0];

      if (thanks) {
        $(".onmail").hide();
      }
      
    })
    .fail(function(){
      $('#subscribe-result').html("une erreur s'est produite!");
    });
}

function onContactFormButtonClick () {

  $("#contact-form").slideToggle();
  var contactformbutton = $("#contact-form-button");

  var size = "0px"
  if (contactformbutton.css("padding-top") == "0px") {
    size = "15px";
  }


  contactformbutton.animate({
      'padding' : size,
    });
}

function onContactFormClick (event) {
  event.stopPropagation();
}

function onContactFormSubmit () {
  event.stopPropagation();

  var loading = $('#contact .loading');
  var button = $('#contact-form-form .button');

  //loading.css('width', button.css('width'));
  //loading.css('height', button.css('height'));

  loading.toggle();
  button.toggle();

  

  var post_url = $('#contact-form-form').attr('url');

  $.ajax({
      type: "POST",
      url: post_url,
      /*enctype: 'multipart/form-data',*/
      data: new FormData($('#contact-form-form')[0]),
      cache: false,
      contentType: false,
      processData: false
    })
    .done(function(result){

      //loading.hide();
      //button.show();
      
      $('#contact-form').html(result);

      /*var thanks = $('.thanks')[0];

      if (thanks) {
        $(".onmail").hide();
      }*/
      
    })
    .fail(function(){
      $('#contact-form').html("une erreur s'est produite!");
    });


}
 
$(document).ready(function() {
 
  $('#subscribe-result').delegate(".file-wrapper input[type=file]", "change focus click", fileInputs); 

  $('#contact').delegate("#contact-form-button", "click", onContactFormButtonClick);
  $('#contact').delegate("#contact-form", "click", onContactFormClick);

  $('.partner-image').mouseenter(function() {
    $(this).css("z-index", "401");  
    $(this).parent().find(".partner-infos").show();

  }).mouseleave(function () {
    $(this).css("z-index", "0");  
    $(this).parent().find(".partner-infos").hide();
  });
  
  
  $("#letgosfacebook_link").mouseenter(function() {
    $(".letgosfacebook_over").fadeIn();
  })
  .mouseleave(function() {
    $(".letgosfacebook_over").fadeOut();
  });
                        
  
});

