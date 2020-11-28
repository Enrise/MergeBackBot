#!/usr/bin/env node

import dotenv from 'dotenv';

import MergeBackBot from './MergeBackBot';

dotenv.config();

MergeBackBot.run();
