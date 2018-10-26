$(function(){
    function buildHTML(message){
      var insertImage = '';
      if (message.image){
        insertImage = `<img src="${message.image}">`;
      }
      var html = `<div class="message" id="${message.id}">
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
                      </div>
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


  function scroll() {
    $('.messages.js-message').animate({scrollTop: $('.messages.js-message')[0].scrollHeight}, 2500);
  }

  var auto = (function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var last_message_id = $('.message:last').attr('id');
    $.ajax({
      url: location.href.json,
      type: 'GET',
      data: {
        last_message_id: last_message_id
        },
      dataType: 'json'
    })
// json: sabun no messages
    .done(function(data) {
      data.forEach(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
        })
      scroll();
      })
      .fail(function(json) {
      alert('自動更新に失敗しました');
      });
      }else {
      clearInterval(interval);
       }
  });
   var interval = setInterval(auto, 5000 );
});
