import { build } from 'vite'
import { execSync } from 'child_process'
import { existsSync, mkdirSync } from 'fs'

async function buildProject() {
  try {
    console.log('🚀 Building Otulia Platform for production...')
    
    // Ensure dist directory exists
    if (!existsSync('dist')) {
      mkdirSync('dist', { recursive: true })
    }
    
    // Build frontend with Vite
    console.log('📦 Building frontend...')
    await build()
    
    // Build backend with esbuild
    console.log('🔧 Building backend...')
    execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' })
    
    console.log('✅ Build completed successfully!')
    console.log('📁 Files ready in dist/ directory')
    console.log('🌐 Ready for deployment to Vercel!')
    
  } catch (error) {
    console.error('❌ Build failed:', error.message)
    process.exit(1)
  }
}

buildProject()