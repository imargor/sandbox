function toggleLed1() {
  var checkBox = document.getElementById("led1");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D1,1);\n");
  } else {
    Puck.write("digitalWrite(D1,0);\n");
  }
}

function toggleLed2() {
  var checkBox = document.getElementById("led2");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D2,1);\n");
  } else {
    Puck.write("digitalWrite(D2,0);\n");
  }
}

function toggleLed3() {
  var checkBox = document.getElementById("led3");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D28,1);\n");
  } else {
    Puck.write("digitalWrite(D28,0);\n");
  }
}

function toggleLed4() {
  var checkBox = document.getElementById("led4");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D29,1);\n");
  } else {
    Puck.write("digitalWrite(D29,0);\n");
  }
}

function toggleLed5() {
  var checkBox = document.getElementById("led5");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D30,1);\n");
  } else {
    Puck.write("digitalWrite(D30,0);\n");
  }
}

function toggleLed6() {
  var checkBox = document.getElementById("led6");
  if (checkBox.checked == true) {
    Puck.write("digitalWrite(D31,1);\n");
  } else {
    Puck.write("digitalWrite(D31,0);\n");
  }
}
