/**
 * PefRequirement model events
 */

'use strict';

import {EventEmitter} from 'events';
import PefRequirement from './pef_requirement.model';
var PefRequirementEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PefRequirementEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  PefRequirement.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PefRequirementEvents.emit(event + ':' + doc._id, doc);
    PefRequirementEvents.emit(event, doc);
  };
}

export default PefRequirementEvents;
