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
          brac_open_pos.push(prog_pos + 1);
        }
        else {
          prog_pos--;
        }
      }
      else if (s.charAt(i) == '0'){
        if (s.charAt(++i) == 'w') {
          *mem_pos = 0;
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
          std::cout << (char)(*mem_pos);
        }
        else {
          prog_pos--;
        }
      }
      else if (s.charAt(i) == 'O') {
        if (s.charAt(++i) == 'w') {
          if (*mem_pos == 0) {
            prog_pos = input.begin() + input.find("wOW", ++prog_pos - input.begin());
          }
        }
        else if (s.charAt(i) == 'W') {
          (*mem_pos)++;
        }
        else if (s.charAt(i) == 'O') {
          if (s.charAt(++i) == 'W') {
            *mem_pos += reg;
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