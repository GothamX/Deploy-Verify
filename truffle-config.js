const HDWalletProvider = require("@truffle/hdwallet-provider");

// const infuraKey = "fj4jll3k.....";
//
const { mnemonic, BSCSCANAPIKEY } = require("./config");
module.exports = {
	plugins: ["truffle-plugin-verify"],
	api_keys: {
		bscscan: BSCSCANAPIKEY,
	},
	networks: {
		testnet: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`https://data-seed-prebsc-1-s1.binance.org:8545`
				),
			network_id: 97,
			timeoutBlocks: 200,
			confirmations: 5,
			gas: 25000000,
			//production: true, // Treats this network as if it was a public net. (default: false)
		},

		bsc: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`https://bsc-dataseed1.binance.org`
				),
			network_id: 56,
			confirmations: 10,
			timeoutBlocks: 200,
			skipDryRun: true,
		},

		mainnet: {},
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		timeout: 100000,
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: "0.7.6", // Fetch exact version from solc-bin (default: truffle's version)
			// docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
			settings: {
				// See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: false,
					runs: 200,
				},
				evmVersion: "byzantium",
			},
		},
	},
};
