/* This code was initialised by Kalix tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { MockEventSourcedEntity } from "@kalix-io/testkit";
import { expect } from "chai";
import xstateentity from "../src/xstateentity.js";

describe("KalixXstate", () => {
  const entityId = "entityId";
  
  describe("SaveState", () => {
    it("should...", async () => {
      const entity = new MockEventSourcedEntity(xstateentity, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = await entity.handleCommand("SaveState", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
  
  describe("GetState", () => {
    it("should...", async () => {
      const entity = new MockEventSourcedEntity(xstateentity, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = await entity.handleCommand("GetState", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
});