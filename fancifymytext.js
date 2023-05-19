function changeTextSize(){
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancifyText(){
    var textInput = document.getElementById("textInput");
    
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

function normalizeText() {
    var textInput = document.getElementById("textInput");
  
      textInput.style.fontWeight = "normal";
      textInput.style.color = "black";
      textInput.style.textDecoration = "none";
}

function capitalizeText() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var sentences = text.split(". ");
  
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
    
        for (var j = 0; j < words.length; j++) {
          var capitalizedWord = words[j].toUpperCase();
          words[j] = capitalizedWord;
        }
    
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
      }
  
    text = sentences.join(". ");
    textInput.value = text;
  }
