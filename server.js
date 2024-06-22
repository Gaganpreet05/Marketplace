const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

const db = 'mongodb+srv://Gagan_2005:Preet$8025@cluster0.c8xd1vk.mongodb.net/Marketplace?retryWrites=true&w=majority';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
