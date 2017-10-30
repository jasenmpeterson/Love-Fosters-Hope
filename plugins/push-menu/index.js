if (process.browser) {
  let container = document.querySelector('.push__menu__container')
  let menuButton = document.querySelector('.hamburger__menu')
  let isMenuOpen = false
  let resetMenu = function () {
    container.classList.remove('open')
    isMenuOpen = false
  }
  let bodyClickFn = function (evt) {
    if (!isMenuOpen) {
      container.classList.add('open')
      isMenuOpen = true
    } else {
      resetMenu()
    }
  }
  menuButton.addEventListener('click', function (evt) {
    evt.stopPropagation()
    container.classList.add('open')
    document.addEventListener('click', bodyClickFn)
    document.addEventListener('click', resetMenu)
  })
}
