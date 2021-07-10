let roomName=getId("roomName");
let createbtn=getId("createbtn");
roomName.addEventListener("keyup", (e) => {
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      e.preventDefault();
      createbtn.click();
    }
  });
createbtn.addEventListener("click", (e) => {
    // prevent refresh page
    // e.preventDefault();

    const inp = roomName.value;
    if (!inp) return;

    window.location='/join/' + roomName.value;
  });