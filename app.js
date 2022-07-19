let scoreHome = 0
let scoreAway = 0

let clearCode = ''

function home() {
    scoreHome = scoreHome + 1

    let homeElem = document.getElementById('homeScreen')
    homeElem.innerText = scoreHome
    console.log(scoreHome);
}

function away() {
    scoreAway = scoreAway + 1

    let awayElem = document.getElementById('awayScreen')
    awayElem.innerText = scoreAway

    console.log(scoreAway);
}

function home3() {
    scoreHome = scoreHome + 3

    let home3Elem = document.getElementById('homeScreen')
    home3Elem.innerText = scoreHome

    console.log(scoreHome);
}

function away3() {
    scoreAway = scoreAway + 3

    let away3Elem = document.getElementById('awayScreen')
    away3Elem.innerText = scoreAway
    console.log(scoreAway);
}

