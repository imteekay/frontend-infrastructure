# Frontend Infrastructure

## Goal

Frontend infrastructure teams empower product teams with the foundational frontend ecosystem and reliable, performant, and developer-friendly tools to efficiently build great user experiences.

## How

- Move core metrics: developer experience, developer velocity, debuggability, performance, and reliability
- Enhance developer productivity by improving the tooling setup
  - Linting: enforce best practices with static analysis and eslint rules
  - Unit and end to end tests
  - Deployment: continuous integration and continuous delivery
  - Type System: consistent and less-risky applications
  - Shared Configurations: create infrastructure so teams can start building new frontend applications without needing to know tricky configuration details
  - Build System: bundling frontend applications
- Testing: Infrastructure and testing framework integrations enabling developers to write a comprehensive set of unit, integration, and end-to-end tests
- Observability: Client-side web logging libraries, integration with vendor error monitoring solutions, alert generators for standard web metrics as well as their usage in automated canary analysis, and testing solutions to ensure logging quality
- Shape the architecture of frontend systems
  - Define patterns for UIs (design system)
  - Define patterns for data fetching
  - Define patterns for frontend-backend relation: graphql, BFF, rest APIs
- Make platform-wide changes and upgrade the entire codebase
  - Replace old libraries with new standards
- Build a strong culture with the foundational platform knowledge
  - Partnering with product teams to encourage adoption of tools and frameworks
  - Share your experiences and expertise with those around you, and multiply your impact through thoughtful teaching, influencing, and setting examples.
- Improve end-user experience by building infrastructure to support UX consistency across products
  - Optimize the client-side performance of web applications
  - Support teams to build consistent experiences through design systems
  - Monitoring systems: monitoring errors in the application
- Research and test new languages, libraries and frameworks and evaluate their potential to make sure we never stop innovating.
  - Understand developer pain points and common questions in frontend development, and aim to improve or answer them.
  - Enable different product teams to be more productive by identifying similar features or tasks across teams and making improvements in the frontend stack or processes
  - Engagement in the JavaScript ecosystem/community: understand the ever-evolving JS landscape to proactively ensure the rest of the organization is maintaining a technically healthy product.
- Build tools and drive initiatives to ensure best practices across teams as well as maximize developer productivity and experience
  - Provide teams with visibility into their test coverage and frontend performance
  - Build tools and processes to increase automated testing adoption in the org
  - Build tooling to provide teams with visibility into their test coverage and frontend performance
  - CLIs

## Studies & Research Roadmap

- [Simple Scripts](simple)
- DIY modules: Closures, [IIFEs](iife), [Namespaces](namespace)
- CommonJS
- ESModules
- Bundlers
  - [minibundler](minibundler)
  - [bundler](bundler)
  - [webpack](webpack)

## Skills

- Knowledge of modern frontend tech stack: HTML, CSS, JavaScript, JS frameworks, type systems, package management, module bundling, unit, and integration testing, browser capabilities, etc
- Experience with deployment automation tools: Jenkins, AWS Codepipeline, TravisCI, CircleCI, etc and/or Shell/Bash script
- Experience with developing reusable UI components, and implementing WCAG (Web Content Accessibility Guidelines)
- Deep understanding of web bundlers and its surrounding technologies (plugins, compiler hooks)
- Thinks deeply about systems — their edge cases, failure modes, and lifecycles

## Resources

### Modules

- [JavaScript Modules: From IIFEs to CommonJS to ES6 Modules](https://www.youtube.com/watch?v=qJWALEoGge4)
- [JavaScript Modules Past & Present](https://www.youtube.com/watch?v=GQ96b_u7rGc&list=TLPQMDYwMTIwMjK_dvV037lu7)
- [Module bundlers in 3 levels](https://www.youtube.com/watch?v=iOYO2dKBYow&ab_channel=lihautan)
- [Module bundling](https://www.freecodecamp.org/news/javascript-modules-part-2-module-bundling-5020383cf306/)
- [History of Web Development: JavaScript Modules](https://lihautan.com/javascript-modules/)
- [Brief history of JavaScript Modules](https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde)
- [JavaScript Modules: A Brief History](https://objectpartners.com/2019/05/24/javascript-modules-a-brief-history)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [V8 JavaScript modules](https://v8.dev/features/modules)
- [State of Modules in JavaScript](https://www.sitepen.com/blog/state-of-modules-in-javascript)
- [CommonJS effort sets JavaScript on path for world domination](https://arstechnica.com/information-technology/2009/12/commonjs-effort-sets-javascript-on-path-for-world-domination)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive)
- [CommonJS vs AMD vs RequireJS vs ES6 Modules](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
- [From CommonJS to ES Modules: How to modernize your Node.js app](https://electerious.medium.com/from-commonjs-to-es-modules-how-to-modernize-your-node-js-app-ad8cdd4fb662)
- [Essential JavaScript Namespacing Patterns](https://addyosmani.com/blog/essential-js-namespacing)
- [Native ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### Bundlers and Build Tools

- [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
- [Improving Site Performance With Webpack Tree Shaking](https://medium.com/coursera-engineering/improving-site-performance-with-tree-shaking-491b6a7e0708)
- [Compilers are the New Frameworks](https://tomdale.net/2017/09/compilers-are-the-new-frameworks/)
- [Vite is a next-generation frontend tool](https://patak.dev/web/vite-2.html)

### JavaScript Spec

- [How to Read the ECMAScript Specification](https://timothygu.me/es-howto)
- [Future Javascript: Javascript Pipeline Operators](https://dev.to/smpnjn/future-javascript-javascript-pipeline-operators-5jj)
- [Future Javascript: Records and Tuples](https://dev.to/smpnjn/future-javascript-records-and-tuples-14fk)

### Platform/Infra teams

- [Frontend At Scale: Designing Infra For Big Teams](https://www.youtube.com/watch?v=LrfSSAET6iY)
- [Dealing with large-scale JavaScript application infrastructure](https://www.youtube.com/watch?v=1KUdbnlgh-s)
- [The Case for Frontend Infrastructure](https://tech.smartling.com/the-case-for-front-end-infrastructure-15a2a9a203da)
- [What is Platform Engineering](https://medium.com/@nodefortytwo/what-is-platform-engineering-a6e8bff1d9c6)

## Tools

- [vite: Next Generation Frontend Tooling](https://github.com/vitejs/vite)
- [esbuild: an extremely fast JavaScript bundler](https://github.com/evanw/esbuild)
- [rollup.js: a module bundler for JavaScript](https://rollupjs.org)

## Jobs

- [Airbnb - Frontend Infrastructure Engineer, Web Platform](https://careers.airbnb.com/positions/3903900/)
- [Tiktok - Software Engineer, Frontend Infrastructure](https://careers.tiktok.com/position/6961906536192985374/detail)
- [Flexport - Software Engineer II, Frontend Infrastructure](https://boards.greenhouse.io/flexport/jobs/3079348)
- [Delivery Hero - Engineering Manager - Frontend Infrastructure](https://careers.deliveryhero.com/global/en/job/JR0020676/Engineering-Manager-Frontend-Infrastructure-f-m-d)
- [Wix - Senior Frontend Infrastructure Engineer](https://www.wix.com/jobs/locations/tel-aviv/positions/473401)
- [Stripe - Frontend Platform Engineer, Developer Productivity](https://stripe.com/jobs/listing/frontend-platform-engineer-developer-productivity/3104737)
- [Quora - Senior Software Engineer - Frontend Platform](https://boards.greenhouse.io/quora/jobs/5880027002)
