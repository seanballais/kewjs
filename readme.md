# KewJS
### Lightweight alternative to jQuery selectors & basic utilities

:arrow_down: [Download](https://raw.githubusercontent.com/RodRitter/kewjs/master/dist/kew.min.js)

### Usage

#### Initialize kew.js

Include the library in your page
```javascript
    <script src="path/to/kew.min.js"></script>
```

#### 1. Document ready
```javascript
    $kew().ready(function(){
        // code to be executed after document has loaded
    });
```

#### 2. $kew() Selector
You can select an element by using a CSS type selection.

##### Examples
```javascript
    $kew('div');
    $kew('.foo div');
    $kew('#foo.bar');
```

#### 3. Utilities

##### each()
```javascript
// Loops through all selected elements and executes function
$kew('#foo').each(function(el) {
    console.log(el.innerHTML);
})
```

##### attr()
```javascript
// Adds an attribute to all selected elements
$kew('#foo').attr('data-custom', 'myValue');

// result: <div id="foo" data-custom="myValue"></div>
```

##### class()
```javascript
// An alias of attr() - adds a class to an element
$kew('#foo').class('bar');

// result: <div id="foo" class="bar"></div>
```

##### remove()
```javascript
// Removes selected elements from the document
$kew('#foo').remove();
```

###### add()
```javascript
// Add a child element to a specified parent element
$kew('#foo').add('<p>bar</p>');
```
