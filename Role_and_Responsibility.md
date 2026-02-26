# Magnetic Resonance Communication Network (MRCN)
## Roles, Responsibilities & Boundaries Matrix
Version: 3.2
Sprint: Alpha
Methodology: Agile Scrum

---

# Team Role Assignment Table

| Role | Assigned To | Primary Responsibilities | Secondary Responsibilities | Decision Authority | Reporting To |
|------|------------|--------------------------|----------------------------|-------------------|--------------|
| Architect | นางสาวกัญญาภัค ทองวิเศษ | ออกแบบสถาปัตยกรรมทั้งระบบ กำหนด Layer และ Interface | ตรวจสอบความสอดคล้องของทุกองค์ประกอบ | อำนาจตัดสินใจสูงสุดด้าน Architecture | Instructor |
| Protocol Engineer | นางสาวอลิชา ชนะบุญ | ออกแบบและพัฒนา Routing, Discovery และ Flooding | ปรับปรุงประสิทธิภาพการส่งข้อมูล | ตัดสินใจด้านตรรกะโปรโตคอล | Architect |
| Implementation Engineer | นางสาวปวริศา สดีดาชมภู | พัฒนา Node Simulation และ Integration | จัดทำ Demo และจัดโครงสร้างโค้ด | ตัดสินใจด้านโครงสร้างโค้ด | Architect |
| Hardware/Energy Engineer | นายบุญปวณี เรืองไพศาล | ออกแบบโมเดลสัญญาณและวิเคราะห์พลังงาน | ทดสอบระยะและความเสถียร | ตัดสินใจด้าน Energy Model | Architect |
| Tester/QA | นายปรีชา ศรหีนองบัว | วางแผนทดสอบ เขียน Test Case และสรุปผลคุณภาพ | ตรวจสอบเอกสาร | อนุมัติความพร้อมก่อน Release | All |

---

# Detailed Responsibility Matrix
## By Project Phase

| Phase | Architect | Protocol | Implementation | Hardware | Tester/QA |
|-------|----------|----------|----------------|----------|-----------|
| Week 1: Foundation | กำหนดโครงสร้างระบบและทำ Diagram | ร่างโครงโปรโตคอล | ตั้งโครง Simulation | กำหนดตัวชี้วัดพลังงาน | จัดทำ Test Plan |
| Week 2: Implementation | ตรวจสอบให้ตรงสเปก | พัฒนา Routing และ Discovery | พัฒนา Node Simulation | ทดลอง Energy Model | เขียน Unit Test |
| Week 3: Integration | ตรวจสอบความสอดคล้อง | ปรับปรุง Performance | รวมระบบ | วัดผลประสิทธิภาพ | ทำ Integration Test |
| Week 4: Delivery | Review สถาปัตยกรรม | Final Optimization | เตรียม Demo | ยืนยันค่าพลังงาน | Final Test & Report |

---

# Responsibility Area Matrix
## By Component

| Component | Design Owner | Implementation Owner | Testing Owner | Documentation Owner |
|-----------|--------------|---------------------|--------------|--------------------|
| Routing Protocol | Architect | Protocol Engineer | QA | Protocol Engineer |
| Node Simulation | Architect | Implementation Engineer | QA | Implementation |
| Energy Model | Hardware Engineer | Hardware Engineer | QA | Architect |
| Integration | Architect | Implementation Engineer | QA | QA |
| Documentation | All | All | QA | QA |

---

# Decision Authority Matrix

| Decision Type | Architect | Protocol | Implementation | Hardware | QA | Instructor |
|---------------|----------|----------|----------------|----------|----|------------|
| Architecture Changes | Approve | Consult | Consult | Consult | Consult | Final if disputed |
| Protocol Update | Approve | Propose | Consult | - | Consult | - |
| Implementation Approach | Review | Consult | Approve | - | - | - |
| Energy Strategy | Review | - | Consult | Approve | - | - |
| Release Readiness | Consult | Consult | Consult | Consult | Approve | Final |

คำอธิบาย:
- Approve = ผู้ตัดสินใจหลัก
- Consult = ต้องมีการปรึกษาหารือ
- Review = ตรวจสอบความถูกต้อง

---

# Communication Boundaries

## Internal Communication Matrix

| From \ To | Architect | Protocol | Implementation | Hardware | QA |
|------------|----------|----------|----------------|----------|----|
| Architect | - | แจ้งการเปลี่ยนแปลงสถาปัตยกรรม | ส่ง Interface Spec | กำหนดข้อจำกัดสัญญาณ | แจ้งเกณฑ์ตรวจสอบ |
| Protocol | รายงานสถานะ Routing | - | ประสานงาน Integration | แจ้งข้อมูล Performance | ส่งข้อมูลทดสอบ |
| Implementation | รายงานสถานะโค้ด | แจ้ง Dependency | - | ส่งข้อมูล Simulation | แจ้งความพร้อมทดสอบ |
| Hardware | แจ้งผลวัดพลังงาน | ข้อจำกัดสัญญาณ | ส่งข้อมูลโมเดล | - | แจ้งผลวัด |
| QA | รายงานผลทดสอบ | แจ้ง Bug | แจ้ง Coverage | แจ้ง Performance Issue | - |

---

# Escalation Path

พบปัญหา  
↓  
เจ้าของงานพยายามแก้ไข (ภายใน 6 ชั่วโมงทำงานจริง)  
↓  
แจ้ง Architect เพื่อพิจารณา (ภายใน 12 ชั่วโมง)  
↓  
ประชุมทีมเพื่อหาข้อสรุป (ภายใน 24 ชั่วโมง)  
↓  
หากยังไม่สามารถแก้ไขได้ → แจ้ง Instructor  

---

# Boundaries of Responsibility

## Architect
ทำ:
- ออกแบบโครงสร้างระบบ
- กำหนด Interface และมาตรฐาน
ไม่ทำ:
- แก้โค้ดรายบรรทัด
- เขียน Test Case แทน QA

## Protocol Engineer
ทำ:
- พัฒนา Routing และ Discovery
- ป้องกัน Loop (TTL/Cache)
ไม่ทำ:
- เปลี่ยน Architecture โดยไม่ผ่าน Review

## Implementation Engineer
ทำ:
- เขียน Simulation และรวมระบบ
- ดูแลโครงสร้างโค้ด
ไม่ทำ:
- เปลี่ยนตรรกะโปรโตคอลเอง

## Hardware Engineer
ทำ:
- วิเคราะห์พลังงานและสัญญาณ
- ทดสอบระยะ
ไม่ทำ:
- ปรับ Routing Algorithm

## Tester/QA
ทำ:
- วางแผนและดำเนินการทดสอบ
- อนุมัติคุณภาพก่อนส่งงาน
ไม่ทำ:
- ตัดสินใจเชิงสถาปัตยกรรม

---

# RACI Matrix

| Activity | Architect | Protocol | Implementation | Hardware | QA |
|----------|----------|----------|----------------|----------|----|
| Architecture Definition | R/A | C | C | C | I |
| Routing Implementation | C | R/A | C | - | I |
| Simulation Coding | C | C | R/A | - | I |
| Energy Optimization | C | - | C | R/A | I |
| Integration Testing | C | C | C | C | R/A |

Legend:
- R = Responsible
- A = Accountable
- C = Consulted
- I = Informed

---
