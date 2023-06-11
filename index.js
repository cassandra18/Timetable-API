require('dotenv').config();
const app = require('./middleware');
const { Teacher, Timetable } = require('./model');
const connectToDataBase = require('./db');


const PORT = process.env.PORT || 3000;

//connect to MongoDB
connectToDataBase();

//using get request, fetch timetable data from the database and populate the teacher field with the name property of the reference teacher

app.get('/timetable', async (req, res) => {
    try {
        //fetch timetable data from the database and populate the teacher field  with name property of referenced teacher.
        const timetable = await Timetable.find().populate('teacher', 'name');
    
        //once the population operation is completed send the 'timetable' data as JSON response
        res.json(timetable);
    }catch (error) {

        //if the get request fails, throw  and error with a status of 500
        res.status(500).json({error: 'Failed to fetch timetable'})
    }
});

//set up an express route for a POST request

app.post('/timetable', async (req, res) => {
    
    //check if the teacher exists using mongoose to find teacher document in the Teacher collection based on the teacherId value provided in the request body
    try{
        const teacher = await Teacher.findById(req.body.teacherId);
        if (!teacher) {
            //check if teacher was found based on the 'teacherId'. if not found return a status code 404 and send an error message as json response
            return res.status(404).json({ error: 'Teacher not found' })
        }
    

        //create the timetable object using the Timetable model/Schema
        const timetable = new Timetable({
        teacher: teacher._id, // assing id retrieved from database
        day: req.body.day,
        time: req.body.time,
        subject: req.body.subject,
        });
     
        //save the newtimetable entries to MongoDB database
        await timetable.save();

        //if the timetable entry is successfully created, a response with a status code 0f 201 and the created timetable entry as JSON is sent back 
        res.status(201).json(timetable);
    } catch (error) {
        // if an error occurs during the creation of timetable, a response with status code of 500 and a message is sent back
        res.status(500).json({ error: 'Failed to create timetable'});
        }
});

//start the server

app.listen(PORT, () =>{
console.log(`server started on port ${PORT}`);
});
