import { EncryptJWT, jwtDecrypt } from 'jose';

// ✅ Must be exactly 32 characters (256 bits) for A256GCM
const secretKey = new TextEncoder().encode('12345678901234567890123456789012');

export const encrypt = async (payload) => {
  return await new EncryptJWT(payload)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .encrypt(secretKey);
};

export const decrypt = async (token) => {
  const { payload } = await jwtDecrypt(token, secretKey);
  return payload;
};