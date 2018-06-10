$(document).ready(function(){
  $('.upload-file').change(function() {
    console.log($(this).val());
  })

  $("#img-upload").submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);

    $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        success: function (res) {
          $('.alert').removeClass('d-none');

          if (res.status) {
            $('.status').html("Success!")
            $('.message').html(res.data)
          } else {
            $('.status').html("Error!")
            $('.message').html(res.data)
          }

        },
        cache: false,
        contentType: false,
        processData: false
    });
  });

});
