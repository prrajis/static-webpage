$(function() {
  $('#myModal').on('hidden.bs.modal', function(e) {
    $('#modalHead').html('');
    $('#videoPopup').attr('src', '');
  });
  $('#myModal').on('show.bs.modal', function(e) {
    $('#modalHead').html($(e.relatedTarget).find('h3').html());
    var getDataId = $(e.relatedTarget).find('.cover').attr('data-id');
    var URL = "//www.youtube.com/embed/"+getDataId+"?rel=0&autoplay=0";
    $('#videoPopup').attr('src', URL);
  });
  $('.full-view-modal').find('.modal-body .container').prepend(
    $("<div>", {"class": "row"}).html($('#applyNowContainer').html())
  );
});
