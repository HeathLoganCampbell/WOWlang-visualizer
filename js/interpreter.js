
window.onload = function(){ 
    // your code 
document.getElementById('interpret').onclick = function() {
   interpret(document.getElementById('editor').value)
 };

function interpret(s){

var mem = [0];
var mem_pos = 0;
var reg = 0;
var brac_open_pos = [];

for (var i = 0; i <s .length; i++) {
    if (s.charAt(i) == 'w') {
      if (s.charAt(++i) == 'o') {
        if (s.charAt(++i) == 'w') {
          mem[mem_pos]--;
        }
        else if (s.charAt(i) == 'W') {
          if (mem_pos == mem.length) {
            mem.push(0);
          }
          mem_pos++;
        }
        else if (s.charAt(i) == 'o') {
          if (s.charAt(++i) == 'w') {
            reg = mem[mem_pos];
          }
          else {
            i--;
          }
        }
        else {
          i--;
        }
      }
      else if (s.charAt(i) == 'O') {
        if (s.charAt(++i) == 'w') {
          //input from std?
        }
        else if (s.charAt(i) == 'W') {
          if (mem[mem_pos]!=0){
            i = brac_open_pos[brac_open_pos.length-1];
          }
        }
        else {
          i--;
        }
      }
      else if (s.charAt(i) == '0'){
        if (s.charAt(++i) == 'w') {
          mem[mem_pos] = 0;
        }
        else {
          i--;
        }
      }
      else {
        i--;
      }
    }
    else if (s.charAt(i) == 'W') {
      if (s.charAt(++i) == 'o') {
        if (s.charAt(++i) == 'w') {
          mem_pos--;
        }
        else if (s.charAt(i) == 'W') {
          document.getElementById("output").value+=String.fromCharCode(mem[mem_pos]);
        }
        else {
          i--;
        }
      }
      else if (s.charAt(i) == 'O') {
        if (s.charAt(++i) == 'w') {
          brac_open_pos.push(i + 1);
          if (mem[mem_pos] == 0) {
            i = i + 1 + s.substring(i+1).indexof("wOW");
            brac_open_pos.pop();
          }
        }
        else if (s.charAt(i) == 'W') {
          mem[mem_pos]++;
        }
        else if (s.charAt(i) == 'O') {
          if (s.charAt(++i) == 'W') {
            mem[mem_pos] += reg;
          }
          else {
            i--;
          }
        }
        else {
          i--;
        }
      }
      else {
        i--;
      }
    }
  }



}
};
