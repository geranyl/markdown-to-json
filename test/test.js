// var should = require('should');
var glob = require('glob');
var chai = require('chai');

describe('markdown-to-json', function() {

    var m2j = require('../lib/m2j.js'),
        fs = require('fs'),
        options,
        results;
    var expect = chai.expect;
    var should = chai.should();


    function check( done, f ) {
      try {
        f();
        done();
      } catch( e ) {
        done( e );
      }
    }

    beforeEach(function() {
        options = {
            minify: false,
            width: 70,
            outfile: null
        };
        results = null;
    });

    // describe('pretty', function() {
    //     it('should parse bellflower.md with crlf', function() {
    //         var results = m2j.parse(['test/fixtures/bellflower.md'], options);
    //         var json = fs.readFileSync('test/fixtures/output/bellflower-pretty-70.json', 'utf8').trim();
    //         results.trim().should.equal(json);
    //     });
    // });

    // describe('on short strings', function() {
    //     it('should return all the markdown content since it is smaller than width', function() {
    //         var results = m2j.parse(['test/fixtures/short-content.md'], options);
    //         var obj = JSON.parse(results)['files'][0];
    //         obj.should.have.property('preview', 'This would make a great article.');
    //     });
    // });

    // describe('no yaml', function() {
    //     it('should return empty object on file with no yaml to parse', function() {
    //         options.minify = true;
    //         var results = m2j.parse(['test/fixtures/no-yaml.md'], options);
    //         should.exist('{}');
    //     });
    // });

    // describe('minify', function() {
    //     it('should parse bellflower.md without newlines', function() {
    //         options.minify = true;
    //         var results = m2j.parse(['test/fixtures/bellflower.md'], options);
    //         var json = fs.readFileSync('test/fixtures/output/bellflower-nopretty-70.json', 'utf8').trim();
    //         results.trim().should.equal(json);
    //     });
    // });

    describe('all files', function() {
        it('should parse all files', function(done) {
            glob('test/fixtures/*.md', function(er, files) {
                var results = m2j.parse(files, options);
                var json = fs.readFileSync('test/fixtures/output/allfiles.json', 'utf8').trim();
                results.trim().should.equal(json);
                done();
            });

            // setTimeout( function () {
            //   check(done, function() {
            //     // expect('foo').to.equal('slkdfjs');
            //     done();
            //   });
            // }, 100);
        });
    });

    // describe('with 30 character width', function() {
    //     it('should parse lottery with preview max at 30', function() {
    //         options.width = 30;
    //         var results = m2j.parse(['test/fixtures/lottery.md'], options);
    //         var json = fs.readFileSync('test/fixtures/output/lottery-pretty-30.json', 'utf8').trim();
    //         results.trim().should.equal(json);
    //     });
    // });

    // describe('with content flag enabled', function() {
    //     it('should return the entire content of a file', function() {
    //         options.width = 70;
    //         options.content = true; 
    //         var results = m2j.parse(['test/fixtures/bellflower.md'], options);
    //         var json = fs.readFileSync('test/fixtures/output/bellflower-content.json', 'utf8').trim();
    //         results.trim().should.equal(json);
    //     });
    // });   


}); 
