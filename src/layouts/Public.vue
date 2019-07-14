<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="fas fa-utensils" class="text-white" />
        </q-toolbar-title>

        <div>Log In</div>
      </q-toolbar>
    </q-header>

    <q-parallax :src="require('../assets/banner_1.jpeg')">
      <h2 class="text-white">Recipe Buddy</h2>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" label="Sign Up" />
        <q-btn color="secondary" label="Log In" />
      </div>
    </q-parallax>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutPublic extends Vue {
  leftDrawerOpen: boolean = (this as any).$q.platform.is.desktop
}
</script>
