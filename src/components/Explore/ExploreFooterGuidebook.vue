<template>
  <footer :class="$style.footer">
    <div :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-md-1"></div>
        <div class="col-md-11" style="padding-left: 0px !important;">
          <div :class="$style.text33">
            <p><strong>Recent Uploads</strong></p>
          </div>
        </div>
      </div>
      <!--div class="row" >
        <div class="col-md-1"></div>
        <div class="col-md-11" :class="$style.input2"  style="padding-left: 0px !important;">
          <div :class="$style.text3">
            <strong>How can I help you&nbsp;</strong>
            today
            <strong>?</strong>
          </div>
        </div>
      </div-->
      <div class="row" >
        <div class="col-md-1"></div>
        <div class="col-md-11"   style="padding-left: 0px !important;">
          <div >
            <strong :class="$style.text3">How can I help you <span style="color:white">today</span>?</strong>
          </div>
          <br />
        </div>
      </div>
      <div class="row" >
        <div class="col-md-1"></div>
        <div class="col-md-4"  :class="$style.input">
            <input
              :class="$style.chat_message"
              type="text"
              placeholder="Write your message"
            />
            <a :class="$style.formimage1">
              <div :class="$style.txt8">
                <a :class="$style.form_image3"></a>
              </div>
            </a>
            <a :class="$style.formimage1">
              <div :class="$style.txt8">
                <a :class="$style.form_image2"></a>
              </div>
            </a>
            <a :class="$style.formimage1">
              <div :class="$style.txt8">
                <a :class="$style.form_image1"></a>
              </div>
            </a>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2"><img src="~/assets/images/graceai/logo_footer_guidebook.png" :class="$style.logoGraceAI" height="70" width="50" alt="Logo"></div>
      </div>
    </div>
   
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.logoSvg {
  margin-top: -60px;
  margin-bottom: -60px;
  height: 100px;
  margin-left: 90px !important;
  width: 100px;
  padding:0px;
  @media (max-width: 1200px) {
    display: none;
  }
}

.logoGraceAI {
  float: right;

}

@media (max-width: 788px)
{
  .logoGraceAI {
    display: none;
  }
  .input{
    width: 664px !important;
  }
}

.logo5 {
  @include rfs(1%, width);
  min-width: rem-calc(1%);
  @media (max-width: 1200px) {
    @include rfs(1%, width);
    min-width: rem-calc(1%);
  }
}
.txt8 {
  display: flex;
  align-items: center;
  font-size: 10px;
}
.anchor2 {
  
  @include rfs(50px, width);
  min-width: rem-calc(50px);
  height: 74px;
  border: none !important;
  background-image: url(assets/images/graceai/new-logo2.png);
  cursor: pointer;
}

.form_image3 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border: none !important;
  background-image: url(assets/images/graceai/form_image_3.png);
  cursor: pointer;
}

.form_image1 {
  @include rfs(35px, width);
  min-width: rem-calc(35px);
  height: 39px;
  border: none !important;
  background-image: url(assets/images/graceai/form_image_1.png);
  cursor: pointer;
}

.form_image2 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border: none !important;
  background-image: url(assets/images/graceai/form_image_2.png);
  cursor: pointer;
}

.logo2 {
/*  @include rfs(7%, width);
  min-width: rem-calc(7%);
  @media (max-width: 1200px) {
    width: 12%;
  }
*/
}

.logo4 {
  @include rfs(5%, width);
  min-width: rem-calc(5%);
  @media (max-width: 1200px) {
    @include rfs(1%, width);
    min-width: rem-calc(1%);
  }
}

.input2 {
  width: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    //margin-left: -20%;
  }
}

.input {
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 60%;

  @media (max-width: 768px) {
    //width: 40%;
    margin-left: 0px;
  }
}
.chat_message {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
}
.chat_message::placeholder {
  font-weight: 600;
  color: black;
}

.formimage1 {
  @include rfs(30px, width);
  min-width: rem-calc(30px);
  margin-left: auto;
  float: right;
  margin-right: auto;
  cursor: pointer;
  padding-right: 5px;
}

.text33 {
  @include font-size(10px);
  @include margin-top(-25px);
  max-width: em-calc(730, 22);
  font-weight: 400;
  position: relative;
  max-width: 100%;
  align-content: center;
  margin: 0 auto;

  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
}
.text3 {
    color: $primary;
  
}

.footer {
  /*position: fixed;
  bottom: 0px;
  left: 0;*/

  background-color: #0a0d1d;
  padding: rem-calc(18px 0);
  margin-top: -150px;
  width: 100%;
  position:absolute;
  bottom:0;
  //height: 30%;
  @media (max-width: 1200px) {
    //height: 40%;
  }
}

.wrapper {
  margin-left: 15%;
  position: relative;
  max-width: rem-calc(1440px);
  padding-bottom: rem-calc(
    40px
  ); // Adjust this value to ensure content is not hidden behind the footer

  @media (max-width: 1440px) {
    margin: rem-calc(0 $wrapper-padding-sm);
  }
}

.row {
  @include padding-top(28px);
  align-items: center;
  --gutter-y: #{rem-calc(12px)};
margin-left: -2%;

@media (max-width: 1200px) {
  margin-left: 15%;
}

  margin-left: 15%;

  @include media-breakpoint-up(lg) {
    padding-top: 0;
  }
}

.form {
  width: 100%;
  //margin-left: 16%;
  align-content: center;
  margin: 0 auto;
  margin-top: 4%;
  display: flex;
  align-items: center;
  min-width: rem-calc(10%);
  //margin-left: 16%;
  @media (max-width: 1200px) {
    //margin-left: 9%;
  }
}


.socialsRow {
  --gutter-x: #{rem-calc(8px)};
}

.link {
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  height: rem-calc(20px);
  justify-content: center;
  width: rem-calc(20px);
  transition:
    border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    border-color: $primary;
    color: $primary;
  }

  svg {
    height: rem-calc(8px);
    width: rem-calc(8px);
  }
}

.btn {
  align-items: center;
  border-radius: 50%;
  background-color: $blue-800;
  border: 3px solid $primary;
  color: #fff;
  top: rem-calc(-20px);
  display: flex;
  position: absolute;
  height: rem-calc(40px);
  justify-content: center;
  right: rem-calc(28px);
  margin-right: rem-calc($wrapper-padding-sm);
  transform: rotate(90deg);
  width: rem-calc(40px);
  transition: transform 0.2s ease-in-out;

  @include media-breakpoint-up(sm) {
    @include margin-right($wrapper-padding);
  }

  @media (min-width: 1441px) {
    right: 50%;
    transform: translateX(720px);
    margin-right: rem-calc(12px);
  }

  &:hover {
    color: #fff;
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    height: rem-calc(16px);
    width: rem-calc(16px);
  }
}

.text {
  @include font-size(12px);
  line-height: 1.2;
  margin-bottom: 0;

  strong {
    color: $primary;
  }
}
</style>
