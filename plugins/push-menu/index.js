// TODO: Update Menu button to toggle menu open/close.
// if (process.browser) {
//   // TODO - I can probably minimize a lot of this code.
//   let container = document.querySelector('.push__menu__container')
//   let menuButton = document.querySelector('.hamburger__menu')
//   let isMenuOpen = false
//   let resetMenu = function () {
//     container.classList.remove('open')
//     isMenuOpen = false
//   }
//   let bodyClickFn = function (evt) {
//     if (!isMenuOpen) {
//       container.classList.add('open')
//     } else {
//       resetMenu()
//     }
//   }
//   menuButton.addEventListener('click', function (evt) {
//     evt.stopPropagation()
//     isMenuOpen = true
//     container.classList.add('open')
//     document.addEventListener('click', bodyClickFn)
//     document.addEventListener('click', resetMenu)
//   })
// }
