x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

draw_apple = "";
draw_mango =  "";

apple = "";
mango = "";

speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
        to_number = Number(content)
    if(Number.isInteger(to_number))
        {
           document.getElementById("status").innerHTML = "Started drawing apple";
           draw_apple = "set";
        } else{
            document.getElementById("status").innerHTML = "The speech not recognized a number";
        }
  
}

function setup() {
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150)
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
}

function draw() {
    if(draw_apple == "set")
    {
        for(var i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
    }
    document.getElementById("status").innerHTML = to_number + "Apple is drawn";
    speak_data = to_number + "Apple is drawn";
    speak();
    draw_apples = "";

    if(draw_mango == "set")
    {
        for(var i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(mango, x, y, 50, 50);
        }
    }
    document.getElementById("status").innerHTML = to_number + "Mango is drawn";
    speak_data = to_number + "Mango is drawn";
    speak();
    draw_mangoes = "";
}

function preload() {
    apple = loadImage("vector-illustartion-of-fresh-apple-with-single-leaf-png_24812.jpg")
    mango = loadImage("1-2-mango-png_800x800.png")
}
