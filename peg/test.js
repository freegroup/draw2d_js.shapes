var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs'); // for loading files

// Read file contents
var grammer = fs.readFileSync('./peg/grammer.txt', 'utf-8');

// Create my parser
var parse = PEG.buildParser(grammer).parse;
// Do a test
assert.deepEqual( parse("2 * (3 + 4)"), 14 );

