<template>
    <section :class="$style.section">
      <div class="row">
        <video autoplay controls>
            <source src="@/assets/videos/future_multiverse_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </template>
  
  <style lang="scss" module>
  
  h4 {
      text-align: left;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 20px;
  }
  .section {
    padding-top: 80px;
    text-align: center;
    position: relative;
    max-width: 1168px;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  
  .primaryText {
    color: $primary; /* Replace $primary with your desired primary text color */
  }
  
  .custom-image {
    width: 100%;
  }
  
  .heading {
    @include font-size(28px);
    @include margin-bottom(28px);
    color: #ffffff;
    font-weight: 600;
    line-height: divide(30, 28);
  }
  
  .title {
    @include font-size(45px);
    @include margin-bottom(64px);
    line-height: divide(55, 45);
    margin-left: auto;
    margin-right: auto;
    max-width: 26ch;
    text-transform: uppercase;
    margin-bottom: 00px;
  }
  </style>
  