var images = ["images/kade1.jpg", "images/kade2.jpg", "images/kade3.jpg", "images/kade4.jpg",
 "images/kade5.jpg", "images/kadeandkieran.jpg", "images/kieran1.jpg", "images/kieran2.jpg", "images/kieran3.jpg",
  "images/kieran4.jpg", "images/kieran5.jpg", "images/kieran6.jpg"];

  var showImage;

  var count = 0;

  $('#start').click(startSlideShow);
  $('#stop').click(stopSlideShow);

  function displayImage() {
      $('#image-holder').html('<img src=' + images[count] + ' style="width: 400px;">');
  }

  function nextImage() {
      count++;
      $('#image-holder').html('<img src="images/loading.gif" width="200px">');
      setTimeout(displayImage, 1000);
      if(count === images.length) {
          count = 0;
      }
  }

  function startSlideShow() {
      showImage = setInterval(nextImage, 5000);

  }

  function stopSlideShow() {
      clearInterval(showImage);
  }

  displayImage();

