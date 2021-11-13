# MMM-Binance
This is a module for Magic Mirror, an open source modular smart mirror project. It enables you to monitor your spot portfolio/wallet on binance

## How it works
After installing and adding you Binance API with your account, the module displays your spot crypto-currency balances in real time. Your balances are updated every 5 seconds.

## Prerequisites
* MagicMirror2
* Node.js
* npm
* Binance account

## Installation
Installing this module is quite simple
### Step 1 - Install the module
open terminal and get your working directory to point to you magicmirror modules folder, Follow the steps below to do so...
```javascript
cd ~/MagicMirror/modules
git clone https://github.com/tasamai/MMM-Binance.git
cd MMM-Binance
npm install
```

### Step 2 - Create your coinbase API keys
|<p align="center">Log into your Binance account and open API Management or [click here](https://www.binance.com/en/my/settings/api-management)</p>|<p align="center">give it a name and click `Create API`</p>
|-------------|-------------|
|<p align="center">Copy `API Key` and `Secret Key`</p>|

### Step 3 - Add module to `~MagicMirror/config/config.js`
Add this configuration into `config.js` file
```javascript
{
    module: "MMM-Binance",
    position: "top_left", // pick a locarion to display module
        config: {
            apiKey: "YOUR API KEY", // the key previously copied
            apiSecret: "YOUR API SECRET KEY"
        }
}
```

## Updating
Go to this module's folder inside MagicMirror modules folder and pull the latest version from GitHub and install:
```
git pull
npm install
```

## Configuring
Here is the configurable part of the module

|Option|Description|
|------|-----------|
|`apiKey`|API Key from Binance.<br><br>**Type:** `string` **REQUIRED**<br>**Example:**`1iO5VjY2bdC3HucJ`<br>**Default value:** none|
|`apiSecret`|API Secret Key from Binance.<br><br>**Type:** `string` **REQUIRED**<br>**Example:**`OwABcDaA5fxK3QTV3gjwvOk358juuXti`<br>**Default value:** none|

## Use
You can now use MagicMirror and the MMM-Binance module to display your wallets! Enjoy!!!

## Contributing
If you find any problems, bugs or have questions, please [open a GitHub issue](https://github.com/tasamai/MMM-Binance/issues) in this repository.

## Have Fun!!!
