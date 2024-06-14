const { z } = require("zod");

const createtodoschema = z.object({
  title : z.string(),
  description : z.string(),
});

const updatetodoschema = z.object({
  id : z.string()
})

module.exports = {
  createtodoschema : createtodoschema,
  updatetodoschema : updatetodoschema
}