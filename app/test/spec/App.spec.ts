import { mount, Wrapper } from '@vue/test-utils'
import { expect } from 'chai'
import sinon from 'sinon'
import Vue from 'vue'
import App from '@/components/App.vue'

describe('App.vue', () => {
  let wrapper: Wrapper<Vue>

  it('should display greeting', () => {
    wrapper = mount(App)
    expect(wrapper.vm.$data.greeting).to.equal('HELLO! PEACE WORLD!!!')
  })

  it('Click on increase button 10times, count is 10', () => {
    const CLICK_TIMES = 10
    const spy = sinon.spy()
    wrapper = mount(App, {
      propsData: {
        inclease: spy
      }
    })
    for (let i = 0; i < CLICK_TIMES; i++) {
      wrapper.find('button.plusBtn').trigger('click')
    }
    expect(wrapper.vm.$data.count).to.equal(10)
  })
})
