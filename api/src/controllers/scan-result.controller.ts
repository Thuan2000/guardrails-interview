/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import ScanResult from '../models/ScanResult';
import ScanResultFinding from '../models/ScanResultFinding'; 
import { IScanResultInput } from '../graphql/types';

class ScanResultController {
  /**
   * To handle scan input and store it to database
   * @param _input Input value
   * @returns
   */
  static async scan({findings, ..._input}: IScanResultInput) {
    // TS-Node error, this way should be find
    try {
      const scanResult: any = await ScanResult.create({
        repositoryName: _input.repositoryName,
        status: _input.status,
        queuedAt: _input.queuedAt,
        scanningAt: _input.scanningAt,
        finishedAt: _input.finishedAt,
      })
      const scanResultId = scanResult.getDataValue("id")

      // Creating finding
      const finds = findings.map(f => {
        const finding = {
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

        return finding;
      })

      // Update scan result findings
      scanResult.setDataValue("findings", finds)
      scanResult.save()

      await ScanResultFinding.bulkCreate(finds)

      return { success: true, message: `Succesfully add scan ${scanResultId}` };
    } catch (error) {
      console.error(error);
      return { success: false, message: error }
    }
  }

  static async getScans() {
    try {
      const scans= await ScanResult.findAll({
        include: [
          { model: ScanResultFinding, as: "findings" }
        ]
      });
      return scans
    } catch (error) {
      console.error(error)
      return ""
    }
  }
}

export default ScanResultController;
