function openLogin() {
  let modalLogin = document.querySelector('#loginModal')
  modalLogin.style.display = 'block'
  document.querySelector('.dropdown-content').style.display = 'none'
  document.querySelector('#mainDropMenu').style.display = 'none'

  modalLogin.addEventListener('click', (e) => { // hide menu if clicked outside the box //1
      if (!modalLogin.firstChild.contains(e.target) || modalLogin.firstChild.querySelector('.closebtn').contains(e.target)) {
          modalLogin.style.display = 'none'
      }
  })
}

function openReg() {
  let modalReg = document.querySelector('#registerModal')
  modalReg.style.display = 'block'
  document.querySelector('.dropdown-content').style.display = 'none'

  modalReg.addEventListener('click', (e) => { // hide menu if clicked outside the box
      if (!modalReg.firstChild.contains(e.target)|| modalReg.firstChild.querySelector('.closebtn').contains(e.target)) {
          modalReg.style.display = 'none'
      }
  })
}

function listenModals() {
  let userLogin = document.querySelectorAll('.action-login'),
      userSign = document.querySelectorAll('.action-register')

  userLogin.forEach((btn) => btn.addEventListener('click', () => { // Open login modal
      openLogin()
  }))

  userSign.forEach((btn) => btn.addEventListener('click', () => { // Open reg modal
      openReg()
  }))
}

// OPEN MODAL
document.addEventListener('DOMContentLoaded', () => {
  let user = document.querySelector('.header__profile')
  user.addEventListener('click', () => { // Show auth menu when user icon has been clicked
      document.querySelector('.dropdown-content').style.display = 'block'
      document.addEventListener('click', (event) => { // hide menu if clicked outside the box
          if (!user.contains(event.target)) {
            document.querySelector('.dropdown-content').style.display = 'none'
          }
      })
  })
  listenModals()

})