import { describe, expect, it, vi } from 'vitest';

import { mount, flushPromises } from '@vue/test-utils';
import Blog from '../Blog.vue';

vi.mock('contentful', () => {
  return {
    createClient: () => ({
      getEntries: ({ content_type }) => {
        if (content_type === 'person') {
          return Promise.resolve({
            items: [
              {
                fields: {
                  name: 'John Doe',
                  title: 'Tech Writer',
                  shortBio: 'Writes about tech and programming.',
                },
              },
            ],
          })
        } else if (content_type === 'blogPost') {
          return Promise.resolve({
            items: [
              {
                fields: {
                  title: 'How to Test Vue Components',
                  description: 'A beginner-friendly guide to testing Vue.',
                  publishDate: '2023-01-01T00:00:00Z',
                  heroImage: {
                    fields: {
                      file: {
                        url: '//images.ctfassets.net/example.jpg',
                      },
                    },
                  },
                },
              },
            ],
          })
        }
        return Promise.resolve({ items: [] })
      },
    }),
  }
})


describe('Blog.vue', () => {
    it('fetches and display authors and blog posts', async () => {
        const wrapper = mount(Blog)

        await flushPromises()

        expect(wrapper.find('.blog-header h1').text()).toBe('John Doe')
        expect(wrapper.find('.blog-header h2').text()).toBe('Tech Writer')
        expect(wrapper.find('.author-description').text()).toBe('Writes about tech and programming.')


        const postTitle = wrapper.find('.article h3')
        expect(postTitle.text()).toBe('How to Test Vue Components')

        const postDate = wrapper.findAll('.article p')
        expect(postDate[0].text()).toBe('Sun Jan 01 2023')

        const postDescription = wrapper.findAll('.article p')
        expect(postDescription[1].text()).toBe('A beginner-friendly guide to testing Vue.')

        const postImage = wrapper.find('.article img')
        expect(postImage.attributes('src')).toContain('//images.ctfassets.net/example.jpg')
      })
})