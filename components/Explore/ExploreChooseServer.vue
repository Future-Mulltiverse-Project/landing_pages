<template>
  <div>
    <span :class="$style.field">Choose Server</span>
    <div :class="$style.el">
      <div v-for="(item, index) in items" :key="index" :class="$style.item">
        <div :class="$style.itemHeader">
          <div :class="$style.nameContainer">
            <div :class="$style.flag"></div>
            <div :class="$style.nameInner">
              <div :class="$style.name">
                {{ item.name }}
              </div>
              <div :class="$style.speed">
                {{ item.speed }}
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.itemBody">
          <p :class="$style.text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim ve
          </p>
          <div class="row" :class="$style.row2">
            <div class="col-auto">
              <div class="row" :class="$style.attrs">
                <div class="col-auto" :class="$style.attr">
                  <div :class="$style.term">Users</div>
                  <div :class="$style.value">540.074</div>
                </div>
                <div class="col-auto" :class="$style.attr">
                  <div :class="$style.term">slots</div>
                  <div :class="$style.value">1.000.000</div>
                </div>
                <div class="col-auto" :class="$style.attr">
                  <div :class="$style.term">Ping</div>
                  <div :class="$style.value">13 m/s</div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <button
                class="btn btn-sm btn-primary"
                :class="$style.btn"
                type="button"
              >
                Select Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    name: 'Simon Server, Germany',
    speed: '83 m/s',
  },
  {
    name: 'Server name, United States',
    speed: '83 m/s',
  },
  {
    name: 'Server name, France',
    speed: '13 m/s',
  },
  {
    name: 'Server name, Unitek Kingdom',
    speed: '47 m/s',
  },
];
</script>

<style lang="scss" module>
.field {
  font-size: 16px;
  margin-bottom: 24px;
  color: $primary;
  display: block;
  font-weight: 700;
  line-height: divide(30, 16);
}

.el {
  background-color: #15172e;
  height: rem-calc(278px);
  overflow-y: auto;
  border: 1px solid #2f3453;
}

.item {
  border-bottom: 1px solid #2f3453;

  &:last-child {
    border-bottom: 0;
  }
}

.itemHeader {
  font-size: 16px;
  font-weight: 600;
  padding: rem-calc(8px 16px);
}

.itemHeaderRow {
  align-items: center;
  justify-content: space-between;
}

.nameContainer {
  align-items: center;
  display: flex;
  width: 100%;
}

.nameInner {
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.name {
  font-size: 16px;
  line-height: 1.2;
  font-family: 'Nunito Sans', sans-serif;
  color: #9c9c9c;
}

.flag {
  background-color: #fff;
  height: rem-calc(14px);
  margin-right: rem-calc(14px);
  overflow: hidden;
  position: relative;
  width: rem-calc(22px);
}

.speed {
  color: $primary;
}

.itemBody {
  padding: rem-calc(0 14px 26px);

  @include media-breakpoint-up(sm) {
    padding: rem-calc(0 14px 26px 50px);
  }
}

.text {
  font-size: 14px;
  margin-bottom: 20px;
  color: #9c9c9c;
  opacity: 0.7;
  line-height: divide(19, 14);
  font-family: 'Nunito Sans', sans-serif;
}

.row2 {
  --gutter-y: #{rem-calc(8px)};
  align-items: center;
  justify-content: space-between;
}

.attrs {
  --gutter-y: #{rem-calc(8px)};
}

.attr {
  border-right: 1px solid rgba(#fff, 0.2);
}

.term {
  font-size: 10px;
  color: $primary;
  font-weight: 700;
  text-transform: uppercase;
}

.value {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
}

.btn {
  --btn-color: #fff;
  --btn-hover-color: #fff;
  padding: rem-calc(6px 10px);
}
</style>
