var list = ['heading', 'education', 'conversation', 'sitting', 'actual', 'instead',
 'science', 'remove', 'require', 'getting', 'thought', 'addition', 'continent', 'signal',
'having', 'rubber', 'fireplace', 'within', 'future', 'escape', 'question', 'evening',
 'silver', 'shorter', 'cutting', 'record', 'possibly', 'phrase', 'chance', 'single',
  'organized', 'plates', 'instrument', 'headed', 'opinion', 'action', 'trouble', 
  'pressure', 'declared', 'stretch', 'police', 'imagine', 'promised', 'stomach', 'naturally', 
  'spread', 'butter', 'service', 'engine', 'western', 'entire', 'measure', 'social', 'printed', 
  'composed', 'itself', 'kitchen', 'mistake', 'gasoline', 'although', 'carefully', 'probably', 
  'stared', 'between', 'balance', 'cheese', 'fierce', 'smaller', 'journey', 'captured', 'fighting', 
  'direction', 'largest', 'stream', 'consist', 'bridge', 'information', 'provide']


var word;
var guessWord = $("#guess-word .word h3")
var str="";
var moves=0;
var guessed = 0;
var score = 0;

function loadKeyboard(){
    $("#keyboard").html(`
    <div class="container">
            <div class="row">
    <div class="col-1 remove" id="A" onclick="btnClicked('A')">
    <h3>A</h3>
</div>
<div class="col-1 remove" id="B" onclick="btnClicked('B')">
    <h3>B</h3>
</div>
<div class="col-1 remove" id="C" onclick="btnClicked('C')">
    <h3>C</h3>
</div>
<div class="col-1 remove" id="D" onclick="btnClicked('D')">
    <h3>D</h3>
</div>
<div class="col-1 remove" id="E" onclick="btnClicked('E')">
    <h3>E</h3>
</div>
<div class="col-1 remove" id="F" onclick="btnClicked('F')">
    <h3>F</h3>
</div>
<div class="col-1 remove" id="G" onclick="btnClicked('G')">
    <h3>G</h3>
</div>
<div class="col-1 remove" id="H" onclick="btnClicked('H')">
    <h3>H</h3>
</div>
<div class="col-1 remove" id="I" onclick="btnClicked('I')">
    <h3>I</h3>
</div>
<div class="col-1 remove" id="J" onclick="btnClicked('J')">
    <h3>J</h3>
</div>
<div class="col-1 remove" id="K" onclick="btnClicked('K')">
    <h3>K</h3>
</div>
<div class="col-1 remove" id="L" onclick="btnClicked('L')">
    <h3>L</h3>
</div>
<div class="col-1 remove" id="M" onclick="btnClicked('M')">
    <h3>M</h3>
</div>
<div class="col-1 remove" id="N" onclick="btnClicked('N')">
    <h3>N</h3>
</div>
<div class="col-1 remove" id="O" onclick="btnClicked('O')">
    <h3>O</h3>
</div>
<div class="col-1 remove" id="P" onclick="btnClicked('P')">
    <h3>P</h3>
</div>
<div class="col-1 remove" id="Q" onclick="btnClicked('Q')">
    <h3>Q</h3>
</div>
<div class="col-1 remove" id="R" onclick="btnClicked('R')">
    <h3>R</h3>
</div>
<div class="col-1 remove" id="S" onclick="btnClicked('S')">
    <h3>S</h3>
</div>
<div class="col-1 remove" id="T" onclick="btnClicked('T')">
    <h3>T</h3>
</div>
<div class="col-1 remove" id="U" onclick="btnClicked('U')">
    <h3>U</h3>
</div>
<div class="col-1 remove" id="V" onclick="btnClicked('V')">
    <h3>V</h3>
</div>
<div class="col-1 remove" id="W" onclick="btnClicked('W')">
    <h3>W</h3>
</div>
<div class="col-1 remove" id="X" onclick="btnClicked('X')">
    <h3>X</h3>
</div>
<div class="col-1 remove" id="Y" onclick="btnClicked('Y')">
    <h3>Y</h3>
</div>
<div class="col-1 remove" id="Z" onclick="btnClicked('Z')">
    <h3>Z</h3>
</div>
</div>
</div>
`)
}

function random(){
    loadKeyboard()
    str = "";
    moves = 0;
    guessed = 0;
    var a=(Math.random())*list.length;
    var b=Math.floor(a);
    var w = list[b];
    word=w.toUpperCase();
    console.log(word);
    $("#image").attr("src","img/hangman"+moves+".png")
    for(var i = 0; i < word.length; i++){
        str+="* ";
    }
    $("#guess-word .word h3").text(str);
    $("#guess-word .score h3").text("Score: "+score)
}

function btnClicked(key){
    var flag=0;
    $("#"+key).text("");
    $("#"+key).removeClass("remove");
    $("#"+key).attr("onclick","");
    document.getElementById(key).style.border="none";
    for(var i=0; i<word.length; i++){
        if(key==word[i]){
            flag = 1;
            str = str.substr(0,(2*i)) + key + str.substr((2*i)+1);
            guessWord.text(str);
            guessed += 1;
        }
    }
    if (flag==0){
        moves += 1;
        $("#image").attr("src","img/hangman"+moves+".png")
    }

    if (guessed == word.length){
        $("col-1").css("border","2px solid blueviolet")
        $("col-1").text($())
        score +=1;
        random();
    } 

    if (moves == 6){
        moves = 0;
        guessed = 0;
        $("#guess-word .word h3").text(word);
        $("body").css("backgroundColor","rgb(240,128,128)");
        $("#keyboard").html(
            `
            <h1 class="lost">YOU LOST!</h1>
            <h1 class="lost">YOUR SCORE: ${score}</h1>
            <button onclick="playAgain()">Play Again</button>
            `
        )
    }
}

function playAgain(){
    location.reload();
}