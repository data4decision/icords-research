'use client'
import React, { useState } from 'react'

import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import Tier1Header from '@/components/Tier1Header'
import QuickNavigation from '@/components/QuickNavigation'
import OrganisationDatabase from '@/components/OrganisationDatabase'
import CapstoneTier1 from '@/components/CapstoneTier1'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

const Tier1Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
        <TopNavbar/>
        <Navbar/>
        <Tier1Header/>
        <QuickNavigation/>
        <OrganisationDatabase/>
        {/* <CapstoneTier1/> */}
        <Map/>
        <Footer/>
        </div>
  )
}
      export default Tier1Page

      


// const LS01: Course = { /* ... same as before, already correct */ 
//   code: "LS-01",
//   title: "Organisational Database Design & Development",
//   description: "Equips learners to design, build, and manage databases that serve real organisational needs.",
//   focus: "Advanced schema design, performance tuning, migration planning, and enterprise data modelling.",
//   research: "Designing databases that embed audit trails and version control for longitudinal research.",
//   policyContext: "Designing interoperable databases for cross-ministry data sharing and national statistics.",
//   businessContext: "Enterprise database architecture for multi-branch organisations and financial institutions.",
//   livelihoodsContext: "Multi-site databases for regional development programmes and value chain tracking.",
//   topics: {
//     policy: [
//       "Relational design for government statistical systems",
//       "ER modelling for cross-ministry data sharing",
//       "SQL for national indicator and census data",
//       "Interoperability standards and schema alignment",
//       "Audit trails for public accountability and compliance",
//       "Data migration across government legacy systems",
//       "Version control for regulatory and policy databases",
//       "Open government data publication pipelines",
//       "Backup and recovery for critical national systems",
//       "Stored procedures for automated statistical reporting"
//     ],
//     business: [
//       "Relational database design for enterprise finance systems",
//       "ER modelling for multi-branch organisations",
//       "SQL for transactional and operational reporting",
//       "Schema design and indexing for high-volume commerce",
//       "Database performance tuning in enterprise environments",
//       "Data migration and ETL for ERP systems",
//       "Stored procedures and triggers for business workflows",
//       "Database backup and disaster recovery planning",
//       "Audit trails for financial governance and compliance",
//       "Introduction to NoSQL for unstructured business data"
//     ],
//     livelihoods: [
//       "Relational database design for field programme data",
//       "ER modelling for value chain and beneficiary tracking",
//       "SQL for livelihoods indicators and household surveys",
//       "Multi-site schema design for regional programmes",
//       "Performance tuning for low-bandwidth field environments",
//       "Data migration for community information systems",
//       "Version control for evolving M&E frameworks",
//       "Offline-first database design and sync strategies",
//       "Audit trails for donor compliance and accountability",
//       "Introduction to NoSQL for unstructured field data"
//     ]
//   },
//   assessment: "Redesign a legacy database to support an organisational research programme with governance controls.",
//   tools: "PostgreSQL, Oracle DB, ERwin, Flyway, GitHub, DBeaver, Google Sheets, MySQL",
//   ai: "AI-powered database performance monitoring; automated migration validation tools."
// }

// const LS02: Course = {
//   code: "LS-02",
//   title: "Organisational Data Analytics",
//   description: "Develops the ability to analyse, visualise, and communicate data to drive decisions.",
//   focus: "★ DESCRIPTIVE ANALYTICS MASTERY — Advanced visualisation, sector intelligence, and analytics strategy.",
//   research: "Designing analytics research strategies that produce intelligence products, driving change.",
//   policyContext: "Policy intelligence products: sector briefs, SDG dashboards, national indicator systems.",
//   businessContext: "Advanced business intelligence: competitive analysis, customer lifetime value, and financial forecasting.",
//   livelihoodsContext: "Livelihoods intelligence: food security indices, poverty mapping, programme impact visualisation.",
//   topics: {
//     policy: [
//       "Descriptive statistics for national indicator analysis",
//       "Data wrangling for government administrative datasets",
//       "Exploratory analysis of census and survey data",
//       "Visualisation principles for public policy communication",
//       "SDG dashboard design in Power BI",
//       "KoboToolbox for national survey data collection",
//       "Cross-tabulation for policy segmentation",
//       "Correlation analysis of socioeconomic indicators",
//       "Policy brief writing and evidence communication",
//       "Research ethics in government data use"
//     ],
//     business: [
//       "Descriptive statistics for business performance analysis",
//       "Data wrangling of CRM and transactional datasets",
//       "Exploratory analysis for customer and market insight",
//       "Visualisation for executive and board reporting",
//       "Dashboard design for sales and financial KPIs",
//       "Survey design for customer experience measurement",
//       "Cross-tabulation for market segmentation",
//       "Correlation and regression for commercial forecasting",
//       "Business intelligence report writing and storytelling",
//       "Ethics in commercial customer data analytics"
//     ],
//     livelihoods: [
//       "Descriptive statistics for household and survey data",
//       "Data wrangling for field-collected programme data",
//       "Exploratory analysis of livelihoods and food security data",
//       "Visualisation for donor and community reporting",
//       "Food security and poverty dashboard design",
//       "KoboToolbox for community-level data collection",
//       "Cross-tabulation for beneficiary segmentation",
//       "Correlation analysis of livelihood outcome indicators",
//       "Programme impact report writing for NGO audiences",
//       "Ethics in community and beneficiary data use"
//     ]
//   },
//   assessment: "Develop a sector analytics research strategy structured as a professional research report.",
//   tools: "Python (pandas, matplotlib, seaborn), R/RStudio, Power BI (DAX), Tableau (LOD), SPSS, STATA, KoboToolbox",
//   ai: "AI-powered prescriptive suggestions in BI tools; using LLMs to generate analytical narratives and summaries."
// }

