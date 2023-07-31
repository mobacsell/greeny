const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@hooks": resolvePath("./src/hooks/"),
      "@utils": resolvePath("./src/utils/"),
      "@types": resolvePath("./src/types/"),
      "@App": resolvePath("./src/App/"),
      "@shared": resolvePath("./src/sahred/"),
    },
  },
};
