# 📗 Chapter-05

The objective of this chapter is to create a blog application using `Composition API Components` and `Composables`. The app should display the blog posts to the user, allow them to remove any post, and create new blog entries.
- View the [**official solution for Activity 5.01**](https://github.com/PacktPublishing/Frontend-Development-Projects-with-Vue.js-3/blob/v2-edition/Chapter05/Activity5.01)

## 🧠 Knowledge from the chapter

- Creating components with Composition API

- Using reactive data with `ref()`and `reactive()`

- Composition API lifecycle hooks 

- Composables (custom hooks)

## 🛠️ Notes and Challenges

- This activity requires using **Contentful**, a headless CMS also introduced in Chapter 2.

- Three components were created:
    - **Blogs.vue** - Renders the blog list and search field 
    - **BlogEditor.vue** - A blog editor for creating new posts
    - **BlogView.vue** - Renders both Blogs and BlogEditor components

- Three composables were also implemented: 
    - `useListAction` - Defines methods to add and remove items from the list
    - `useSearch` - Applies filters selected by the user
    - `useBlogs` - Fetches data from Contentful and initialize actions from `useListAction`

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```