/*global describe, it */

var expect = require('chai').expect;
var tags = require('../lib/tags.js');

describe ('Tags'  , function() {
    describe ('#parse()', function() {
        it('should parse long formed tags', function() {
            var args = ['--depth=4', '--hello=world'];
            var results = tags.parse(args);

            expect(results).to.have.a.property('depth', 4);
            expect(results).to.have.a.property('hello', 'world');
        });

        it('numbers should be parsed correctly.', function() {
            var args = ['--depth=4', '--doomy=4'];
            var results = tags.parse(args);

            expect(results).to.have.a.property('depth', 4);
            expect(results).to.have.a.property('doomy', 4);
        });

        it('should fallback to defaults', function() {
            var args = ['--depth=4', '--hello=world'];
            var defaults = {
                depth: 2,
                foo: 'bar'
            };
            var results = tags.parse(args, defaults);

            var expected = {
                depth: 4,
                foo: 'bar',
                hello: 'world'
            };

            expect(results).to.deep.equal(expected);
        });

        it('should accept flag without values as a', function() {
            var args = ['--searchContent'];

            var results = tags.parse(args);

            expect(results).to.have.a.property('searchContent', true);
        });

        it('should accept short formed tags', function() {
            var args = ['-sd=4', '-h', '-ab'];
            var replacements = {
                s: 'searchContents',
                d: 'depth',
                h: 'hello',
                a: 'haha',
                b: 'hehe'
            };

            var results = tags.parse(args, {}, replacements);

            var expected = {
                searchContents: true,
                depth: 4,
                hello: true,
                haha: true,
                hehe: true
            };

            expect(results).to.deep.equal(expected);
        });
    });
});
