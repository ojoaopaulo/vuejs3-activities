import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MessageEditor from '../MessageEditor.vue'
import App from '@/App.vue'

describe('Message Editor', () => {
  it('Send should erase message value', async () => {
    const wrapper = mount(MessageEditor)
    const textarea = wrapper.get('[data-testid="editor-textarea"]')
    const send = wrapper.get('[data-testid="send-button"]')

    await textarea.setValue('message')
    expect(textarea.element.value).toBe('message')

    await send.trigger('click')

    expect(textarea.element.value).toBe('')
  })

  it('Send should add a new message', async () => {
    const wrapper = mount(App)

    const textarea = wrapper.get('[data-testid="editor-textarea"]')
    const send = wrapper.get('[data-testid="send-button"')

    await textarea.setValue('message')
    await send.trigger('click')

    expect(wrapper.vm.messages).toHaveLength(1)
  })

  it('Clear should erase all messages', async () => {
    const wrapper = mount(App)

    const textarea = wrapper.get('[data-testid="editor-textarea"]')
    const clear = wrapper.get('[data-testid="clear-button"]')
    const send = wrapper.get('[data-testid="send-button"')

    await textarea.setValue('item1')
    await send.trigger('click')

    expect(wrapper.vm.messages).toHaveLength(1)

    await clear.trigger('click')

    expect(wrapper.vm.messages).toHaveLength(0)
  })
})
