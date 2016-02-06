function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  this.dt = new Date(Date.now());

  this.printTime();
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.

  var currentTime = this.dt;
  console.log(currentTime);
};
//
Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.

  this.dt.setSeconds((this.dt.getSeconds()+1));


  this.printTime();
};

var clock = new Clock();
