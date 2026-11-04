function timeOut(string, timer) {
  setTimeout(() => {
    console.log(string);
  }, timer);
}

timeOut("Roman", 5000);
