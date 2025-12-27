function modalController() {
  return {
    projectOpen: false,
    messageOpen: false,
    scrollY: 0,

    lockScroll() {
      this.scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${this.scrollY}px`
      document.body.style.width = '100%'
    },

    unlockScroll() {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, this.scrollY)
    },

    openProjectModal() {
      this.lockScroll()
      this.projectOpen = true
    },

    openMessageModal() {
      this.lockScroll()
      this.messageOpen = true
    },

    close() {
      this.projectOpen = false
      this.messageOpen = false
      this.unlockScroll()
    }
  }
}
