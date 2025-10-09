import multer from 'multer';

// Use memory storage for serverless environments (like Vercel)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // optional: 5MB per file
});

export default upload;
