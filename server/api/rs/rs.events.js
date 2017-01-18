/**
 * Rs model events
 */

'use strict';

import {EventEmitter} from 'events';
import Rs from './rs.model';
var RsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RsEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Rs.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RsEvents.emit(event + ':' + doc._id, doc);
    RsEvents.emit(event, doc);
  };
}

export default RsEvents;
