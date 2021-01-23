var images =[ "collage.png","Arnav.jpg","Karthik.jpg","Richa.jpg","Richa_arnav.jpg" ];
var Names =["Family collage","Arnav"," Me and My Father","My mother","Me and My Mother"];
    var i = 0;
    function changeimage(){
      var familyarray = 6;
      i++;
     if( i > 5  ){
      i =0;
    }
    var updatedimage=images[i];
    var updatedname=Names[i]
      document.getElementById("image1").src=updatedimage;
      document.getElementById("name_34").src=updatedname;
    }
    