import $ from 'jquery'

export function signUp () {
  $('#signup').click(function () {
    $('#first').fadeOut('fast', function () {
      $('#second').fadeIn('fast')
    })
  })
}

export function signIn () {
  $('#signin').click(function () {
    $('#second').fadeOut('fast', function () {
      $('#first').fadeIn('fast')
    })
  })
}
