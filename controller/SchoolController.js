const express = require('express');
const SchoolModel = require("../model/SchoolModel")

const CreateStudent = async (req, res) =>{
    try {
        const StudentData = await SchoolModel.create({
            RegistrationNumber: req.body.MatricNumber,
            Subject:{
                maths: req.body.Subject.maths,
                english: req.body.Subject.english,
                accounting: req.body.Subject.accounting,
            },
            SubjectsScore: [
                {maths: req.body.SubjectsScore.maths},
                {english: req.body.SubjectsScore.english},
                {accounting: req.body.SubjectsScore.accounting},
            ]

        })        
        res.status(200).json({data: StudentData})
    } catch(error) {
       res.send(error.message); 
    }
}

const GetAllSchoolStudents= async (req, res) => {
    try {
        const AllStudents = await SchoolModel.find()
        res.status(200).json({ data: AllStudents})
    } catch (error) {
        res.send(error.message)
    }
}

const GetStudent = async (req, res) => {
    try {
        const StudentId = await req.params.id
        const OneStudent = await SchoolModel.findById(StudentId)
        res.status(200).json({ data: OneStudent})
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateOneStudent = async (req, res) => {
    try {
        const UpdatedStudent = await SchoolModel.updateOne({
            RegistrationNumber: req.body.MatricNumber,
            Subject:{
                maths: req.body.Subject.maths,
                english: req.body.Subject.english,
                accounting: req.body.Subject.accounting,
            },
            SubjectsScore: [
                {maths: req.body.SubjectsScore.maths},
                {english: req.body.SubjectsScore.english},
                {accounting: req.body.SubjectsScore.accounting},
            ]

        })
        res.status(200).json({data: UpdatedStudent})
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteOneStudent = async (req, res) => {
    try {
        const StudentId = await req.params.candidate
        const DeletedStudent = await SchoolModel.findByIdAndDelete(StudentId)
        res.status(200).json({dat: DeletedStudent})
    } catch (error) {
        res.send(error.message)
    }
}


module.exports = {
    CreateStudent,
    GetAllSchoolStudents,
    GetStudent,
    DeleteOneStudent,
    UpdateOneStudent,
}