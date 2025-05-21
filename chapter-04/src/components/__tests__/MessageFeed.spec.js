import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import { mount } from '@vue/test-utils'

describe('Message Feed', () => {
  it('Should display message', async () => {
    const wrapper = mount(App)

    const textarea = wrapper.get('[data-testid="editor-textarea"]')
    const send = wrapper.get('[data-testid="send-button"]')

    await textarea.setValue('message')
    await send.trigger('click')

    expect(wrapper.find('[data-testid="feed-item"]').element.innerHTML).toBe('message')
  })
})
