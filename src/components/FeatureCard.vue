<template>
  <div class="feature-card">
    <div class="feature-card__icon">
      <q-icon :name="icon" :class="[color ? `text-${color}` : '']" />
    </div>
    <div class="feature-card__title">
      <h6>{{ title }}</h6>
    </div>
    <div class="feature-card__body">
      <slot></slot>
    </div>
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

  // Icon color
  @Prop({ type: String })
  readonly color!: string
}
</script>

<style scoped lang="scss">
.feature-card {
  text-align: center;

  &__icon {
    font-size: 48px;
  }

  &__title h6 {
    margin: 10px;
  }

  &__body {
    margin-top: 20px;
  }
}
</style>
