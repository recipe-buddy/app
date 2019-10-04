import { shallowMount } from '@vue/test-utils'
import FeatureCard from '@/components/FeatureCard.vue'

const QIcon = '<div class="q-icon"></div>'
const DEFAULT_PROPS = { title: 'hello', icon: 'fas fa-book' }

describe('Feature card component', () => {
  it('renders the title prop in an h6 element', () => {
    const title = 'Dzien Dobry'
    const wrapper = shallowMount(FeatureCard, {
      propsData: { ...DEFAULT_PROPS, title },
      stubs: { QIcon }
    })
    expect(wrapper.find('h6').text()).toMatch(title)
  })
})
