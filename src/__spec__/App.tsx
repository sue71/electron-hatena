/* global expect, describe, it */
import "chai";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { App } from "../App";

const expect = chai.expect;

describe("index", () => {

  it("checks if it works", () => {
    const app = TestUtils.renderIntoDocument(<App />);
    expect(ReactDOM.findDOMNode(app)).to.be.exist;
  });

});
