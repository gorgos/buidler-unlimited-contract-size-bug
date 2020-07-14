const ChildSmall = artifacts.require("ChildSmall");
const ChildBig = artifacts.require("ChildBig");

module.exports = function (deployer) {
  deployer.deploy(ChildSmall).then(() => {
    deployer.deploy(ChildBig);
  });
};
