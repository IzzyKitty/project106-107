//https://teachablemachine.withgoogle.com/models/L6Obe_knK/

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/L6Obe_knK/model.json',modelready)
    }
    
    function modelready(){
    classifier.classify(gotresults)
    }
    
    function gotresults(error,results){
    if(error){
    console.error(error)
    }
    else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="i can hear "+results[0].label;
    document.getElementById("result_confidents").innerHTML="accurcy "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidents").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById("cow");
    img1=document.getElementById("lion");
    img2=document.getElementById("dog");
    img3=document.getElementById("cat");
    if(results[0].label=="mooing"){
    img.src='wow-cow-cow.gif';
    img1.src='th.jpg'
    img2.src='cute-friendly-cartoon-dog-vector.webp'
    img3.src='cartoon-cat-clipart-14.png'
    }
    else if(results[0].label=="roaring"){
    img.src='th (1).jpg';
    img1.src='lion-wild.gif'
    img2.src='cute-friendly-cartoon-dog-vector.webp'
    img3.src='cartoon-cat-clipart-14.png'
    }
    else if(results[0].label=="barking"){
    img.src='th (1).jpg';
    img1.src='th.jpg'
    img2.src='white-dof.gif'
    img3.src='cartoon-cat-clipart-14.png'
    }
    else{
    img.src='th (1).jpg';
    img1.src='th.jpg'
    img2.src='cute-friendly-cartoon-dog-vector.webp'
    img3.src='meowing-cat.gif'
    }
    }
    }
    
    