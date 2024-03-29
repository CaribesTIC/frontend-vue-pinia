import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import router from '@/router'
import App from '@/App.vue'
import Login from '@/views/Login/Index.vue'

const FlashMessage = { }

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('this should go to the login page', async () => {

  const wrapper = mount(App, {
    global: {
      plugins: [createPinia(), router],
      stubs: {FlashMessage: true}
    }    
  })
  
  router.push('/')
  await router.isReady()
  
  await wrapper.get('[data-testid="login-link"]').trigger('click')

  await flushPromises()  

  expect(global.location.pathname).toBe('/login')
  //expect(wrapper.html()).toContain('Inicio de Sesión')

})
