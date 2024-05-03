<template>
  <ExploreLayout>
    <AppWrapper>
      <ExploreSettings>
        <ExploreSettingsCheckboxes
          field="Choose the End-Device you would like to connect"
          name="end-devices"
          :items="items"
        >
          <template #default="{ icon }">
            <component :is="icon" />
          </template>
        </ExploreSettingsCheckboxes>
        <ExploreSettingsCheckboxes
          field="Choose a server"
          name="servers"
          :items="servers"
        >
          <template #default="{ icon }">
            <component :is="icon" />
          </template>
        </ExploreSettingsCheckboxes>
      </ExploreSettings>
    </AppWrapper>
  </ExploreLayout>
</template>

<script lang="ts" setup>
import ExploreLayout from '~/components/Layouts/ExploreLayout.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import ExploreSettings from '~/components/Explore/ExploreSettings.vue';
import ExploreSettingsCheckboxes from '~/components/Explore/ExploreSettingsCheckboxes.vue';
import AugmentedRealityIcon from '~/icons/AugmentedRealityIcon.vue';
import MonitorIcon from '~/icons/MonitorIcon.vue';
import IpadIcon from '~/icons/IpadIcon.vue';
import PhoneIcon from '~/icons/PhoneIcon.vue';
import ServerIcon from '~/icons/ServerIcon.vue';
import CommunityServerIcon from '~/icons/CommunityServerIcon.vue';
import FxpoServerIcon from '~/icons/FxpoServerIcon.vue';

const items = [
  {
    icon: AugmentedRealityIcon,
    label: 'VR Glass',
    id: 'vr_glass',
  },
  {
    icon: MonitorIcon,
    label: 'PC or Laptop',
    id: 'pc_laptop',
  },
  {
    icon: IpadIcon,
    label: 'Ipad',
    id: 'ipad',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    id: 'phone',
  },
];

const servers = [
  {
    icon: ServerIcon,
    label: 'My own Server',
    id: 'own_server',
  },
  {
    icon: FxpoServerIcon,
    label: 'Hosted FXPO Main-Server Slot',
    id: 'hosted_main_server',
  },
  {
    icon: CommunityServerIcon,
    label: 'Hosted FXPO Community-Server Slot',
    id: 'hosted_community_server',
  },
];
</script>

<style lang="scss" module></style>
