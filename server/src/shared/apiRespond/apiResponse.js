import { statusCodes } from "../data/StausCode.js";

const findStatusCode = (code) => {
  if (!Array.isArray(statusCodes)) return null;
  return statusCodes
    .flatMap((item) => item.codes)
    .find((item) => item.code === code.toString());
};

export const apiResponse = ( res, code, status = "", message = "", data = "error") => {
  const isValidCode =
    code > 99 && code < 600 && code !== null && code !== undefined;
  if (isValidCode) {
    const foundData = findStatusCode(code);
    if (foundData) {
      foundData.status = statusCodes[code.toString().slice(0, -2) - 1]?.status;
      return res.status(code).json({
        code: code,
        status: status || foundData.status,
        description: message || foundData.description,
        data: data || "no data",
      });
    } else {
      return res.status(404).json({
        code: 404,
        status: "Error",
        description: "Not found",
        data: {
          msg: "Unassigned code",
        },
      });
    }
  } else {
    return res.status(404).json({
      code: 404,
      status: "error",
      description: "Not found",
      data: {
          msg: "Invalid code",
        },
    });
  }
};
