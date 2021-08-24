// function to format a timestamp, accepts the timestamp and an `options` object as optional parameters
module.exports = (
    timestamp,
  ) => {
  
    let months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    };
    
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
    const dayOfMonth = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
  
    // set `am` or `pm`
    let periodOfDay;
  
    if (dateObj.getHours() >= 12) {
      periodOfDay = 'pm';
    } else {
      periodOfDay = 'am';
    }
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
  };