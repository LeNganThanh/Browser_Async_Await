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
      resolve(modal);
    }, 1000 * 60);
  });

  let myModal = await promiseOfModal;
  return myModal.style.display ="block";
}
getModalPromise(); 

//--solution.2--------
function promiseOfModal() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(modal);
    }, 1000 * 60);
  });
}
async function getModalPromise() {
  let myModal = await promiseOfModal();
  return myModal.style.display ="block";
}

getModalPromise();

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
});*/

//--solution from Gerhard----------
function promiseOfModal() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(modal);
    }, 1000 * 60);
  });
}
async function getModal() {
  let result = await promiseOfModal(); //the way to use async/await -->> await get the value - modal and execute with style in async
  result.style.display = "block";
}

getModal();

////////////////////////////////////////
//------Animation end-----------
const continueBtn = document.getElementById("continue");

/* 
  continueBtn.addEventListener("animationend", function () {
  continueBtn.style.backgroundColor = "darkcyan";
  continueBtn.style.color = "white";
  async function alertMsg() {
    let getMsg = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Continue to subscribe!");
      }, 100);
    });
    let asyncAlert = await getMsg;
    alert(asyncAlert);
  }
  alertMsg();
});
*/

/* another solution--------
function alertMsg() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Continue to subscribe!");
    }, 200);
  });
}
async function getAlert() {
  let asyncAlert = await alertMsg();
  alert(asyncAlert);
}
getAlert();*/

continueBtn.addEventListener("animationend", function () {
  continueBtn.style.backgroundColor = "darkcyan";
  continueBtn.style.color = "white";
  async function alertMsg() {
    let getMsg = new Promise((resolve, reject) => {
      resolve("Continue to subscribe!");
    });
    let asyncAlert = await getMsg;
    setTimeout(alert(asyncAlert), 100);
  }
  alertMsg();
});
//--solution from Gerhard-----------
/* continueBtn.addEventListener("animationend", () => {
  onAnimationComplete();
});
async function onAnimationComplete() {
  const buttonAnimationEnd = await onanimationstart(continueBtn);
  buttonAnimationEnd.classList.add("btn-info");
  alert("Continue to subscribe!");
}
function onanimationstart(el) {
  return new Promise(resolve => {
    el.addEventListener("animationend", () => {
      resolve(el);
    });
  });
}
 */
