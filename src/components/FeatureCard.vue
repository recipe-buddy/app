<template>
  <div class="feature-card">
    <q-icon :name="icon" />
    <h6>{{ title }}</h6>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FeatureCard extends Vue {
  // Font awesome class name - e.g. `fas fa-something`
  @Prop({ type: String, required: true })
  readonly icon!: string

  // Main card title
  @Prop({ type: String, required: true })
  readonly title!: string
}
</script>

<style scoped lang="scss"></style>
