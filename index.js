document.getElementById("submit-button").onclick = 
    function() {        
        var sentence = document.getElementById('string').value;
        var letter = document.getElementById('letter').value;
        var index = sentence.indexOf(letter);
        if(index === -1){
        alert("The letter does not exist in the sentence");
        }else{
        alert(sentence.substring(index+1));
    
       }

}
