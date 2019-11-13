
$(document).ready(function() {
  $("#interpret").click(function(){
    interpret(document.getElementById('editor').value)
  });

  async function interpret(s){
    $("#output").val("");
    var mem = [0];
    var mem_pos = 0;
    var reg = 0;
    var brac_open_pos = [];

    var i = 0;
    while (i<s.length-2){
      await sleep(10);
      i = i + 3;
      switch(s.substring(i - 3,i)){
        case "wow":
          mem[mem_pos]--;
          break;
        case "woW":
          if (mem_pos == mem.length - 1) {
            mem.push(0);
          }
          mem_pos++;
          if ($('#memory-container').children().last().attr('id')!=("line" + Math.floor(mem_pos/8))){
            $("#memory-container").append("<div id=\"line" + Math.floor(mem_pos/8) + "\">0 0 0 0 0 0 0 0</div>");
          }
          break;
        case "wOw":
          break;
        case "wOW":
          if (mem[mem_pos]!=0){
            i = brac_open_pos[brac_open_pos.length-1];
          }
          break;
        case "Wow":
          mem_pos--;
          break;
        case "WoW":
          document.getElementById("output").value+=String.fromCharCode(mem[mem_pos]);
          break;
        case "WOw":
          brac_open_pos.push(i + 1);
          if (mem[mem_pos] == 0) {
            i = i + 1 + s.substring(i+1).indexof("wOW");
            brac_open_pos.pop();
          }
          break;
        case "WOW":
          mem[mem_pos]++;
          processLine(mem,mem_pos);
          break;
        case "w0w":
          mem[mem_pos] = 0;
          break;
        case "woo":
          if (s[i]=="w"){
              reg = mem[mem_pos];
              i++;
          }
          else{
            i = i - 2;
          }
          break;
        case "WOO":
          if (s[i]=="W"){
              mem[mem_pos] += reg;
            i++;
          }
          else{
            i = i - 2;
          }
          break;
        default:
          i = i - 2;
        }
      }


  }

  function processLine(mem,mem_pos){

    var startPos = Math.floor(mem_pos/8) * 8;
    var output = "";

    for (var i=startPos; i<startPos+8; i++ ){
      if (i > mem.length-1){
        output += "0 ";
      }
      else{
        output += mem[i] + " ";
      }
    }

    $("#line" + Math.floor(mem_pos/8)).text(output);
  }
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

});
