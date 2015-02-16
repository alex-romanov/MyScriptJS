(function (scope) {
    'use strict';
    /**
     * Music scratch-out
     *
     * @class MusicScratchOut
     * @param {Object} [obj]
     * @constructor
     */
    function MusicScratchOut (obj) {
        this.inputRanges = [];
        this.erasedInputRanges = [];
        if (obj) {
            for (var i in obj.inputRanges) {
                this.inputRanges.push(new scope.MusicInputRange(obj.inputRanges[i]));
            }
            for (var j in obj.erasedInputRanges) {
                this.erasedInputRanges.push(new scope.MusicInputRange(obj.erasedInputRanges[j]));
            }
        }
    }

    /**
     * Get input ranges
     *
     * @method getInputRanges
     * @returns {MyScript.MusicInputRange[]}
     */
    MusicScratchOut.prototype.getInputRanges = function () {
        return this.inputRanges;
    };

    /**
     * Get erased input ranges
     *
     * @method getErasedInputRanges
     * @returns {MyScript.MusicInputRange[]}
     */
    MusicScratchOut.prototype.getErasedInputRanges = function () {
        return this.erasedInputRanges;
    };

    // Export
    scope.MusicScratchOut = MusicScratchOut;
})(MyScript);