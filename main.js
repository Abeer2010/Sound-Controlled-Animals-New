function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/GXsQ_bcI-/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log("Got Result");
    
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        gif_bark = document.getElementById('dog bark.gif');
        gif_meow = document.getElementById('cat meow.gif');
        gif_moo = document.getElementById('cow moooooo.gif');
        gif_roar = document.getElementById('lion-roar.gif');

        if (results[0].label == "Bark")
        {
            gif_bark
        }else if(results[0].label == "Meow"){
            gif_meow
        }else if(results[0].label == "Moo"){
            gif_moo
        }else{
            gif_roar
        }
    }
}