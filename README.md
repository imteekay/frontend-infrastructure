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

**Module System & Bundlers**

- [JavaScript as Scripts](javascript-as-scripts)
- DIY modules
  - [Closures and Scope](scope-and-closure)
  - [IIFEs](iife)
  - [Namespaces](namespace)
- Modules
  - [CommonJS](esm-vs-cjs)
  - [ESModules](esm-vs-cjs)
  - TypeScript
- Bundlers
  - [minibundler](minibundler)
  - [bundler](bundler)
  - Tree Shaking
  - Plugin System
  - Loader System
- Bundlers Experiments
  - [Webpack](webpack)

**JavaScript & TypeScript**

- ECMAScript
  - TC39 Proposals Overview
  - TC39 Experiments
- TypeScript
  - [Simple Types](https://github.com/imteekay/thinking-in-types)
  - [Advanced Types](https://github.com/imteekay/advanced-typescript)
  - Modules

**CI — Continuous Integration**

- NPM install cache
- Build optimization
- Tests optimization

## Skills

- Knowledge/Deep understanding of modern frontend tech stack: HTML, CSS, JavaScript (ECMAScript), JS frameworks, type systems, package management, module bundling, unit and integration testing, browser capabilities.
- Knowledge/Deep understanding of validation (CI) and deployment (CD) automation tools: Jenkins, AWS CodePipeline, TravisCI, CircleCI, DroneCI, etc and/or Shell/Bash script.
- Knowledge/Deep understanding of reusable UI components: implementing WCAG (Web Content Accessibility Guidelines) and consistent design principles.
- Knowledge/Deep understanding of web bundlers and its surrounding technologies (modules, plugins, compiler hooks, loaders, etc).
- Knowledge/Deep understanding of systems and scalability: their edge cases, failure modes, and lifecycles.
- Knowledge/Deep understanding of web performance: metrics, tools, optimizations, architecture.
- Knowledge/Deep understanding of developer experience: metrics, tools, strategies, mindset.
- Knowledge/Deep understanding of frontend architecture: frontend layers — presentation, application, domain, infrastructure.

## Resources

**Scope, Closure, and Execution Context**

- [MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Closure, Scope & Execution Context](https://www.youtube.com/watch?v=XTAzsODSCsM)
- [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope)
- [Understanding Variables, Scope, and Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)

**Modules**

- [JavaScript Modules: From IIFEs to CommonJS to ES6 Modules](https://www.youtube.com/watch?v=qJWALEoGge4)
- [JavaScript Modules Past & Present](https://www.youtube.com/watch?v=GQ96b_u7rGc&list=TLPQMDYwMTIwMjK_dvV037lu7)
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
- [Node Modules at War: Why CommonJS and ES Modules Can’t Get Along](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)
- [Publish ESM and CJS in a single package](https://antfu.me/posts/publish-esm-and-cjs)
- [Exploring ES6: JavaScript Modules](https://exploringjs.com/es6/ch_modules.html)
- [What the heck are CJS, AMD, UMD, and ESM in Javascript?](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

**Bundlers and Build Tools**

- [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
- [Improving Site Performance With Webpack Tree Shaking](https://medium.com/coursera-engineering/improving-site-performance-with-tree-shaking-491b6a7e0708)
- [Compilers are the New Frameworks](https://tomdale.net/2017/09/compilers-are-the-new-frameworks/)
- [Vite is a next-generation frontend tool](https://patak.dev/web/vite-2.html)
- [Module bundlers in 3 levels](https://www.youtube.com/watch?v=iOYO2dKBYow&ab_channel=lihautan)
- [Module bundling](https://www.freecodecamp.org/news/javascript-modules-part-2-module-bundling-5020383cf306/)
- [Webpack — The Confusing Parts](https://rajaraodv.medium.com/webpack-the-confusing-parts-58712f8fcad9)
- [Webpack loaders vs plugins: what's the difference?](https://stackoverflow.com/a/46176755/3159162)

**JavaScript Spec**

- [How to Read the ECMAScript Specification](https://timothygu.me/es-howto)
- [Future Javascript: Javascript Pipeline Operators](https://dev.to/smpnjn/future-javascript-javascript-pipeline-operators-5jj)
- [Future Javascript: Records and Tuples](https://dev.to/smpnjn/future-javascript-records-and-tuples-14fk)

**TypeScript**

- [A Mental Model to Think in TypeScript](https://www.iamtk.co/a-mental-model-to-think-in-typescript)
- [Advanced TypeScript Concepts](https://github.com/imteekay/advanced-typescript)

**Infrastructure for migrations and adoption**

- [Migrating Large TypeScript Codebases To Project References](https://shopify.engineering/migrating-large-typescript-codebases-project-references)
- [ts-migrate: A Tool for Migrating to TypeScript at Scale](https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc)
- [Adopting Typescript at Scale](https://www.youtube.com/watch?v=P-J9Eg7hJwE&ab_channel=JSConf)
- [The continual evolution of Airtable’s codebase: Migrating a million lines of code to TypeScript](https://medium.com/airtable-eng/the-continual-evolution-of-airtables-codebase-migrating-a-million-lines-of-code-to-typescript-612c008baf5c)
- [TypeScript vs Flow](https://github.com/niieani/typescript-vs-flowtype)

**Platform/Infra teams**

- [Frontend At Scale: Designing Infra For Big Teams](https://www.youtube.com/watch?v=LrfSSAET6iY)
- [Dealing with large-scale JavaScript application infrastructure](https://www.youtube.com/watch?v=1KUdbnlgh-s)
- [The Case for Frontend Infrastructure](https://tech.smartling.com/the-case-for-front-end-infrastructure-15a2a9a203da)
- [What is Platform Engineering](https://medium.com/@nodefortytwo/what-is-platform-engineering-a6e8bff1d9c6)
- [Modelling Developer Infrastructure Teams](https://shopify.engineering/modelling-developer-infrastructure-teams)

**Developer Experience**

- [What is Developer Experience? a roundup of links and goodness](https://redmonk.com/jgovernor/2022/02/21/what-is-developer-experience-a-roundup-of-links-and-goodness)
- [DX at Netlify](https://www.netlify.com/blog/2021/01/06/developer-experience-at-netlify)
- [Developer Experience, beyond a single product.](https://twitter.com/sarah_edo/status/1488182123450142723)
- [How To Prioritize The Developer Experience And Improve Output](https://harness.io/blog/developer-experience)
- [Building for the 99% Developers](https://future.a16z.com/software-development-building-for-99-developers)
- [The Developer Experience Gap](https://redmonk.com/sogrady/2020/10/06/developer-experience-gap)
- [Developer experience is so much more than using the product itself](https://twitter.com/Dayhaysoos/status/1491814689759797249)
- [A guide to coding accessible developer tools](https://increment.com/development/a-guide-to-coding-accessible-developer-tools)
- [Developer Experience: Concept and Definition](pdfs/dx/developer-experience-concept-and-definition.pdf)

**Frontend Architecture**

- [A different approach to frontend architecture](https://dev.to/huytaquoc/a-different-approach-to-frontend-architecture-38d4)
- [Design, Composition and Performance](https://www.infoq.com/presentations/Design-Composition-Performance)
- [Clean Architecture on Frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)

**CI/CD**

- [Keeping Developers Happy with a Fast CI](https://shopify.engineering/faster-shopify-ci)
- [Spark Joy by Running Fewer Tests](https://shopify.engineering/spark-joy-by-running-fewer-tests)
- [Test Budget: Time Constrained CI Feedback](https://shopify.engineering/test-budget-time-constrained-ci-feedback)

## Tools

**Bundlers**

- [vite: Next Generation Frontend Tooling](https://github.com/vitejs/vite)
- [esbuild: an extremely fast JavaScript bundler](https://github.com/evanw/esbuild)
- [rollup.js: a module bundler for JavaScript](https://rollupjs.org)
- [swc: Rust-based platform for the Web](https://swc.rs)
- [parcel: The zero configuration build tool for the web](https://github.com/parcel-bundler/parcel)
- [snowpack: The faster frontend build tool.](https://www.snowpack.dev)

**Flow -> TS codemods**

- [babel-plugin-flow-to-typescript](https://github.com/Kiikurage/babel-plugin-flow-to-typescript)
- [flow-to-ts](https://github.com/Khan/flow-to-ts)
- [Airtable’s TypeScript Migration Codemod](https://github.com/Airtable/typescript-migration-codemod)
- [ECMAScript 5 to ECMAScript 6 Codemod](https://github.com/5to6/5to6-codemod)

## Jobs

- [Airbnb - Frontend Infrastructure Engineer, Web Platform](pdfs/jobs/airbnb-senior-frontend-infrastructure-engineer-web-platform.pdf)
- [Tiktok - Software Engineer, Frontend Infrastructure](pdfs/jobs/tiktok-software-engineer-frontend-infrastructure.pdf)
- [Flexport - Software Engineer II, Frontend Infrastructure](pdfs/jobs/flexport-software-engineer-frontend-infrastructure.pdf)
- [Delivery Hero - Engineering Manager - Frontend Infrastructure](pdfs/jobs/delivery-hero-frontend-infrastructure.pdf.pdf)
- [Wix - Senior Frontend Infrastructure Engineer](pdfs/jobs/wix-senior-frontend-infrastructure-engineer.pdf)
- [Stripe - Frontend Platform Engineer, Developer Productivity](pdfs/jobs/stripe-frontend-platform-engineer-dveloper-productivity.pdf)
- [Stripe - Frontend Infrastructure Engineer, Payments Product](pdfs/jobs/stripe-frontend-infrastructure-engineer.pdf)
- [Quora - Senior Software Engineer - Frontend Platform](pdfs/jobs/quora-senior-software-engineer-frontend-platform.pdf)
- [Etsy - Staff Software Engineer I, Frontend Build Infrastructure](pdfs/jobs/etsy-staff-software-engineer-frontend-build-infrastructure.pdf)
- [Cube - Frontend Infrastructure Engineer](pdfs/jobs/cube-senior-frontend-engineer-infrastructure.pdf)

## License

[MIT](/LICENSE) © [TK](https://iamtk.co)
