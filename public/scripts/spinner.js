const $loading = $(`
  <div class="progress mb-2" style="height: 20px;">
    <div class="invisible progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>
`);

const $hippo = $('svg');

$(document)
  .ajaxStart(function() {
    $loading.find('.progress-bar').addClass('visible progress-bar-rgb progress-bar-striped progress-bar-animated');
    $loading.find('.progress-bar').removeClass('invisible');
    $loading.find('.progress-bar').text('Waving the magic wand');
    $loading.show(1000, function() {
      $hippo.addClass('svg-rgb');
    });
  })
  .ajaxStop(function() {

    $loading.hide(1000, function() {
      $loading.find('.progress-bar').removeClass('visible progress-bar-rgb progress-bar-striped progress-bar-animated');
      $loading.find('.progress-bar').addClass('invisible');
      $loading.find('.progress-bar').text('');
      $hippo.removeClass('svg-rgb');
    });
  });

$('#progress-bar-container').append($loading);
