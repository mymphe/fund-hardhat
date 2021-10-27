const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fund", function () {
  it("Should be deployed", async function () {
    const Fund = await ethers.getContractFactory("Fund");
    const fund = await Fund.deploy();
    await fund.deployed();
    
    console.log('Fund deployed at ', fund.address);
  });
});
