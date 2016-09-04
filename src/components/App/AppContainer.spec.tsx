/* global expect, describe, it */
import "chai";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import AppContainer from "./AppContainer";

const expect = chai.expect;

describe("index", () => {

  it("checks if it works", () => {
    const app = TestUtils.renderIntoDocument(<AppContainer />) as AppContainer;
    expect(ReactDOM.findDOMNode(app)).to.be.exist;
  });

});
