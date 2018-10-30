$(document).on('turbolinks:load', function(){
    function buildHTML(message){
      var insertImage = '';
      if (message.image){
        insertImage = `<img src="${message.image}">`;
      }
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="message-name">
                        ${ message.name}
                      </div>
                      <div class="message-time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-massage">
                      <div class="message-body">
                        <p class="message-body__content">
                        ${message.content}
                        </p>
                      </div class='lower-message__image' >
                        ${insertImage}
                    </div>
                </div>`
      return html;
    }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(message){
    console.log(message);
    var html = buildHTML(message);
    $('.messages').append(html)
    $('#new_message')[0].reset();
    $('.messages.js-message').animate({scrollTop: $('.messages.js-message')[0].scrollHeight}, 2500);
  })
  .fail(function(){
    alert('error');
    })
  return false;
  });
});
