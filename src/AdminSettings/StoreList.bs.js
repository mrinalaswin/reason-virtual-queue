'use strict';

var React = require("react");

function StoreList(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("table", undefined, React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", undefined, "id"), React.createElement("th", undefined, "Name"), React.createElement("th", undefined, "Description"), React.createElement("th", undefined, "Location"), React.createElement("th", undefined, "Action"))), React.createElement("tbody", undefined, React.createElement("tr", undefined, React.createElement("td", undefined, "1"), React.createElement("td", undefined, "12-10-2020"), React.createElement("td", undefined, "test"), React.createElement("td", undefined, React.createElement("a", {
                                  href: "#"
                                }, "(12.01,12.01)")), React.createElement("td", undefined, React.createElement("a", {
                                  href: "#"
                                }, "Edit"), React.createElement("a", {
                                  href: "#"
                                }, "Delete"))), React.createElement("tr", undefined, React.createElement("td", undefined, React.createElement("input", {
                                  disabled: true,
                                  type: "text"
                                })), React.createElement("td", undefined, React.createElement("input", {
                                  type: "date"
                                })), React.createElement("td", undefined, React.createElement("input", {
                                  type: "text"
                                })), React.createElement("td", undefined, React.createElement("a", {
                                  href: "#"
                                }, "Search in GMaps")), React.createElement("td", undefined, React.createElement("a", {
                                  href: "#"
                                }, "Add"))))));
}

var make = StoreList;

exports.make = make;
/* react Not a pure module */
