"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2020/08/21/react-opentable","metadata":{"permalink":"/blog/2020/08/21/react-opentable","source":"@site/blog/2020-08-21-react-opentable.md","title":"npm \ud83d\udce6 React OpenTable","description":"React wrapper for Opentable Reservation Widget","date":"2020-08-21T00:00:00.000Z","formattedDate":"August 21, 2020","tags":[{"label":"opentable","permalink":"/blog/tags/opentable"},{"label":"react-opentable","permalink":"/blog/tags/react-opentable"},{"label":"react-opentable wrapper","permalink":"/blog/tags/react-opentable-wrapper"}],"readingTime":1.69,"hasTruncateMarker":true,"authors":[{"name":"Sahil Satishkumar","url":"https://sahilsatishkumar.dev/contact","imageURL":"https://avatars1.githubusercontent.com/u/8242514"}],"frontMatter":{"title":"npm \ud83d\udce6 React OpenTable","description":"React wrapper for Opentable Reservation Widget","author":"Sahil Satishkumar","author_url":"https://sahilsatishkumar.dev/contact","author_image_url":"https://avatars1.githubusercontent.com/u/8242514","tags":["opentable","react-opentable","react-opentable wrapper"]},"unlisted":false,"nextItem":{"title":"Soft Skills","permalink":"/blog/2020/08/16/Soft-skills"}},"content":"I published my very first npm package: [`react-opentable (v2.0.0)`](https://www.npmjs.com/package/react-opentable)\\n\\n![](https://badgen.net/npm/v/react-opentable) ![](https://badgen.net/npm/dt/react-opentable) ![](https://badgen.net/bundlephobia/minzip/react-opentable) ![](https://badgen.net/npm/license/react-opentable)\\n\\nThis post intends to be a helper document for the same, and will be kept upto date, if the package ever changes. As of writing this post, v2.0.0 is the latest and stable version of the package. The source code is in a private repository right now, will be open sourced soon!\\n\\n\x3c!--truncate--\x3e\\n\\n`react-opentable` is a React wrapper for opentable\'s reservation widget.\\n\\n:::info\\n\\nDISCLAIMER: **`react-opentable`** is not affiliated to **`Opentable Inc.,`** or it\'s employees.\\n\\n:::\\n\\n### Requirements\\n\\nWorks only with [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) and above.\\n\\n`react-opentable` uses hooks and will not work with previous versions (comment below if you need one)\\n\\n### Exports\\n\\nThere are two main exports from `react-opentable`\\n\\n- `OpenTable` React Component\\n- `positions` JS Object\\n\\n### Usage\\n\\n```jsx OpenTable Component\\n<OpenTable rid=\\"123123\\" />\\n```\\n\\n:::info\\n\\n**`rid`** is a required prop, the component won\'t function correctly without it.\\n\\n:::\\n\\nDefault Props:\\n\\n| defaultProps           | description                                  |\\n| ---------------------- | -------------------------------------------- |\\n| type=\'standard\'        | Uses the standard widget type                |\\n| theme=\'standard\'       | Default standard theme                       |\\n| iframe=true            | opens the widget in an iframe (recommended)  |\\n| newtab=false           | widget won\'t open reservation in a new tab   |\\n| position=\'bottom-left\' | widget opens in the `\'bottom-left\'` position |\\n\\n### Customization\\n\\nThe widget can be positioned in one of 5 positions namely \'top-left\', \'top-right\' ,\'bottom-left\' (default), \'bottom-right\' and \'unset\' (if you want to position the element through css, use this).\\n\\nTo avoid typos you can use the `positions` object with keys `positions.POSITION_TOP_LEFT`, `positions.POSITION_TOP_RIGHT`, `positions.POSITION_BOTTOM_LEFT`, `positions.POSITION_BOTTOM_RIGHT` and `positions.POSITION_UNSET`\\n\\nFor further customisations, pass `customClassName`, this className gets attached to the container of component.\\n\\n### Demo\\n\\nHere\'s a code sandbox for you to tinker with:\\n\\n<iframe src=\\"https://codesandbox.io/embed/unruffled-snow-0zmiw?fontsize=14&hidenavigation=1&theme=light\\" style={{width: \'100%\', height: \'500px\', border: 0, borderRadius: \'4px\', overflow: \'hidden\'}} title=\\"unruffled-snow-0zmiw\\" allow=\\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\\" sandbox=\\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\\" />\\n\\n### Need feedback\\n\\nDo let me know how can I make this components more useful for you :grin:"},{"id":"/2020/08/16/Soft-skills","metadata":{"permalink":"/blog/2020/08/16/Soft-skills","source":"@site/blog/2020-08-16-Soft-skills.md","title":"Soft Skills","description":"...This book is really about me sharing my experience and the things that have made me successful so far in my life...","date":"2020-08-16T00:00:00.000Z","formattedDate":"August 16, 2020","tags":[{"label":"books","permalink":"/blog/tags/books"},{"label":"review","permalink":"/blog/tags/review"}],"readingTime":2.545,"hasTruncateMarker":true,"authors":[{"name":"Sahil Satishkumar","url":"https://sahilsatishkumar.dev/contact","imageURL":"https://avatars1.githubusercontent.com/u/8242514"}],"frontMatter":{"title":"Soft Skills","author":"Sahil Satishkumar","author_url":"https://sahilsatishkumar.dev/contact","author_image_url":"https://avatars1.githubusercontent.com/u/8242514","tags":["books","review"]},"unlisted":false,"prevItem":{"title":"npm \ud83d\udce6 React OpenTable","permalink":"/blog/2020/08/21/react-opentable"},"nextItem":{"title":"Hello World","permalink":"/blog/2020/04/26/hello-world"}},"content":"<blockquote>\\n...This book is really about me sharing my experience and the things that have made me successful so far in my life...\\n\\n<br/><br/>\\n\\n_(Chapter #71, Soft Skills)_\\n\\n</blockquote>\\n\\n<div style={{display: \\"flex\\", flexDirection: \\"column\\", alignItems: \\"center\\"}}>\\n<a href=\\"https://www.amazon.in/gp/product/B079WY7ZJK/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=sahrckr07-21&linkId=fd638e65c93e9c0c646cea96f7b7e92b\\" target=\\"_blank\\">Soft Skills: The Software Developer\'s Life Manual</a>\\n<img border=\\"0\\" width=\\"240\\" src=\\"https://images.manning.com/360/480/resize/book/0/54e56db-260b-46a7-b15d-ad4dfa39a867/sonmez.png\\" />\\n<img src=\\"https://ir-in.amazon-adsystem.com/e/ir?t=sahrckr07-21&l=li3&o=31&a=B079WY7ZJK\\" width=\\"1\\" height=\\"1\\" border=\\"0\\" alt=\\"\\" />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\n## TLDR;\\n\\nThe book is written with great intention. It covers a lot of topics normally not normally talked about in the software industry.\\n\\nShould you read it ? The answer depends on the kind of books you\'ve read in the past. If you have read a lot of non-fiction & self-help in the past, you should probably skip it.\\n\\nOn the other hand if you are a software developer & new to reading books in general. This might just be the perfect one for you.\\n\\n## The long version\\n\\nThe book is cleverly structured into 7 parts. There are 71 chapters, this will take a while for you to parse through. Each chapter is bite sized 1500-ish words, and are mostly unrelated. You should be able to pick it up, even if you decide to drop it off in between.\\n\\n1. Career\\n2. Marketing yourself\\n3. Learning\\n4. Productivity\\n5. Financial\\n6. Fitness\\n7. Spirit\\n\\nWhile the book starts with a very relatable content, but doesn\'t do a great job at keeping it relatable.\\n\\nA lot of the content which isn\'t about self development, will not apply to most of us. What works for a certain person, in a certain country might not work in every geography. I personally didn\'t like most of section 5 & section 6.\\n\\nIt would have added a lot of value if this book was written by a diverse bunch of authors, instead of, just John broadcasting his (legit) experiences & opinion.\\n\\nLet\'s pick a topic for example. John has made most of his income from real-estate. Let\'s assume that an average home costs like 2x - 3x the annual income of a software engineer with some years of experience, in a non major city. However, in a country like India cost of real-estate would be atleast 5x the annual income, if not more, than what a software engineer makes. And don\'t get me started on availability of homeloans (Interest rates have lower now, but the principal amount is not going down any time soon).\\n\\nOn the bright side of things, if this is your first book. You\'ll get some sort of a summary from a lot of other books.\\n\\n- [So Good They Can\'t Ignore You](https://amzn.to/3aBWbLu)\\n- [The Power of Habit](https://amzn.to/3g2Jc6y)\\n- [The Dip: The extraordinary benefits of knowing when to quit](https://amzn.to/3g0dBCr)  \\n  _(John does a better job of summarising this in 1 chapter, dragging the topic into a book.)_\\n\\n(I\'ve read only the aforementioned books, John does mention a bunch of books that I\'ve added to my reading queue)\\n\\n<blockquote>\\n\\nYou shouldn\'t take what anyone says as gospel...\\n\\n_(Chapter #71, Soft Skills)_\\n\\n</blockquote>\\n\\nP.S.: I may be \\"Marketing Myself\\" by reviving my blog."},{"id":"/2020/04/26/hello-world","metadata":{"permalink":"/blog/2020/04/26/hello-world","source":"@site/blog/2020-04-26-hello-world.md","title":"Hello World","description":"Welcome to this blog.","date":"2020-04-26T00:00:00.000Z","formattedDate":"April 26, 2020","tags":[{"label":"books","permalink":"/blog/tags/books"},{"label":"random","permalink":"/blog/tags/random"}],"readingTime":1.49,"hasTruncateMarker":true,"authors":[{"name":"Sahil Satishkumar","url":"https://sahilsatishkumar.dev/contact","imageURL":"https://avatars1.githubusercontent.com/u/8242514"}],"frontMatter":{"id":"hello-world","title":"Hello World","author":"Sahil Satishkumar","author_url":"https://sahilsatishkumar.dev/contact","author_image_url":"https://avatars1.githubusercontent.com/u/8242514","tags":["books","random"]},"unlisted":false,"prevItem":{"title":"Soft Skills","permalink":"/blog/2020/08/16/Soft-skills"}},"content":"Welcome to this blog.\\n\\n\x3c!--truncate--\x3e\\n\\nThis is not a test post.\\n\\nI recently made this transition to my website from being a static site to something more. I wanted a place where I could log my thoughts, talk about books that I\'m reading (been reading a lot lately) and code I want to share openly.\\n\\nThere are a lot of changes I really love about this setup. Firstly, I got to hack an off-the-shelf [tool](https://docusaurus.io/) to build it (doing that for the second time). Secondly, I am really thrilled to get my own [books page](/books). Goodreads as a social media is cool, but then there aren\'t a lot of people using it. This blog will also give me a way to share my on views on some of the books I really enjoyed reading them.\\n\\nLastly docusaurus is great for sharing programming experiences too. \ud83d\ude42\\n\\n```js\\nconsole.log(\\"LOVE THEM CODEBLOCKS!\\");\\n```\\n\\nHow can you help ?\\n\\n- I am a really clumsy at typing. So please let me know if there are tpyos. (Better off, send PR\'s!)\\n- I intend to add more posts/tutorials on a periodical basis. (Atleast once in a month, no promises but will definitely give it a try) SEND SUGGESTIONS.\\n\\nI do not have a Long Term plan as of now. Personally, I am dealing with a lot of changes, and I cannot commit to a lot at the moment. But here are some of the things I want to fix sooner than later.\\n\\n- [ ] Fix landing page, get a roadmap for the same\\n- [ ] Figure out a way to add comments to posts\\n- [ ] Plan next 3 posts (2 technical, 1 book review maybe?)\\n- [ ] Add github action to deploy on push to master\\n\\nCiao \ud83d\udc4b"}]}')}}]);