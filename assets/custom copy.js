// instancia jquery e evita conflitos
$(document).ready(function () {
  $(document).find(".text-muted").hide();
  $(document).find(".text-muted1").hide();

  /* Ouvinte de eventos .nav-modal-open */
  $(".nav-modal-open").on("click", function (e) {
    e.preventDefault();

    let elem = $(this).attr("rel");

    $(".modal-body").html($("#" + elem).html());

    $(".modal-header h5.modal-title").html($(this).text());

    let myModal = new bootstrap.Modal($("#modelId"));

    myModal.show();

    //se o botão fechar for clicado
    $(".btn-close").on(click, function (e) {
      e.preventDefault();
      myModal.hide();
    });
  });

  /* TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex */
  const emailPattern = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

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

    if (elem == $("#nome") || elem.lenght < 3) {
      elem.addClass("campoErro");
      return false;
    } else {
      
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
    }
    if (elem == $("#email") || emailPattern.test($("#email").val()) == false) {
      $(document).find("#email").addClass("campoErro");
      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("campoErro");
      return true;
    }
   
  }

  $("body").on("submit", ".modal-body .form", function (e) {
    e.preventDefault();

    const inputName = $("#nome");
    const inputEmail = $("#email");
    const inputCPF = $("#cpf");
    const inputCEP = $("#cep");
    const inputTel = $("#phone");

    validate(inputName);
    validate(inputEmail);
    validate(inputCPF);
    validate(inputCEP);
    validate(inputTel);

    if (inputEmail.hasClass("campoErro") || inputName.hasClass("campoErro")) {
      console.log("verificar campos obrigatórios");
      return false;
    } else {
      $(this).submit();
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

  $("#form-submit").on("click", function (e) {
    e.preventDefault();

    if ($("#email2").val() == "") {
      $(document).find("#email2").addClass("campoErro");
      return false;
    } else if (emailPattern.test($("#email2").val()) == false) {
      $(document).find("#email2").addClass("campoErro");
      $(document).find(".text-muted1").show();
      return false;
    } else {
      alert("email cadastrado com sucesso");
      return true;
    }
  });
});
