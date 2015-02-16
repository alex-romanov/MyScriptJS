(function (scope) {
    'use strict';
    /**
     * Music ledger line
     *
     * @class MusicLedgerLine
     * @extends AbstractMusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicLedgerLine (obj) {
        scope.MusicElement.call(this, obj);
    }

    /**
     * Inheritance property
     */
    MusicLedgerLine.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicLedgerLine.prototype.constructor = MusicLedgerLine;

    // Export
    scope.MusicLedgerLine = MusicLedgerLine;
})(MyScript);