import React, { useState } from 'react';
import { motion } from 'framer-motion';
import wiseLifeLogo from "../assets/logo/wiselife-logo.png";
import PUR from '../assets/bussiness/PUR.png';
import B2B from '../assets/bussiness/B2B.png';
import Network from '../assets/bussiness/network.png';
import Support from '../assets/bussiness/support.png';
import { Shield, User, Zap, Lightbulb, Award } from "lucide-react";
import './Business.css';

// --- Data ---
const activities = [
    { id: 1, text: "AUTHORISED DISTRIBUTION OF PURE (PUR ENERGY PUBLIC LTD) PRODUCTS.", icon: PUR, styleClass: "bg-blue" },
    { id: 2, text: "B2B DISTRIBUTION OF ELECTRIC VEHICLES, ENERGY STORAGE SOLUTIONS, AND ALLIED GREEN-TECH INNOVATIONS.", icon: B2B, styleClass: "bg-teal" },
    { id: 3, text: "NETWORK DEVELOPMENT AND SUPPORT FOR DEALERS AND SUB-DISTRIBUTORS.", icon: Network, styleClass: "bg-indigo" },
    { id: 4, text: "AFTER-SALES SERVICES AND TECHNICAL TRAINING SUPPORT.", icon: Support, styleClass: "bg-orange" },
];

const coreModules = [
    {
        id: 1,
        title: "INTEGRITY & TRUST",
        color: "#f97316", // Orange
        icon: <Shield size={24} />, 
        details: ["Transparent Business Practices", "Ethical Data Handling", "Secure Transactions"]
    },
    {
        id: 2,
        title: "INNOVATION", // Moved up to match image order usually, but kept ID structure
        color: "#f1c40f", // Updated to Yellow (to match image Innovation color)
        icon: <Lightbulb size={24} />, 
        details: ["Cutting-edge Technology", "Creative Problem Solving", "Continuous Improvement"]
    },
    {
        id: 3,
        title: "CUSTOMER CENTRICITY",
        color: "#06b6d4", // Cyan/Blue
        icon: <User size={24} />, 
        details: ["User-First Design", "24/7 Dedicated Support", "Personalized Experiences"]
    },
    {
        id: 4,
        title: "RELIABLE PARTNERSHIPS",
        color: "#9b59b6", // Updated to Purple (to match image Partnerships color)
        icon: <Award size={24} />, 
        details: ["Long-term Collaboration", "Mutual Growth Strategies", "Trusted Vendor Network"]
    },
    {
        id: 5,
        title: "SUSTAINABILITY",
        color: "#2ecc71", // Updated to Green (to match image Sustainability color)
        icon: <Zap size={24} />, 
        details: ["Eco-friendly Solutions", "Resource Optimization", "Scalable Infrastructure"]
    },
];

// --- Animations ---

// Animation for list container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
};

// Animation for each list item
const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0, opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    },
};

// Animation for vertical growing line
const lineVariants = {
    hidden: { height: "0%" },
    visible: {
        height: "100%",
        transition: { duration: 1.5, ease: "easeInOut" }
    }
};

function Business() {
    return (
        <div className="container">
            <div className="content-wrapper">

                {/* SECTION 1: KEY BUSINESS ACTIVITIES */}
                <div className="section-spacing">
                    <motion.h2
                        className="title"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Key Business Activities
                    </motion.h2>

                    <div className="list-section">
                        <div className="vertical-line-container">
                            <motion.div
                                className="vertical-line"
                                variants={lineVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            />
                        </div>

                        <motion.div
                            className="activities-list"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {activities.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "#ffffff", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    className="activity-card"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className={`icon-wrapper ${item.styleClass}`}
                                    >
                                        <img src={item.icon} alt="icon" style={{ width: 50, height: 50 }} />
                                    </motion.div>
                                    <p className="card-text">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* --- SECTION 2: OUR CORE --- */}
                <div className="section-spacing module-section">
                    <motion.div
                        className="center-text-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="title">OUR CORE</h2>
                        <p className="subtitle">Everything you need to manage your workflow</p>
                    </motion.div>

                    <motion.div
                        className="core-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {coreModules.map((module) => (
                            <motion.div
                                key={module.id}
                                className="core-card"
                                variants={itemVariants}
                                style={{ '--card-color': module.color }}
                            >
                                {/* 1. Visible Card Content */}
                                <div
                                    className="core-icon-box"
                                    style={{ backgroundColor: `${module.color}15`, color: module.color }}
                                >
                                    {module.icon}
                                </div>

                                <h3 className="core-title">{module.title}</h3>

                                {/* 2. Hidden Popup Content */}
                                <div className="info-popup" style={{ borderTop: `4px solid ${module.color}` }}>
                                    <h5 style={{ color: module.color }}>{module.title}</h5>
                                    <ul>
                                        {module.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>


            </div>
        </div>
    );
}

export default Business;