// const LS03: Course = {
//   code: "LS-03",
//   title: "Project Data Management Systems",
//   description: "Develops the ability to design, implement, and lead data management systems within project and programme environments.",
//   focus: "Advanced M&E design, predictive decision-making, governance, data ethics, and stakeholder reporting.",
//   research: "Designing research-grade M&E frameworks with learning loops and knowledge transfer.",
//   policyContext: "Research-grade policy M&E: contribution analysis, theory of change testing, SDG alignment.",
//   businessContext: "Advanced corporate programme governance: risk-adjusted performance models, ESG reporting.",
//   livelihoodsContext: "Multi-site livelihoods M&E: outcome harvesting, most significant change, impact pathways.",
//   topics: {
//     policy: [ /* Add all 10 items from your original content */ 
      // "Results-Based Management for government programmes",
      // "Logical frameworks and results chains for policy delivery",
      // "Theory of change design for public sector interventions",
      // "SMART indicators aligned to SDG and national targets",
      // "Government data collection and administrative reporting tools",
      // "Data quality assurance in national statistical systems",
      // "Stakeholder reporting to ministries and oversight bodies",
      // "Contribution analysis for policy attribution",
      // "Data governance and ethics in public sector contexts",
      // "Knowledge management for policy learning cycles"
//     ],
//     business: [ /* ... */ ],
//     livelihoods: [ /* ... */ ]
//   },
//   assessment: "Design a research-informed M&E framework for a multi-phase project with a knowledge transfer plan.",
//   tools: "DevResults, DHIS2, Salesforce, Power BI, SPSS, MAXQDA, R, Smartsheet",
//   ai: "AI-driven adaptive management tools; predictive M&E dashboards using ML forecasting."
// }

// // Add LS04 similarly (I can send it in next message if needed, but this should fix your current error)

// const LS04: Course = {
//   code: "LS-04",
//   title: "Project Information Systems",
//   description: "Develops the ability to design, implement, and manage information systems that support effective project planning, monitoring, and decision-making.",
//   focus: "Designing and operating Project Information Systems (PIS) at the Descriptive Analytics level.",
//   research: "Designing PIS that generate reliable, descriptive project intelligence.",
//   policyContext: "PIS design for government programme delivery: work plans, scheduling, SDG tracking.",
//   businessContext: "PIS design for commercial projects: budget tracking, milestone management.",
//   livelihoodsContext: "PIS design for development field programmes: beneficiary tracking, donor reporting.",
//   topics: {
//     policy: [
//       "Introduction to Project Information Systems — concepts for government",
//       "PIS for project planning — work plans and resource allocation in public sector",
//       "PIS for monitoring & tracking — milestone tracking for government programmes",
//       "Communication tools for government project teams",
//       "Data management in government PIS",
//       "Dashboard design for ministerial audiences",
//       "Database systems as foundation of government PIS",
//       "Security and access control in public sector PIS",
//       "Integrating PIS with SDG frameworks",
//       "Research ethics in government PIS data use"
//     ],
//     business: [ /* Fill from original content */ ],
//     livelihoods: [ /* Fill from original content */ ]
//   },
//   assessment: "Design a Project Information System for a real project environment with sector-appropriate governance.",
//   tools: "Microsoft Project, Smartsheet, Asana, DHIS2, KoboToolbox, Power BI, Trello",
//   ai: "AI-assisted project scheduling and risk flagging; LLM-powered reporting tools."
// }

