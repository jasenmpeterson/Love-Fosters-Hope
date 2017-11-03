if (process.browser) {
  class HeaderScroll {
    constructor () {
      this.didScroll = false
      this.lastScrollTop = 0
      this.delta = 5
      this.navBarHeight = document.querySelector('.header').clientHeight
      this.header = document.querySelector('.header')
      this.pageWrap = document.querySelector('.page__wrap')
    }
    setHeader () {
      this.pageWrap.addEventListener('scroll', () => {
        this.didScroll = true
      })
      setInterval(() => {
        if (this.didScroll) {
          hasScrolled()
          this.didScroll = false
        }
      }, 250)
      const hasScrolled = () => {
        // Make sure scroll is more than the delta
        if (!Math.abs(this.lastScrollTop - this.pageWrap.scrollTop) <= this.delta) {
          if (this.pageWrap.scrollTop > this.lastScrollTop && this.pageWrap.scrollTop > this.navBarHeight) {
            // Scroll Down
            this.header.classList.remove('active')
            this.header.classList.add('inactive')
          } else {
            // Scroll Up
            this.header.classList.remove('inactive')
            this.header.classList.add('active')
          }
          this.lastScrollTop = this.pageWrap.scrollTop
        }
      }
    }
  }
  let header = new HeaderScroll()
  header.setHeader()
}
