#!/bin/bash
# Debug Commands for LaurieWlsh Game

echo "🔍 DEBUGGING MARTINTRULLARD GAME"
echo "================================"

echo "📊 Checking server status..."
echo "Backend (port 3000):"
lsof -ti:3000 && echo "✅ Port 3000 is in use" || echo "❌ Port 3000 is free"

echo "Frontend (port 8080):"  
lsof -ti:8080 && echo "✅ Port 8080 is in use" || echo "❌ Port 8080 is free"

echo ""
echo "🌐 Testing backend API..."
curl -s http://localhost:3000/api/health | grep -q "success" && echo "✅ Backend API is working" || echo "❌ Backend API is down"

echo ""
echo "🎮 Testing frontend server..."
curl -s -I http://localhost:8080 | grep -q "200 OK" && echo "✅ Frontend server is working" || echo "❌ Frontend server is down"

echo ""
echo "🚀 Quick start commands:"
echo "Backend: cd backend && npm start"
echo "Frontend: cd frontend && npx http-server -p 8080 --cors"
echo "Game URL: http://localhost:8080"

echo ""
echo "🔧 Troubleshooting:"
echo "Kill port 3000: kill -9 \$(lsof -ti:3000)"
echo "Kill port 8080: kill -9 \$(lsof -ti:8080)"
echo "Check logs: tail -f backend/server.log (if exists)" 