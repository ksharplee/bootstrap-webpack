$(document).ready(function () {
  // 手机端导航展开
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('show');
  });
  // 手机端拖动导航时阻止页面滚动
  $('.navbar-collapse').bind('touchmove', function (e) {
    e.preventDefault();
  });
  // 分类展开
  $('.icon-toggle').click(function () {
    $(this).toggleClass('icon-plus icon-minus');
  });
  // 切换详情图片
  $('.img-detail-small').click(function () {
    const src = $(this).attr('data-src');
    $('.img-container.border-primary').removeClass('border-primary');
    $(this).find('.img-container').addClass('border-primary')
    $('#img-detail-large .img-container .box').css('background-image', `url('${src}')`);
  });
  // form validation
  window.addEventListener(
    'load',
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
});
