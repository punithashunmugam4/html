// const inp = document.querySelector('#word-input')
// inp.addEventListener('input',(event)=>{
//     let count = 0
//     const inputVal = event.target.value
//     // console.log(inputVal)
//     const para = document.querySelector('#paragraph-input')
//     let paraText = para.innerText
//     let checkBox = document.querySelector('#ignore-case')
//     // console.log(checkBox.checked)
//     let reg
//     if(checkBox.checked){
//         reg = new RegExp(inputVal,'gi')
//     }else{
//         reg = new RegExp(inputVal,'g')
//     }
//     paraText = paraText.replaceAll(reg,(arg)=>{
//         count++
//         return `<span class="highlighted-txt">${arg}</span>`
//     })
//     //console.log(paraText)
//     para.innerHTML = paraText
//     let countEle = document.querySelector('#words-counter')
//     countEle.innerHTML = count
// })
/* <div><span class="">Hi</span> Hello</div> */
// Hello HiHello -> Hello <span class="">Hi</span>Hello
/*
 Promises
*/
// 1. we want to fetch all users from database users=[..]
// 2. find a user given its 'username'
// fetching all users from database server
//cb is function
// function getUsers(cb){
//     let users = []
//     setTimeout(()=>{
//         //console.log("after 3 sec")
//         users = [
//             {
//                 username:"amar",
//                 email:"amar@gmail.com"
//             },
//             {
//                 username:"jubin",
//                 email:"jubin@gmail.com"
//             }
//         ]
//         cb(users)
//     },3000)
// }
// // find whether the given username exists or not, 
// //if exists return the user details
// function findUser(username){
//     //asynchronous
//     getUsers((users)=>{
//         //console.log(users)
//         const user = users.find((user)=>user.username === username)
//         console.log(user)
//     })
//     console.log("lots of code")
    
// }
// findUser("amar")
// it returns a promise object -> it is promising the data from the db
// function getUsers(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //console.log("after 3 sec")
//             let users = [
//                 {
//                     username:"amar",
//                     email:"amar@gmail.com"
//                 },
//                 {
//                     username:"jubin",
//                     email:"jubin@gmail.com"
//                 }
//             ]
//             resolve(users)
//             //reject("Error occured")
//         },3000)
//     })
//     return promise
    
// }
// // find whether the given username exists or not, 
// //if exists return the user details
// const username = "adskjf"
// function onFulfilled(users){
//     const user = users.find((user)=>user.username === username)
//     console.log(user)
// }
// function onRejected(error){
//     console.log("called on reject func")
//     console.log(error)
// }
// function findUser(){
//     //asynchronous
//     const promise = getUsers()
//     // telling the javscript about two function
//     promise.then(onFulfilled,onRejected)
   
//     console.log("lots of code")
    
// }
// findUser("amar")
console.log("Iam here");
function getPosts(){
    const promise = new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch((err)=>reject(err))
    })
    console.log(promise)
    return promise
    
}
function onFulfilled(data){
    console.log("Onfulfilled is called with data :",data)
}
function onReject(err){
    console.log("OnReject is called with error :",err)
}
getPosts().then(onFulfilled,onReject);