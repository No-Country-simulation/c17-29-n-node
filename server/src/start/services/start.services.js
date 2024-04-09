export const getStart = async () => {
  return ({
    uptime: `${process.uptime()}`,
    data: {
      msg: `✅ Api 🆗 online 💯 % ✨`,
    },
    timestamp: `${Date.now()}`,
  });
};