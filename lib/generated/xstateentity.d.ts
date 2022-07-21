/* This code is managed by Kalix tooling.
 * It will be re-generated to reflect any changes to your protobuf definitions.
 * DO NOT EDIT
 */

import { EventSourcedEntity , CommandReply } from "@kalix-io/kalix-javascript-sdk";
import * as proto from "./proto";

export declare namespace api {
  type XState = proto.kalix.xstate.api.XState;
  type GetXstate = proto.kalix.xstate.api.GetXstate;
  type IEmpty = proto.google.protobuf.IEmpty;
  type IXState = proto.kalix.xstate.api.IXState;
}

export declare namespace domain {
  type XStateState = proto.kalix.xstate.domain.IXStateState &
    protobuf.Message<proto.kalix.xstate.domain.IXStateState>;
  
  type StateSaved = proto.kalix.xstate.domain.IStateSaved &
    protobuf.Message<proto.kalix.xstate.domain.IStateSaved>;
}

export declare namespace KalixXstate {
  type State = domain.XStateState;
  
  type Events = domain.StateSaved;
  
  type EventHandlers = {
    StateSaved: (
      event: domain.StateSaved,
      state: State
    ) => State;
  };
  
  type CommandContext = EventSourcedEntity.CommandContext<Events>;
  
  type CommandHandlers = {
    SaveState: (
      command: api.XState,
      state: State,
      ctx: CommandContext
    ) => CommandReply<api.IEmpty> | Promise<CommandReply<api.IEmpty>>;
    GetState: (
      command: api.GetXstate,
      state: State,
      ctx: CommandContext
    ) => CommandReply<api.IXState> | Promise<CommandReply<api.IXState>>;
  };
}

export declare type KalixXstate = EventSourcedEntity<
  KalixXstate.State,
  KalixXstate.Events,
  KalixXstate.CommandHandlers,
  KalixXstate.EventHandlers
>;
