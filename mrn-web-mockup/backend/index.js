const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] 📡 [MRN API] ${req.method} request received at ${req.originalUrl}`);
  next();
});

// Mock topology data
const initialNodes = [
  { id: 'N12', x: 20, y: 30, z: -10, resonanceScore: 92, energy: 85, status: 'active' },
  { id: 'N34', x: 50, y: 70, z: -15, resonanceScore: 96, energy: 88, status: 'active' },
  { id: 'N36', x: 80, y: 40, z: -12, resonanceScore: 89, energy: 65, status: 'active' },
  { id: 'N58', x: 60, y: 90, z: -20, resonanceScore: 94, energy: 78, status: 'active' },
  { id: 'Lina', x: 30, y: 80, z: -5, resonanceScore: 81, energy: 45, status: 'weak' }
];

const initialConnections = [
  { source: 'N12', target: 'N34', stability: 98 },
  { source: 'N12', target: 'N36', stability: 85 },
  { source: 'N34', target: 'N58', stability: 96 },
  { source: 'N36', target: 'N58', stability: 88 },
  { source: 'N34', target: 'N36', stability: 92 },
  { source: 'Lina', target: 'N12', stability: 70 },
  { source: 'Lina', target: 'N34', stability: 75 }
];

app.get('/api/network', (req, res) => {
  res.json({
    nodes: initialNodes,
    connections: initialConnections
  });
});

app.post('/api/route', (req, res) => {
  const { source, destination, offlineNodes = [] } = req.body;
  console.log(`[${new Date().toLocaleTimeString()}] ⚡️ [MRN API] Routing Logic Triggered: Calculating path from ${source} to ${destination}...`);
  
  if (offlineNodes.includes(source) || offlineNodes.includes(destination)) {
     return res.json({ success: false, path: [], error: 'Source or destination is offline' });
  }
  
  // Implementation of simple BFS to find shortest path for Mockup purposes
  const adjList = {};
  initialNodes.forEach(n => adjList[n.id] = []);
  initialConnections.forEach(c => {
    adjList[c.source].push(c.target);
    adjList[c.target].push(c.source); // undirected graph
  });

  const queue = [[source]];
  const visited = new Set([source]);
  let path = [];

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const node = currentPath[currentPath.length - 1];

    if (node === destination) {
      path = currentPath;
      break;
    }

    for (const neighbor of adjList[node]) {
      if (!visited.has(neighbor) && !offlineNodes.includes(neighbor)) {
        visited.add(neighbor);
        queue.push([...currentPath, neighbor]);
      }
    }
  }

  if (path.length === 0) {
     res.json({ success: false, path: [], error: 'No path found' });
     return;
  }
  
  const latency = (path.length * 32.8 + Math.random() * 5).toFixed(1) + 'ms';
  const energyCost = (path.length * 0.8 + Math.random() * 0.5).toFixed(1) + '%';
  
  res.json({
    success: true,
    path,
    latency,
    energyCost
  });
});

app.listen(PORT, () => {
  console.log(`MRN Backend running on port ${PORT}`);
});
