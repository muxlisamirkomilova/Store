// let a = +prompt("write your name")

// if(true){
//     alert("hello")
//  }
//  else if (a == 88){
//     alert("hello")
// }else{
//     alert("hello")
// }


// a == 3 ? alert("hello 3") : alert("hello 4")

///////////////////////



// let obj = {
//     title: "Sneakers",
//     price: 200,
//     isNew: true,
//     decription: "asdsadasdsadsadas"
// }

// console.log(obj.title);


// let arr = ["hello", "world", "bbb"]

// console.log(arr.length);
// console.log(arr[2]);



// let users = [
//     {
//         "username": "Mr.Khakim",
//         contacts: [
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//         ]
//     },
//     {
//         number: "+998915491754",
//         username: "Mr.Khakim",
//         contacts: [
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//             {
//                 contact_name: "doctor",
//                 number: "+2891372137812"
//             },
//         ]
//     },
// ]

// console.log(users[0].contacts[4].contact_name );


// let ism = prompt("Ismingizni kiriting:");
// if (ism === "muxlisa") {
//   alert("Xush kelibsiz, " + ism + "!");
// } else {
//   alert("Xatolik,parol yoki ism noto'g'ri!");
// }


// let parol = prompt("Parolni kiriting:");
// let ism = prompt("Ismingizni kiriting:");
// if (parol === "07072007",ism === "muxlisa") {
//   alert("Xush kelibsiz!");
// } else {
//   alert("Xatolik,parol yoki ism noto'g'ri!");
// }


// let username = prompt("username")
// let password = prompt("password")



let users = [
  {
    id: 9821368213129,
    tel: "+998",
    username: "khakim_01",
    password: 123,
    name: "Khakim",
    surname: "Almamedov",
    followers: 827654233,
    follows: 22,
    posts: 99,
    email: "asda",
  },
  {
    id: 91278631798092,
    tel: "+192",
    email: "asd",
    username: "muxlisa_07",
    password: 1234,
    name: "Muxlisa",
    surname: "Muxlisa",
    followers: 9999999999999,
    follows: 11,
    posts: 82,
  },
  {
    id: 988213129,
    tel: "+997",
    username: "Madina",
    password: 1235,
    name: "Madina",
    surname: "Madina",
    followers: 5553254233,
    follows: 2,
    posts: 10,
    email: "asdad",
  },
  {
    id: 988856433,
    tel: "+234",
    username: "Ziyoda",
    password: 1236,
    name: "Ziyoda",
    surname: "Ziyoda",
    followers: 555325445,
    follows: 12,
    posts: 10,
    email: "asdade",
  },
  {
    id: 988856433,
    tel: "+236",
    username: "Sarvar",
    password: 1237,
    name: "Sarvar",
    surname: "Sarvar",
    followers: 5,
    follows: 555325445,
    posts: 50,
    email: "asdadee",
  }
]
// for(let item of users){
//   if(item.password == password && item.username == username){
//     document.write(`<h1> Ismi ${item.name} </h1>`);
//   }
// }
let input = prompt("Parolni, tel yoki emailni kiriting");
for (let item of users) {
  if (item.password == input || item.tel == input || item.email == input) {
    document.write(`<h1> ${item.name} </h1>`);
    document.write(`<p class="wer"> Follows: ${item.follows} </p>`);
    document.write(`<p> Followers: ${item.followers} <button>follow</button></p>`);
  }
}




