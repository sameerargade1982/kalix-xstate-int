import { createMachine,interpret } from 'xstate';

// async request/response hierarchical states
const PromiseStates = {
  initial: 'Initial',
  states: {
    Initial: {on: {
      '': [
        {target: 'RequestSent'}
        ]
      },
    },
    RequestSent: {on: {
      '': [
        {target: 'ResponsePromised', cond: 'ACK'},
        { target: 'RequestError', cond: 'NACK'}
        ],
        TIMEOUT: { target: 'TimedOut'}
      },
    },
    RequestError: {type: 'final'},
    ResponsePromised: {
      on: {
        RESPONSE: { target: 'Responded'},
        TIMEOUT: { target: 'TimedOut'}
      }
    },
    Responded: {
      on: {
      '': [
        {target: 'Fulfilled', cond: 'isResponseOk'},
        { target: 'ResponseError', cond: 'isErrorResponse'}
        ]
      },
    },
    Fulfilled: {type: 'final'},
    ResponseError: {type: 'final'},
    TimedOut: {type: 'final'}
  }
};

const UnderConstructionStates = {
states: {
  Editor: {
    initial: 'Initial',
    states: {
      Initial: {
        on: {
          EDIT_CUSTOMER: { target: 'ValidCustomer', cond: 'isValidCustomer' }
        }
      },
      ValidCustomer: {
        on: {
          EDIT_AddApplication: {},
          EDIT_RemoveApplication: {}
        }
      }
    }
  },
  SubmittableStatus: {
    initial: 'NotSubmittable',
    states: {
      NotSubmittable: {
        on: {
          'EDIT_*': { target: 'Submittable', cond: 'isValidRequest' }
        }
      },
      Submittable: {
        on: {
          'EDIT_*': { target: 'NotSubmittable', cond: 'isInvalidRequest' }
        }
      }
    }
  }
}
}

const DealRequestMachine = createMachine({
  id: 'Deal Request',
  initial: 'UnderConstruction',
  states: {
    UnderConstruction: {
      type: 'parallel', 
      on: {
        SUBMIT: { target: 'AssessmentPromised', cond: 'isSubmittable', actions: ['UnderConstruction_SUBMIT_AssessmentPromised'] },
        CANCEL: { target: 'Cancelled' }
      },
      ...UnderConstructionStates
    },
    AssessmentPromised: {
      on: {
        '': [
          { target: 'UnderConstruction', cond: 'isErrorOrTimedOut'},
          { target: 'Approved', cond: 'isFulfilledAndApproved'},
          { target: 'Declined', cond: 'isFulfilledAndDeclined'}
        ],
       CANCEL: { target: 'Cancelled' },

       },
       ...PromiseStates
    },
    Approved: {
        type: 'final'
    },
    Declined: {
      type: 'final'
    },
    Cancelled: {
      type: 'final'
    }
    }
  },
  {
    actions: {
      // action implementations
      UnderConstruction_SUBMIT_AssessmentPromised: (context, event) => {
        console.log('submitting...');
      }    }
  },
  {
    guards: {
      NACK: (context, event) => {
        // check if player won
        return true;
      },
      ACK: (context, event) => {
        // check if player lost
        return true;
      },
      isValidCustomer: (context, event) => {
        // check if player lost
        return true;
      },
      isResponseOk: (context, event) => {
        // check if player lost
        return true;
      },
      isErrorResponse: (context, event) => {
        // check if player lost
        return true;
      },
      isErrorOrTimedOut: (context, event) => {
        // check if player lost
        return true;
      },
      isSubmittable: (context, event) => {
        // check if player lost
        return true;
      },
      isValidRequest: (context, event) => {
        // check if player lost
        return true;
      },
      isInvalidRequest: (context, event) => {
        // check if player lost
        return true;
      },
      isFulfilledAndApproved: (context, event) => {
        // check if player lost
        return true;
      },
      isFulfilledAndDeclined: (context, event) => {
        // check if player lost
        return true;
      }
    }
  }
)

const dealRequestService = interpret(DealRequestMachine).onTransition((state) =>
  console.log(state.value)
);

dealRequestService.start();

export {DealRequestMachine,dealRequestService};