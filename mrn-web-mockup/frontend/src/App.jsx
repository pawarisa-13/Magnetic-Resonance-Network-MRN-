import React, { useState, useEffect, useRef } from 'react';
import { Activity, Radio, Cpu, Settings, LayoutDashboard, Share2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

function App() {
  const [networkData, setNetworkData] = useState({ nodes: [], connections: [] });
  const [logs, setLogs] = useState([
    { text: 'MRN Control Engine initialized.', type: 'info' },
    { text: 'Scanning for active nodes...', type: 'info' }
  ]);
  const [isRouting, setIsRouting] = useState(false);
  const [activePath, setActivePath] = useState([]);
  const [metrics, setMetrics] = useState({ latency: '--', energy: '--' });
  
  const [sourceNode, setSourceNode] = useState('N12');
  const [destNode, setDestNode] = useState('N58');
  const [faultNode, setFaultNode] = useState('N36');
  
  const routingTimeouts = useRef([]);

  useEffect(() => {
    // Fetch initial network topology
    axios.get(`${API_URL}/network`)
      .then(res => {
        setNetworkData(res.data);
        addLog(`Discovered ${res.data.nodes.length} nodes and ${res.data.connections.length} connections.`, 'info');
      })
      .catch(err => {
        addLog('Failed to connect to Local MRN Backend (Is the backend running on port 3001?).', 'error');
        // Fallback mock data in case backend is not running
        setNetworkData({
          nodes: [
            { id: 'N12', x: 20, y: 30, resonanceScore: 92, energy: 85, status: 'active' },
            { id: 'N34', x: 50, y: 70, resonanceScore: 96, energy: 88, status: 'active' },
            { id: 'N36', x: 80, y: 40, resonanceScore: 89, energy: 65, status: 'active' },
            { id: 'N58', x: 60, y: 90, resonanceScore: 94, energy: 78, status: 'active' },
            { id: 'Lina', x: 30, y: 80, resonanceScore: 81, energy: 45, status: 'weak' }
          ],
          connections: [
            { source: 'N12', target: 'N34', stability: 98 },
            { source: 'N12', target: 'N36', stability: 85 },
            { source: 'N34', target: 'N58', stability: 96 },
            { source: 'N36', target: 'N58', stability: 88 }
          ]
        });
      });
  }, []);

  const addLog = (text, type = 'info') => {
    setLogs(prev => [...prev.slice(-15), { text, type, time: new Date().toLocaleTimeString() }]);
  };

  const simulateRouting = async () => {
    if (isRouting) return;
    
    if (sourceNode === destNode) {
      addLog('Source and Destination cannot be the same.', 'warn');
      return;
    }

    setIsRouting(true);
    setActivePath([]);
    setMetrics({ latency: 'Calculating...', energy: 'Calculating...' });
    
    addLog(`Initiating Adaptive Routing sequence from ${sourceNode} to ${destNode}...`, 'info');

    try {
      const offlineNodes = networkData.nodes.filter(n => n.status === 'offline').map(n => n.id);
      const res = await axios.post(`${API_URL}/route`, { source: sourceNode, destination: destNode, offlineNodes });
      const { path, latency, energyCost } = res.data;
      
      if (!path || path.length === 0) {
        addLog(`No magnetic path found or source/dest is offline.`, 'warn');
        setIsRouting(false);
        setMetrics({ latency: 'Failed', energy: '--' });
        return;
      }

      addLog(`Found optimal magnetic path: ${path.join(' -> ')}`, 'info');
      
      // Animate the path
      routingTimeouts.current = [];
      for (let i = 0; i < path.length; i++) {
        const t1 = setTimeout(() => {
          setActivePath(prev => [...prev, path[i]]);
          addLog(`Node ${path[i]} resonance matched. Relaying packet...`, 'info');
          if (i === path.length - 1) {
             const t2 = setTimeout(() => {
               setIsRouting(false);
               setMetrics({ latency, energy: energyCost });
               addLog(`Packet delivered successfully. Latency: ${latency}`, 'info');
             }, 1000);
             routingTimeouts.current.push(t2);
          }
        }, i * 1500);
        routingTimeouts.current.push(t1);
      }
    } catch (err) {
      addLog('Routing request failed. Check connection.', 'error');
      setIsRouting(false);
    }
  };

  const cancelRouting = () => {
    if (!isRouting) return;
    routingTimeouts.current.forEach(clearTimeout);
    routingTimeouts.current = [];
    setIsRouting(false);
    setActivePath([]);
    setMetrics({ latency: 'Aborted', energy: '--' });
    addLog('Manual Override: Routing sequence aborted.', 'error');
  };

  const triggerFault = () => {
    if (isRouting) return;

    const node = networkData.nodes.find(n => n.id === faultNode);
    if (!node || node.status === 'offline') {
      addLog(`Node ${faultNode} is already offline.`, 'warn');
      return;
    }

    addLog(`CRITICAL: Massive RF interference detected at Sector ${faultNode}!`, 'warn');
    addLog(`Node ${faultNode} magnetic field collapsed. Rebalancing topology...`, 'warn');
    
    const newNodes = networkData.nodes.map(n => n.id === faultNode ? { ...n, status: 'offline', energy: 0, resonanceScore: 0 } : n);
    setNetworkData({ ...networkData, nodes: newNodes });
  };

  const healFault = () => {
    const node = networkData.nodes.find(n => n.id === faultNode);
    if (!node || node.status !== 'offline') {
      addLog(`Node ${faultNode} is already active/healthy.`, 'info');
      return;
    }

    addLog(`System Recovery: Reactivating Sector ${faultNode} magnetic field...`, 'info');
    
    const newNodes = networkData.nodes.map(n => n.id === faultNode ? { ...n, status: 'active', energy: 85, resonanceScore: 90 } : n);
    setNetworkData({ ...networkData, nodes: newNodes });
  };

  const getNodePos = (id) => {
    const node = networkData.nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="glass-panel sidebar">
        <div className="brand">
          <Activity size={24} />
          <span>MRN Command</span>
        </div>
        
        <div className="nav-menu">
          <div className="nav-item active"><LayoutDashboard size={18} /> Dashboard</div>
          <div className="nav-item"><Share2 size={18} /> Network Map</div>
          <div className="nav-item"><Radio size={18} /> Frequencies</div>
          <div className="nav-item"><Cpu size={18} /> Node Control</div>
          <div className="nav-item"><Settings size={18} /> Settings</div>
        </div>

        <div className="controls" style={{ flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Send Packet Path</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <select className="ui-select" value={sourceNode} onChange={e => setSourceNode(e.target.value)}>
                {networkData.nodes.map(n => <option key={n.id} value={n.id}>{n.id}</option>)}
              </select>
              <span style={{ alignSelf: 'center', color: 'var(--accent-cyan)' }}>→</span>
              <select className="ui-select" value={destNode} onChange={e => setDestNode(e.target.value)}>
                {networkData.nodes.map(n => <option key={n.id} value={n.id}>{n.id}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
              <button className="btn" onClick={simulateRouting} disabled={isRouting}>
                {isRouting ? 'Routing...' : 'Send Packet'}
              </button>
              <button className="btn" onClick={cancelRouting} disabled={!isRouting} style={{ borderColor: isRouting ? 'var(--accent-red)' : 'var(--border-neon)', color: isRouting ? 'var(--accent-red)' : 'var(--text-muted)' }}>
                Cancel
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Inject Fault Target</label>
            <select className="ui-select" value={faultNode} onChange={e => setFaultNode(e.target.value)} style={{ borderColor: 'var(--accent-red)' }}>
               {networkData.nodes.map(n => <option key={n.id} value={n.id}>{n.id}</option>)}
            </select>
            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
              <button className="btn" onClick={triggerFault} style={{ borderColor: 'var(--accent-red)', color: 'var(--accent-red)' }}>
                Inject Fault
              </button>
              <button className="btn" onClick={healFault} style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                Restore Node
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Network Map */}
      <div className="map-container">
        <div className="glass-panel map-header">
          <div className="map-title">
            <h2>Magnetic Resonance Topology</h2>
            <p className="map-subtitle">Underground Mesh Network Visualization</p>
          </div>
          <div style={{color: 'var(--accent-cyan)', display: 'flex', gap: '10px', alignItems: 'center'}}>
            <Zap size={18} />
            <span style={{fontWeight: 600}}>System Active</span>
          </div>
        </div>

        <div className="glass-panel network-view">
          {/* SVG Overlay for Connections */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <linearGradient id="conn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,240,255,0.1)" />
                <stop offset="50%" stopColor="rgba(0,240,255,0.6)" />
                <stop offset="100%" stopColor="rgba(0,240,255,0.1)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {networkData.connections.map((conn, idx) => {
              const p1 = getNodePos(conn.source);
              const p2 = getNodePos(conn.target);
              const isOffline = networkData.nodes.find(n => n.id === conn.source)?.status === 'offline' || 
                                networkData.nodes.find(n => n.id === conn.target)?.status === 'offline';

              let isPathActive = false;
              let animP1 = p1;
              let animP2 = p2;

              for (let i = 0; i < activePath.length - 1; i++) {
                if (activePath[i] === conn.source && activePath[i+1] === conn.target) {
                  isPathActive = true;
                  animP1 = p1;
                  animP2 = p2;
                  break;
                } else if (activePath[i] === conn.target && activePath[i+1] === conn.source) {
                  isPathActive = true;
                  animP1 = p2;
                  animP2 = p1;
                  break;
                }
              }

              return (
                <g key={idx}>
                  <line 
                    x1={`${p1.x}%`} y1={`${p1.y}%`} 
                    x2={`${p2.x}%`} y2={`${p2.y}%`}
                    stroke={isPathActive ? 'var(--accent-cyan)' : 'url(#conn-grad)'}
                    strokeWidth={isPathActive ? 3 : 2}
                    opacity={isOffline ? 0.1 : 1}
                    filter={isPathActive ? 'url(#glow)' : ''}
                  />
                  {isPathActive && !isOffline && (
                    <circle r="4" fill="#fff" filter="url(#glow)">
                      <animate attributeName="cx" values={`${animP1.x}%;${animP2.x}%`} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" values={`${animP1.y}%;${animP2.y}%`} dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Render Nodes */}
          {networkData.nodes.map(node => (
            <div key={node.id} className={`node ${node.status}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
              <div className="resonance-wave" />
              <div className="resonance-wave" style={{ animationDelay: '1s' }} />
              <div className="node-core" style={{ background: node.status === 'offline' ? 'var(--accent-red)' : ''}} />
              <div className="node-label">
                <strong>{node.id}</strong> {node.status === 'offline' && '(OFFLINE)'}
                <div className="node-stats">
                  <span>RS: {node.resonanceScore}</span>
                  <span>NRG: {node.energy}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Metrics Panel */}
      <div className="glass-panel metrics-panel">
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>Live Telemetry</h3>
        
        <div className="metric-card">
          <div className="metric-header">
            <span>Magnetic Field Str (Layer 1)</span>
            <span className="value-highlight">4.2 T</span>
          </div>
          <div className="signal-graph">
             {Array.from({length: 20}).map((_, i) => (
               <div key={i} className="bar" style={{ height: `${Math.random() * 80 + 20}%`, opacity: Math.random() > 0.8 ? 0.3 : 1 }} />
             ))}
          </div>
        </div>

        <div className="metric-card" style={{ marginTop: '10px' }}>
          <div className="metric-header">
            <span>Adaptive Routing State</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '10px' }}>
            <span style={{color: 'var(--text-muted)'}}>Last Latency:</span>
            <span className="value-highlight">{metrics.latency}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '5px' }}>
            <span style={{color: 'var(--text-muted)'}}>Energy Cost:</span>
            <span className="value-highlight">{metrics.energy}</span>
          </div>
        </div>

        <div className="metric-card" style={{ marginTop: 'auto' }}>
          <div className="metric-header" style={{ marginBottom: '10px' }}>Event Terminal</div>
          <div className="terminal-box">
            {logs.map((log, idx) => (
              <div key={idx} className="terminal-line">
                <span style={{ color: '#6b7280' }}>[{log.time}]</span>{' '}
                <span className={log.type}>{log.text}</span>
              </div>
            ))}
            {/* Dummy element to auto-scroll */}
            <div style={{ float:"left", clear: "both" }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulser {
          0% { left: 0%; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;
