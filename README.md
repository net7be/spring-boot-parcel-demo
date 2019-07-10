# SpringBoot - Adding static assets bundling using Parcel
Requires Node.JS and the package `parcel-bundler` installed globally.

If you cloned the repo you need to run
```
npm install
```
From the root directory.

## How we enabled static assets bundling
- Create directory resources/src
- Add index.js and site.css
- Create a template in resource/templates -> reference the assets but from static instead of src - use th:url and th:href to enable cache busting later on
- Add the cache busting lines to application.properties:
```ini
spring.resources.chain.strategy.content.enabled=true
spring.resources.chain.strategy.content.paths=/**
```
- npm init the main directory
- Edit .gitignore to add node_modules and .cache
- npm install -D concurrently
- Prepare the scripts in package.json to actually run the project

## npm scripts
To use in development, run:
```
npm run dev
```

To package your app for production:
```
npm run build
```
Outputs a jar in the target directory.

## Spring dev tools
Spring Boot does not reload the app server when code changes. It requires an additional package in pom.xml:
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

# TODO
- [x] Check that the cache dir for Parcel is really in .gitignore
- [x] Pretty sure we need the --public-url option because the assets are in "/assets" on the embedded Tomcat -> --public-url added to parcel calls in package.json
- [ ] Test on Linux, calling mvnw instead of ./mvnw might not work there
- [ ] Templates do not autoreload unless the Thymeleaf cache is disabled or the app is ran in debug mode
- [x] Add an image