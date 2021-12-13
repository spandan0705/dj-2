music_1='music.mp3';
music_2='music2.mp3';

function preload()
{
    song_1 = loadsong("music.mp3");
    song_2 = loadsong("music2.mp3");
}

    function setup()
    {
        canvas=createCanvas(600, 500);
        canvas.center();
    
        video=createCapture(VIDEO);
        video.hide();
    }

    function draw()
    {
        image(video,0,0,600,500);
    }