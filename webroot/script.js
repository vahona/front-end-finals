console.log('we')

function changeimg (url, e) {
  document.getElementById("big__img").src = url;
  let imageList = document.getElementById("image__list");
  let img_child = imageList.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('rock');
    e.classList.add('rock');

  }

  console.log(img_child);
}