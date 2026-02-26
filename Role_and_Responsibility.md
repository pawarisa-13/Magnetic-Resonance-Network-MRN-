# Magnetic Resonance Communication Network (MRCN)
## Roles, Responsibilities & Boundaries Matrix
Version: 3.0
Sprint: Alpha
Methodology: Agile Scrum

---

# Team Role Assignment Table

| Role | Assigned To | Primary Responsibilities | Secondary Responsibilities | Decision Authority | Reporting To |
|------|------------|--------------------------|----------------------------|-------------------|--------------|
| Architect | นางสาวกัญญาภัค ทองวิเศษ | System-wide architecture design, Layer interfaces, Protocol specification | Architecture documentation, Design validation | Final authority on architecture & interface changes | Instructor |
| Protocol Engineer | นางสาวอลิชา ชนะบุญ | Routing logic, Discovery protocol, Flooding algorithm | Performance optimization | Routing & communication decisions | Architect |
| Implementation Engineer | นางสาวปวริศา สดีดาชมภู | Node simulation, Integration coding, Message handling | Demo implementation | Implementation structure & coding decisions | Architect |
| Hardware/Energy Engineer | นายบุญปวณี เรืองไพศาล | Signal modeling, Energy optimization, TX/RX logic | Performance measurement | Signal & energy modeling decisions | Architect |
| Tester/QA | นายปรีชา ศรหีนองบัว | Test strategy, Test case creation, Quality validation | Documentation review | Release readiness & quality gate | All |

---

# Detailed Responsibility Matrix
## By Project Phase

| Phase | Architect | Protocol | Implementation | Hardware | Tester/QA |
|--------|-----------|----------|----------------|----------|-----------|
| Week 1: Foundation | Define architecture layers, Interface diagrams | Draft routing design | Setup simulation structure | Design signal model | Create test plan template |
| Week 2: Implementation | Review specs | Implement routing module | Develop node simulation | Validate energy model | Write unit tests |
| Week 3: Integration | Verify layer compliance | Optimize routing | Integrate modules | Performance measurement | Run integration tests |
| Week 4: Delivery | Final architecture review | Final optimization | Demo preparation | Energy validation | Final test execution |

---

# Responsibility Area Matrix
## By Component

| Component | Design Owner | Implementation Owner | Testing Owner | Documentation Owner |
|------------|-------------|---------------------|--------------|--------------------|
| Routing Protocol | Architect | Protocol Engineer | QA | Protocol Engineer |
| Node Simulation | Architect | Implementation Engineer | QA | DevOps |
| Energy Model | Hardware Engineer | Hardware Engineer | QA | Architect |
| Integration Framework | Architect | Implementation Engineer | QA | DevOps |
| Documentation | All | All | QA | DevOps |

---

# Decision Authority Matrix

| Decision Type | Architect | Protocol | Implementation | Hardware | QA | Instructor |
|---------------|----------|----------|----------------|----------|----|------------|
| Architecture Change | Approve | Consult | Consult | Consult | Consult | Final if disputed |
| Protocol Update | Approve | Propose | Consult | - | Consult | - |
| Implementation Approach | Review | Consult | Approve | - | - | - |
| Energy Strategy | Review | - | Consult | Approve | - | - |
| Testing Strategy | Consult | Consult | Consult | - | Approve | - |
| Release Readiness | Consult | Consult | Consult | Consult | Approve | Final |

---

# Communication Boundaries
## Internal Communication Matrix

| From \ To | Architect | Protocol | Implementation | Hardware | QA |
|------------|----------|----------|----------------|----------|----|
| Architect | - | Design updates | Interface specs | Signal requirements | Validation criteria |
| Protocol | Routing changes | - | Integration requests | Performance data | Bug reports |
| Implementation | Code status | Module dependencies | - | Simulation data | Test readiness |
| Hardware | Energy metrics | Signal constraints | Model updates | - | Validation results |
| QA | Test results | Coverage data | Bug reports | Performance issues | - |

---

# Escalation Path

Issue Identified  
↓  
Assigned Owner attempts resolution (within 6 working hours)  
↓  
Escalate to Architect (within 12 hours)  
↓  
Team discussion (within 24 hours)  
↓  
Escalate to Instructor if unresolved  

