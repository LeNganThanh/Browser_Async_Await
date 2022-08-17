import "../styles/main.scss";
import "babel-polyfill";
const modal = document.getElementById("myModal");

/* the original code----
 const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 60));
});

promiseOfModal.then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
})
*/

//close button
modal.addEventListener("click", e => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

//using async-await syntax-----------------

/* --solution.1-------
 async function getModalPromise() {
  let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve((modal.style.display = "block"));
    }, 1000 * 60);
  });

  let myModal = await promiseOfModal;
  return myModal;
}
getModalPromise(); 

//--solution.2--------
function promiseOfModal() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve((modal.style.display = "block"));
    }, 1000 * 60);
  });
}
async function getModalPromise() {
  let myModal = await promiseOfModal();
  return myModal;
}

getModalPromise();*/

//--solution.3-------
function promiseOfModal() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(modal);
    }, 1000 * 60);
  });
}
async function getModalPromise() {
  let myModal = await promiseOfModal();
  return myModal;
}

getModalPromise().then(function (val) {
  val.style.display = "block";
});

////////////////////////////////////////
//------Animation end-----------
const continueBtn = document.getElementById("continue");
continueBtn.addEventListener("mouseleave", function () {
  continueBtn.style.backgroundColor = "darkcyan";
  continueBtn.style.color = "white";
  async function alertMsg() {
    let getMsg = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(alert("Continue to subscribe!"));
      }, 100);
    });
    let asyncAlert = await getMsg;
    return asyncAlert;
  }
  alertMsg();
});

/* another way----
  function alertMsg() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(alert("Continue to subscribe!"));
      }, 200);
    });
  }
  async function getAlert() {
    let asyncAlert = await alertMsg();
    return asyncAlert;
  }
  getAlert();
*/
