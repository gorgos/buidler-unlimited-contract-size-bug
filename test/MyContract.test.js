const ChildBig = artifacts.require("ChildBig");
const ChildSmall = artifacts.require("ChildSmall");

contract("MyContract", function () {
  it("deploy", async function () {
    await ChildSmall.new();
    await ChildBig.new();
  });
});