---

# Boundaries of Responsibility

## Architect
In Scope:
- System-level design
- Interface definitions
- Technology decisions
- Architecture documentation

Out of Scope:
- Daily coding
- Writing test cases

---

## Protocol Engineer
In Scope:
- Routing algorithm
- Message forwarding logic

Out of Scope:
- Architecture redesign
- Hardware modeling

---

## Implementation Engineer
In Scope:
- Node simulation coding
- Integration logic

Out of Scope:
- Protocol design changes without approval
- Architecture decisions

---

## Hardware Engineer
In Scope:
- Signal modeling
- Energy optimization

Out of Scope:
- Routing logic modification
- CI/CD management

---

## Tester/QA
In Scope:
- Test strategy
- Validation
- Bug tracking
- Release approval

Out of Scope:
- Implementation decisions
- Architecture modification

---

# Overlap & Handoff Boundaries

## Critical Handoff Points

| Handoff | From | To | Deliverable | Acceptance Criteria |
|----------|------|----|------------|--------------------|
| Architecture → Implementation | Architect | Implementation | Layer specs | Approved documentation |
| Protocol → Integration | Protocol | Implementation | Routing module | Unit tests passing |
| Implementation → Testing | Implementation | QA | Working build | Integration test pass |
| Testing → Delivery | QA | Team | Release candidate | No critical defects |

---

# RACI Matrix

| Activity | Architect | Protocol | Implementation | Hardware | QA |
|-----------|-----------|----------|----------------|----------|----|
| Architecture Definition | R/A | C | C | C | I |
| Routing Implementation | C | R/A | C | - | I |
| Simulation Coding | C | C | R/A | - | I |
| Energy Optimization | C | - | C | R/A | I |
| Integration Testing | C | C | C | C | R/A |
| Documentation | C | C | C | C | R/A |

Legend:
- R = Responsible
- A = Accountable
- C = Consulted
- I = Informed

---

# Time Allocation Boundaries

| Role | Coding | Design | Testing | Documentation | Meetings |
|------|--------|--------|---------|--------------|----------|
| Architect | 10% | 40% | 10% | 25% | 15% |
| Protocol | 50% | 20% | 10% | 10% | 10% |
| Implementation | 60% | 15% | 10% | 5% | 10% |
| Hardware | 40% | 25% | 15% | 10% | 10% |
| QA | 10% | 20% | 50% | 10% | 10% |

Expected weekly contribution: 6–10 hours per member

---

# Conflict Resolution Boundaries

| Conflict Type | Resolution Path | Escalation Time |
|---------------|----------------|----------------|
| Technical disagreement | Architect decision | 24 hours |
| Implementation approach | Engineer + Architect consensus | 48 hours |
| Testing priority | QA prioritization | 24 hours |
| Integration issues | DevOps coordination | 12 hours |
| Schedule conflict | Team vote → Instructor | 48 hours |

---

# Sign-off Matrix

| Deliverable | Author | Reviewer | Approver |
|-------------|--------|----------|----------|
| Architecture Spec | Architect | All | Instructor |
| Routing Design | Protocol | Architect | Architect |
| Source Code | Implementation | Architect + QA | Implementation |
| Test Plan | QA | Implementation | QA |
| Demo | Implementation | All | Architect |
| Final Package | DevOps | All | Instructor |

---

# Role Boundaries Quick Reference

┌───────────────────────────────────────────────┐
│ TEAM BOUNDARIES CHEAT SHEET │
├─────────────┬───────────────────────┬───────────────────────┤
│ ROLE        │ PRIMARY ZONE          │ STAY OUT OF           │
├─────────────┼───────────────────────┼───────────────────────┤
│ ARCHITECT   │ Design & Interfaces   │ Line-by-line coding   │
│ PROTOCOL    │ Routing logic         │ Architecture changes  │
│ IMPLEMENT   │ Simulation coding     │ Protocol redesign     │
│ HARDWARE    │ Energy & signals      │ Routing algorithm     │
│ QA          │ Testing & Quality     │ Implementation logic  │
└─────────────┴───────────────────────┴───────────────────────┘
