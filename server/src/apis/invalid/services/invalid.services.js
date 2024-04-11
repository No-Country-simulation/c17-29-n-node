
export const getInvalid = async () => {
  return ({
    uptime: `${process.uptime()}`,
    data: {
      msg: `💀 Invalid route ☠️.`,
    },
    timestamp: `${Date.now()}`,
  });
};
