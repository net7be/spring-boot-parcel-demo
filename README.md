
# SpringBoot - Adding static assets bundling using Parcel
Requires Node.JS and the package `parcel-bundler` installed globally.

- Create directory resources/src
- Add index.js and site.css
- Create a template in resource/templates -> reference the assets but from static instead of src
- npm init the main directory
- Edit .gitignore to add node_modules and .cache
- npm install -D concurrently
- Prepare the scripts in package.json to actually run the project

## npm scripts
Still testing it out.

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
- [ ] Pretty sure we need the --public-url option because the assets are in "static"
- [ ] Test on Linux, calling mvnw instead of ./mvnw might not work there
- [ ] Templates do not autoreload unless the Thymeleaf cache is disabled or the app is ran in debug mode
- [ ] Add an image