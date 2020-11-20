"use strict";
exports.__esModule = true;
var MergeBackBot = /** @class */ (function () {
    function MergeBackBot() {
        console.log('================================');
        console.log('Merge Back Bot     by enrise.com');
        console.log('================================');
    }
    MergeBackBot.prototype.run = function () {
        // Pretty script output
        // Setup git settings
        // Get all open branches
        // For each branch (except "the master")
        // ---- Pull latest changes from "the master"
        // ---- Push new commits to the branch
        // ---- if push failed:
        // ---- ---- if GitLab credentials configured:
        // ---- ---- ---- Post comment to GitLab with the most likely cause
    };
    return MergeBackBot;
}());
exports["default"] = new MergeBackBot();
