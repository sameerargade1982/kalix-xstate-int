/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { EventSourcedEntity, Reply } from "@kalix-io/kalix-javascript-sdk";
import { dealRequestService, DealRequestMachine } from "./DealRequestMachine.js"

/**
 * Type definitions.
 * These types have been generated based on your proto source.
 * A TypeScript aware editor such as VS Code will be able to leverage them to provide hinting and validation.
 * 
 * KalixXstate; a strongly typed extension of EventSourcedEntity derived from your proto source
 * @typedef { import("../lib/generated/xstateentity").KalixXstate } KalixXstate
 */

/**
 * @type KalixXstate
 */
const entity = new EventSourcedEntity(
  [
    "kalix_xstate_domain.proto",
    "kalix_xsate_api.proto"
  ],
  "kalix.xstate.api.KalixXstate",
  "kalix-xstate",
  {
    includeDirs: ["./proto"]
  }
);

const XStateState = entity.lookupType("kalix.xstate.domain.XStateState");
const StateSaved = entity.lookupType("kalix.xstate.domain.StateSaved");

entity.setInitial(entityId => XStateState.create({}));

entity.setBehavior(state => ({
  commandHandlers: {
    SaveState(command, state, ctx) {
      dealRequestService.send({ type: 'SUBMIT' });

      return Reply.failure("The command handler for `SaveState` is not implemented, yet");
    },
    GetState(command, state, ctx) {
      return Reply.failure("The command handler for `GetState` is not implemented, yet");
    }
  },
  
  eventHandlers: {
    StateSaved(event, state) {
      return state;
    }
  }
}));

export default entity;
