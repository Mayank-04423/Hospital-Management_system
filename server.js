const express = require ('express');
const path = require ('path');

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/appointments', require('./routes/appointments'));


app.listen(PORT, () => {
  console.log(`Hospital System Server running on http://localhost:${PORT}`);
});