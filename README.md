# MovieCenterX

This project is a template to learn [NgRx](https://ngrx.io/).

## Setup

- Run `npm install`
- Run `npm run start`
- Install Redux DevTools

To start a local development server, run `ng serve`.

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Your Tasks

### Basics - Movies

- [ ] Run the application and inspect the redux dev tools.
- [ ] Checkout the [Movies](http://localhost:4200/movies) tab. Whats the difference between viewing the movies details vs. the random vote average display.
- [ ] Implement the like button to increase the movie vote count.

### Advanced - Shows

Try to implement the [Shows](http://localhost:4200/shows) tab on your own. The basic architecture has been done and simply awaits your input.

Here is a small checklist which might help you on your way:

- [ ] Check if everything that is needed is in the state.
- [ ] Implement actions.
- [ ] Implement reducers.
- [ ] Implement selectors.
- [ ] Implement effects.
- [ ] Implement smart and dumb components.

What else can you try?

- [ ] Set a selected show within the state and load given show.
- [ ] Add a loading and loaded state to the reducer. Try to only use a single action for this.
- [ ] Convert the `shows` array into a dictionary `{ [id: string]: Show }` and improve the selector for the selected show.

### Final - Actors

Repeat the same for actors but be aware, nothing has been done yet.

Here is a small checklist which might help you on your way:

- [ ] Did you add all relevant files?
- [ ] Did you provide the new state to the application?
- [ ] Did you provide the effects to the application?
- [ ] Have you added an useful initial state?

What else can you try?

- [ ] Create a new page that lists all movies and shows combined. Implement a selector that combines and returns state from different store areas.
- [ ] Change the Actors feature into a lazy-loaded feature. (You need to change the routes and the Store registration.)
- [ ] Open a bottom sheet or dialog using effects only.
