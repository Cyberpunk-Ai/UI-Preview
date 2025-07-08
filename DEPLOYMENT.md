# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- GitHub repository

### Steps
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select this project

2. **Configure Build Settings**
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Environment Variables**
   Set the following in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_url
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

### Auto-Deployment
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests

## Alternative: Netlify Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Import from Git
   - Select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/public`

3. **Environment Variables**
   Add in Netlify dashboard:
   ```
   DATABASE_URL=your_postgresql_url
   NODE_ENV=production
   ```

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Database Setup

### Neon (Recommended)
1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to environment variables

### Supabase Alternative
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings > Database
4. Copy connection string
5. Add to environment variables

## Performance Optimization

- Images are optimized with proper formats
- CSS/JS minification in production
- Gzip compression enabled
- Browser caching configured

## Monitoring

- Check Vercel dashboard for deployment status
- Monitor performance with built-in analytics
- Set up error tracking if needed

## Troubleshooting

### Build Errors
- Check node version (18+ required)
- Verify all dependencies installed
- Check environment variables

### Runtime Errors
- Check server logs in Vercel dashboard
- Verify database connection
- Check environment variable values