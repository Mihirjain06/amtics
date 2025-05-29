  function showSemester(num) {
      document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
      document.querySelector(`#semester-${num}`).classList.add('active');
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-btn')[num - 1].classList.add('active');
    }