import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ShoppingList from '../ShoppingList.vue';

describe('ShoppingList', () => {    
    it('addItem should add to list', async () => {
        const wrapper = mount(ShoppingList)

        await addItem(wrapper, 'Cookie')

        const items = wrapper.findAll('[data-testid="list-item"]')
        
        expect(items).toHaveLength(1)
        expect(items[0].text()).toContain('Cookie')
    })

    it('addItem return if no input', async () => {
        const wrapper = mount(ShoppingList)

        await addItem(wrapper, '')

        const items = wrapper.findAll('[data-testid="list-item"]')

        expect(items).toHaveLength(0)
    })

    it('removeItem should remove the item from list', async () => {
        const wrapper = mount(ShoppingList)

        await addItem(wrapper, 'Apple')
        await addItem(wrapper, 'Rice')

        let items = wrapper.findAll('[data-testid="list-item"]')

        const removeButton = items[0].get('[data-testid="remove-button"]')
        await removeButton.trigger('click')

        items = wrapper.findAll('[data-testid="list-item"]')

        expect(items).toHaveLength(1)
    })

    it('clearList should remove Array items', async () => {
        const wrapper = mount(ShoppingList)

        const mockList = ['Banana', 'Apple', 'Coffee']
        for (const item of mockList) {
            await addItem(wrapper, item)
        }

        let items = wrapper.findAll('[data-testid="list-item"]')
        expect(items).toHaveLength(mockList.length)

        const clearButton = wrapper.get('[data-testid="clear-button"]')
        await clearButton.trigger('click')

        items = wrapper.findAll('[data-testid="list-item"]')
        expect(items).toHaveLength(0)
    })
})

async function addItem(wrapper, text) {
    const input = wrapper.get('[data-testid="item-input"]')
    const button = wrapper.get('[data-testid="item-add"]')

    await input.setValue(text)
    await button.trigger('click')
} 