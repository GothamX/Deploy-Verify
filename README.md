# Deploy & Verify

# SETUP

Download or clone the repo and run:

```bash
npm install

```

Create a file under the root folder named <strong> config.js </strong> and add your information as following:

```javascript
exports.mnemonic = "#YOUR mnemonic here";

exports.BSCSCANAPIKEY = "#YOUR Bscscan api key here";

```

# USAGE

- Under the contracts folder, create your contracts 
- Under the migrations folder, create your migration scripts ( "require" statements should contain your contract name, not file name)

After making ready your workflow run the following script to migrate your codes to the testnet:

```bash
  truffle migrate --network testnet
```

To verify your deployment:

```bash
  truffle run verify CONTRACT_NAME --network testnet
```

or 


```bash
  truffle run verify CONTRACT_NAME@CONTRACT_ADDRESS --network testnet
```

EXAMPLE:

```bash
  truffle run verify BabyMAKER --network testnet
```


