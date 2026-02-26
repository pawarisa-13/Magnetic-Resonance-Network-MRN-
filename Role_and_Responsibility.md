# Magnetic Resonance Communication Network (MRCN)
## Roles, Responsibilities & Working Boundaries
Version: 2.0  
Sprint: Alpha  
Methodology: Agile Scrum  

---

# 1. Team Role Assignment Table

| Role | Assigned To | Primary Responsibilities | Secondary Responsibilities | Decision Authority | Reporting To |
|------|------------|--------------------------|----------------------------|-------------------|--------------|
| System Architect | นางสาวกัญญาภัค ทองวิเศษ | System-wide architecture design, Layer definitions, Protocol specification | Design documentation, Architecture validation | Final say on architecture & interface changes | Instructor |
| Protocol & Routing Engineer | นางสาวอลิชา ชนะบุญ | Routing algorithm, Discovery mechanism, Flooding logic | Performance tuning, Edge case handling | Routing logic decisions | Architect |
| Implementation & Simulation Lead | นางสาวปวริศา สดีดาชมภู | Node simulation, Message handling, Multi-node integration | Demo preparation, Code structure design | Code-level implementation | Architect |
| Hardware & Energy Engineer | นายบุญปวณี เรืองไพศาล | Signal model design, Energy optimization, TX/RX modeling | Performance measurement | Energy & signal modeling decisions | Architect |
| QA & Documentation Lead | นายปรีชา ศรหีนองบัว | Test planning, Test execution, Quality metrics | Documentation control, Validation reports | Quality gate & release validation | All |

---

# 2. Responsibility Matrix by Layer

## 2.1 Physical & Resonance Layer
Design Owner: Hardware Engineer  
Implementation Owner: Hardware Engineer  
Testing Owner: QA  
Documentation Owner: Architect  

Scope:
- Magnetic signal modeling  
- Power efficiency strategy  
- Communication range validation  

---

## 2.2 Communication Layer
Design Owner: Architect  
Implementation Owner: Protocol Engineer  
Testing Owner: QA  
Documentation Owner: Protocol Engineer  

Scope:
- Node discovery  
- Controlled flooding  
- Store-and-forward  
- Loop prevention (TTL, Message ID cache)  

---

## 2.3 Decentralized Network Layer
Design Owner: Architect  
Implementation Owner: Implementation Lead  
Testing Owner: QA  
Documentation Owner: Architect  

Scope:
- Distributed architecture  
- Topic-based message model  
- Neighbor table management  
- Resilience strategy  

---

## 2.4 Simulation Framework
Design Owner: Architect  
Implementation Owner: Implementation Lead  
Testing Owner: QA  
Documentation Owner: DevOps  

Scope:
- Multi-node simulation  
- Integration testing  
- Scenario validation (disaster / underground)  

---

# 3. Decision Authority Matrix

| Decision Type | Architect | Protocol | Implementation | Hardware | QA |
|---------------|----------|----------|----------------|----------|----|
| Architecture Change | Approve | Consult | Consult | Consult | Consult |
| Routing Logic Update | Review | Approve | Consult | - | Consult |
| Implementation Approach | Review | Consult | Approve | - | - |
| Energy Model Change | Review | - | Consult | Approve | - |
| Test Strategy | Consult | Consult | Consult | - | Approve |
| Release Readiness | Consult | Consult | Consult | Consult | Approve |

Legend:  
Approve = Final authority  
Review = Oversight  
Consult = Two-way communication  

---

# 4. Communication & Escalation Structure

## 4.1 Internal Communication Matrix

| From \ To | Architect | Protocol | Implementation | Hardware | QA |
|------------|----------|----------|----------------|----------|----|
| Architect | - | Design updates | Interface specs | Signal requirements | Validation criteria |
| Protocol | Routing changes | - | Integration needs | Performance data | Test requests |
| Implementation | Code status | Integration help | - | Simulation metrics | Bug reports |
| Hardware | Energy updates | Signal constraints | Model updates | - | Validation results |
| QA | Test reports | Bug findings | Coverage results | Performance issues | - |

---

## 4.2 Escalation Path

Issue Identified  
↓  
Assigned Owner attempts resolution (within 8 working hours)  
↓  
Escalate to Role Lead (within 16 hours)  
↓  
Team discussion & documented decision (within 24 hours)  
↓  
Architect final decision  
↓  
Instructor (if unresolved)

---

# 5. Working Boundaries

## Architect
In Scope:
- System-level design
- Interface definitions
- Technology selection

Out of Scope:
- Line-by-line coding
- Writing unit tests

---

## Protocol Engineer
In Scope:
- Routing logic
- Message forwarding mechanisms

Out of Scope:
- Architecture redesign
- Hardware signal modeling

---

## Implementation Lead
In Scope:
- Simulation coding
- Integration logic

Out of Scope:
- Changing routing rules without review
- Architecture-level decisions

---

## Hardware Engineer
In Scope:
- Energy & signal modeling
- Performance measurement

Out of Scope:
- Routing algorithm changes
- CI/CD setup

---

## QA & Documentation
In Scope:
- Test planning
- Quality validation
- Coverage reporting

Out of Scope:
- Implementation decisions
- Architecture modifications

---

# 6. Critical Handoff Points

| From | To | Deliverable | Acceptance Criteria |
|------|----|-------------|--------------------|
| Architect | Protocol | Routing Specification | Approved & documented |
| Protocol | Implementation | Working Routing Module | Unit tests pass |
| Implementation | QA | Integrated Simulation | End-to-end flow verified |
| QA | Team | Test Report | No critical defects |

---

# 7. Sprint Governance Rules

- Sprint duration: 2 weeks
- No direct push to main branch
- All changes via Pull Request
- PR must:
  - Reference issue
  - Pass CI
  - Have at least 1 reviewer approval
- Architecture change requires formal design note
- Sprint considered complete only if:
  - All backlog items implemented
  - All tests passing
  - Documentation updated
  - Demo scenario executable
  - Version tag created

---

# 8. Time Allocation Guidelines

| Role | Design | Coding | Testing | Documentation | Meetings |
|------|--------|--------|---------|--------------|----------|
| Architect | 40% | 10% | 10% | 25% | 15% |
| Protocol | 20% | 50% | 10% | 10% | 10% |
| Implementation | 15% | 60% | 10% | 5% | 10% |
| Hardware | 25% | 40% | 15% | 10% | 10% |
| QA | 20% | 10% | 50% | 10% | 10% |

Expected workload: 6–10 hours per week per member

---

# 9. Commitment Statement

We, the Magnetic Resonance Communication Network (MRCN) team, commit to:

- Respect role boundaries  
- Follow structured decision processes  
- Maintain documentation discipline  
- Deliver a resilient decentralized network prototype  
- Complete Sprint Alpha with measurable and validated results  

---
