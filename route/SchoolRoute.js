const express = require('express');
const router = express.Router();
const {CreateStudent, GetAllSchoolStudents, UpdateOneStudent, DeleteOneStudent, GetStudent} = require('../controller/SchoolController')


router.post("/Student", CreateStudent)

router.get("/Student/:id", GetStudent)

router.get("/Student", GetAllSchoolStudents)

router.patch("/Student/:id", UpdateOneStudent)

router.delete("/Student/:id", DeleteOneStudent)






module.exports = router
