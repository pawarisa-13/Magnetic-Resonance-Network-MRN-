# Magnetic Resonance Communication Network (MRCN)
## Role and Responsibility Document
Version: 1.0  
Sprint: Alpha  
Methodology: Agile Scrum  

---

# 1. Team Members

| No. | Name | Student ID |
|----|------|------------|
| 1 | นางสาวกัญญาภัค ทองวิเศษ | 673380391-3 |
| 2 | นางสาวอลิชา ชนะบุญ | 673380431-7 |
| 3 | นางสาวปวริศา สดีดาชมภู | 673380592-3 |
| 4 | นายบุญปวณี เรืองไพศาล | 673380588-4 |
| 5 | นายปรีชา ศรหีนองบัว | 653380335-1 |

---

# 2. Role Assignment Matrix

| Role | Assigned To | Primary Responsibilities | Secondary Responsibilities | Decision Authority |
|------|------------|--------------------------|----------------------------|-------------------|
| System Architect | นางสาวกัญญาภัค ทองวิเศษ | ออกแบบสถาปัตยกรรมระบบ (Layer Design, Node Model, Routing Concept) | ตรวจสอบความสอดคล้องทุก Layer | อนุมัติ Architecture Change |
| Protocol & Routing Engineer | นางสาวอลิชา ชนะบุญ | พัฒนา Discovery Mechanism, Controlled Flooding, Store-and-Forward | วิเคราะห์ Network Resilience | อนุมัติ Protocol Logic |
| Implementation & Simulation Lead | นางสาวปวริศา สดีดาชมภู | พัฒนา Node Simulation, Message Handling | เตรียม Demo Scenario | ตัดสินใจ Implementation ระดับ Code |
| Hardware & Energy Engineer | นายบุญปวณี เรืองไพศาล | ออกแบบ TX/RX Model, Power Strategy | วิเคราะห์ Energy Consumption | อนุมัติ Energy Optimization |
| QA & Documentation Lead | นายปรีชา ศรหีนองบัว | จัดทำเอกสารและ Test Plan | ตรวจสอบคุณภาพ Sprint | อนุมัติเอกสาร |

---

# 3. Responsibility Breakdown by Layer

## 3.1 Physical & Resonance Layer
**Responsible:** Hardware & Energy Engineer  
**Support:** System Architect  

- ออกแบบ Magnetic Coil Model  
- กำหนด Signal Modulation Strategy  
- วิเคราะห์พลังงาน (Duty Cycle Optimization)  
- ทดสอบระยะการสื่อสาร  

---

## 3.2 Communication Layer
**Responsible:** Protocol & Routing Engineer  
**Support:** Implementation Lead  

- พัฒนา Node Discovery (Beacon System)  
- Controlled Flooding Protocol  
- Store-and-Forward Mechanism  
- ป้องกัน Infinite Loop (TTL + Message ID Cache)  

---

## 3.3 Decentralized Network Layer
**Responsible:** System Architect  
**Support:** Protocol Engineer  

- ออกแบบ Distributed Architecture  
- กำหนด Topic-based Messaging Model  
- ออกแบบ Neighbor Table Structure  
- วางแนวทาง Network Resilience  

---

## 3.4 Simulation & Implementation Layer
**Responsible:** Implementation & Simulation Lead  
**Support:** All Members  

- พัฒนา Multi-node Simulation  
- ทดสอบ Message Broadcast  
- ทดสอบ Disaster Scenario  
- ตรวจสอบ Latency และ Reliability  

---

## 3.5 Documentation & Quality Control
**Responsible:** QA & Documentation Lead  

- จัดทำ Architecture_Spec.md  
- Implementation_Plan.md  
- Sprint_Plan.md  
- Test_Plan.md  
- ตรวจสอบ Markdown Formatting  

---

# 4. Decision & Escalation Flow

1. Routing/Protocol Issue → Protocol Engineer  
2. Hardware/Signal Issue → Hardware Engineer  
3. Simulation Bug → Implementation Lead  
4. Architecture Conflict → System Architect  
5. Documentation Approval → QA Lead  

**Final Escalation Authority:** System Architect  

---

# 5. Collaboration Rules

- Daily Standup: 10–15 minutes  
- Sprint Duration: 2 weeks  
- Pull Request: ต้องมีอย่างน้อย 1 approval  
- Major Architecture Change: ต้องได้รับการอนุมัติจาก Architect  
- ทุก Sprint ต้องมี Demo Result  

---

# 6. Accountability Matrix (RACI Model)

| Task | Architect | Protocol | Implementation | Hardware | QA |
|------|-----------|----------|----------------|----------|----|
| Architecture Design | R | C | C | C | I |
| Node Simulation | C | C | R | I | I |
| Routing Logic | C | R | C | I | I |
| Energy Optimization | C | I | C | R | I |
| Documentation | C | I | I | I | R |

Legend:  
R = Responsible  
A = Accountable  
C = Consulted  
I = Informed  

---

# 7. Commitment Statement

ทีมงาน Magnetic Resonance Communication Network (MRCN) ยืนยันว่าจะปฏิบัติตามบทบาทหน้าที่ที่ได้รับมอบหมาย และร่วมมือกันพัฒนา Sprint Alpha ให้สำเร็จตามเป้าหมาย โดยใช้แนวคิดเครือข่ายแบบกระจายศูนย์ที่สามารถทำงานได้แม้ระบบสื่อสารทั่วไปล้มเหลว
