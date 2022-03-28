import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import Header from '@/layouts/Header.vue'

const global = {
  plugins: [createPinia()],
  stubs: ['router-link']
}

describe ('Header component', () => {

  it('it should change the sidebar button to true', async () => {
    const wrapper = shallowMount(Header, {
      global,
      data() {
        return {
          isOpen: false
        }
      }
    })
    const sidebarButton = wrapper.get('[data-testid="sidebar-button"]')
 
    await sidebarButton.trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)  
  })

  it('it should have the links respectively', async () => {
    const wrapper = shallowMount(Header, { global })
    const linkProfile = wrapper.get('[data-testid="profile-link"]')
    const linkLogout = wrapper.get('[data-testid="logout-link"]') 
  
    expect(linkProfile.find('[to="/profile"]').exists()).toBe(true)
    expect(linkLogout.find('[to="/"]').exists()).toBe(true)  
  })

})

