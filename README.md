# QuickFix-Tech

Professional tech repair and service platform.

## Technical Stack
- **Frontend**: React (Vite)
- **Backend**: Node.js (Express)
- **Database**: Cloud Firestore (Pending setup)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (`motion/react`)

## Architecture
QuickFix-Tech uses a unified full-stack architecture. The Express server serves as the primary entry point, integrating Vite as a middleware for development.

### Key Features
- **Instant Booking**: Modern form with client-side validation.
- **Order Tracking**: Alphanumeric 8-digit tracking system.
- **Theme Engine**: System-aware light/dark mode for technical elite.
- **Responsive Grid**: Accessible on all devices from Chromebooks to Desktop displays.

## Development Setup
The application is pre-configured for the AI Studio environment.

```bash
# Start the full-stack server
npm run dev
```

## Deployment Notes
Designed for ARM64 and Linux (Crostini) environments. Ensure `PORT: 3000` is exposed. 
Environment variables for the database are managed via the Cloud Console.
