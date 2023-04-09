export const showOnScroll = {
  checkShowOnScrollItems(containerClass) {
    const callback = function (entries) {
      entries.forEach((entry, index) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("is-visible")
        ) {
          setTimeout(() => {
            entry.target.classList.toggle("is-visible")
          }, 400 * index)
        }
      })
    }
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
    })
    const targets = document.querySelectorAll(
      `${containerClass} .show-on-scroll`
    )
    targets.forEach(function (target) {
      observer.observe(target)
    })
  },
}
