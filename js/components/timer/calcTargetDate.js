function calcTargetDate(targetDate) {

    const time = new Date();
    const currentYear = time.getFullYear();
    const now = Date.now();

    let fullCurrentDate = `${currentYear}-${targetDate}`
    let targetTime = new Date(fullCurrentDate);
    let timeInMiliseconds = targetTime.getTime();

    if (timeInMiliseconds < now) {
        fullCurrentDate = `${currentYear + 1}-${targetDate}`
        targetTime = new Date(fullCurrentDate);
        timeInMiliseconds = targetTime.getTime();
    }

    const tiemLeftMiliseconds = timeInMiliseconds - now;
    let timeLeftSeconds = Math.floor(tiemLeftMiliseconds / 1000)

    const days = Math.floor(timeLeftSeconds / 60 / 60 / 24);
    timeLeftSeconds -= days * 60 * 60 * 24;

    const hours = Math.floor(timeLeftSeconds / 60 / 60);
    timeLeftSeconds -= hours * 60 * 60;

    const minutes = Math.floor(timeLeftSeconds / 60);
    timeLeftSeconds -= minutes * 60;

    const seconds = timeLeftSeconds;

    return [days, hours, minutes, seconds]
}

export { calcTargetDate };