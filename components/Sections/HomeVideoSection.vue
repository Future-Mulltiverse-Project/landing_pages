<template>
  <AppWrapper>
    <section :class="$style.section" class="mt-12 mb-12 " >
      <div class="grid grid-cols-1 gap-2">
        <video autoplay controls>
            <source src="@/assets/videos/future_multiverse_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </AppWrapper>
  </template>
  
  <style lang="scss" module>
  
  h4 {
      text-align: left;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 20px;
  }
  .section {
    text-align: center;
    position: relative;
    max-width: 1168px;
  }
  
  .primaryText {
    color: $primary; /* Replace $primary with your desired primary text color */
  }
  
  .custom-image {
    width: 100%;
  }
  
  .heading {
    font-size: 28px;
    margin-bottom: 28px;
    color: #ffffff;
    font-weight: 600;
    line-height: divide(30, 28);
  }
  
  .title {
    font-size: 45px;
    margin-bottom: 64px;
    line-height: divide(55, 45);
    margin-left: auto;
    margin-right: auto;
    max-width: 26ch;
    text-transform: uppercase;
    margin-bottom: 00px;
  }
  </style>
  