# Sinatra Forms with Associated Objects 🔗

## Goals 🐲

- [ ] Review CRUD in the context of web applications 🛠
- [ ] Review REST 🧮
- [ ] Implement RESTful routing 🛤
- [ ] Build a form for creating an object with associations 🕸

---

## CRUD 🛠

- ⚠️ _**What is CRUD? Give examples for a model, with HTTP methods, resource paths, and template files.**_

![crud](crud.png)

## REST 🧮

- ⚠️_**What is REST?**_

![rest2](rest2.png)

## Implementation of RESTful Routing 🛤

- Read
  - `#index`
  - `#show`
- Create
  - `#new`
    - HTML `form`s need `action` (where) and `method` (how) attributes
    - `input`s need `type`s (of input data), `name`s (aka keys), and `id`s (for CSS and JS targeting)
      - In Sinatra, `params` hold `name`:`value` pairs
    - [What's a `label`?](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
  - `#create`
- Update
  - `#edit`
    - Hidden inputs help us pass settings and data through forms
      - `<input type="hidden" name="_method" value="patch">`
      - `Rack::MethodOverride`
  - `#update`
- Delete
  - `#delete`

## Associated Objects 🕸

- Model Relationships
  - A game has many reviews.
  - A review belongs to a game.
- Nested forms
  - Use to create an instance _and_ a relationship
  - Nested forms => nested params
- Nested forms in Sinatra
  ⚠️ _**What will `name = game[reviews][][content]` look like in params?
  - `params#except`
  - When `Model.new` and `Model.save` are useful

---

## Takeaways ⛹🏽‍♀️

- [ ] RESTful routes map CRUD actions to HTTP methods
- [ ] HTML elements and attributes are essential to writing clean, accessible code
- [ ] The `erb` method renders a template; `redirect` triggers another HTTP request and controller action.
- [ ] Nested forms are needed when created an instance and a relationship simultaneously.
