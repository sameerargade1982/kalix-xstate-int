/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { IntegrationTestkit } from "@kalix-io/testkit";
import { expect } from "chai";
import xstateentity from "../src/xstateentity.js";

const testkit = new IntegrationTestkit();
testkit.addComponent(xstateentity);

const client = () => testkit.clients.KalixXstate;

describe("KalixXstate", function() {
  this.timeout(60000);
  
  before(done => testkit.start(done));
  after(done => testkit.shutdown(done));
  
  describe("SaveState", () => {
    it("should...", async () => {
      // TODO: populate command payload, and provide assertions to match replies
      // const result = await client().saveState({});
    });
  });
  describe("GetState", () => {
    it("should...", async () => {
      // TODO: populate command payload, and provide assertions to match replies
      // const result = await client().getState({});
    });
  });
});