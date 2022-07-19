// instancia jquery e evita conflitos
$(document).ready(function () {
  $(document).find(".text-muted").hide();
  $(document).find(".text-muted1").hide();

  $('.owl-carousel').owlCarousel();
  
  let titulos = $('h4') // tag
  
  let itens = $('.featured-item') // class
  
  let destaques = $('#featured') // id
  // console.log(titulos.first());
  
  // Configuração de produtos
  
  $('.featured-item a').addClass('btn btn-dark stretch-link');
  
  $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
  
  $('.featured-item h4').dblclick( function(){
     
     $(this).css({
        'color': '#f00',
        'background': '#ff0',
        'font-weight': '100',
     });
     
  });
  
  /*
   * Manipulação de eventos
   */
  $('.featured-item a').on('blur', function(event){
     
     event.preventDefault();
     
     alert('Produto esgotado');
     
  })

  /* Ouvinte de eventos .nav-modal-open */
  $(".nav-modal-open").on("click", function (e) {
    e.preventDefault();

    let elem = $(this).attr("rel");

    $(".modal-body").html($("#" + elem).html());

    $(".modal-header h5.modal-title").html($(this).text());

    let myModal = new bootstrap.Modal($("#modelId"));

    myModal.show();

  });

  /* TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex */
  const emailPattern = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  const phonePattern = /^(\()?\d{2}(\))?\d{5}\-\d{4}$/;

  function validate(elem) {
    if (elem.val() == "") {
      console.log("o campo de " + elem.attr("name") + " é obrigatório");
      elem.parent().find(".text-muted").show();
      elem.addClass("campoErro");

      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }

    if (elem == $("#nome") || $("#nome").val().length <3) {
      elem.parent().find("#nome").addClass("campoErro");
      return false;
    } else {

      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }
    if (elem == $("#email") || emailPattern.test($("#email").val()) == false) {
      elem.parent().find("#email").addClass("campoErro");
      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }

    if (elem == $("#cpf") || cpfPattern.test($("#cpf").val()) == false) {
      elem.parent().find("#cpf").addClass("campoErro");
      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }  

    if (elem == $("#phone") || phonePattern.test($("#phone").val()) == false) {
      elem.parent().find("#phone").addClass("campoErro");
      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }  
  }

  $(".form").on("click", function (e){
    e.preventDefault();

    validate($("#nome"));
    validate($("#email"));
    validate($("#cpf"));
    validate($("#phone"));

    if ($("#nome").hasClass("campoErro") || $("#email").hasClass("campoErro") || $("#cpf").hasClass("campoErro") || $("#phone").hasClass("campoErro")) {
      alert("⚠️ Verifique os campos destacados");
      return false;
    } else {
      $("submitForm").submit();
      alert("Formulário enviado com sucesso! ✔️");
      return true;
    }
  });

  $("body").on("blur", "#nome", function () {
    validate($(this));
  });

  $("body").on("blur", "#email", function () {
    validate($(this));
  });

  $("body").on("blur", "#cep", function () {
    $(this).mask("00000-000");
    validate($(this));
  });

  $("body").on("blur", "#phone", function () {
    $(this).mask("(00)00000-0000");
    validate($(this));
  });

  $("body").on("blur", "#cpf", function () {
    $(this).mask("000.000.000-00");
    validate($(this));
  });

  /* Manipulação de eventos */
  $(".featured-item a").on("blur", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  });

  $("#subscribe").on("click", function (e) {

    e.preventDefault();

    if ($("#email2").val() == "") {
      $(document).find("#email2").addClass("campoErro");
      return false;
    } else if (emailPattern.test($("#email2").val()) == false) {
      $(document).find("#email2").addClass("campoErro");
      $(document).find(".text-muted1").show();
      return false;
    } else {
      $("#subscribe").submit();
      alert("Email cadastrado com sucesso! ✔️");
    }
  });
});
