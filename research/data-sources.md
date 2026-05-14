# Data Sources & Validation Framework

## Purpose
This document provides comprehensive source attribution and validation methodology for all baseline data in the Circular Battery Systems for Mongolia project.

---

## 1. EV Fleet Baseline (2023–2025)

### Verified Data (High Confidence)

| Year | Fleet | Source | Type | URL / Reference | Update Date |
|------|-------|--------|------|-----------------|-------------|
| 2023 | ~1,061 | National Statistics Office / Ministry of Road & Transport / Media Reports | Official | Pending direct link | Mar 2026 |
| Oct 2025 | 2,011 | UNESCAP Session 2.1 / Ministry of Road & Transport | Official | [View PDF](https://www.unescap.org/sites/default/d8files/event-documents/Session2.1_Ministry_of_Road_and_Transport.pdf) | Mar 2026 |

### Projected Data (Under Validation)

| Year | Fleet | Growth Rate | Status | Notes |
|------|-------|-------------|--------|-------|
| 2024 | ~1,900–2,000 | ~90% YoY | Estimated | Based on Oct 2025 actual (2,011) working backward |
| 2025 | ~3,000–3,500 | 50–85% YoY | Projected | Pending 2024 confirmed data |
| 2026 | ~6,000–10,000 | 70%–200% YoY | Government Target | Official ambition = 20,000 (likely conservative estimate) |

### Data Quality Notes
- ✅ 2023 baseline aligns across independent sources (IBEC, EV24.asia, UNESCAP)
- ⚠️ 2024 actual data not yet confirmed; repo projection of 2,069 (+95%) appears optimistic
- ⚠️ 2026 government target (20,000) requires policy acceleration; base case should be conservative
- ❌ Pre-2023 historical data (2015–2022) in Issue #7 is estimated; no official sources cited

---

## 2. Primary Official Sources

### Government Authorities

#### Mongolia Ministry of Road & Transport
- **Contact:** [Ministry Website](http://road.mn/) (pending direct contact)
- **Data Available:** 
  - Annual EV registration statistics
  - Vehicle import volumes by category
  - Licensing and ownership database
- **Frequency:** Annual reports (expected Q1 each year)
- **Status:** ⏳ Direct contact needed for 2024 year-end data

#### National Statistics Office of Mongolia (NSO)
- **Data Available:**
  - Economic trade statistics
  - Import/export volumes by category
  - Vehicle ownership surveys
- **Website:** [NSO Mongolia](https://www.1212.mn/en/)
- **Status:** ⏳ Survey data availability pending

#### Customs General Administration of Mongolia
- **Data Available:**
  - Vehicle import logs
  - HS codes: 8704.21, 8704.31, 8704.32 (EV/hybrid vehicles)
  - Import values and quantities
- **Contact:** [Customs Website](https://customs.mn/)
- **Status:** ⏳ Direct access to HS code breakdowns needed

---

## 3. International & Research Sources

### Verified Published Reports

| Source | Title | Year | Relevance | Status |
|--------|-------|------|-----------|--------|
| UNESCAP | Current Status of Electric vehicles in Mongolia | 2025 | Official govt presentation, includes 2,011 Oct 2025 figure | ✅ Verified |
| IBEC | EV Support Programs in Mongolia | 2024–2025 | Trade finance, import partnerships, Chinese EV sourcing | ✅ Verified |
| EV24.asia | Electric Vehicles in Mongolia Market Overview | 2024 | Industry analysis, fleet & growth trends | ✅ Reference |
| IEA Global EV Outlook | Mongolia Country Profile | Annual | EV adoption forecasts, policy context | ✅ Preliminary |
| Mobility Foresights | Mongolia EV Market 2022–2030 | 2024 | Commercial market analysis, growth scenarios | ⏳ Paywall (purchase recommended) |

### Open Access Links

- **UNESCAP Session 2.1 PDF:** https://www.unescap.org/sites/default/d8files/event-documents/Session2.1_Ministry_of_Road_and_Transport.pdf
- **IBEC News:** https://www.ibec.int/news/allnews/ibec-supports-the-supply-and-sales-of-electric-vehicles-in-mongolia/
- **EV24.asia Mongolia Profile:** https://ev24.asia/electric-vehicles-in-mongolia-ev24-asia/
- **IEA Global EV Database:** https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer (search: Mongolia)
- **Observatory of Economic Complexity (Mongolia imports):** https://oec.world/en/profile/country/mng
- **Trading Economics (Mongolia imports):** https://tradingeconomics.com/mongolia/imports

---

## 4. Baseline EV Stock & Battery Capacity Model

### Assumptions (Issue #7 & Issue #2)

| Parameter | Value | Source / Justification |
|-----------|-------|------------------------|
| Average Battery Size (2023) | 50 kWh | Industry standard for Chinese EVs (BYD, Li Auto, Nio) |
| Average Battery Size (2024–2025) | 55 kWh | Trend toward higher capacity models |
| Battery Lifespan | 8–10 years | Manufacturer specs; 70–80% SoH degradation threshold |
| Second-Life Reuse Rate | 20–30% | Preliminary; needs validation against regional pilots |
| Technology Mix | ~95% Li-ion / ~5% LFP | Estimated from Chinese import market |

### Calculated Metrics (Issue #7 Comment #1)

| Year | Fleet | Avg Battery (kWh) | Total Stock (MWh) |
|------|-------|------------------|--------------------|
| 2023 | 1,061 | 50 | 53 |
| 2024 | ~1,950 | 52.5 | ~102 |
| Oct 2025 | 2,011 | 55 | 111 |

**Status:** ✅ Calculations verified; assumptions need source documentation

---

## 5. EV Adoption Scenario Data

### Scenario Definition (Issue #1)

#### Low Growth (Conservative)
- Annual CAGR: 20–25%
- 2030 Fleet Projection: 3,500 units
- 2035 Fleet Projection: 7,000 units
- Driver: Policy neutral, import constraints
- **Confidence:** Medium (based on pre-2023 slower adoption phase)

#### Base Case (Current Policy)
- Annual CAGR: 35–40%
- 2030 Fleet Projection: 6,000 units
- 2035 Fleet Projection: 15,000 units
- Driver: Moderate policy support, charging expansion
- **Confidence:** Medium (aligns with 2023–2025 trajectory if validated)

#### High Growth (Accelerated)
- Annual CAGR: 50%+
- 2030 Fleet Projection: 10,000 units
- 2035 Fleet Projection: 30,000 units
- Driver: Government incentives (Vision 2050), price drop, rapid urban electrification
- **Confidence:** Low (requires 2026 target of 20,000 to materialize; currently behind schedule)

### Scenario Sensitivity Analysis
- **Key Risk Variable:** 2024 actual fleet count (currently underway)
- **If 2024 < 1,900:** Base case should shift toward Low scenario
- **If 2024 > 2,500:** Base case validated; High scenario warrants re-evaluation

---

## 6. Waste Projection & Plant Capacity Data

### Issue #2: Battery End-of-Life Waste Volume Assessment

**Input Assumptions:**
- First waste emergence: 2031–2033 (based on 8–10 year lifespan from 2023 EVs)
- Peak waste year: 2038–2042 (depends on adoption scenario)
- Degradation threshold: 70–80% State of Health (SoH)

**Projected Waste Output (High Growth Scenario):**
| Year | Projected Waste (tonnes) | Confidence | Notes |
|------|--------------------------|-----------|-------|
| 2031 | 424 | Low | Early vehicles from 2021–2023 |
| 2032 | 828 | Low | Growing fleet reaching end-of-life |
| 2033 | 1,531 | Medium | Rapid accumulation begins |

**Status:** ⚠️ Dependent on validation of 2024–2025 adoption data

---

## 7. Financial Feasibility Data (Issue #6)

### CAPEX & OPEX Assumptions

| Metric | Value | Source / Justification | Confidence |
|--------|-------|------------------------|-----------|
| 1,500t Hub CAPEX | €4–6M | Industry benchmarks (small battery recycling ops) | Medium |
| Processing OPEX | €600–900/tonne | Comparable facilities (Europe, Asia) | Medium |
| Black Mass Revenue | €1,200–1,800/tonne | Current market prices (2024–2026) | Low (volatile) |
| Plant Efficiency | 80% utilization | Standard recycling facility assumption | Medium |

### Break-Even Analysis
- **Break-even throughput:** 1,100–1,300 t/year
- **Payback period (1,500t hub):** 5–7 years
- **Target IRR:** 12–18% (infrastructure benchmark)
- **Estimated IRR (1,500t hub):** 14–18% (base case) / 12–14% (if metal prices -20%)

**Status:** ⏳ Needs validation against specific project quotes and metal price volatility index

---

## 8. Regulatory & Policy Data (Issue #3)

### EU Battery Regulation Alignment (Issue #3)

**Regulatory Framework:** EU 2023/1542 (Battery Regulation)

**Key Mongol Regulatory Gaps:**
| Requirement | Mongolia Status | Gap Severity |
|------------|-----------------|--------------|
| EPR System | Developing | Medium |
| Battery Passport | Not implemented | High |
| Carbon Footprint Reporting | Not required | High |
| Recycled Content Targets | Not defined | High |
| Collection Targets | Undefined | High |

**Sources:**
- EU Battery Regulation 2023/1542 official text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542
- Mongolia environmental law (pending review): Contact Ministry of Environment & Tourism
- Policy alignment opportunity: Early compliance positions Mongolia as sustainable industrial actor

**Status:** ⏳ Mongolia regulatory environment review in progress

---

## 9. Data Update & Maintenance Schedule

### Priority Data Validations (Next 90 Days)

| Task | Owner | Target Date | Outcome |
|------|-------|-------------|---------|
| Confirm 2024 EV fleet count | @Shirendev1 | Q2 2026 | Update baseline table; adjust scenarios |
| Obtain official 2023–2025 EV import volumes | @Shirendev1 | Q2 2026 | Refine growth rate estimates |
| Validate battery avg. size assumptions | @Shirendev1 | Q2 2026 | Update MWh stock calculations |
| Get current black mass market price range | @Shirendev1 | Q2 2026 | Stress-test financial model |
| Contact Mongolia Ministry RT for data access | @Shirendev1 | Q2 2026 | Establish ongoing data partnership |

### Annual Refresh Cycle

**Q1 Each Year:**
- Update EV fleet baseline with Ministry of Road & Transport year-end report
- Revise adoption scenarios based on actual growth rate
- Refresh waste projection curves

**Q2:**
- Update metal price assumptions; rerun DCF sensitivity
- Review policy changes (ERP implementation, tariff changes)

**Q3:**
- Cross-check with IEA Global EV Database updates
- Validate pilot collection network data (once operational)

**Q4:**
- Compile annual data summary
- Update this document with new sources & findings

---

## 10. Data Access & Reproduction Notes

### For Reproducibility

1. **EV Fleet Data:** 
   - Source: UNESCAP PDF (linked above) + Direct contact with Ministry RT
   - Format: Annual registration counts (units)
   - Preserved in: `/research/data/ev-fleet-2015-2025.csv` (to be created)

2. **Waste Projections:**
   - Derived from: EV fleet baseline + battery lifespan assumptions
   - Model: Python/Excel script in `/models/waste-projection.py` (to be created)
   - Outputs: Tonnage curves (tonnes/year 2030–2040)

3. **Financial Data:**
   - Sources: Industry benchmarks (multiple journals), current metal prices
   - Model: `/models/dcf-financial-model.xlsx` (to be created)
   - Sensitivity: ±20% metal price, ±30% waste volume

### Contact Protocol for Official Data

**To request Mongolia government data:**

1. **Ministry of Road & Transport:**
   - Email: [TBD - pending contact info]
   - Request: "Annual EV registration and import data 2015–2025"
   - Format: CSV or Excel
   - Timeline: Allow 2–4 weeks for response

2. **National Statistics Office:**
   - Website: https://www.1212.mn/en/
   - Request: Vehicle import/export data by HS code
   - Timeline: Quarterly updates available

3. **Customs Authority:**
   - Website: https://customs.mn/
   - Request: HS 8704.21/31/32 (EV/hybrid vehicles) import logs
   - Format: Aggregate data (unit + value)

---

## 11. Known Data Limitations & Assumptions

### Caveats

1. **Baseline relies heavily on 2023 single year:** Only one officially verified data point before current snapshot (Oct 2025). Pre-2023 estimates are extrapolated.

2. **2024 growth rate uncertain:** Repository projection (+95%) may be optimistic. Actual growth appears ~90% or slower based on 2,011 Oct 2025 count.

3. **Government 2026 target (20,000) not on track:** Only 2 months remain; unlikely to achieve unless dramatic import surge occurs. Use conservative projections.

4. **Second-life reuse rates speculative:** 20–30% range borrowed from European/Chinese pilots; Mongolia-specific data not available.

5. **Financial assumptions lack local market data:** CAPEX/OPEX/revenue figures derived from European benchmarks; Mongolian labor costs, logistics, and power rates may differ significantly.

6. **Regulatory environment in flux:** EU Battery Regulation may evolve; Mongolia policy framework still developing (uncertain timeline for EPR implementation).

---

## 12. References & Further Reading

### Core Documents

- UNESCAP: Current status of Electric vehicles in Mongolia (PDF): https://www.unescap.org/sites/default/d8files/event-documents/Session2.1_Ministry_of_Road_and_Transport.pdf
- EU Battery Regulation 2023/1542: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542
- IEA Global EV Outlook 2024: https://www.iea.org/reports/global-ev-outlook-2024

### Market Analysis (Commercial)

- Mobility Foresights: Mongolia EV Market 2022–2030 (paywall)
- China EV Outlook: Battery specs for imported models (industry databases)

### Government Resources

- Mongolia Ministry of Road & Transport: http://road.mn/
- National Statistics Office: https://www.1212.mn/en/
- Customs General Administration: https://customs.mn/
- Ministry of Environment & Tourism: [TBD - pending]

---

**Document Version:** 1.0  
**Last Updated:** March 2026  
**Maintained By:** @Shirendev1  
**Status:** Active (Under Validation)

Next update cycle: Q2 2026 (after 2024 data confirmation)
