const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000, // se le suma un segundo porque es un tiempo de demora
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainMinutes,
    remainHours,
    remainDays,
    remainSeconds,
  };
};

const countdown = (deadline, elem, finalmessage) => {
  const el = document.getElementById(elem);
  const mensajeNuevo = document.getElementById("card");
  const gridMensaje = document.getElementById("grid");
  const timerUpdate = setInterval(() => {
    let t = getRemainTime(deadline);
    el.innerHTML = `💝${t.remainDays}Días:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s💝`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalmessage;
      gridMensaje.style.display = "none";
      mensajeNuevo.style.display = "block";
    } else {
      gridMensaje.style.display = "grid";
    }
  }, 1000);
};

countdown("Sep 03 2022 00:00:00 GMT-0500", "clock", "¿Hola amor que haces?");

window.onload = function () {
  let content = document.getElementById("loader");
  content.style.visibility = "hidden";
  content.style.opacity = "0";
};
