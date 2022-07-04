// instancia jquery e evita conflitos
$(document).ready(function(){

   $(document).find('.text-muted').hide();
   $(document).find('.text-muted1').hide();
   
   /* Ouvinte de eventos .nav-modal-open */
   $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();
      
      let elem = $(this).attr('rel')
      
     $('.modal-body').html($('#'+elem).html())
     
     $('.modal-header h5.modal-title').html($(this).text())

     let myModal = new bootstrap.Modal($('#modelId'))
     
     myModal.show()
     

  })

  /* TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex */
const emailPattern = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  function validate( elem ){
     if( elem.val() == '') {

        console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

        elem.parent().find('.text-muted').show()

        elem.addClass('invalid')

        return false
     } else {
        elem.parent().find('.text-muted').hide()
        elem.removeClass('invalid')
     }

     if( elem == $('#nome') || elem.lenght <2 ){

            elem.addClass('invalid')
            return false

     } else {
      elem.removeClass('invalid')
   }
     if( elem == $('#email') || emailPattern.test(elem.val())==false){
         elem.addClass('invalid')
         return false
     } else {
      elem.removeClass('invalid')
   }

     if( elem == $('#cpf') || cpfPattern.test(elem.val())==false){
            elem.addClass('invalid')
            return false
     }else {
      elem.removeClass('invalid')
   }
  }

  $('body').on('submit', '.modal-body .form', function(e){

     e.preventDefault()

     const inputName = $('#nome')
     const inputEmail = $('#email')

     validate(inputName)
     validate(inputEmail)

     if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
        console.log('verificar campos obrigatórios')
        return false
     } else {
        $(this).submit()  
     }

  })

  $('body').on('blur', '#nome', function(){
     validate($(this))
  })

  $('body').on('blur', '#email', function(){
     validate($(this))
  })


  $('body').on('focus', '#date', function(){
     $(this).datepicker()
  })
  
  $('body').on('blur', '#cep', function(){
     validate($(this))
     $(this).mask('00000-000');
  })

  $('body').on('blur', '#phone', function(){
     validate($(this))
     $(this).mask('(00)00000-0000');
  })

  $('body').on('blur', '#cpf', function(){
     validate($(this))
     $(this).mask('000.000.000-00');
  })



/* Manipulação de eventos */
$('.featured-item a').on('blur', function(event){
   
   event.preventDefault();
   
   alert('Produto esgotado');
   
})

$('#form-submit').on('click', function(e){

   e.preventDefault()

   if( $('#email2').val() == '' ){
      $(document).find('#email2').addClass('campoErro')
      return false
   } else if (emailPattern.test($('#email2').val()) == false){
      $(document).find('#email2').addClass('campoErro')
      $(document).find('.text-muted1').show()
      return false
   } else {
      alert("email cadastrado com sucesso")
      return true
   }

});
})