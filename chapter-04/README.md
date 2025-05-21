# 📗 Chapter-04

The activity 4.01 involves the use of `components`, `props`, `events` and `refs` to render a chat interface that allows the user to add and display messages. 
- View the [**official solution for Activity 4.01**](https://github.com/PacktPublishing/Frontend-Development-Projects-with-Vue.js-3/blob/v2-edition/Chapter04/Activity4.01)


## 🧠 Knowledge from the chapter

- This chapter introduces `props`, as well as their types and validation;

- It also covers `slots`, `named slots` and `scoped slots`;

- Vue `refs` and `events` are also mentioned.

## 🛠️ Notes and Challenges

- The task was very simple to do.

- The only thing is, in step 3 of this activity, it says: "Listen to `change` events from `textarea` and set the value of `message` as the value of `textarea`". Of course, this component could be done using @change, but I chose to use v-model instead. Later, I saw a note that said: "The easier way to declare the `textarea` would be using v-model="message" instead of setting @change and manually sync textarea.value with message".

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
