import React, { useState } from 'react';
import { Database, Shield, Cpu, RefreshCw, Activity, Terminal } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  type: string;
  status: 'healthy' | 'active';
  latency: string;
  description: string;
  protocols: string[];
}

const nodesData: Record<string, ArchitectureNode> = {
  gateway: {
    id: 'gateway',
    label: 'API Gateway & Security',
    type: 'Edge Layer',
    status: 'healthy',
    latency: '8ms',
    description: 'Reverse proxy with rate limiting, TLS 1.3 termination, and role-based token validation.',
    protocols: ['HTTPS / gRPC', 'OAuth 2.0 / JWT', 'WAF Shield']
  },
  eventbus: {
    id: 'eventbus',
    label: 'Event Stream Mesh',
    type: 'Decoupled Middleware',
    status: 'active',
    latency: '3ms',
    description: 'Distributed pub/sub messaging queue guaranteeing zero data loss across services during traffic surges.',
    protocols: ['Apache Kafka', 'AMQP / RabbitMQ', 'Idempotent Queues']
  },
  core: {
    id: 'core',
    label: 'Core Business Services',
    type: 'Execution Layer',
    status: 'healthy',
    latency: '14ms',
    description: 'Strictly typed modular services executing business workflows and transaction validations.',
    protocols: ['Containerized Node/Go', 'OpenTelemetry', 'Automated Fallback']
  },
  database: {
    id: 'database',
    label: 'Enterprise Data Store',
    type: 'Persistence Layer',
    status: 'healthy',
    latency: '5ms',
    description: 'ACID-compliant primary database cluster paired with in-memory Redis caching and read replicas.',
    protocols: ['PostgreSQL Cluster', 'Redis In-Memory', 'Automated Snapshots']
  }
};

export const ArchitectureCanvas: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('gateway');
  const [simulateLoad, setSimulateLoad] = useState<boolean>(false);

  const activeNode = nodesData[selectedNode] || nodesData.gateway;

  return (
    <div
      style={{
        backgroundColor: 'var(--color-deep-navy)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(226, 232, 240, 0.15)',
        boxShadow: '0 20px 40px -10px rgba(7, 20, 38, 0.4), 0 0 0 1px rgba(37, 99, 235, 0.2)',
        overflow: 'hidden',
        color: '#FFFFFF'
      }}
    >
      {/* Console Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 1.25rem',
          backgroundColor: '#0F274A',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#93C5FD',
              letterSpacing: '0.05em'
            }}
          >
            ARCHITECTURE TOPOLOGY // INTERACTIVE
          </span>
        </div>

        <button
          type="button"
          onClick={() => setSimulateLoad(!simulateLoad)}
          style={{
            background: simulateLoad ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255, 255, 255, 0.08)',
            border: `1px solid ${simulateLoad ? '#60A5FA' : 'rgba(255, 255, 255, 0.15)'}`,
            borderRadius: 'var(--radius-xs)',
            padding: '0.3rem 0.65rem',
            color: simulateLoad ? '#93C5FD' : '#E2E8F0',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
        >
          <Activity size={12} color={simulateLoad ? '#38BDF8' : '#94A3B8'} />
          <span>{simulateLoad ? 'Load Test: High Surge' : 'Load: Normal (1x)'}</span>
        </button>
      </div>

      {/* Schematic Diagram Canvas */}
      <div style={{ padding: '1.25rem', position: 'relative' }}>
        {/* Nodes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Node 1: API Gateway */}
          <div
            onClick={() => setSelectedNode('gateway')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedNode('gateway')}
            style={{
              padding: '1rem',
              backgroundColor: selectedNode === 'gateway' ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 39, 74, 0.7)',
              border: `1px solid ${selectedNode === 'gateway' ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <Shield size={18} color="#60A5FA" />
              <span style={{ fontSize: '0.65rem', color: '#34D399', fontWeight: 600 }}>● 8ms</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>API Gateway</div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Edge Security & Auth</div>
          </div>

          {/* Node 2: Event Mesh */}
          <div
            onClick={() => setSelectedNode('eventbus')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedNode('eventbus')}
            style={{
              padding: '1rem',
              backgroundColor: selectedNode === 'eventbus' ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 39, 74, 0.7)',
              border: `1px solid ${selectedNode === 'eventbus' ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <RefreshCw size={18} color="#38BDF8" className={simulateLoad ? 'animate-spin' : ''} />
              <span style={{ fontSize: '0.65rem', color: '#60A5FA', fontWeight: 600 }}>● Pub/Sub</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Event Stream Mesh</div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Decoupled Queuing</div>
          </div>

          {/* Node 3: Core Services */}
          <div
            onClick={() => setSelectedNode('core')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedNode('core')}
            style={{
              padding: '1rem',
              backgroundColor: selectedNode === 'core' ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 39, 74, 0.7)',
              border: `1px solid ${selectedNode === 'core' ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <Cpu size={18} color="#818CF8" />
              <span style={{ fontSize: '0.65rem', color: '#34D399', fontWeight: 600 }}>● 14ms</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Core Services</div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Business Logic Engine</div>
          </div>

          {/* Node 4: Persistence */}
          <div
            onClick={() => setSelectedNode('database')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedNode('database')}
            style={{
              padding: '1rem',
              backgroundColor: selectedNode === 'database' ? 'rgba(37, 99, 235, 0.2)' : 'rgba(15, 39, 74, 0.7)',
              border: `1px solid ${selectedNode === 'database' ? '#3B82F6' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <Database size={18} color="#F472B6" />
              <span style={{ fontSize: '0.65rem', color: '#34D399', fontWeight: 600 }}>● Primary + Cache</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Data Ecosystem</div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>PostgreSQL & Redis</div>
          </div>
        </div>

        {/* Dynamic Node Detail Inspector Box */}
        <div
          style={{
            marginTop: '1rem',
            padding: '0.95rem 1.15rem',
            backgroundColor: 'rgba(7, 20, 38, 0.95)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} color="#60A5FA" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>
                {activeNode.label}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 6px',
                  backgroundColor: 'rgba(37, 99, 235, 0.25)',
                  color: '#93C5FD',
                  borderRadius: '3px'
                }}
              >
                {activeNode.type}
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
              Avg Latency: {activeNode.latency}
            </span>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#CBD5E1', lineHeight: 1.5, margin: '0 0 0.5rem 0' }}>
            {activeNode.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {activeNode.protocols.map((p) => (
              <span
                key={p}
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#BAE6FD',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
