/**
 * Griddata model events
 */

'use strict';

import {EventEmitter} from 'events';
import Griddata from './griddata.model';
var GriddataEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GriddataEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Griddata.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GriddataEvents.emit(event + ':' + doc._id, doc);
    GriddataEvents.emit(event, doc);
  };
}

export default GriddataEvents;
