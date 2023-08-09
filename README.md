# Miew Tech Challenge

Hello!

I'm Helder Ferreira, a FE engineer with around 3.5 years of experience with React.
I'm currently working at New Work SE (XING platform) and Mercadona Tech,

This is my solution of the tech challenge from Miew.

The tech stack is pretty standard:
- React;
- Typescript;
- Redux (Redux Toolkit);
- Styled-Components;
- RTL;
- Jest.

When it comes to the API used, I chose the one from TMDB, more precisely the endpoint on this URL: https://developer.themoviedb.org/reference/discover-movie

The application supports responsive design for 3 breakpoints, being the 2 most important ones handheld (smartphone) and desktop. 

### Solution

The home of the application is '/movies'. On that route you'll be able to see a collection of 20 movies per page (so, I've used pagination)
There are 3 others routes:
- Favourites;
- Wall of shame;
- Search.

All 4 routes are easily accessible, since on the header there's a burger button that, once clicked, displays all of them.

I've used Redux Toolkit (first time I used it, so it was a good learning opportunity). I've created 3 slices and reducers:
- Search slice;
- Movie slice;
- Pagination slice.

The first 2 handle asynchronous actions (through createAsyncThunk), as they are fetching data from the endpoint previously mentioned.
I've also decided to memoize them with the package 'Reselect' for performance reasons.

The favourites/shames are stored on local storage and can be interacted with through React Context, thus being available all over the component tree.

I'm aware one of the requirements was to have the swipeable feature to decide whether a given movie is a favourite or not, however I decided against it for the following reasons:
- Tinder on desktop doesn't look good from a UX perspective. With the mouse one has to swipe to the right, or left, and also has the option of clicking on an arrow to see the next card if no swipeable action is done. Tinder was made, I would say, with the goal of having the majority of its traffic coming from mobile platforms.
According to my experience, the UX experience on the browser on different devices should not be dramatically different and the development time required to attend to both needs would be higher;
- Despite this, for the sake of learning I gave it a go to the Swiper library (https://swiperjs.com/react). However using Typescript I faced several error on some of the Swiper properties, so, considering my timing limitations, I could not develop my own swiper functionality and had to let this go.

Considering I chose against the Swipeable pattern and did not want to copy the Carousel pattern employed by The MovieDB website, I decided to display on desktop everything as a 4 columns grid. The only endpoint I found retrieved 20 results per page and supported pagination, hence I developed a reducer and a Pagination component.
On handheld, the movies are displayed individually per row.

To pick a favourite or a shame the user just has to click on the respective buttons.

There's a back to top button that appears once the user has scrolled down enough.

I've also used Styled-Components as that's pretty much what I've used mainly at my job at XING ever since 2021 and I find them very flexible. The use of the $ sign as a suffix to every styling property ensures no error on the console gets displayed due to being a styling property.

The majority of the project is covered with unit tests. Nonetheless, this is an improvement point: due to timing constraints I did not have the time to ensure 100% of code coverage.

Also, in order to improve performance, along with memoization I implemented code splitting using React.Lazy and Suspense.

Besides, there are skeletons that get shown to inform the user content is being loaded.

Also, I've created an onError function to display a standardized grey block if the image being fetched from the API is corrupted, or simply non-existant. 


### Improving points
- Improve test coverage!

- Create a Load More component for handheld viewport along with a hook to get the viewport size. This would enable the user to see (for example) the first 5 of 20 results per page and then, if he wanted to see more results on that page he'd just have to click on the load more button and another 5 (or more) movies would get displayed;

- Create a sanitizer function for the reducers interaction with the store in order to enable proper javascript variable names. For example, the API retrieves "poster_path". The sanitizer function would enable to transform it into "imageUrl";

- The former point would enable the use of the MoviesList component on the Favourites and Shames Routes and prevent code duplication;

- Better skeletons;

- Error states;

- Include on the URL parameters the current page.

Hope you enjoy it!