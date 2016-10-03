# angular-background-image
A tiny (338 bytes) angular directive for dynamically setting an element's CSS background image.

## Installation
1. Fetch from [npm](https://www.npmjs.com/).
``` 
$ npm install angular-background-image
``` 

2. Add to your HTML (or build script or whatever). Remember to load it after angular itself.
```
<script type="text/javascript" src="./node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="./node_modules/angular-background-image/angular-background-image.min.js"></script>
```

3. Add to your app's dependency array
``` 
angular
  .module('my-module', [
    'sb-background-image'
  ]);
```


## Usage
```
<element sb-background-image="./cats.jpg"></element>
```

### Result
```
<element style="background-image: url(./cats.jpg);"></element> 
```

## Build
To build the app, run `npm run build`.

## License

MIT  
Copyright 2016 Sindre Bøyum
