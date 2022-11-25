import { formatDistance } from 'date-fns';
import { 
  toTitleCase,
  getFormattedDatetime,
  getAgoTime,
  removeTypename,
  removeTypenameFromArray,
  getTimestampLabel 
} from '@common-utils/util.function';

describe('Utility functions unit testing: ', () => {
  it("+ with input: \"title\", toTitleCase should return \"Title\"", () => {
    expect(toTitleCase("title")).toBe("Title");
  })

  it("+ with input: undefined, toTitleCase should throw TypeError", () => {
    expect(() => { toTitleCase(undefined) }).toThrow(TypeError);
  })

  it("+ with input: null, toTitleCase should throw TypeError", () => {
    expect(() => { toTitleCase(null) }).toThrow(TypeError);
  })

  it("+ with input: \"\", toTitleCase should throw custom error: The string should not empty", () => {
    expect(() => { toTitleCase("") }).toThrow("The string should not empty");
  })


  it("+ with input: undefined, getFormattedDatetime should throw RangeErorr", () => {
    expect(() => {
      getFormattedDatetime(undefined) 
    }).toThrow(RangeError);
  })

  it("+ with input: new Date(\"2022-03-25\"), getFormattedDatetime should return (March 25, 2022 7:00AM)", () => {
    expect(getFormattedDatetime(new Date("2022-03-25"))).toBe("March 25, 2022 7:00AM")
  })

  it('+ with input: \"\", getFormattedDatetime should throw RangeErorr', () => {
    expect(() => {
      getFormattedDatetime(new Date("")) 
    }).toThrow(RangeError);
  })

  it('+ with input: \"\", getFormattedDatetime should throw RangeErorr', () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      getFormattedDatetime("") 
    }).toThrow(RangeError);
  })

  it('+ with input: 2022-03-25, getAgoTime should return equal with the result of the formatDistance function ', ()=>{
    expect(
      getAgoTime(new Date("2022-03-25")))
      .toBe(
        formatDistance(new Date("2022-03-25"), new Date(), { includeSeconds: true }
      )
    );
  });

  it('+ with input: 2022-03-25, getAgoTime should return equal with the result of the formatDistance function ', ()=>{
    expect(
      getAgoTime(new Date("2022-03-25")))
      .toBe(
        formatDistance(new Date("2022-03-25"), new Date(), { includeSeconds: true }
      )
    );
  });

  it('+ with input: undefined, getAgoTime should throw RangeError', ()=>{
    
    expect(() => {
      getAgoTime(undefined)
    }).toThrow(RangeError("Invalid time value"));
  });

  it('+ with input: "", getAgoTime should throw RangeError', ()=>{
    
    expect(() => {
       // @ts-expect-error test passing invalid string argument
      getAgoTime("")
    }).toThrow(RangeError("Invalid time value"));
  });


  it('+ with input: { typename: "typename", object: "object" }, removeTypename should return { object: "object" }', () => {
    expect(removeTypename({
      typename: "typename",
      object: "object"
    })).toStrictEqual({ object: "object" });
  })

  it('+ with input: { object: "object" }, removeTypename should throw Error', () => {
    expect(
      () => {
        removeTypename({
        object: "object"
      })}
    ).toThrow("typename is not existed");
  })

  it('+ with input: {}, removeTypename should throw Error', () => {
    expect(
      () => {
        removeTypename({})}
    ).toThrow("typename is not existed");
  })

  it('+ with input: Arrays of objects that have typename attribute, removeTypenameFromArray should return an arrays that remove typename attribute', () => {
    expect(
      removeTypenameFromArray([
        {
          typename: "typename",
          object: "object"
        },
        {
          typename: "typename",
          object: "object"
        }
      ])
    ).toStrictEqual([
      { object: "object" },
      { object: "object" }
    ])
  })

  it('+ with input: scanResult have the status \"Inprogress\", getTimeStampValue should return \"Scanning at\"', () => {
    
    const scanResult = {
      __typename: 'ScanResult',
      id: 18,
      status: 'InProgress',
      repositoryName: 'SDConnect',
      queuedAt: '2022-11-23T17:00:00.000Z',
      scanningAt: '2022-11-23T17:00:00.000Z',
      finishedAt: null,
      findings: [
        {
          __typename: 'Finding',
          id: 18,
          location: [Object],
          ruleId: 'G402',
          type: 'sast'
        }
      ]
    }

    expect(getTimestampLabel(scanResult as any )).toBe("Scanning at");
  })

  it('+ with input: scanResult have the status \"Success\", getTimeStampValue should return \"Finished at\"', () => {
    
    const scanResult = {
      __typename: 'ScanResult',
      id: 18,
      status: 'Success',
      repositoryName: 'SDConnect',
      queuedAt: '2022-11-23T17:00:00.000Z',
      scanningAt: '2022-11-23T17:00:00.000Z',
      finishedAt: null,
      findings: [
        {
          __typename: 'Finding',
          id: 18,
          location: [Object],
          ruleId: 'G402',
          type: 'sast'
        }
      ]
    }

    expect(getTimestampLabel(scanResult as any )).toBe("Finished at");
  })

  it('+ with input: scanResult have the status undifined", getTimeStampValue should throw Error', () => {
    
    const scanResult = {
      __typename: 'ScanResult',
      id: 18,
      status: undefined,
      repositoryName: 'SDConnect',
      queuedAt: '2022-11-23T17:00:00.000Z',
      scanningAt: '2022-11-23T17:00:00.000Z',
      finishedAt: null,
      findings: [
        {
          __typename: 'Finding',
          id: 18,
          location: [Object],
          ruleId: 'G402',
          type: 'sast'
        }
      ]
    }

    expect(() => { getTimestampLabel(scanResult as any ) }).toThrow("status is not existed in scanResult");
  })
})

