'use strict';

describe('MyScriptJS: recognition/textRecognizer.js', function () {

    it('TextRecognizer object exist', function () {
        expect(MyScript.TextRecognizer).to.exist;
        expect(MyScript.TextRecognizer).not.to.be.null;
        expect(MyScript.TextRecognizer).to.not.be.undefined;
    });

    var textRecognizer = new MyScript.TextRecognizer();
    it('TextRecognizer constructor', function () {
        expect(textRecognizer).to.be.an('object');
        expect(textRecognizer).to.be.an.instanceof(MyScript.AbstractRecognizer);
        expect(textRecognizer).to.be.an.instanceof(MyScript.TextRecognizer);
    });

    it('Get parameters', function () {
        expect(textRecognizer.getParameters()).to.be.an.instanceof(MyScript.TextParameter);
    });

    var parameters = new MyScript.TextParameter();
    parameters.setLanguage('en_US');
    parameters.setInputMode('CURSIVE');
    it('Set parameters', function () {
        textRecognizer.setParameters(parameters);
        expect(textRecognizer.getParameters()).to.be.an.instanceof(MyScript.TextParameter);
    });

    //var applicationKey = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
    //var hmacKey = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
    //var instanceId;
    //
    //var stroke = new MyScript.Stroke();
    //stroke.setX([282,283,284,287,290,294,300,305,314,324,333,342,351,358,363,367,367,367,369,369,369,369,369,367,366,364,363,362,361,360,358,356,356,356,356,356,358,360,362,364,364,365,365,367,367,368,368,369,370,371,372,374,376,377,378,379,380,381,383,384,386,387,389,391,393,394,396,398,399,401,402,403,405,405,406,406,406,406,405,404,403,403,403,403,403,402,402,403,404,404,405,406,406,407,408,409,410,411,414,416,419,422,425,429,432,435,439,444,448,452,453,456,458,459,461,461,461,459,457,456,456,455,454,453,452,451,450,449,448,447,445,445,442,441,439,439,439,439,441,443,444,446,447,448,449,450,451,453,454,456,458,461,465,468,472,476,480,484,487,491,496,501,505,509,511,511,511,511,511,510,509,508,507,507,506,505,505,505,504,503,501,499,498,497,496,494,493,491,489,488,488,487,487,487,487,487,487,487,486,486,486,486,487,487,488,489,490,491,492,493,494,496,498,500,503,505,508,510,512,514,516,518,520,523,525,527,528,529,529,529,530,530,529,529,528,527,524,522,520,518,516,514,513,512,511,510,509,509,508,508,507,507,507,507,508,508,509,510,512,513,514,515,516,518,519,521,522,524,525,527,528,530,532,533,533,534,534,534,534,534,533,531,530,529,528,526,525,523,522,521,520,520,520,521,522,523,524,525,527,528,529,531,532,534,536,538,541,543,546,547,549,550,551,551]);
    //stroke.setY([269,269,269,269,269,268,265,263,259,253,245,236,228,219,208,199,191,182,174,165,157,148,142,136,130,128,127,127,130,133,142,151,161,172,185,197,209,222,232,241,247,252,255,259,263,263,264,262,258,258,256,254,253,252,252,252,252,253,254,255,256,257,259,259,260,260,260,260,259,257,255,252,249,246,243,241,239,237,237,239,240,243,245,248,251,254,256,258,259,261,262,262,263,263,263,263,263,263,263,262,261,260,258,255,253,249,244,238,232,227,219,212,204,197,189,182,174,168,164,161,160,159,159,158,158,158,158,159,160,163,167,171,180,189,198,207,217,227,233,239,243,245,246,247,247,247,248,249,249,250,250,250,249,247,245,242,239,236,234,230,225,217,209,201,194,186,180,174,169,166,164,163,161,160,159,158,157,155,155,155,157,158,161,164,167,170,174,177,182,187,191,195,200,204,207,210,212,215,217,220,222,224,225,226,226,227,227,227,228,229,229,230,230,231,231,231,231,231,230,229,229,228,227,226,225,223,222,220,219,218,217,216,216,215,215,215,216,217,218,219,220,222,223,225,226,228,230,231,233,235,237,238,240,241,242,243,244,245,246,247,247,247,247,247,247,246,245,244,243,241,240,238,236,234,232,230,228,227,225,224,222,221,220,220,220,220,220,221,222,223,223,224,225,225,225,225,226,226,227,227,227,227,227,227,227,227,227,226,225,224,223,222,221,220]);
    //
    //var inputUnit = new MyScript.TextInputUnit();
    //inputUnit.setComponents([stroke]);
    //var inputUnits = [inputUnit];
    //
    //it('Do simple text recognition', function (done) {
    //    textRecognizer.doSimpleRecognition(applicationKey, instanceId, inputUnits, hmacKey).then(
    //        function success (response) {
    //            expect(response.instanceId).to.not.be.undefined;
    //            expect(response.result.textSegmentResult.candidates[0].label).to.be.equal('hello');
    //            done(undefined, response);
    //        },
    //        function error (response) {
    //            expect(response).to.not.be.undefined;
    //            done(undefined, response);
    //        }
    //    );
    //});
    //
    //it('Do simple text recognition with custom parameters', function (done) {
    //    textRecognizer.doSimpleRecognition(applicationKey, instanceId, inputUnits, hmacKey, parameters).then(
    //        function success (response) {
    //            expect(response.instanceId).to.not.be.undefined;
    //            expect(response.result.textSegmentResult.candidates[0].label).to.be.equal('hello');
    //            done(undefined, response);
    //        },
    //        function error (response) {
    //            expect(response).to.not.be.undefined;
    //            done(undefined, response);
    //        }
    //    );
    //});
    //
    //it('Return an error on simple text recognition', function (done) {
    //    textRecognizer.doSimpleRecognition('test', instanceId, inputUnits).then(
    //        function success (response) {
    //            done(response);
    //        },
    //        function error (response) {
    //            expect(response).to.not.be.undefined;
    //            done(undefined, response);
    //        }
    //    );
    //});

});