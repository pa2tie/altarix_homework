// 1.	Исправить часы (решить задачу поможет предыдущая лекция)
// Есть класс часов. При создании экземпляра класса в свойство this.date записывается текущая дата/время. 
// При вызове метода start раз в секунду в this.date записывается новое время. Метод getTime возвращает время в формате «hh:mm:ss».
// При вызове getTime через 5 секунд после запуска часов время не отличается от того, которое было при создании часов:

function Clock() {
    this.date = new Date();
}
  
Clock.prototype.start = function() {
    setInterval((function() {
      this.date = new Date();
    }).bind(this), 1000);
}
  
Clock.prototype.getTime = function() {
    return this.date.toLocaleTimeString();
}

const myClock = new Clock();

myClock.start();
console.log(myClock.getTime());

setTimeout(function() {
  console.log(myClock.getTime());
}, 5000);


// 2.	Разработать класс AlarmClock. Отнаследовать его от Clock. 
// AlarmClock должен иметь метод setAlarmTime, который будет принимать время срабатывания будильника в формате «hh:mm:ss». 
// Необходимо расширить метод start класса Clock так, чтобы если время в this.date оказалось равным времени alarmTime, отобразился alert c каким-нибудь текстом. 

