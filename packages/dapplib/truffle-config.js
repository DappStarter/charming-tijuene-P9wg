require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind minor heavy private fortune skin'; 
let testAccounts = [
"0x1dfcfb16244f41f4dc5fca1ba1ebaf020c4a180cfb5b9d0526dc062c8cbef783",
"0xf3c9194033e36e3e4e78221e95a31d241273d4b5f17cd6d21128811f222c68bc",
"0x71a464c211bbdfcded4e4367e1f53bf9898bdfb9383875a554cb850d7740a1ac",
"0xe47e2d38980e4cf30cb7c9e2996a68ee604b960aede24515a8193b80e96b1ee9",
"0x702c445b5a1880d895bc9fea4650aa9e62fccc814ff12e04c1dc20c27633e88a",
"0x32b244a1b01a8b7ef355898fcab22be5dfe8b0c3e63d3c0b7e01e8e883249535",
"0x2f38c96fe163dd94cc487e87cb6e71feaacb287cb16140cacb14e23ed94ca61d",
"0xa31a1419209f9ac376f8bb80e63097b23b8d67efb1aa68d508ee71297b7dea12",
"0xbefcc209dfa3af854f90bf3a9ea31add6f059b6f1cc166e240c495d1bc1d9c70",
"0x1b15e796e2817fcd701ee85e096a5145378f8f7a1c49d592ef705e3cfad088b7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

