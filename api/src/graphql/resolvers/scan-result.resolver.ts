/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import ScanResultController from '../../controllers/scan-result.controller';
import { IScanResultInput } from '../types';

export const Mutation = {
  inputNewScan: (_: any, { input }: { input: IScanResultInput }) =>
    ScanResultController.scan(input),
  deleteScan: (_: any, { id }: { id: number }) =>
    ScanResultController.deleteScan(id),
  updateScan: (
    _: any,
    { id, input }: { id: number; input: IScanResultInput }
  ) => ScanResultController.updateScan(id, input)
};

export const Query = {
  getScans: () => ScanResultController.getScans(),
  getScan: (_: any, { id }: { id: number }) => ScanResultController.getScan(id)
};
