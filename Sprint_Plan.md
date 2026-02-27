# Magnetic Resonance Network (MRN)
## Sprint Plan

---

# 1. Project Overview

Magnetic Resonance Network (MRN) is a decentralized communication system 
that transmits data using near-field magnetic resonance instead of RF signals.

This 4-sprint plan focuses on building a working prototype capable of:

- Magnetic-based data transmission
- Reliable packet communication
- Multi-node mesh relay
- Measurable performance validation

Each sprint = 1 week.

---

# 2. Sprint Structure Overview

| Sprint | Focus Area | Main Outcome |
|--------|------------|-------------|
| Sprint 1 | System Design & Feasibility | Validated architecture + simulation |
| Sprint 2 | Physical Layer | 2-node magnetic communication |
| Sprint 3 | Protocol & Reliability | Structured and stable data transmission |
| Sprint 4 | Mesh Network & Validation | 3-node relay + performance metrics |

---

# ==============================
# Sprint 1 – System Design & Feasibility
# ==============================

## Sprint Goal
Validate technical feasibility and finalize system architecture.

## Sprint Backlog

| ID | Task | Priority | Status |
|----|------|----------|--------|
| S1-1 | Define use cases | High | Pending |
| S1-2 | Design node architecture | High | Pending |
| S1-3 | Model magnetic attenuation (1/r³) | High | Pending |
| S1-4 | Simulate resonance frequency curve | Medium | Pending |
| S1-5 | Define layered communication model | High | Pending |

## Technical Focus

### Magnetic Field Model
Magnetic field strength decay:
B ∝ 1 / r³

### Node Components
- Magnetic coil
- LC resonance circuit
- Microcontroller
- Firmware stack

## Deliverables
- System architecture documentation
- Simulation scripts
- Feasibility summary

## Definition of Done
- Architecture finalized
- Simulation results documented
- Constraints clearly identified

---

# ==============================
# Sprint 2 – Physical Layer Implementation
# ==============================

## Sprint Goal
Achieve magnetic communication between 2 nodes.

## Sprint Backlog

| ID | Task | Priority | Status |
|----|------|----------|--------|
| S2-1 | Build LC resonance circuit | High | Pending |
| S2-2 | Implement bit-level encoding | High | Pending |
| S2-3 | Implement signal detection | High | Pending |
| S2-4 | Perform range testing | High | Pending |
| S2-5 | Measure signal stability | Medium | Pending |

## Technical Focus

### Transmission Method
- Frequency-based signaling
- Binary modulation

### Validation Tests
- Send 1–8 byte messages
- Measure max range
- Record packet success rate

## Deliverables
- 2 working nodes
- Range test report
- Signal stability log

## Definition of Done
- Successful byte transmission
- Stable detection at defined range
- Test results documented

---

# ==============================
# Sprint 3 – Protocol & Reliability Layer
# ==============================

## Sprint Goal
Enable structured and reliable communication.

## Sprint Backlog

| ID | Task | Priority | Status |
|----|------|----------|--------|
| S3-1 | Design packet structure | High | Pending |
| S3-2 | Implement CRC validation | High | Pending |
| S3-3 | Implement ACK mechanism | High | Pending |
| S3-4 | Implement retry logic | Medium | Pending |
| S3-5 | Test corrupted packet detection | High | Pending |

## Packet Structure

| Field | Description |
|-------|------------|
| PREAMBLE | Synchronization bits |
| SRC | Source ID |
| DST | Destination ID |
| DATA | Payload |
| CRC | Error detection |

## Validation Criteria
- Error detection functional
- Reliable 20–50 byte transmission
- Retry works on packet loss

## Deliverables
- Stable packet transmission
- Reliability test report

## Definition of Done
- CRC detects errors
- ACK confirmed
- Retry triggers correctly

---

# ==============================
# Sprint 4 – Mesh Network & Validation
# ==============================

## Sprint Goal
Enable multi-hop mesh communication and validate performance.

## Sprint Backlog

| ID | Task | Priority | Status |
|----|------|----------|--------|
| S4-1 | Add third node (relay) | High | Pending |
| S4-2 | Implement flood routing | High | Pending |
| S4-3 | Test 2-hop communication | High | Pending |
| S4-4 | Measure latency per hop | Medium | Pending |
| S4-5 | Conduct resilience test (remove node) | High | Pending |

## Network Model
Topology: Decentralized mesh  
Routing: Flood-based routing  

## Validation Tests
1. 2-hop relay transmission
2. Packet success rate measurement
3. Node removal test
4. Continuous stability test (1 hour)

## Performance Targets

| Metric | Target |
|--------|--------|
| Communication Range | ≥ 1–3 meters |
| Packet Success Rate | ≥ 80% |
| Multi-hop Capability | ≥ 2 hops |
| Latency per hop | < 200 ms |
| Data Rate | 100–1000 bps |

## Deliverables
- 3-node working mesh
- Performance metrics documentation
- Final technical summary

## Definition of Done
- 3 nodes relay successfully
- Network survives single node removal
- Metrics recorded and documented

---

# 3. Global Risk Analysis

## Technical Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Limited range | High | Increase relay density |
| Signal attenuation | High | Optimize coil design |
| Resonance mismatch | Medium | Manual tuning |
| Low bandwidth | Medium | Optimize packet size |

## Operational Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Firmware instability | Medium | Incremental testing |
| Hardware failure | Medium | Component validation |
| Schedule delay | Medium | Prioritize core tasks |

---

# 4. Technical Constraints

| Constraint | Description |
|------------|------------|
| Magnetic decay | ∝ 1/r³ |
| Near-field limitation | Short-medium range |
| Bandwidth | Lower than RF |
| Energy demand | High current requirement |

---

# 5. Overall Definition of Success (End of Sprint 4)

The 4-sprint cycle is successful if:

- 2 nodes communicate reliably
- 3-node mesh relay works
- CRC and ACK function correctly
- Packet success rate ≥ 80%
- Performance metrics recorded
- Documentation complete

---

# 6. Post-Sprint Direction

After Sprint 4:

- Add auto resonance tuning
- Implement adaptive routing
- Add encryption layer
- Optimize energy efficiency
- Expand to outdoor testing

---

End of 4-Week Sprint Plan
