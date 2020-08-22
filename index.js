const axios = require('axios');

module.exports = {
  getData: async (link) => {
    try {
      const response = await axios.get(link);
      var result = JSON.parse(response.data.match(/((?<=type=application\/ld\+json\>))(.*)(?=\<\/script\>)/g)[0].replace(/@/g, "").replace(/https:\/\/schema\.org\//g, ""));

      delete result.context;
      result.image = result.image[0].split(',');

      return result;
    } catch (error) {
      return error;
    }
  },
};
