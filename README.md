# Mongo-ObjectID

[![NPM Version](https://img.shields.io/npm/v/mongo-objectid.svg?&style=flat-square)](https://www.npmjs.org/package/mongo-objectid)
[![Build Status](https://api.travis-ci.org/Alex-Werner/mongo-objectid.svg?branch=master)](https://travis-ci.com/Alex-Werner/mongo-objectid)

> A MongoDB specification based implementation of ObjectID

Goal is to provide a correct MongoDB ObjectID implementation, in order to ensure impossibility to create similar entries on fast generation (as saw on other open source package)   
 
### Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Documentation](#documentation)
    - [API](#api)
 - [FAQ](#faq)
 
 
## Installation 

`npm install mongo-objectid`

## Usage

```$xslt
mkdir myproject
cd myproject
npm init
npm install mongo-objectid
touch index.js
```


And there just use that snipets to start playing ! : 

```js
const ObjectId = require('mongo-objectid');
const id = new ObjectId();
```

## Documentation 

### API 

#### `constructor([hexid])`

#### `toString()`

Returns the ID

#### `.isValid()`

Validate the ID against specification.

#### `.setMachineId([machineId])`

This will set a new machine id and regenerate new id (careful, timevalue also change with this process).

- machineId : optional - Allow to pass a specific machine id value;

#### `.generateNew([time])`

Allow to generate a new ID

- time : default : Date.now() - Allow to pass a specific time value

## FAQ : 

### Why node engine v.12 limitation

For development purpose, I decided that being able to console view the object without all the nested parent thing was handy a clean.   
That's the only reason. But Node V.12 is old enough already, no point sticking to the past.  
