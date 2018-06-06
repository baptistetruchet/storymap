function toggleBlock() {
  $('.collapse').on('show.bs.collapse', function(e) {
    if (!e.currentTarget.parentNode.childNodes[1].classList.contains('active-block')) {
      const active = document.querySelector('.active-block');
      if (active) { active.click(); }
    }
    e.currentTarget.parentNode.childNodes[1].classList.toggle('active-block');
  })

  $('.collapse').on('hide.bs.collapse', function(e) {
    e.currentTarget.parentNode.childNodes[1].classList.remove('active-block');
  })
}

export { toggleBlock }
