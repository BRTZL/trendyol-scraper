<h1 align="center">Welcome to Trendyol Scraper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/BRTZL/trendyol-scraper" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/BRTZL/trendyol-scraper/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/mr_brtzl" target="_blank">
    <img alt="Twitter: mr_brtzl" src="https://img.shields.io/twitter/follow/mr_brtzl.svg?style=social" />
  </a>
</p>

> Script that scraps given urls for price, description, images and more

## Example Use

```js
var trendyolDataScraper = require("trendyol-scraper")

trendyolDataScraper.getData("https://www.trendyol.com/pull-bear/erkek-siyah-grafiti-desenli-viskoz-gomlek-05474550-p-40932361").then((data) => console.log(data))
```


## Example Data

```json
{
  "type": "Product",
  "color": "Siyah",
  "url": "https://www.trendyol.com/pull-bear/erkek-siyah-grafiti-desenli-viskoz-gomlek-05474550-p-40932361",
  "name": "Erkek Siyah Grafiti Desenli Viskoz Gömlek 05474550",
  "image": [
    "https://cdn.dsmcdn.com/ty6/product/media/images/20200704/17/3822238/75894513/1/1_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty6/product/media/images/20200704/17/3822238/75894513/2/2_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty6/product/media/images/20200704/17/3822238/75894513/3/3_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty5/product/media/images/20200704/17/3822238/75894513/4/4_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty6/product/media/images/20200704/17/3822238/75894513/5/5_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty6/product/media/images/20200704/17/3822238/75894513/6/6_org_zoom.jpg",
    "https://cdn.dsmcdn.com/ty5/product/media/images/20200704/17/3822238/75894513/7/7_org_zoom.jpg"
  ],
  "description": "Trendyol.com sayesinde Pull & Bear ürününe çok özel indirimlerle sahip olabilecek ve alışveriş alışkanlıklarınızı değiştireceksiniz.",
  "brand": {
    "type": "Thing",
    "name": "Pull & Bear"
  },
  "offers": {
    "type": "AggregateOffer",
    "lowPrice": "119.95",
    "priceCurrency": "TRY",
    "offerCount": "5",
    "offers": [
      {
        "type": "Offer",
        "seller": {
          "type": "Organization",
          "name": "Pull&Bear"
        },
        "price": "119.95",
        "priceCurrency": "TRY",
        "itemCondition": "NewCondition",
        "availability": "InStock",
        "itemOffered": {
          "type": "Product",
          "sku": "72483079"
        }
      },
      {
        "type": "Offer",
        "seller": {
          "type": "Organization",
          "name": "Pull&Bear"
        },
        "price": "119.95",
        "priceCurrency": "TRY",
        "itemCondition": "NewCondition",
        "availability": "InStock",
        "itemOffered": {
          "type": "Product",
          "sku": "72483081"
        }
      },
      {
        "type": "Offer",
        "seller": {
          "type": "Organization",
          "name": "Pull&Bear"
        },
        "price": "119.95",
        "priceCurrency": "TRY",
        "itemCondition": "NewCondition",
        "availability": "InStock",
        "itemOffered": {
          "type": "Product",
          "sku": "72483078"
        }
      },
      {
        "type": "Offer",
        "seller": {
          "type": "Organization",
          "name": "Pull&Bear"
        },
        "price": "119.95",
        "priceCurrency": "TRY",
        "itemCondition": "NewCondition",
        "availability": "InStock",
        "itemOffered": {
          "type": "Product",
          "sku": "72483080"
        }
      },
      {
        "type": "Offer",
        "seller": {
          "type": "Organization",
          "name": "Pull&Bear"
        },
        "price": "119.95",
        "priceCurrency": "TRY",
        "itemCondition": "NewCondition",
        "availability": "InStock",
        "itemOffered": {
          "type": "Product",
          "sku": "72483077"
        }
      }
    ]
  }
}
```

### 🏠 [Homepage](https://github.com/BRTZL/trendyol-scraper#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Author

👤 **Bartu OZEL**

* Website: [brtzl.tech](https://brtzl.tech)
* Twitter: [@mr\_brtzl](https://twitter.com/mr\_brtzl)
* Github: [@BRTZL](https://github.com/BRTZL)
* LinkedIn: [@brtzl](https://linkedin.com/in/brtzl)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/BRTZL/trendyol-scraper/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Bartu OZEL](https://github.com/BRTZL).<br />
This project is [MIT](https://github.com/BRTZL/trendyol-scraper/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_