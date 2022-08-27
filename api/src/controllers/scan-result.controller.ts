/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */
 
import { IScanResultInput } from '../graphql/types';

class ScanResultController {
  /**
   * To handle scan input and store it to database
   * @param _input Input value
   * @returns
   */
  static async scan(_input: IScanResultInput) {
    console.log(_input);
    // This variable will be appended by several attributes to be saved on database
    // const value = {};

    // Checking status and add it

    // Creating finding location

    // Creating metadata

    // Updating value

    return { success: true, message: 'Succesfully scanning' };
  }
}

export default ScanResultController;
