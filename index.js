const getRemainTime = deadline => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000, // se le suma un segundo porque es un tiempo de demora
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24))

  return {
    remainTime,
    remainMinutes,
    remainHours,
    remainDays,
    remainSeconds
  }
};

console.log(getRemainTime('Oct 7 2020 00:00:00 GMT-0500'));




const countdown = (deadline, elem, finalmessage) => {
  const el = document.getElementById(elem);
  const mensajeNuevo = document.getElementById('card');
  const gridMensaje = document.querySelector('.grid')
  const timerUpdate = setInterval(() => {
    let t = getRemainTime(deadline);
    el.innerHTML = `💝${t.remainDays}Días:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s💝`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalmessage;
      gridMensaje.style.display = 'none';
      mensajeNuevo.style.display = 'block';
    }
  }, 1000)
}

countdown('Oct 7 2020 00:00:00 GMT-0500', 'clock', 'Hola bichita que haces?');
