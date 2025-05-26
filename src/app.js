const express = require('express');
const mathRoutes = require('./routes/math');

const app = express();
app.use(express.json());
app.use('/api', mathRoutes);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;