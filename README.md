# 📡 Wireless and Mobile Networks Calculator

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**🚀 A powerful, comprehensive online calculator for wireless and mobile network engineering calculations**

[🌟 Features](#-features) • [🔧 Installation](#-installation) • [💡 Usage](#-usage) • [📚 Documentation](#-documentation) • [🤝 Contributing](#-contributing)

</div>

---

## 🌟 Features

### 🎯 **Core Calculation Modules**

| Module | Description | Key Parameters |
|--------|-------------|----------------|
| **📊 Signal Processing** | Calculate bit rates, sampling frequencies, and encoding parameters | Bandwidth, Quantizer bits, Compression rates |
| **📡 OFDM Analysis** | Resource block calculations for modern wireless systems | Subcarrier spacing, OFDM symbols, Modulation types |
| **⚡ Power Link Budget** | Comprehensive power transmission calculations | Path loss, Antenna gains, Noise figures |
| **🔄 Multiple Access** | Throughput analysis for CSMA, ALOHA protocols | Frame sizes, Propagation delays, Access methods |
| **🏢 Cellular Design** | Complete cellular system design and optimization | Coverage area, Traffic load, SIR requirements |

### ✨ **Advanced Capabilities**

- **🧮 Multi-Unit Support**: Automatic unit conversions (Hz/KHz/MHz, dB/dBm/Watts, etc.)
- **📈 Real-time Calculations**: Instant results with dynamic form validation
- **🎨 Interactive UI**: Collapsible sections with intuitive navigation
- **📋 Comprehensive Results**: Detailed tabular output with all intermediate values
- **🔬 Engineering Accuracy**: Implements industry-standard formulas and models

---

## 🔧 Installation

### **Quick Start** ⚡

```bash
# Clone the repository
git clone https://github.com/yourusername/wireless-networks-calculator.git

# Navigate to project directory
cd wireless-networks-calculator

# Open in your preferred web server or browser
# No dependencies required - it's pure vanilla web technologies!
```

### **Local Development** 💻

1. **Download** or clone this repository
2. **Open** `index.html` in any modern web browser
3. **Start calculating** - No server setup required!

### **Web Server Deployment** 🌐

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

---

## 💡 Usage

### **1. Signal Processing & Encoding** 📊

Calculate fundamental digital signal processing parameters:

- **Sampling Frequency**: Based on Nyquist theorem (2 × Bandwidth)
- **Quantization Levels**: 2^(number of bits)
- **Bit Rates**: Through encoding chain (Source → Channel → Interleaver)

**Example**: For a 10 KHz bandwidth signal with 8-bit quantization
```
Sampling Frequency = 20 KHz
Quantization Levels = 256
Source Encoder Rate = 160 Kbps
```

### **2. OFDM Resource Block Analysis** 📡

Modern 4G/5G wireless systems calculations:

- **Resource Elements**: Basic OFDM building blocks
- **OFDM Symbols**: Time-domain structures
- **Resource Blocks**: LTE/5G scheduling units
- **Maximum Throughput**: Peak data rates

**Supported Modulations**: QPSK, 16-QAM, 64-QAM, 256-QAM, 1024-QAM

### **3. RF Link Budget Calculator** ⚡

Comprehensive power analysis for wireless links:

```
Pr = Pt + Gt + Gr - Lp - Lf - Lo - Fmargin - Linkmargin
```

**Parameters**:
- Path Loss, Antenna Gains (Transmitter/Receiver)
- Feed Losses, Fading Margins, Link Margins
- Noise Temperature, Amplifier Gains
- Modulation-specific SNR requirements

### **4. Multiple Access Protocols** 🔄

Throughput analysis for various MAC protocols:

| Protocol | Efficiency Formula |
|----------|-------------------|
| **Pure ALOHA** | S = G × e^(-2G) |
| **Slotted ALOHA** | S = G × e^(-G) |
| **CSMA** | Advanced collision avoidance models |

### **5. Cellular System Design** 🏢

Complete cellular network planning:

- **Coverage Analysis**: Maximum cell radius based on link budget
- **Capacity Planning**: Traffic load distribution (Erlang models)
- **Interference Management**: Signal-to-Interference Ratio (SIR)
- **Frequency Reuse**: Cluster size optimization

**Advanced Features**:
- Hexagonal cell geometry calculations
- Erlang B/C traffic models
- Co-channel interference analysis

---

## 📚 Technical Documentation

### **Mathematical Models**

#### Path Loss Model
```javascript
// Free space path loss
L = 20 * log10(4π × d × f / c)

// Simplified power link budget
Pr = Pt + Gt + Gr - Lp - Losses + Margins
```

#### Cellular Interference
```javascript
// Co-channel reuse distance
D = √(3N) × R
// Where N = cluster size, R = cell radius
```

#### OFDM Calculations
```javascript
// Resource elements per symbol
RE = Bandwidth / Subcarrier_Spacing

// Bits per resource element
Bits_RE = log2(Modulation_Order)
```

### **Supported Units**

| Parameter Type | Units |
|----------------|-------|
| **Frequency** | Hz, KHz, MHz |
| **Power** | Watts, dB, dBm, µW |
| **Data Rate** | bps, Kbps, Mbps |
| **Distance** | m, Km |
| **Time** | sec, ms, µs |
| **Area** | m², Km² |

---

## 🎨 User Interface

### **Responsive Design** 📱
- **Desktop**: Full-featured interface with side-by-side input/output
- **Mobile**: Adaptive layout for smaller screens
- **Tablet**: Optimized for touch interactions

### **Interactive Elements** 🖱️
- **Collapsible Sections**: Organized by calculation type
- **Real-time Validation**: Input error prevention
- **Dynamic Results**: Live updating calculations
- **Professional Styling**: Clean, modern interface

---

## 🔬 Engineering Applications

### **Telecommunications Engineering** 📞
- RF link design and optimization
- Cellular network planning
- Signal processing analysis

### **Academic Research** 🎓
- Wireless communication studies
- Protocol performance analysis
- System modeling and simulation

### **Industry Applications** 🏭
- Network deployment planning
- Performance optimization
- Standards compliance testing

---

## 🚀 Advanced Features

### **Error Handling** ⚠️
- Input validation and sanitization
- Mathematical overflow protection
- User-friendly error messages

### **Calculation Engine** 🧠
- Optimized JavaScript algorithms
- IEEE floating-point precision
- Comprehensive unit conversions

### **Extensibility** 🔧
- Modular code architecture
- Easy addition of new calculations
- Customizable parameter sets

---

## 🤝 Contributing

We welcome contributions from the wireless engineering community!

### **Development Setup** 👩‍💻

```bash
# Fork the repository
git fork https://github.com/yourusername/wireless-networks-calculator.git

# Create feature branch
git checkout -b feature/new-calculation

# Make changes and test
# Add your improvements to the calculation modules

# Submit pull request
git push origin feature/new-calculation
```

### **Contribution Areas** 🎯
- **New Calculation Modules**: 5G NR, WiFi 6E, etc.
- **UI Improvements**: Better visualizations, charts
- **Mobile Optimization**: Enhanced responsive design
- **Documentation**: Technical guides, examples
- **Testing**: Unit tests, validation cases

---

## 📈 Roadmap

### **Upcoming Features** 🔮
- **📊 Graphical Visualizations**: Interactive charts and plots
- **💾 Export Functionality**: PDF reports, CSV data export
- **🔄 Batch Processing**: Multiple calculations at once
- **📱 Mobile App**: Native iOS/Android versions
- **🌐 API Integration**: RESTful calculation services

### **Version History** 📝
- **v1.0.0**: Initial release with core calculations
- **v1.1.0**: Enhanced UI and mobile support (Planned)
- **v2.0.0**: Advanced 5G calculations (Planned)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **Open Source** 💖
This calculator is built for the engineering community. Feel free to use, modify, and distribute according to the MIT license terms.

---

## 👥 Authors & Acknowledgments

### **Core Development Team** 👨‍💻
- **Lead Developer**: Wireless Engineering Specialist
- **UI/UX Designer**: Frontend Developer
- **Technical Advisor**: RF Engineering Expert

### **Special Thanks** 🙏
- Telecommunications engineering community
- Open source contributors
- Academic institutions and research labs

---

## 📞 Support & Contact

### **Getting Help** 🆘
- **📧 Email**: support@wireless-calculator.com
- **💬 Discussions**: GitHub Discussions tab
- **🐛 Bug Reports**: GitHub Issues
- **💡 Feature Requests**: GitHub Issues with enhancement label

### **Professional Services** 💼
For custom calculations, training, or enterprise deployments:
- **🏢 Enterprise Support**: Available for commercial use
- **🎓 Training Services**: Workshops and tutorials
- **🔧 Custom Development**: Tailored solutions

---

<div align="center">

**⭐ Star this repository if you find it useful! ⭐**

**🔧 Built with passion for wireless engineering excellence 🔧**

**📡 Empowering the next generation of wireless networks 📡**

---

*This project is maintained by wireless engineering professionals and is continuously updated with the latest industry standards and practices.*

</div>
