/*
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import user from './userseed';
import pef from './pefreqseed';
import rs from './rsseed';

//import recruit from './recruitseed5k'; //busted
import recruit from './recruitseed';
