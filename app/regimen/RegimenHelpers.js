
export function getNewID(array){
    return array.length;
  }


  // For todays date;
  Date.prototype.today = function () {
      return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
  }

  // For the time now
  Date.prototype.timeNow = function () {
       return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  }


export function getTime(entryDateTime){
  return (entryDateTime) ? entryDateTime.split(' ')[1] : '';
}

export function getFormattedTime(entryTime){
  return (entryTime) ? entryTime.substr(0,5) : '';
}

export function getDisplayTime(entryDateTime) {
  let time = getTime(entryDateTime);
  time = getFormattedTime(time);
  return time;
}

export function isWithinMinute(prevTime, currentTime){

}
