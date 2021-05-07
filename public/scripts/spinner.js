const $loading = $(`
  <div class="progress mb-2" style="height: 20px;">
    <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-rgb" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">Thinking Hippo Thoughts...</div>
  </div>
`);

$loading.hide();

const $hippo = $('svg');

$(document)
  .ajaxStart(function() {
    $loading.fadeIn();
    $hippo.addClass('svg-rgb');
  })
  .ajaxStop(function() {
    $loading.stop(true, false).fadeOut(3500);
    $hippo.removeClass('svg-rgb');
  });

$('#alert-container').append($loading);
