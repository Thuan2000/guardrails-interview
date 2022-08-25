/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { IBook } from '../graphql/types';

class BooksController {
  public static getMockBook(): IBook {
    return { title: 'ok', author: 'ok' };
  }
}

export default BooksController;
