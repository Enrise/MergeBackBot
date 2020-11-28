import log from './tools/Logger';

class MergeBackBot {
    constructor() {
        const packageJson = require('../package.json');

        log.separator();
        log.line(`${log.blue('Merge Back Bot')} v${packageJson.version} by ${log.yellow('enrise.com')}`);
        log.separator();
    }

    run() {
        // Setup git settings

        // Get all open branches
        const branches = this.getBranches();

        // For each branch (except "the master")
        // ---- Pull latest changes from "the master"
        // ---- Push new commits to the branch
        // ---- if push failed:
        // ---- ---- if GitLab credentials configured:
        // ---- ---- ---- Post comment to GitLab with the most likely cause
    }

    getBranches(): string[] {
        return [];
    }
}

export default new MergeBackBot();
