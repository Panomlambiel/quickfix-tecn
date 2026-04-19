import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to generate tracking ID
  const generateId = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid ambiguous chars
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // API Routes
  app.post('/api/bookings', async (req, res) => {
    try {
      const trackingId = generateId();
      const orderRef = doc(db, 'repair_orders', trackingId);
      
      const bookingData = {
        id: trackingId,
        customerName: req.body.name,
        email: req.body.email,
        deviceType: req.body.deviceType,
        issueCategory: req.body.issueCategory,
        remoteConsent: req.body.remoteConsent,
        issueDescription: req.body.description,
        status: 'pending',
        createdAt: serverTimestamp(),
      };

      await setDoc(orderRef, bookingData);
      
      console.log(`[QuickFix] Firestore Booking Created: ${trackingId}`);
      res.json({ success: true, trackingId });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Failed to create booking' });
    }
  });

  app.get('/api/bookings/:id', async (req, res) => {
    try {
      const id = req.params.id.toUpperCase();
      const orderRef = doc(db, 'repair_orders', id);
      const snap = await getDoc(orderRef);

      if (!snap.exists()) {
        return res.status(404).json({ error: 'Order not found' });
      }

      const data = snap.data();
      // Convert Timestamp to ISO string for client
      if (data.createdAt instanceof Timestamp) {
        data.createdAt = data.createdAt.toDate().toISOString();
      }

      res.json(data);
    } catch (error) {
      console.error('Error fetching booking:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[QuickFix-Tech] Server online at http://localhost:${PORT}`);
  });
}

startServer();
