/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-23[16:32:14]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

class RollupTransformer extends Transformer {
    _transform(file) {
        return super._transform(file);
    }
    transformAll(files) {
        return super.transformAll(files);
    }
    isTorrential() {
        return false;
    }
}

module.exports = RollupTransformer;
