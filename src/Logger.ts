import chalk from 'chalk';

class Logger {
    write(text: string) {
        process.stdout.write(text);
    }

    line(text: string) {
        console.log(text);
    }

    separator() {
        console.log('============================================');
    }

    blue(text: string) {
        return chalk.blue(text);
    }

    yellow(text: string) {
        return chalk.yellow(text);
    }
}

export default new Logger();
