function edit() {
  document.querySelectorAll('.btn-flex').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('active-block')) {
        const active = document.querySelector('.active-block');
        if (active) { active.click(); }
      }
      e.currentTarget.classList.toggle('active-block');
    });
  })
}

export { edit }
