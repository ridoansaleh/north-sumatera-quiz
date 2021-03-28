export const formatTime = (time) => {
  let timeText = "";
  let seconds = time / 1000;
  if (seconds >= 60) {
    let minutes = Math.floor(seconds / 60);
    let secondsText;
    seconds = seconds % 60;
    secondsText = seconds > 0 ? `${seconds} detik` : "";
    timeText = `${minutes} menit ${secondsText}`;
    return timeText;
  }
  timeText = `${seconds} detik`;
  return timeText;
};
