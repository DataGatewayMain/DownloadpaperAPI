const { getForms, getFormsbyid, postForms, putForms, deleteForms, } = require("../Controller/Formscontroller")

const route = require("express").Router()

route.get("/",getForms)

route.get("/byid/:id",getFormsbyid)

route.post("/",postForms)

route.put("/:id",putForms)

route.delete("/:id",deleteForms)

module.exports = route