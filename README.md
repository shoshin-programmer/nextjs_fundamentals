# NextJS Fundamentals

>I always believed that mastering the fundamentals will let you finish 80% of the work.

*This will be a sample and minor practice of mastering NextJS fundamentals.*

Some Basic Concepts

`useEffect`

When should you use?

Personally, I use it when I am writing functional components in order to have those side effects of effects inside the function without using the `this` and the Component Class.
For the proper definition, `useEffect` is a function where you can change or give side effects from inside the component to outside the components or the DOM.
When it runs on the browser, first React renders the component while keeping the useEffect function on the side.

Component is rendered -> React DOM changed -> Browser Painting -> `useEffect` is ran.
First contentful paint is after the `Browser Painting`, it is by this time that the useEffect is ran where all the components are rendered then the useEffect can handle the changes depending on what you had added inside. This would then start the repainting. If you are repainting or changing the designs or colors around the DOM, you would want to use the 'useLayoutEffect`.

`useLayoutEffect` runs before the browser painting thus giving a better user-experience. If there is a reason not to use `useLayoutEffect` it would be because it delays the first contentful paint of your webpage. The webpage looks or feels slow if you are having API calls or other stuff before the first contentful paint which gives the user time to close the tab and open some other website instead.


`useEffect` can have another parameter where the effect only runs only when the parameter/variable is changed.

`setTimeout` returns the id when invoked.
- that id can then be used to clearIntervals when every chane is made, it would just run the function for the last changes within the set interval

