import app from './index';
import mongoose from 'mongoose';
import { logger } from './config';
import { AddressInfo } from 'net';
import { seedSuperAdmin } from './models/seedSuperAdmin';

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);

    logger('connect:', 'connected to database');

    seedSuperAdmin();

    const server: any = app.listen(process.env.PORT || 5000, () => {
      const { port, address } = server.address() as AddressInfo;
      console.log(`Server is running on http://${address}:${port}`);
    });
  } catch (error) {
    logger('tried to start app', JSON.stringify(error));
    process.exit(1);
  }
}

startApp();
