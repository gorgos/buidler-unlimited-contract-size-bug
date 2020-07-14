const ChildBig = artifacts.require("ChildBig");
const ChildSmall = artifacts.require("ChildSmall");

module.exports = async () => {
  const small = await ChildSmall.new();
  ChildSmall.setAsDeployed(small);

  console.log("Fails here");
  const big = await ChildBig.new();
  console.log("Wont reach here");

  ChildBig.setAsDeployed(big);
};
