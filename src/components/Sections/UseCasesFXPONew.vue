<template>
  <section :class="$style.section">
    <div class="row">
      <h1 style="text-align: left; margin-bottom: 20px; font-size: 30px;"><span style="color: #CFB16D;">Examples </span>of <span style="color: #CFB16D;">Use-Cases, Industries</span> & <span style="color: #CFB16D;">Applications</span>:</h1>
      <div class="row">
        <div class="col-md-3">
            <div class="card">
            <h4>Galaxies & Planets</h4>
            <img
                src="@/assets/images/use_cases/galaxy.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Smart Nations & Cities</h4>
            <img
                src="@/assets/images/use_cases/smart_nations.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Mega-Projects</h4>
            <img
                src="@/assets/images/use_cases/mega_projects_2.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Custom Environments</h4>
            <img
                src="@/assets/images/use_cases/custom_environment_2.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <!--div class="col-md-6">
            <h4 style="padding-left: 0% !important; text-align: left">Mega-Projects & Any Custom Environments:</h4>
            <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <img
                        src="@/assets/images/use_cases/mega_projects.png"
                        alt="FUTURE Image"
                        class="custom-image"
                        :class="$style['custom-image']"
                    />
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img
                        src="@/assets/images/use_cases/custom_environment.png"
                        alt="FUTURE Image"
                        class="custom-image"
                        :class="$style['custom-image']"
                    />
                </div>
            </div>
            </div>
        </div-->
      </div>
      <div class="row">
        <div class="col-md-3">
            <div class="card">
            <h4>Real Estate</h4>
            <img
                src="@/assets/images/use_cases/real-estate.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>        
        <div class="col-md-3">
            <div class="card">
            <h4>Art</h4>
            <img
                src="@/assets/images/use_cases/art.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Exhibitions</h4>
            <img
                src="@/assets/images/use_cases/exhibitions.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
                <div class="card">
                <h4>Events</h4>
                <img
                    src="@/assets/images/use_cases/events.png"
                    alt="FUTURE Image"
                    class="custom-image"
                    :class="$style['custom-image']"
                />
                </div>
        </div>
      </div>
        <div class="row">

          <div class="col-md-3">
              <div class="card">
              <h4>Energy</h4>
              <img
                  src="@/assets/images/use_cases/energy.png"
                  alt="FUTURE Image"
                  class="img-fluid"
                  :class="$style['custom-image']"
              />
              </div>
          </div>
          <div class="col-md-3">
              <div class="card">
              <h4>Industry</h4>
              <img
                  src="@/assets/images/use_cases/industry.png"
                  alt="FUTURE Image"
                  class="custom-image img-fluid"
                  :class="$style['custom-image']"
              />
              </div>
          </div>
          <div class="col-md-3">
              <div class="card">
              <h4>Mobility</h4>
              <img
                  src="@/assets/images/use_cases/mobility.png"
                  alt="FUTURE Image"
                  class="custom-image img-fluid"
                  :class="$style['custom-image']"
              />
              </div>
          </div>
          <div class="col-md-3">
              <div class="card">
              <h4>(Space) Ports</h4>
              <img
                  src="@/assets/images/use_cases/ports.png"
                  alt="FUTURE Image"
                  class="custom-image"
                  :class="$style['custom-image']"
              />
              </div>
          </div>
        </div>

      <div class="row">
        <div class="col-md-3">
            <div class="card">
            <h4>Agriculture</h4>
            <img
                src="@/assets/images/use_cases/agriculture.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Mining</h4>
            <img
                src="@/assets/images/use_cases/mining.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Education</h4>
            <img
                src="@/assets/images/use_cases/education.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Tourism</h4>
            <img
                src="@/assets/images/use_cases/tourism.png"
                alt="FUTURE Image"
                class="custom-image"
                :class="$style['custom-image']"
            />
            </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 30px;">
        <div class="col-md-3">
            <div class="card">
            <h4>Finance</h4>
            <img
                src="@/assets/images/use_cases/finance.png"
                alt="FUTURE Image"
                class="custom-image"
                style="height: 240px;"
                :class="$style['custom-image']"
            />
            </div>
        </div>  
        <div class="col-md-3">
            <div class="card">
            <h4>Fashion</h4>
            <img
                src="@/assets/images/use_cases/fashion.png"
                alt="FUTURE Image"
                class="custom-image"
                style="height: 240px;"
                :class="$style['custom-image']"
            />
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
            <h4>Gaming</h4>
            <img
                src="@/assets/images/use_cases/gaming.png"
                alt="FUTURE Image"
                class="custom-image"
                style="height: 240px;"
                :class="$style['custom-image']"
            />
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <h4>Entertainment</h4>
            <img
                src="@/assets/images/use_cases/entertainment.png"
                alt="FUTURE Image"
                class="custom-image"
                style="height: 240px;"
                :class="$style['custom-image']"
            />
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
  padding-top: 50px;
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
