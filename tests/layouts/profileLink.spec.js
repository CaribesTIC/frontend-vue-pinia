import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/layouts/Header.vue'

vi.mock('vue-router', () => ({
  createRouter: vi.fn( () => ({ beforeEach: vi.fn() }) ),
  createWebHistory: vi.fn(),
  
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))


test('allows authenticated user to edit a post', async () => {

  useRoute.mockImplementationOnce(() => ({ }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))



  const wrapper = mount(Header, {
    global: {
      plugins: [createPinia()],
      global: { },
      stubs: [
        "router-link", 
        //"router-view"
      ],     
    }    
  })

  await wrapper.find('[data-testid="profile-link"]').trigger('click')


  //expect(push).toHaveBeenCalledTimes(1)
  //expect(push).toHaveBeenCalledWith('/posts/1/edit')
})