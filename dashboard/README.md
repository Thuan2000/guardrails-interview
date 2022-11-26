## Frontend Code Patterns Description

<a name="top"/>

The frontend is using NextJS framework (view more: https://nextjs.org/). 

The code pattern is mainly inspired by this blog post here: https://dev.to/ornio/container-view-pattern-in-react-inc-hooks-5404)
There are two types of components: `container` and `view/renderer` components.

* `container`: handles all business logics, API calls, passes the props down to view/renderer. Can be re-used. Never renders visual elements.
* `view/renderer`: can be considered as "dumb" components, sometimes handle internal states. Never does business logic/make API calls. Their only job is to render visual elements.

<p align="right">(<a href="#top">back to top</a>)</p>
