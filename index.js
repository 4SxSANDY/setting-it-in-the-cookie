import { encrypt, decrypt } from './script.js';

const payload = { userId: 42, role: 'admin' };

const run = async () => {
  const token = await encrypt(payload);
  console.log('🔐 Token:', token);

  const data = await decrypt(token);
  console.log('✅ Payload:', data);
};

run();