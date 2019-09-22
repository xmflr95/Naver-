var record = [];
var result = [];
var temp = [];

// var input = ["RECEIVE abcd@naver.com", "RECEIVE zzkn@naver.com", "DELETE", "RECEIVE qwerty@naver.com", "SAVE", "RECEIVE QwerTY@naver.com"];
// var input2 = ["RECEIVE abcd@naver.com", "RECEIVE zzkn@naver.com", "DELETE", "RECEIVE qwerty@naver.com", "SAVE", "SAVE", "DELETE", "RECEIVE QwerTY@naver.com", "SAVE"];
var receive = 'RECEIVE';
// RECEIVE = 7자 + 1(공백) = 8 ~ strTemp.length;
let strTemp = [];
let strResult = [];
// let compareStr = strEx.indexOf(receive);
let strR;
let saveTemp = [];

function tempReceive(email) {
  temp.push(email);

  return temp;
}

function tempDelete() {
  temp.pop();

  return temp;
}

function recordSave() {
  if (!temp.length) { // 비었을때
    temp = new Array();
  } else { // 비지 않았을때
    result = result.concat(temp);
    temp = new Array();
  }

  return result;
}

function solution(record) {
  var answer = [];
  // strTemp = strEx.split(', ').map((str) => str.replace(/\"/gi, ""));
  for (let i = 0; i < record.length; i++) {
    if (record[i].indexOf(receive) != -1) {
      let clover = record[i].substring(8, record[i].length);
      tempReceive(clover);
    } else if (record[i] == 'DELETE') {
      tempDelete();
    } else if (record[i] == 'SAVE') {
      answer = recordSave();
    }
  }

  return answer;
}

// console.log(solution(input2));