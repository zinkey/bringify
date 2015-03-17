# bringify

# Turn File Content Into Javascript String

```javascript
var str = require('tmpl/index.html');
```

## Install
```bash
npm install bringify
```

## Usage

#### 1. Package Configuration

```javascript
{
  "browserify": {
      "transform": [
        "bringify"
      ]
  },
    "bringify": {
        "extname": ['.html']
    }
}
```

#### 2. API

```javascript
b.transform('bringify', { extname: ['.html'] })
```

## Options

#### extname : Array, list of file extname, default: []