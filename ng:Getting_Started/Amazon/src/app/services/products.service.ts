import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: 'Apple MacBook Air',
        productCode: 'GDN-0011',
        releaseDate: 'Jan 19, 2019',
        description:
          '13-inch Retina display, 1.6GHz dual-core Intel Core i5, 128GB) - Gold (Latest Model)',
        price: 1149,
        starRating: 2,
        imageUrl: 'http://bit.ly/2M5JpbR'
      },
      {
        productId: 2,
        productName: 'ASUS C202SA-YS02 11.6',
        productCode: 'GDN-0023',
        releaseDate: 'Jan 18, 2019',
        description:
          'Ruggedized and Water Resistant Design with 180 Degree (Intel Celeron 4 GB, 16GB eMMC, Dark Blue, Silvers',
        price: 218.99,
        starRating: 4.2,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/31inMpRxCFL._AC_US218_.jpg'
      },
      {
        productId: 3,
        productName: 'ASUS C302CA-DHM4',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2019',
        description:
          'Chromebook Flip 12.5-inch Touchscreen Convertible Chromebook, Intel Core m3, 4GB RAM, 64GB Flash Storage, All-Metal Body, USB Type C, Corning Gorilla Glass, Chrome OS',
        price: 474.99,
        starRating: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/41LBkDN-S3L._AC_AA200_.jpg'
      },
      {
        productId: 4,
        productName: 'Acer Aspire 1 A114-32-C1YA',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2019',
        description:
          '14 Full HD, Intel Celeron N4000, 4GB DDR4, 64GB eMMC, Office 365 Personal, Windows 10 Home in S Mode',
        price: 249.99,
        starRating: 3,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/41EYu4yb6sL._AC_AA200_.jpg'
      },
      {
        productId: 5,
        productName: 'Acer Aspire E 15, 15.6',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2015',
        description:
          'Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H',
        price: 379.99,
        starRating: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_AA200_.jpg'
      }
    ];
  }
}
