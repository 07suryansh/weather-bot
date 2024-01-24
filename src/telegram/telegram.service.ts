import { Injectable, Logger } from '@nestjs/common';
// import TelegramBot from 'node-telegram-bot-api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

const token = '6570800574:AAHIJ3sls3E0dA8dbjHuLUyLWUUZ8Pvg7jk';
@Injectable()
export class TelegramService {
  private readonly bot;
  private logger = new Logger(TelegramService.name);
  constructor() {
    this.bot = new TelegramBot(token, { polling: true });
    this.bot.on('message', this.receiveMessage);
  }
  receiveMessage = (msg: any) => {
    this.logger.debug(msg);
  };
}
