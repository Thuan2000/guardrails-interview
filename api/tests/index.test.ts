import { 
  successResponse, 
  errorResponse, 
  createSuccessResponse 
} from "../src/functions/util.funtion";

describe("Utility's functions unit testing: ", () => {
  it("+ with input: \"success\", successResponse should return {success: true, message: \"success\"}", () => {
    expect(successResponse("success")).toStrictEqual({
      success: true,
      message: "success"
    });
  })

  it("+ with input: undefined, successResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (successResponse(undefined)).toThrow(TypeError);
    });
  })

  it("+ with input: NaN, successResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (successResponse(NaN)).toThrow(TypeError);
    });
  })


  it("+ with input: null, successResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (successResponse(null)).toThrow(TypeError);
    });
  })
  
  it("+ with input: \"\", successResponse should return { success: true, response: \"\" }", () => {
    expect(successResponse("")).toStrictEqual({"message": "", "success": true});
  })

  it("+ with input: {}, successResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (successResponse({})).toThrow(TypeError);
    });
  })

  it("+ with input: \"error\", errorResponse should return { success: true, message: \"error\" }", () => {
    expect(errorResponse("error")).toStrictEqual({
      success: true,
      message: "error"
    });
  })
  

  it("+ with input: undefined, errorResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (errorResponse(undefined)).toThrow(TypeError);
    });
  })

  it("+ with input: NaN, errorResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (errorResponse(NaN)).toThrow(TypeError);
    });
  })
  
  it("+ with input: \"\", errorResponse should return { success: true, message: \"\" }", () => {
    expect(errorResponse("")).toStrictEqual({
      success: true,
      message: ""
    });
  })

  it("+ with input: null, errorResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (errorResponse(null)).toThrow(TypeError);
    });
  })

  it("+ with input: \"success\", createSuccessResponse should return { success: true, message: \"success\", id: 1 }", () => {
    expect(createSuccessResponse(1, "success")).toStrictEqual({
      success: true,
      message: "success",
      id: 1
    });
  })

  it("+ with input: undefined, createSuccessResponse shoudld throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (createSuccessResponse(1, undefined)).toThrow(TypeError);
    });
  })

  it("+ with input: null, createSuccessResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (createSuccessResponse(1, null)).toThrow(TypeError);
    });
  })

  it("+ with input: {}, createSuccessResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (createSuccessResponse(1, {})).toThrow(TypeError);
    });
  })

  it("+ with input: NaN, createSuccessResponse should throw TypeError", () => {
    expect(() => {
      // @ts-expect-error test passing invalid string argument
      (createSuccessResponse(NaN, "Success")).toThrow(TypeError);
    });
  })

})