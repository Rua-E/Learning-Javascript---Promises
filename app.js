// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// const emailRef = document.querySelector(".email");
// console.log(emailRef);

// 1) THEN Method

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// 2) Async/Await Method

// async function main (){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log (data)
//     emailRef.innerHTML = data.email
// }

// main ();

// const statusRef = document.querySelector(".status")

// THEN MOTTHOD

// getSubscriptionStatus().then (response => console.log (response))

// ASYNC/AWAIT METHOD

// async function main() {
//     const status = ( await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// main ();

// CREAT A FUNCTION

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout ( () => {
        resolve(undefined);
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

main();
