<template>
  <q-page padding>
    <FeatureCard icon="fas fa-book" title="Test">test body</FeatureCard>
    <FeatureCard icon="fas fa-book" title="Test">test body</FeatureCard>
    <FeatureCard icon="fas fa-book" title="Test">test body</FeatureCard>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeatureCard from '@/components/FeatureCard.vue'

@Component({
  components: { FeatureCard }
})
export default class PageAbout extends Vue {}
</script>
