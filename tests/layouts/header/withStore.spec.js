import { mount,  flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '@/stores/Auth'
import Header from '@/layouts/Header.vue'

describe ('Header component', () => {

  const pinia = setActivePinia(createPinia())
  const store = useAuthStore()
  const config = {
    global: {
      plugins: [pinia],
      stubs: ['router-link']
    },      
    provide: { store }
  }

  it('it should redirect to home link', async () => {
    
    const wrapper = mount(Header, config)

    await flushPromises()

    const linkHome = await wrapper.get('[data-testid="home-link"]')

    expect(linkHome.find('[to="/"]').exists()).toBe(true)
  })
  
  it('it should redirect to dashboard link', async () => {
    
    const wrapper = mount(Header, config)
    
    store.$patch({
      user: {
        name: "John Doe",
        email: "user@email.ext"
      }
    })

    expect(store.user).toEqual({
      name: "John Doe",
      email: "user@email.ext"
    })
    
    await flushPromises()

    const linkHome = await wrapper.get('[data-testid="dashboard-link"]')

    expect(linkHome.find('[to="/dashboard"]').exists()).toBe(true)
  })

})

