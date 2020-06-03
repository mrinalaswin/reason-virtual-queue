'use strict';

var React = require("react");
var StoreList$ReasonReactExamples = require("./StoreList.bs.js");
var HolidayList$ReasonReactExamples = require("./HolidayList.bs.js");

function AdminSettings(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, React.createElement("label", undefined, "What is the start time of the delivery?", React.createElement("p", undefined, React.createElement("input", {
                              type: "time"
                            })))), React.createElement("p", undefined, React.createElement("label", undefined, "What is the end time of the delivery?", React.createElement("p", undefined, React.createElement("input", {
                              type: "time"
                            })))), React.createElement("p", undefined, React.createElement("label", undefined, "When are the holidays?", React.createElement(HolidayList$ReasonReactExamples.make, { }))), React.createElement("p", undefined, "Do you want to stop the service temporarily?", React.createElement("p", undefined, React.createElement("button", undefined, "Stop Temporarily"))), React.createElement("p", undefined, React.createElement("label", undefined, "Where are the stores?", React.createElement(StoreList$ReasonReactExamples.make, { }))), React.createElement("p", undefined, React.createElement("label", undefined, "What is the slot duration?", React.createElement("p", undefined, React.createElement("select", undefined, React.createElement("option", undefined, "15 minutes"), React.createElement("option", undefined, "30 minutes"))))), React.createElement("p", undefined, React.createElement("label", undefined, "How many users are allowed during a slot per store?", React.createElement("p", undefined, React.createElement("select", undefined, React.createElement("option", undefined, "20"), React.createElement("option", undefined, "30"), React.createElement("option", undefined, "50"))))), React.createElement("p", undefined, React.createElement("label", undefined, "What is the penalty duration for a user failing to be present?", React.createElement("p", undefined, React.createElement("select", undefined, React.createElement("option", undefined, "2 days"), React.createElement("option", undefined, "3 days"), React.createElement("option", undefined, "5 days"))))));
}

var make = AdminSettings;

exports.make = make;
/* react Not a pure module */
