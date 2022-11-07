import express from 'express';
const app = express();
app.use(express.json());

// IMportando las rutas
import authRoutes from './routes/auth.route.js';
import personaRoutes from './routes/persona.route.js';

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my API'
  });
});
app.use('/apiv1/user', authRoutes);
app.use('/apiv1/persona', personaRoutes);

export default app;
