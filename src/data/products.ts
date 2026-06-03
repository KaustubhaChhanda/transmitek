import type { Product } from '../types';

// Propeller Shafts
import shaft1 from '../assets/4-axle.webp';
import shaft2 from '../assets/propeller-cardan-drive-shaft-auto-parts-factory-china-scaled.jpg';
import shaft3 from '../assets/propshaft-transmission-driveline-tail-shaft-factory-china.jpg';

// GDI Pumps
import pump1 from '../assets/GDI-fuel-pump-1-scaled.jpg';
import pump2 from '../assets/transmitek-fuel-pump.jpg';
import pump4 from '../assets/0261520552-hpp2111-300x300.png';
import pump5 from '../assets/F01R00NB32-HPP220A-300x300.jpg';

// Master Cylinders
import master1 from '../assets/pre-filled-clutch-cylinder-scaled.jpg';
import master2 from '../assets/prefilled-clutch-cylinder-1024x1024.jpg';

// Slave Cylinders
import slave1 from '../assets/CSC-Clutch-1024x1024.webp';
import slave2 from '../assets/clutch-release-bearing-1-scaled.jpg';
import slave3 from '../assets/clutch-release-bearing-1-300x300.jpg';

export const products: Product[] = [
  // ── Propeller Shafts ──
  {
    id: 'shaft-4-axle',
    category: 'propeller-shafts',
    name: 'Multi-Axle Propeller Shaft Assembly',
    image: shaft1,
    specifications: [
      'Material: High-strength micro-alloy steel',
      'Dynamic Balancing Standard: ISO 1940 G16 grade',
      'Torque Capacity: Up to 4500 N·m',
      'Torsional Stiffness: ≥ 120 N·m/rad'
    ],
    applications: [
      'Heavy Duty Trucks',
      'Commercial Vehicles (LVC)',
      '4WD Utility Vehicles'
    ],
    partNumbers: ['TS-PS-04A', '26061225-C', '46400-TS800'],
    features: [
      'Reinforced spline sections for extreme torque handling',
      'Pre-lubricated high-temp grease fittings for low maintenance',
      'Double U-joint cardan system for smooth angular transfer'
    ],
    details: 'Specially engineered for high-payload multi-axle applications, providing high torsional strength and dynamic balance precision under extreme workloads.'
  },
  {
    id: 'shaft-cardan-precision',
    category: 'propeller-shafts',
    name: 'Cardan Drive Shaft Assembly',
    image: shaft2,
    specifications: [
      'Tube Diameter: 70mm - 110mm',
      'Max Angle: 15° per joint',
      'Yield Strength: 520 MPa',
      'Surface Treatment: Rust-preventive powder coat'
    ],
    applications: [
      'Rear Wheel Drive Passenger Cars',
      'SUV & Light Trucks',
      'Agricultural Driveline Systems'
    ],
    partNumbers: ['TS-PS-CRD', '27060-3D050', '26011382-A'],
    features: [
      'Precision welded seams using advanced friction welding technology',
      'Coated slip splines to minimize axial friction force',
      '100% dynamic balance verification at high RPM ranges'
    ],
    details: 'Designed to deliver smooth power translation from the gearbox to the rear axle, significantly dampening drivetrain vibration.'
  },
  {
    id: 'shaft-transmission-tail',
    category: 'propeller-shafts',
    name: 'Driveline Tail Shaft Assembly',
    image: shaft3,
    specifications: [
      'Material: High-modulus carbon-steel / aluminum alloy',
      'Max Speed: 8000 RPM',
      'Weight Reduction: 18% compared to standard steel',
      'Fatigue Life: ≥ 1,000,000 load cycles'
    ],
    applications: [
      'Performance Sport Sedans',
      'Light Commercial Vans',
      'Electric Drivetrain Connections'
    ],
    partNumbers: ['TS-PS-TLS', '37100-4A000', '52111890-AB'],
    features: [
      'Reduced rotational mass for improved throttle response',
      'Urethane-encapsulated center support bearings for noise damping',
      'High corrosion resistance for under-vehicle longevity'
    ],
    details: 'Optimized for modern performance setups where reduced weight and high rotational velocity are critical requirements.'
  },

  // ── GDI Fuel Pumps ──
  {
    id: 'gdi-pump-hpp2111',
    category: 'gdi-pumps',
    name: 'High-Pressure Fuel Pump HPP2111',
    image: pump4,
    specifications: [
      'Max Pressure: 250 bar',
      'Flow Rate: 1.15 cc/rev',
      'Piston Diameter: 9.5 mm',
      'Control Valve Type: Electric solenoid actuated'
    ],
    applications: [
      'Direct Injection Gasoline Engines (1.5T - 2.0T)',
      'Euro 6 / EPA Tier 3 Compliant Powertrains'
    ],
    partNumbers: ['0261520552', 'TS-GDI-HP211', 'HPP-2111-B'],
    features: [
      'Ultra-precise internal clearances to prevent leakage at high pressure',
      'Durable DLC (Diamond-Like Carbon) coated plunger piston',
      'Optimized dampening chamber design to reduce fuel pressure pulsations'
    ],
    details: 'Manufactured to OEM specifications, this direct injection pump ensures precise fuel volume delivery and stable spray pressure.'
  },
  {
    id: 'gdi-pump-hpp220a',
    category: 'gdi-pumps',
    name: 'GDI Fuel Pump HPP220A Series',
    image: pump5,
    specifications: [
      'Max Pressure: 220 bar',
      'Flow Rate: 0.95 cc/rev',
      'Operating Temperature: -40°C to 130°C',
      'Actuator Resistance: 0.55 Ω'
    ],
    applications: [
      'EcoBoost & Ecotec Turbo Engines',
      'Premium Compact Passenger Vehicles'
    ],
    partNumbers: ['F01R00NB32', 'TS-GDI-HP220', 'HPP-220A'],
    features: [
      'Highly integrated design incorporating pressure sensor feedback',
      'Resistant to high-ethanol fuel blends (E85)',
      'Low mechanical noise profile (acoustic encapsulation)'
    ],
    details: 'A compact high-pressure direct injection solution tailored for modern downsized gasoline engines, reducing emissions and optimizing fuel economy.'
  },
  {
    id: 'gdi-pump-factory-series',
    category: 'gdi-pumps',
    name: 'Industrial GDI Fuel Pump Assembly',
    image: pump1,
    specifications: [
      'Max Pressure: 300 bar',
      'Flow Rate: 1.35 cc/rev',
      'Housing: Stainless steel forgery (SUS316)',
      'Plunger Stroke: 8.0 mm'
    ],
    applications: [
      'High-displacement V6/V8 direct injection engines',
      'Performance automotive tuning'
    ],
    partNumbers: ['TS-GDI-HP300', '12641847-OEM', '0261520302'],
    features: [
      'Forged stainless steel head for enhanced burst-pressure margin',
      'Advanced spring coil fatigue resistance testing (10M cycles)',
      'Integrated pressure relief valve preset at 320 bar'
    ],
    details: 'Heavy-duty GDI fuel pump engineered for high-performance vehicles, offering premium flow rates under sustained high-rpm loads.'
  },
  {
    id: 'gdi-pump-compact',
    category: 'gdi-pumps',
    name: 'Dual-Stage High Pressure GDI Pump',
    image: pump2,
    specifications: [
      'Max Pressure: 200 bar',
      'Fuel Compatibility: Gasoline, E20, E85',
      'Weight: 840g',
      'Electrical Connector: 2-pin sealed automotive'
    ],
    applications: [
      'Hybrid Powertrain Fuel Delivery systems',
      'Naturally Aspirated Direct Injection engines'
    ],
    partNumbers: ['TS-GDI-HP200', '0261520140', '06H127025Q'],
    features: [
      'Optimized internal volume to ensure fast cold-start pressure buildup',
      'Friction-welded stainless structural sleeve',
      'Lower driving force required, improving auxiliary belt fuel efficiency'
    ],
    details: 'Engineered for fast pressure response, crucial for multi-start stop cycles in hybrid and micro-hybrid vehicles.'
  },

  // ── Clutch Master Cylinders ──
  {
    id: 'master-clutch-prefilled',
    category: 'master-cylinders',
    name: 'Pre-Filled Clutch Master Cylinder Assembly',
    image: master1,
    specifications: [
      'Bore Size: 15.87 mm (5/8 in)',
      'Stroke: 32 mm',
      'Fluid Type: DOT 3 / DOT 4 compatible',
      'Body Material: High-grade engineering plastic'
    ],
    applications: [
      'Passenger Cars (Sedans & Hatchbacks)',
      'SUV Clutch Actuation Systems'
    ],
    partNumbers: ['TS-CMC-PF15', '53005542-Jeep', 'FTE-KG150'],
    features: [
      'Pre-filled and pre-bled from the factory for drop-in installation',
      'Premium EPDM rubber seals for maximum fluid resistance and zero leaks',
      'Self-adjusting pushrod mechanism to simplify installation alignment'
    ],
    details: 'Reduces workshop assembly times by up to 50% by arriving pre-bled and pre-filled with high-grade hydraulic fluid, eliminating airlock risks.'
  },
  {
    id: 'master-clutch-precision',
    category: 'master-cylinders',
    name: 'Aluminum Clutch Master Cylinder',
    image: master2,
    specifications: [
      'Bore Size: 19.05 mm (3/4 in)',
      'Max Operating Pressure: 12 MPa',
      'Piston Material: Hard-anodized aluminum',
      'Body Finish: Corrosion-resistant bead blasted'
    ],
    applications: [
      'Light Commercial Trucks',
      'Off-road Utility Vehicles'
    ],
    partNumbers: ['TS-CMC-AL19', '31410-60600', '0C6-141-465A'],
    features: [
      'Precision honed cylinder wall to reduce internal seal friction',
      'Heavy duty piston return spring guaranteeing responsive clutch pedal return',
      'Reinforced mounting flange prevents flex under high pedal pressures'
    ],
    details: 'Constructed from lightweight forged aluminum, this cylinder delivers high mechanical efficiency and stands up to aggressive clutch shifting.'
  },

  // ── Clutch Slave Cylinders ──
  {
    id: 'slave-clutch-csc',
    category: 'slave-cylinders',
    name: 'Concentric Slave Cylinder (CSC)',
    image: slave1,
    specifications: [
      'Bore Size: 24.0 mm',
      'Release Bearing Size: 40 mm (ID)',
      'Body Material: Glass-fiber reinforced polyamide',
      'Seal: Specialized PTFE-lip structural seal'
    ],
    applications: [
      'Modern Manual Transmission Transaxles',
      'Dual-Clutch Gearboxes (DCT)'
    ],
    partNumbers: ['TS-CSC-24', '510007310', '3182500230'],
    features: [
      'Combines slave cylinder and clutch release bearing into one unit',
      'Reduced overall system friction for softer, smoother pedal effort',
      'Fitted with premium high-speed release bearing'
    ],
    details: 'Replaces the traditional clutch fork and release bearing setup, centering pressure directly on the diaphragm spring for linear clutch release.'
  },
  {
    id: 'slave-clutch-release',
    category: 'slave-cylinders',
    name: 'Hydraulic Clutch Slave Cylinder',
    image: slave2,
    specifications: [
      'Bore Size: 20.64 mm (13/16 in)',
      'Body Material: Cast iron / aluminum',
      'Bleeder Valve: Solid brass M8',
      'Dust Boot Material: Premium weather-resistant Neoprene'
    ],
    applications: [
      'Classic Passenger Vehicles',
      'Heavy Utility Trucks'
    ],
    partNumbers: ['TS-CSC-RL20', '31470-35070', 'AIC-540851'],
    features: [
      'Heavy cast housing built to withstand under-chassis debris impact',
      'High-grade brass bleeder screw for reliable hydraulic bleeding',
      'Internal spring ensures contact between pushrod and clutch fork'
    ],
    details: 'Traditional external hydraulic slave cylinder built to strict dimensional specifications for seamless fitment on classic manual gearboxes.'
  },
  {
    id: 'slave-clutch-heavy-duty',
    category: 'slave-cylinders',
    name: 'Heavy-Duty Clutch Release Bearing Cylinder',
    image: slave3,
    specifications: [
      'Bore Size: 22.2 mm',
      'Operating Cycles: Tested to 2,000,000 actuations',
      'Max Force: 2800 N',
      'Body Material: Forged aluminum'
    ],
    applications: [
      'Medium and Heavy Commercial Trucks',
      'High-torque performance clutch kits'
    ],
    partNumbers: ['TS-CSC-HD22', '3182500002', '510015510'],
    features: [
      'High fatigue life under continuous industrial commercial operation',
      'Double lip sealing technology to withstand grit, moisture, and road salts',
      'Low axial play layout ensuring rapid shifting cycles'
    ],
    details: 'Built specifically for high-stress freight and commercial logistics vehicles, delivering reliability over millions of cycles.'
  }
];
