export const formatTime = (time) => {
  let timeText = "";
  let seconds = time / 1000;
  let minutes = 0;
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let secondsText = seconds > 0 ? `${seconds} detik` : "";
    timeText = `${minutes} menit ${secondsText}`;
    return timeText;
  }
  timeText = `${seconds} detik`;
  return timeText;
};
