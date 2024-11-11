<template>
  <section :class="$style.section">
    <div class="row">
      <h1 style="text-align: left; margin-bottom: 20px; font-size: 30px;"><span style="color: #CFB16D;">Example Impressions</span></h1>
      <div class="row">
        <div class="col-md-6">
            <div class="card">
            <img
                src="@/assets/images/impressions/big_image.png"
                alt="FUTURE Image"
                class="custom-image"
                style="width: 100% !important;"
            />
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_1.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_2.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-md-6">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_3.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_4.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
            </div>
        </div>  
      </div>
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
  padding-top: 5px;
  text-align: center;
  position: relative;
  max-width: 1168px;
  margin: 0 auto;
}

@media (max-width: 1800px)
{
    /*.section{
      margin-left: 10px !important;
    }*/
}

.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}

.custom-image {
  width: 90% !important;
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
