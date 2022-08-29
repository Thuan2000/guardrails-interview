/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import ScanResult from '../models/ScanResult';
import ScanResultFinding from '../models/ScanResultFinding'; 
import { IScanResultInput, IFindingInput } from '../graphql/types';
import { successResponse, errorResponse } from '../functions/util.function';

const findingsQuery = { model: ScanResultFinding, as: "findings" };

function generateFinding(scanResultId: number, f: IFindingInput) {
  return {
    scanResultId,
    type: f?.type,
    ruleId: f?.ruleId,
    location: {
      path: f?.locationPath,
      begin: {
        line: f?.locationBeginLine
      },
      end: {
        line: f?.locationEndLine
      }
    },
    metadata: {
      description: f?.metaDescription,
      severity: f?.metaSeverity
    }
  }
}

class ScanResultController {
  /**
   * To handle scan input and store it to database
   * @param _input Input value
   * @returns
   */
  static async scan({findings, ..._input}: IScanResultInput) {
    // TS-Node error, this way should be find
    try {
      const scanResult: any = await ScanResult.create(_input);
      const scanResultId = scanResult.getDataValue("id")

      // Creating finding
      const finds = findings.map(f => {
        const finding = generateFinding(scanResultId, f!)

        return finding;
      })

      // Update scan result findings
      scanResult.setDataValue("findings", finds)
      scanResult.save()

      await ScanResultFinding.bulkCreate(finds)

      return successResponse(`Succesfully add scan ${scanResultId}`);
    } catch (error) {
      console.error(error);
      return errorResponse(error)
    }
  }

  static async getScan(id: number) {
    try {
      const scan = await ScanResult.findByPk(id, {
        include: [findingsQuery]
      });

      return scan;
    } catch (error) {
      console.error(error)
      return;
    }
  }

  static async updateScan(_id: number, {findings, ..._input}: IScanResultInput) {
    try {      
      await ScanResult.update(_input, { returning: ["asdcasd"], where: { id: _id } });

      return successResponse(`Successfully updated record with id: ${_id}`)

    } catch (error) {
      console.error(error)
      return errorResponse(error)
    }

  }

  static async getScans() {
    try {
      const scans= await ScanResult.findAll({
        include: [findingsQuery]
      });
      return scans
    } catch (error) {
      console.error(error)
      return ""
    }
  }

  static async deleteScan(id: number) {
    try {
      await ScanResult.destroy({ where: { id } });
      return successResponse(`Success delete scan result with id ${id}`)
    } catch (error) {
      console.error(error)
      return errorResponse(error)
    }
  }
}

export default ScanResultController;
