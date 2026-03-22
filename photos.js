$("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: false,
    // lastRow: "hide",
    rowHeight: 180,
    margins: 5
  })
  .on("jg.complete", function () {
    lightGallery(document.getElementById("animated-thumbnails-gallery"), {
      autoplayFirstVideo: false,
      pager: false,
      galleryId: "nature",
      flipHorizontal: false,
      flipVertical: false,
      rotateLeft: false,
      plugins: [
        lgZoom,
        lgThumbnail,
        lgShare,
        lgRotate,
        lgFullscreen,
        lgAutoplay
      ],
      mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
        rotate: false
      }
    });
  });
