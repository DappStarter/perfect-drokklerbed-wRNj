require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth mushroom evil hidden fork bone topic'; 
let testAccounts = [
"0x14bd62046ff4fe597a4c8850cbfd484360d8ebaae75656aabcda681770ef79d8",
"0x1fd6085c6f6f69991b2c3913d9076aaceeb7167811d7e32aad572ab882986370",
"0x1c2262128dd45a06d3d97322a09ad031461a137144bad28c89353a49752435ea",
"0xb9972995b947d5b4b6c14d5c8ef0e6a8bbe7b15790f08c3402892f0fddd52a57",
"0xf096a61ca408fa34de1e1dfe06922347fe357b72e20225c4a1b44116b4f17bf9",
"0xe8e812c093d79dda42b78ec88cf8bac2d630e1b182262b40c2bf1d95f64cc18d",
"0x951cc5b216c4bbf22535113971140867390dee3b7334f2ad04cd231cd25d0e8c",
"0x5429cf38d426b891446cf7926c0a54e08c8496e8ce2f9bf0a2cdb9485645f357",
"0x5669211c376d949a045490d65f6910976619db3656525df5028cdd395a70a9ff",
"0x3ee4e25ac12791d5f931e41795bc0f2bab246519bb71c1a53b9c0d835b37158f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


