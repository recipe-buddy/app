<template>
  <q-page padding>
    <!-- Features section -->
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-4">
        <FeatureCard icon="fas fa-search" title="Organise" color="positive">
          All your recipes in one place. Search through all your recipes using
          our search tools to quickly find what you're looking for.
        </FeatureCard>
      </div>
      <div class="col-xs-12 col-sm-4">
        <FeatureCard icon="fas fa-book" title="Plan" color="accent">
          Our planning tools can quickly help you plan your shopping list for
          the week based on the meals you select.
        </FeatureCard>
      </div>
      <div class="col-xs-12 col-sm-4">
        <FeatureCard icon="fas fa-utensils" title="Suggest" color="info">
          Our recipe suggestion tools can help you think of meal ideas based on
          what you have in your fridge right now.
        </FeatureCard>
      </div>
    </div>

    <!-- Sign up -->
    <div class="row justify-center q-mt-xl q-mb-xl">
      <q-btn color="red" label="Get started now" />
    </div>
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
