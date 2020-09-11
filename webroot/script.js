// Function to generate the image everytime the user click the image they want to see in a big size"


function changeimg (url, e) {
  document.getElementById('rock').style.opacity = 1;
  document.getElementById("big__img").src = url;
  let imageList = document.getElementById("image__list");
  let img_child = imageList.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('shown');
    e.classList.add('shown');


  }

  // var images = document.getElementsByClassName('.photograph__main__images--small');
  // for(var i = 0; i < images.length; i++) {
  //   if(element.id != images[i].id) {
  //     images[i].style.opacity = 1;
  //   }

  //   else {
      
  //     images[i].style.opacity = 0.5;
     
  //   }
  // }



}







