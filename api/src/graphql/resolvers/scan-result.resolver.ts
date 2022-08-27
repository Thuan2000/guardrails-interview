/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import ScanResultController from '../../controllers/scan-result.controller';
import { IScanResultInput } from '../types';

export const Mutation = {
  inputNewScan: (_: any, { input }: { input: IScanResultInput }) =>
    ScanResultController.scan(input)
};

export const Query = {
  getScans: () => ScanResultController.getScans()
};
