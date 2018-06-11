import { shallowMount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import Vue from 'vue'
import App from '../../src/components/App.vue'

describe('App.vue', () => {
  let wrapper: Wrapper<Vue>
  it('should display greeting', () => {
    wrapper = shallowMount(App)
    expect(wrapper.vm.$data.greeting).to.equal('HELLO! PEACE WORLD!!!')
  })
})
