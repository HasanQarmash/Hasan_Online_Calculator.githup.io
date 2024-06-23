document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

function calculateBitRate() {
  const bandwidth = parseFloat(document.getElementById('bandwidth').value);
  const quantizerBits = parseFloat(document.getElementById('quantizerBits').value);
  const compressionRate = parseFloat(document.getElementById('compressionRate').value);
  const channelEncoderRate = parseFloat(document.getElementById('channelEncoderRate').value);
  const interleaverBits = parseFloat(document.getElementById('interleaverBits').value);

  if (isNaN(bandwidth) || isNaN(quantizerBits) || isNaN(compressionRate) || isNaN(channelEncoderRate) || isNaN(interleaverBits)) {
    alert("Please enter valid numbers");
    return;
  }
  if (interleaverBits % 2 != 0) {
    alert("Please in interleaver bit  enter number Multiples 2 ");
    return;
  }

  // Sample calculation logic (replace with actual formulas)
  const samplingFrequency = 2 * bandwidth;
  const quantizationLevels = Math.pow(2, quantizerBits);
  const sourceEncoderRate = samplingFrequency * quantizerBits * compressionRate;
  const channelEncoderRateOutput = sourceEncoderRate / channelEncoderRate;
  const interleaverRate = channelEncoderRateOutput;

  document.getElementById('samplingFrequency').textContent = samplingFrequency.toFixed(2);
  document.getElementById('quantizationLevels').textContent = quantizationLevels.toFixed(2);
  document.getElementById('sourceEncoderRate').textContent = sourceEncoderRate.toFixed(2);
  document.getElementById('channelEncoderRateOutput').textContent = channelEncoderRateOutput.toFixed(2);
  document.getElementById('interleaverRate').textContent = interleaverRate.toFixed(2);

  document.getElementById('bitRateResult').style.display = 'block';
}

function calculateResourceBlock() {

  const rbBandwidth = parseFloat(document.getElementById('rbBandwidth').value) * Math.pow(10, parseInt(document.getElementById('UnitrbBandwidth').value));
  const subcarrierSpacing = parseFloat(document.getElementById('subcarrierSpacing').value) * Math.pow(10, parseInt(document.getElementById('UnitsubcarrierSpacing').value));
  const ofdmSymbols = parseFloat(document.getElementById('ofdmSymbols').value);
  const rbDuration = parseFloat(document.getElementById('rbDuration').value) * Math.pow(10, parseInt(document.getElementById('UnitrbDuration').value));
  const parallelResourceBlock = parseInt(document.getElementById('parallelResourceBlock').value);
  const modulationType = parseInt(document.getElementById('modulationType').value);
  const UnitQus2RbDuration = 1 /*Math.pow(10, parseInt(document.getElementsByName('UnitrbDuration').value));*/

  if (isNaN(rbBandwidth) || isNaN(subcarrierSpacing) || isNaN(ofdmSymbols) || isNaN(rbDuration) || isNaN(modulationType)) {
    alert("Please enter valid numbers" + subcarrierSpacing + rbBandwidth + ofdmSymbols + odulationType + rbDuration);
    return;
  }

  if (rbBandwidth % subcarrierSpacing !== 0) {
    alert("The quotient of bandwidth and subcarrier spacing must be an integer" + subcarrierSpacing + rbBandwidth);
    return;
  }


  const numSubcarriers = rbBandwidth / subcarrierSpacing;
  const bitsPerResourceElement = Math.log2(modulationType);
  const bitsPerOfdmSymbol = bitsPerResourceElement * numSubcarriers;
  const bitsPerResourceBlock = bitsPerOfdmSymbol * ofdmSymbols;
  const maxTransmissionRate = parallelResourceBlock * bitsPerResourceBlock / (UnitQus2RbDuration * rbDuration);

  document.getElementById('bitsPerResourceElement').textContent = bitsPerResourceElement.toFixed(2);
  document.getElementById('bitsPerOfdmSymbol').textContent = bitsPerOfdmSymbol.toFixed(2);
  document.getElementById('bitsPerResourceBlock').textContent = bitsPerResourceBlock.toFixed(2);
  document.getElementById('maxTransmissionRate').textContent = maxTransmissionRate.toFixed(2);

  document.getElementById('resourceBlockResult').style.display = 'block';
}

/*                                                        */
function DesignCellular() {

  const rbBandwidth = parseFloat(document.getElementById('rbBandwidth').value) * Math.pow(10, parseInt(document.getElementById('UnitrbBandwidth').value));
  const subcarrierSpacing = parseFloat(document.getElementById('subcarrierSpacing').value) * Math.pow(10, parseInt(document.getElementById('UnitsubcarrierSpacing').value));
  const ofdmSymbols = parseFloat(document.getElementById('ofdmSymbols').value);
  const rbDuration = parseFloat(document.getElementById('rbDuration').value) * Math.pow(10, parseInt(document.getElementById('UnitrbDuration').value));
  const parallelResourceBlock = parseInt(document.getElementById('parallelResourceBlock').value);
  const modulationType = parseInt(document.getElementById('modulationType').value);
  const UnitQus2RbDuration = 1 /*Math.pow(10, parseInt(document.getElementsByName('UnitrbDuration').value));*/

  if (isNaN(rbBandwidth) || isNaN(subcarrierSpacing) || isNaN(ofdmSymbols) || isNaN(rbDuration) || isNaN(modulationType)) {
    alert("Please enter valid numbers" + subcarrierSpacing + rbBandwidth + ofdmSymbols + odulationType + rbDuration);
    return;
  }

  if (rbBandwidth % subcarrierSpacing !== 0) {
    alert("The quotient of bandwidth and subcarrier spacing must be an integer" + subcarrierSpacing + rbBandwidth);
    return;
  }


  const numSubcarriers = rbBandwidth / subcarrierSpacing;
  const bitsPerResourceElement = Math.log2(modulationType);
  const bitsPerOfdmSymbol = bitsPerResourceElement * numSubcarriers;
  const bitsPerResourceBlock = bitsPerOfdmSymbol * ofdmSymbols;
  const maxTransmissionRate = parallelResourceBlock * bitsPerResourceBlock / (UnitQus2RbDuration * rbDuration);

  document.getElementById('bitsPerResourceElement').textContent = bitsPerResourceElement.toFixed(2);
  document.getElementById('bitsPerOfdmSymbol').textContent = bitsPerOfdmSymbol.toFixed(2);
  document.getElementById('bitsPerResourceBlock').textContent = bitsPerResourceBlock.toFixed(2);
  document.getElementById('maxTransmissionRate').textContent = maxTransmissionRate.toFixed(2);

  document.getElementById('resourceBlockResult').style.display = 'block';
}




function calculateBitRate() {
  const bandwidth = parseFloat(document.getElementById('bandwidth').value);
  const quantizerBits = parseFloat(document.getElementById('quantizerBits').value);
  const compressionRate = parseFloat(document.getElementById('compressionRate').value);
  const channelEncoderRate = parseFloat(document.getElementById('channelEncoderRate').value);
  const interleaverBits = parseFloat(document.getElementById('interleaverBits').value);

  if (isNaN(bandwidth) || isNaN(quantizerBits) || isNaN(compressionRate) || isNaN(channelEncoderRate) || isNaN(interleaverBits)) {
    alert("Please enter valid numbers");
    return;
  }
  if (interleaverBits % 2 != 0) {
    alert("Please in interleaver bit  enter number Multiples 2 ");
    return;
  }

  // Sample calculation logic (replace with actual formulas)
  const samplingFrequency = 2 * bandwidth;
  const quantizationLevels = Math.pow(2, quantizerBits);
  const sourceEncoderRate = samplingFrequency * quantizerBits * compressionRate;
  const channelEncoderRateOutput = sourceEncoderRate / channelEncoderRate;
  const interleaverRate = channelEncoderRateOutput;

  document.getElementById('samplingFrequency').textContent = samplingFrequency.toFixed(2);
  document.getElementById('quantizationLevels').textContent = quantizationLevels.toFixed(2);
  document.getElementById('sourceEncoderRate').textContent = sourceEncoderRate.toFixed(2);
  document.getElementById('channelEncoderRateOutput').textContent = channelEncoderRateOutput.toFixed(2);
  document.getElementById('interleaverRate').textContent = interleaverRate.toFixed(2);

  document.getElementById('bitRateResult').style.display = 'block';
}

function calculateResourceBlock() {

  const rbBandwidth = parseFloat(document.getElementById('rbBandwidth').value) * Math.pow(10, parseInt(document.getElementById('UnitrbBandwidth').value));
  const subcarrierSpacing = parseFloat(document.getElementById('subcarrierSpacing').value) * Math.pow(10, parseInt(document.getElementById('UnitsubcarrierSpacing').value));
  const ofdmSymbols = parseFloat(document.getElementById('ofdmSymbols').value);
  const rbDuration = parseFloat(document.getElementById('rbDuration').value) * Math.pow(10, parseInt(document.getElementById('UnitrbDuration').value));
  const parallelResourceBlock = parseInt(document.getElementById('parallelResourceBlock').value);
  const modulationType = parseInt(document.getElementById('modulationType').value);
  const UnitQus2RbDuration = 1 /*Math.pow(10, parseInt(document.getElementsByName('UnitrbDuration').value));*/

  if (isNaN(rbBandwidth) || isNaN(subcarrierSpacing) || isNaN(ofdmSymbols) || isNaN(rbDuration) || isNaN(modulationType)) {
    alert("Please enter valid numbers" + subcarrierSpacing + rbBandwidth + ofdmSymbols + modulationType + rbDuration);
    return;
  }

  if (rbBandwidth % subcarrierSpacing !== 0) {
    alert("The quotient of bandwidth and subcarrier spacing must be an integer");
    return;
  }


  const numSubcarriers = rbBandwidth / subcarrierSpacing;
  const bitsPerResourceElement = Math.log2(modulationType);
  const bitsPerOfdmSymbol = bitsPerResourceElement * numSubcarriers;
  const bitsPerResourceBlock = bitsPerOfdmSymbol * ofdmSymbols;
  const maxTransmissionRate = parallelResourceBlock * bitsPerResourceBlock / (UnitQus2RbDuration * rbDuration);

  document.getElementById('bitsPerResourceElement').textContent = bitsPerResourceElement.toFixed(2);
  document.getElementById('bitsPerOfdmSymbol').textContent = bitsPerOfdmSymbol.toFixed(2);
  document.getElementById('bitsPerResourceBlock').textContent = bitsPerResourceBlock.toFixed(2);
  document.getElementById('maxTransmissionRate').textContent = maxTransmissionRate.toFixed(2);

  document.getElementById('resourceBlockResult').style.display = 'block';
}

/*                                                        */
function qus3() {

  const f = parseFloat(document.getElementById('Frequency').value);
  const r = parseFloat(document.getElementById('DataRate').value);

  const Lp = convertToDb(parseFloat(document.getElementById('PathLoss').value), parseInt(document.getElementById('UnitPathLoss').value));
  const Gt = convertToDb(parseFloat(document.getElementById('Gt').value), parseInt(document.getElementById('UnitGt').value));
  const Gr = convertToDb(parseFloat(document.getElementById('Gr').value), parseInt(document.getElementById('UnitGr').value));
  const Lf = convertToDb(parseFloat(document.getElementById('Lf').value), parseInt(document.getElementById('UnitLf').value));
  const Linkmargin = convertToDb(parseFloat(document.getElementById('Linkmargin').value), parseInt(document.getElementById('UnitLinkmargin').value));
  const Fmargin = convertToDb(parseFloat(document.getElementById('Fmargin').value), parseInt(document.getElementById('UnitFmargin').value));
  const otherLoss = convertToDb(parseFloat(document.getElementById('Lo').value), parseInt(document.getElementById('UnitLo').value));
  const Ar = convertToDb(parseFloat(document.getElementById('Ar').value), parseInt(document.getElementById('UnitAr').value));
  const At = parseFloat(document.getElementById('At').value);
  const NoiseTotal = convertToDb(parseFloat(document.getElementById('NT').value), parseInt(document.getElementById('UnitNT').value));
  const temp = parseFloat(document.getElementById('Temperature').value) + parseInt(document.getElementById('UnitTemp').value);
  const ModType = parseInt(document.getElementById('ModulationType').value);
  const bitErrorRate = parseInt(document.getElementById('BitErorrRate').value);



  /* if (isNaN(At)) {
     At = 1;
   }*/

  if (isNaN(Lp) || isNaN(f) || isNaN(Gt) || isNaN(Gr) || isNaN(r) || isNaN(Lf) || isNaN(Linkmargin) || isNaN(Fmargin) || isNaN(otherLoss) || isNaN(Ar) || isNaN(At) || isNaN(temp) || isNaN(NoiseTotal) || isNaN(ModType)) {
    alert("Please enter valid numbers");
    return;
  }

  let EbN0 = [
    [5.5, 8.5, 11.5],  // BPSK/QPSK
    [8.0, 12, 14.5], // 8-PSK
    [11.0, 14.2, 17.5] // 16-PSK
  ];


  const PowerRecive = Linkmargin + (10 * Math.log10(1.38 * Math.pow(10, -23))) + (10 * Math.log10(temp)) + (10 * Math.log10(r)) + NoiseTotal + EbN0[ModType][bitErrorRate];

  alert("Linkmargin " + EbN0[ModType][bitErrorRate] + (10 * Math.log10(1.38 * Math.pow(10, -23))) + (10 * Math.log10(r)) + Linkmargin);
  const PowerTransmitt = PowerRecive + Lp + Lf + Linkmargin - Gt - Gr - At - Ar;


  document.getElementById('PowerTransmitted').textContent = PowerTransmitt.toFixed(2);


  document.getElementById('qus3').style.display = 'block';
}

const convertToDb = (value, unit) => {
  switch (unit) {
    case 1: // dB
      return value;
    case 0: // watt
      return 10 * Math.log10(value * 1000); // Convert watt to dB
    case 2: // dBm
      return value + 30; // Convert dBm to dB

    case 3: // µ watts
      return 10 * Math.log10(value * Math.pow(10, -6) * 1000); // Convert dBm to dB
    default:
      return null;
  }
};


function qus4() {


  const CSMA = parseInt(document.getElementById('CSMA').value);;
  const TransmissionBandwidth = convertToMeterOrNormalRate(parseFloat(document.getElementById('TransmissionBandwidth').value), parseInt(document.getElementById('UnitTransmissionBandwidth').value));
  const τ = convertToMeterOrNormalRate(parseFloat(document.getElementById('τ').value), parseInt(document.getElementById('Unitτ').value));
  const FrameSize = convertToMeterOrNormalRate(parseFloat(document.getElementById('FrameSize').value), parseInt(document.getElementById('UnitFrameSize').value));
  const FrameRate = convertToMeterOrNormalRate(parseFloat(document.getElementById('FrameRate').value), parseInt(document.getElementById('UnitFrameRate').value));





  if (isNaN(CSMA) || isNaN(TransmissionBandwidth) || isNaN(τ) || isNaN(FrameSize) || isNaN(FrameRate)) {
    alert("Please enter valid numbers");
    return;
  }



  const period = FrameSize / TransmissionBandwidth;
  const alpha = τ / period;
  const G = FrameRate * period;
  const Sth = ThrophtCalc(period, G, alpha, CSMA) * 100;




  document.getElementById('Throughput').textContent = Sth.toFixed(10);


  document.getElementById('qus4').style.display = 'block';
}

const convertToMeterOrNormalRate = (value, unit) => {
  switch (unit) {
    case 1: // m
      return value;
    case 0: // k
      return value * Math.pow(10, 3);
    case 2: // M
      return value * Math.pow(10, 6);
    case 3: // micro
      return value * Math.pow(10, -6);
    default:
      return null;
  }
};

const ThrophtCalc = (period, G, alpha, unit) => {
  switch (unit) {
    case 1: // Slotted Aloha
      return G * Math.exp(-G);
    case 0: //Slotted Nonpersistent CSMA
      return (G * alpha * Math.exp(-2 * G * period * alpha)) / (G * (1 + 2 * alpha) + Math.exp(-alpha * G));
    case 2: //unslotted Nonpersistent CSMA
      return (G * Math.exp(-2 * G * period * alpha)) / (G * (1 + 2 * alpha) + Math.exp(-alpha * G));
    case 3: // pure Aloha
      return G * Math.exp(-2 * G);
    default:
      return null;
  }
};


function qus5() {

  const timePerCarrier = parseFloat(document.getElementById('timePerCarrier').value);
  const NumberOfUsers = parseFloat(document.getElementById('NumberOfUsers').value);
  const AveargeCallPerDay = parseFloat(document.getElementById('AveargeCallPerDay').value);
  const AveargeDuraion = parseFloat(document.getElementById('AveargeDuraion').value);
  const callDropPropapility = parseFloat(document.getElementById('callDropPropapility').value);
  const pathLossExponent = parseFloat(document.getElementById('pathLossExponent').value);

  const referenceDistance = parseFloat(document.getElementById('referenceDistance').value) * Math.pow(10, parseInt(document.getElementById('UnitreferenceDistance').value));
  const TotalArea = parseFloat(document.getElementById('TotalArea').value) * Math.pow(10, parseInt(document.getElementById('UnitTotalArea').value));
  const SIR = convertToMeterOrNormalRate(parseFloat(document.getElementById('SIR').value), parseInt(document.getElementById('UnitSIR').value));
  const prSen = convertToMeterOrNormalRate(parseFloat(document.getElementById('prSen').value), parseInt(document.getElementById('UnitprSen').value));
  const pd0 = convertToMeterOrNormalRate(parseFloat(document.getElementById('pd0').value), parseInt(document.getElementById('Unitpd0').value));





  if (isNaN(prSen) || isNaN(pd0) || isNaN(SIR) || isNaN(TotalArea) || isNaN(referenceDistance) || isNaN(pathLossExponent) || isNaN(callDropPropapility) || isNaN(AveargeDuraion) || isNaN(AveargeCallPerDay) || isNaN(NumberOfUsers) || isNaN(timePerCarrier)) {
    alert("Please enter valid numbers");
    return;
  }



  const MaxDis = Math.cbrt((Math.pow(10, pd0 / 10) * Math.pow(referenceDistance, pathLossExponent)) / prSen);
  const cellSize = 3 * Math.sqrt(3) * Math.pow(MaxDis, 2) / 2;
  const NumberOfCells = Math.round(TotalArea / cellSize);
  const TrafficLoadSystem = NumberOfUsers * AveargeDuraion * AveargeCallPerDay / (24 * 60);
  const TrafficLoadCell = TrafficLoadSystem / NumberOfCells;
  const NumberOfCellInEachClus = (1 / 3) * Math.pow(Math.pow(10, SIR / 10) * 6, 2 / 3);






  let estimatedValue = estimateToNextLarger(NumberOfCellInEachClus, valuesList);






  const MinimumNumberOfCarriers = findChannels(TrafficLoadCell, callDropPropapility);
  const NumberofCarrierPerCell = Math.round(MinimumNumberOfCarriers / timePerCarrier);
  const NumberoFCarrierPerSystem = NumberofCarrierPerCell * estimatedValue;

  document.getElementById('MaxDis').textContent = MaxDis.toFixed(3);
  document.getElementById('cellSize').textContent = cellSize.toFixed(2);
  document.getElementById('NumberOfCells').textContent = NumberOfCells.toFixed(2);
  document.getElementById('TrafficLoadSystem').textContent = TrafficLoadSystem.toFixed(2);
  document.getElementById('TrafficLoadCell').textContent = TrafficLoadCell.toFixed(2);
  document.getElementById('NumberOfCellInEachClus').textContent = estimatedValue.toFixed(0);
  document.getElementById('MinimumNumberOfCarriers').textContent = MinimumNumberOfCarriers.toFixed(2);
  document.getElementById('NumberofCarrierPerCell').textContent = NumberofCarrierPerCell.toFixed(0);
  document.getElementById('NumberoFCarrierPerSystem').textContent = NumberoFCarrierPerSystem.toFixed(3);


  document.getElementById('qus5').style.display = 'block';
}


function erlangB(E, C) {
  let numerator = Math.pow(E, C) / factorial(C);
  let denominator = 0;
  for (let k = 0; k <= C; k++) {
    denominator += Math.pow(E, k) / factorial(k);
  }
  return numerator / denominator;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function findChannels(E, B) {
  let C = 1;
  while (true) {
    let blockingProbability = erlangB(E, C);
    if (blockingProbability <= B) {
      return C;
    }
    C++;
  }
}
function estimateToNextLarger(value, valuesList) {
  for (let i = 0; i < valuesList.length; i++) {
    if (value <= valuesList[i]) {
      return valuesList[i];
    }
  }
  return null; // If the value is larger than any value in the list
}
const valuesList = [1, 3, 4, 7, 9, 12, 13, 16, 19, 21, 28];

const erlangBTable = [
  [1.0, 0.001001001, 0.002004008, 0.0050251256, 0.01010101, 0.012145749, 0.013171226, 0.015238922285714284, 0.020408163, 0.030927835, 0.052631579, 0.075268817, 0.11111111, 0.17647059, 0.25, 0.42857143, 0.66666667, 1.0],
  [2.0, 0.045755934, 0.065344612, 0.10540193, 0.15259329, 0.16847558, 0.17600836, 0.18956792, 0.22346682, 0.28155146, 0.38131568, 0.47049411, 0.59543322, 0.79621493, 1.0, 1.4487755, 2.0, 2.7320508],
  [3.0, 0.19383726, 0.24872209, 0.34900312, 0.4554853, 0.48948047, 0.50534875, 0.5330223871428571, 0.60220648, 0.71512733, 0.89939552, 1.0571311, 1.2707763, 1.602478, 1.9299437, 2.6331473, 3.4798157, 4.5914057],
  [4.0, 0.43927468, 0.53502551, 0.70119854, 0.8694188, 0.92183407, 0.94612261, 0.9878762928571425, 1.0922605, 1.2589055, 1.5246226, 1.7476981, 2.045375, 2.5007467, 2.9451862, 3.8904509, 5.0210201, 6.5010627],
  [5.0, 0.76211469, 0.89985579, 1.1320364, 1.3607868, 1.4310844, 1.4635254, 1.518844742857143, 1.6571431, 1.8752057, 2.2184723, 2.5036021, 2.8810785, 3.4541663, 4.0104409, 5.1888656, 6.5955299, 8.4369371],
  [6.0, 1.1459149, 1.3252031, 1.6218264, 1.909029, 1.9965133, 2.0367796, 2.105092885714286, 2.2758761, 2.5430617, 2.9603187, 3.3046756, 3.7584496, 4.4445058, 5.1086415, 6.5135622, 8.1907002, 10.388566],
  [7.0, 1.5785998, 1.7984391, 2.1574717, 2.5009397, 2.6049272, 2.6527034, 2.733475485714286, 2.9354057, 3.2496526, 3.737816, 4.1390161, 4.6661923, 5.4613696, 6.2302047, 7.8564368, 9.7998018, 12.350538],
  [8.0, 2.051325, 2.310549, 2.7299026, 3.1275623, 3.2474252, 3.3024238, 3.3951742857142864, 3.6270505, 3.9865469, 4.5429594, 4.9989803, 5.5971318, 6.4982476, 7.3692011, 9.2125843, 11.418852, 14.319726],
  [9.0, 2.5574878, 2.8549112, 3.332588, 3.7825373, 3.9177097, 3.9796729, 4.0839747, 4.3447292, 4.7478852, 5.3702433, 5.87935, 6.5464114, 7.5507834, 8.5217019, 10.578816, 13.045312, 16.294181],
  [10.0, 3.092045, 3.4265255, 3.9606648, 4.4611769, 4.6111511, 4.6798481, 4.795321385714287, 5.0840046, 5.5294177, 6.215707, 6.7763933, 7.5105823, 8.6159128, 9.6849679, 11.952946, 14.677471, 18.272611],
  [11.0, 3.6510604, 4.0215214, 4.6104081, 5.1599187, 5.3242382, 5.3994621, 5.525767528571428, 5.8415311, 6.3279562, 7.0763989, 7.6873424, 8.4871021, 9.6913965, 10.857013, 13.333412, 16.314128, 20.254127],
  [12.0, 4.2314017, 4.6368389, 5.2788971, 5.8759866, 6.0542394, 6.1358037, 6.272636442857143, 6.6147183, 7.1410418, 7.9500554, 8.6100841, 9.4740396, 10.775546, 12.036349, 14.719062, 17.954408, 22.238091],
  [13.0, 4.8305333, 5.2700132, 5.963795, 6.6071708, 6.7989834, 6.8867192, 7.033803828571431, 7.4015154, 7.9667345, 8.8348993, 9.5429655, 10.469892, 11.867057, 13.221835, 16.109023, 19.597658, 24.224034],
  [14.0, 5.4463716, 5.9190276, 6.6632002, 7.3516806, 7.5567127, 7.6504665, 7.8075527285714275, 8.2002683, 8.8034747, 9.7295081, 10.484668, 11.473464, 12.964899, 14.412575, 17.502617, 21.243378, 26.2116],
  [15.0, 6.0771816, 6.5822088, 7.375542, 8.1080428, 8.325983, 8.4256142, 8.592473457142857, 9.0096216, 9.6499873, 10.632723, 11.43412, 12.483792, 14.068244, 15.607853, 18.89931, 22.891179, 28.200518],
  [16.0, 6.7215019, 7.2581513, 8.0995068, 8.8750289, 9.1055909, 9.2109702, 9.387392771428571, 9.8284492, 10.505216, 11.543588, 12.390442, 13.500083, 15.176417, 16.807087, 20.298672, 24.54075, 30.190572],
  [17.0, 7.3780887, 7.9456619, 8.8339832, 9.6516027, 9.8945221, 10.00553, 10.19132257142857, 10.655804, 11.368273, 12.461303, 13.352897, 14.521678, 16.288859, 18.0098, 21.700355, 26.191843, 32.181594],
  [18.0, 8.0458734, 8.6437182, 9.5780215, 10.436881, 10.691913, 10.80844, 11.003423428571427, 11.490882, 12.238408, 13.385191, 14.320866, 15.548024, 17.405103, 19.215594, 23.104071, 27.844255, 34.173445],
  [19.0, 8.7239308, 9.3514363, 10.330803, 11.230104, 11.497021, 11.618964, 11.822971999999998, 12.332992, 13.114977, 14.314675, 15.29382, 16.578651, 18.524754, 20.424134, 24.509579, 29.497819, 36.166014],
  [20.0, 9.4114533, 10.068046, 11.091618, 12.030615, 12.309203, 12.436466, 12.649343714285715, 13.181538, 13.997423, 15.249257, 16.271305, 17.613157, 19.647476, 21.635137, 25.916678, 31.152394, 38.159208],
  [21.0, 10.107732, 10.792873, 11.859842, 12.837836, 13.127898, 13.260391, 13.481993285714282, 14.035999, 14.885264, 16.188507, 17.252929, 18.651193, 20.772979, 22.848359, 27.325197, 32.807865, 40.15295],
  [22.0, 10.81214, 11.525321, 12.634929, 13.651264, 13.952612, 14.090252, 14.320443142857146, 14.895921, 15.778076, 17.132046, 18.238348, 19.692458, 21.901013, 24.06359, 28.734991, 34.464131, 42.147175],
  [23.0, 11.52412, 12.264862, 13.416393, 14.470451, 14.782909, 14.925617, 15.164269000000004, 15.760899, 16.675486, 18.079544, 19.227262, 20.736687, 23.031359, 25.28065, 30.145932, 36.121108, 44.141828],
  [24.0, 12.243174, 13.011023, 14.203802, 15.295, 15.618403, 15.766104, 16.013095999999997, 16.630576, 17.577164, 19.030708, 20.219406, 21.783646, 24.163826, 26.499377, 31.557912, 37.778723, 46.136863],
  [25.0, 12.968857, 13.763382, 14.996768, 16.124555, 16.458747, 16.61137, 16.86658857142857, 17.504635, 18.482813, 19.985276, 21.214544, 22.83313, 25.298244, 27.719634, 32.970836, 39.436913, 48.13224],
  [26.0, 13.700766, 14.521558, 15.794945, 16.958798, 17.303629, 17.461109, 17.72444614285714, 18.382789, 19.392172, 20.943015, 22.212465, 23.884954, 26.434464, 28.941296, 34.384621, 41.095624, 50.127924],
  [27.0, 14.438537, 15.285207, 16.598017, 17.797441, 18.152771, 18.315043, 18.58639642857143, 19.26478, 20.305002, 21.903717, 23.212981, 24.938955, 27.572352, 30.164254, 35.799192, 42.754807, 52.123886],
  [28.0, 15.181839, 16.054018, 17.405702, 18.640224, 19.005919, 19.172924, 19.452196571428573, 20.150378, 21.22109, 22.867194, 24.215923, 25.994985, 28.71179, 31.388411, 37.214486, 44.41442, 54.120098],
  [29.0, 15.93037, 16.827704, 18.21774, 19.486911, 19.862844, 20.034523, 20.321622142857144, 21.03937, 22.140241, 23.833275, 25.221138, 27.052912, 29.852669, 32.613678, 38.630445, 46.074427, 56.116538],
  [30.0, 16.683856, 17.606008, 19.033895, 20.337286, 20.723335, 20.899634, 21.19447142857143, 21.931565, 23.062279, 24.801805, 26.228488, 28.112615, 30.994893, 33.839979, 40.047016, 47.734794, 58.113186],
  [31.0, 17.442044, 18.38869, 19.85395, 21.191152, 21.587201, 21.768068, 22.07055971428571, 22.826789, 23.987044, 25.772644, 27.237845, 29.173986, 32.138375, 35.067241, 41.464155, 49.395492, 60.110024],
  [32.0, 18.204701, 19.175532, 20.677709, 22.048329, 22.454267, 22.639652, 22.949716857142853, 23.724879, 24.914388, 26.745663, 28.249096, 30.236925, 33.283035, 36.295401, 42.881819, 51.056495, 62.107036],
  [33.0, 18.971613, 19.966333, 21.504988, 22.908651, 23.324371, 23.514226, 23.831787142857145, 24.62569, 25.844177, 27.720745, 29.262135, 31.301342, 34.428802, 37.524401, 44.299971, 52.717781, 64.104208],
  [34.0, 19.742583, 20.760907, 22.33562, 23.771964, 24.197364, 24.391644, 24.716627428571428, 25.529086, 26.776286, 28.697781, 30.276866, 32.367154, 35.57561, 38.754189, 45.718578, 54.379326, 66.101527],
  [35.0, 20.517427, 21.559081, 23.169447, 24.638128, 25.07311, 25.271771, 25.60410528571429, 26.434941, 27.7106, 29.676671, 31.293199, 33.434284, 36.723397, 39.984715, 47.137609, 56.041114, 68.098982],
  [36.0, 21.295974, 22.360696, 24.006326, 25.50701, 25.951481, 26.154479, 26.494096428571424, 27.34314, 28.647014, 30.657324, 32.311054, 34.502664, 37.87211, 41.215937, 48.557037, 57.703127, 70.096562],
  [37.0, 22.078066, 23.165602, 24.846123, 26.378491, 26.832359, 27.039655, 27.38648957142857, 28.253576, 29.58543, 31.639655, 33.330354, 35.572228, 39.021697, 42.447813, 49.976835, 59.365349, 72.09426],
  [38.0, 22.863557, 23.973662, 25.688714, 27.252456, 27.715634, 27.927188, 28.281176285714288, 29.166147, 30.525756, 32.623584, 34.35103, 36.642916, 40.172112, 43.680307, 51.396981, 61.027766, 74.092066],
  [39.0, 23.652307, 24.784746, 26.53398, 28.1288, 28.601204, 28.816978, 29.17805942857143, 30.080763, 31.467909, 33.609039, 35.373016, 37.714674, 41.32331, 44.913384, 52.817453, 62.690365, 76.089972],
  [40.0, 24.444188, 25.598733, 27.381814, 29.007425, 29.488974, 29.708931, 30.07704642857143, 30.997335, 32.411808, 34.595951, 36.396253, 38.787449, 42.475252, 46.147013, 54.238232, 64.353135, 78.087972],
  [41.0, 25.23908, 26.41551, 28.232115, 29.888239, 30.378853, 30.602959, 30.97805185714286, 31.915784, 33.357381, 35.584256, 37.420683, 39.861195, 43.627902, 47.381165, 55.659301, 66.016065, 80.086061],
  [42.0, 26.036867, 27.234971, 29.084785, 30.771155, 31.27076, 31.49898, 31.880995142857138, 32.836033, 34.304558, 36.573897, 38.446256, 40.935867, 44.781223, 48.615812, 57.080642, 67.679144, 82.084231],
  [43.0, 26.837445, 28.057017, 29.939737, 31.656092, 32.164614, 32.396916, 32.78580028571428, 33.758011, 35.253274, 37.564815, 39.47292, 42.011423, 45.935185, 49.85093, 58.502241, 69.342365, 84.082478],
  [44.0, 27.640713, 28.881553, 30.796885, 32.542975, 33.060344, 33.296695, 33.69239671428571, 34.681651, 36.203471, 38.556961, 40.500632, 43.087825, 47.089758, 51.086496, 59.924083, 71.005719, 86.080797],
  [45.0, 28.446576, 29.70849, 31.656151, 33.431733, 33.957878, 34.198248, 34.60071771428571, 35.606892, 37.155089, 39.550284, 41.529348, 44.165037, 48.244912, 52.322486, 61.346156, 72.669198, 88.079183],
  [46.0, 29.254944, 30.537746, 32.517459, 34.322297, 34.857152, 35.10151, 35.510699714285714, 36.533674, 38.108076, 40.54474, 42.559026, 45.243023, 49.400623, 53.558883, 62.768447, 74.332795, 90.077634],
  [47.0, 30.065734, 31.369241, 33.380738, 35.214604, 35.758105, 36.006423, 36.42228528571428, 37.461941, 39.062382, 41.540284, 43.589631, 46.321754, 50.556866, 54.795665, 64.190945, 75.996503, 92.076144],
  [48.0, 30.878865, 32.202902, 34.245923, 36.108594, 36.660678, 36.912927, 37.33541671428573, 38.391641, 40.017959, 42.536876, 44.621125, 47.401197, 51.713618, 56.032817, 65.613639, 77.660317, 94.074711],
  [49.0, 31.694262, 33.038656, 35.112949, 37.00421, 37.564816, 37.820969, 38.25004185714286, 39.322724, 40.974761, 43.534477, 45.653475, 48.481327, 52.870858, 57.27032, 67.036521, 79.324231, 96.073331],
  [50.0, 32.511853, 33.876438, 35.981758, 37.901398, 38.470467, 38.730497, 39.166110428571436, 40.255144, 41.932747, 44.533053, 46.686649, 49.562115, 54.028564, 58.508161, 68.45958, 80.988239, 98.072001],
  [51.0, 33.331571, 34.716184, 36.852291, 38.800108, 39.377582, 39.641463, 40.083574999999996, 41.188855, 42.891876, 45.532567, 47.720618, 50.643536, 55.186719, 59.746323, 69.882808, 82.652337, 100.07072],
  [52.0, 34.153349, 35.557834, 37.724496, 39.700291, 40.286113, 40.553821, 41.00239100000001, 42.123816, 43.852111, 46.532988, 48.755353, 51.725568, 56.345304, 60.984794, 71.306198, 84.31652, 102.06948],
  [53.0, 34.977127, 36.401329, 38.598321, 40.6019, 41.196017, 41.467527, 41.92251528571428, 43.059986, 44.813414, 47.534285, 49.790827, 52.808187, 57.504303, 62.223561, 72.729742, 85.980784, 104.06829],
  [54.0, 35.802846, 37.246616, 39.473717, 41.504893, 42.107251, 42.382538, 42.84390657142856, 43.997328, 45.775752, 48.536428, 50.827015, 53.891373, 58.663699, 63.462611, 74.153433, 87.645125, 106.06713],
  [55.0, 36.630451, 38.093642, 40.350638, 42.409227, 43.019775, 43.298817, 43.76652814285714, 44.935806, 46.739091, 49.53939, 51.863892, 54.975105, 59.823477, 64.701933, 75.577264, 89.309539, 108.06602],
  [56.0, 37.459887, 38.942358, 41.22904, 43.314864, 43.93355, 44.216324, 44.69034114285714, 45.875384, 47.703402, 50.543145, 52.901435, 56.059365, 60.983623, 65.941516, 77.001229, 90.974024, 110.06494],
  [57.0, 38.291104, 39.792716, 42.108879, 44.221764, 44.848541, 45.135024, 45.61531142857142, 46.81603, 48.668654, 51.547668, 53.939624, 57.144134, 62.144124, 67.18135, 78.425322, 92.638575, 112.0639],
  [58.0, 39.124054, 40.644671, 42.990117, 45.129893, 45.764711, 46.054882, 46.54140514285715, 47.757713, 49.634819, 52.552934, 54.978436, 58.229395, 63.304967, 68.421426, 79.849539, 94.303189, 114.06289],
  [59.0, 39.95869, 41.49818, 43.872714, 46.039215, 46.682028, 46.975866, 47.468591142857136, 48.700404, 50.601871, 53.558921, 56.017853, 59.315131, 64.466139, 69.661733, 81.273873, 95.967865, 116.06191],
  [60.0, 40.794967, 42.353202, 44.756634, 46.949698, 47.60046, 47.897944, 48.39683771428572, 49.644072, 51.569783, 54.565608, 57.057855, 60.401328, 65.627629, 70.902265, 82.698321, 97.632598, 118.06096],
  [61.0, 41.632842, 43.209696, 45.641842, 47.86131, 48.519976, 48.821087, 49.326117, 50.588692, 52.538531, 55.572973, 58.098425, 61.487971, 66.789426, 72.143011, 84.122876, 99.297387, 120.06004],
  [62.0, 42.472276, 44.067625, 46.528303, 48.774022, 49.440548, 49.745265, 50.25639985714286, 51.534237, 53.508092, 56.580997, 59.139546, 62.575045, 67.95152, 73.383965, 85.547536, 100.96223, 122.05915],
  [63.0, 43.313229, 44.926953, 47.415985, 49.687803, 50.362147, 50.670452, 51.187660571428566, 52.480682, 54.478443, 57.6, 60.1812, 63.662537, 69.1139, 74.62512, 86.972295, 102.62712, 124.05828],
  [64.0, 44.155663, 45.787644, 48.304858, 50.602627, 51.284747, 51.596621, 52.11987299999999, 53.428003, 55.449563, 58.598947, 61.223373, 64.750434, 70.276558, 75.866467, 88.397151, 104.29206, 126.05744],
  [65.0, 44.999542, 46.649665, 49.194891, 51.518467, 52.208322, 52.523746, 53.053012, 54.376177, 56.421431, 59.608837, 62.26605, 65.838724, 71.439484, 77.108001, 89.822099, 105.95705, 128.05662],
  [66.0, 45.844831, 47.512983, 50.086057, 52.435297, 53.132847, 53.451804, 53.987055142857145, 55.325183, 57.394028, 60.619315, 63.309215, 66.927395, 72.602669, 78.349715, 91.247136, 107.62208, 130.05583],
  [67.0, 46.691498, 48.377569, 50.978327, 53.353094, 54.058299, 54.380771, 54.921979, 56.274999, 58.367334, 61.630366, 64.352857, 68.016436, 73.766106, 79.591602, 92.672258, 109.28716, 132.05506],
  [68.0, 47.53951, 49.243392, 51.871675, 54.271833, 54.984656, 55.310625, 55.85776214285714, 57.225605, 59.341331, 62.641973, 65.39696, 69.105837, 74.92978600000001, 80.833658, 94.097462, 110.95228, 134.05431],
  [69.0, 48.388836, 50.110423, 52.766075, 55.191491, 55.911894, 56.241345, 56.79438385714286, 58.176981, 60.316003, 63.654123, 66.441514, 70.195586, 76.093702, 82.075877, 95.522747, 112.61744, 136.05358],
  [70.0, 49.239446, 50.978634, 53.661504, 56.112048, 56.839994, 57.172909, 57.73182328571427, 59.129109, 61.291332, 64.6668, 67.486505, 71.285674, 77.257847, 83.318252, 96.948107, 114.28263, 138.05287],
  [71.0, 50.091312, 51.848, 54.557938, 57.033482, 57.768936, 58.105298, 58.670061714285694, 60.081971, 62.267302, 65.679993, 68.531923, 72.376092, 78.422214, 84.560781, 98.373542, 115.94786, 140.05217],
  [72.0, 50.944407, 52.718495, 55.455354, 57.955773, 58.698698, 59.038493, 59.60908042857143, 61.035549, 63.243897, 66.693687, 69.577755, 73.466831, 79.586796, 85.803456, 99.799047, 117.61313, 142.0515],
  [73.0, 51.798703, 53.590093, 56.35373, 58.878902, 59.629264, 59.972475, 60.548860999999995, 61.989826, 64.221103, 67.70787, 70.623992, 74.557881, 80.751588, 87.046275, 101.22462, 119.27843, 144.05084],
  [74.0, 52.654175, 54.462772, 57.253045, 59.802849, 60.560614, 60.907227, 61.489387285714265, 62.944788, 65.198905, 68.722531, 71.670623, 75.649235, 81.916582, 88.289232, 102.65026, 120.94377, 146.0502],
  [75.0, 53.510798, 55.336507, 58.153279, 60.727597, 61.492732, 61.842731, 62.43064128571431, 63.900417, 66.17729, 69.737657, 72.717638, 76.740885, 83.081774, 89.532323, 104.07597, 122.60913, 148.04958],
  [76.0, 54.368548, 56.211278, 59.054412, 61.653128, 62.4256, 62.778971, 63.37260757142856, 64.856699, 67.156244, 70.753238, 73.765027, 77.832822, 84.247158, 90.775545, 105.50174, 124.27453, 150.04897],
  [77.0, 55.227402, 57.087061, 59.956425, 62.579426, 63.359203, 63.715931, 64.31527042857144, 65.813619, 68.135753, 71.769263, 74.812782, 78.92504, 85.412727, 92.018893, 106.92756, 125.93996, 152.04837],
  [78.0, 56.087338, 57.963837, 60.859299, 63.506474, 64.293524, 64.653595, 65.2586147142857, 66.771164, 69.115807, 72.785721, 75.860893, 80.017531, 86.578479, 93.262363, 108.35345, 127.60541, 154.04779],
  [79.0, 56.948333, 58.841586, 61.763018, 64.434256, 65.228548, 65.591949, 66.20262671428573, 67.729321, 70.096392, 73.802603, 76.909353, 81.110288, 87.744406, 94.505953, 109.77939, 129.2709, 156.04723],
  [80.0, 57.810367, 59.720288, 62.667564, 65.362757, 66.164261, 66.530977, 67.1472907142857, 68.688075, 71.077497, 74.819898, 77.958152, 82.203305, 88.910505, 95.749658, 111.20539, 130.9364, 158.04667],
  [81.0, 58.67342, 60.599924, 63.57292, 66.291963, 67.100649, 67.470667, 68.09259499999999, 69.647415, 72.059111, 75.837599, 79.007283, 83.296575, 90.07677, 96.993476, 112.63143, 132.60194, 160.04613],
  [82.0, 59.537471, 61.480475, 64.47907, 67.221859, 68.037698, 68.411005, 69.03852585714286, 70.607328, 73.041223, 76.855694, 80.056738, 84.390092, 91.243199, 98.237403, 114.05753, 134.2675, 162.04561],
  [83.0, 60.402503, 62.361926, 65.385999, 68.152431, 68.975394, 69.351977, 69.98507014285715, 71.567803, 74.023823, 77.874177, 81.106511, 85.483851, 92.409786, 99.481436, 115.48368, 135.93308, 164.04509],
  [84.0, 61.268495, 63.244257, 66.293691, 69.083667, 69.913725, 70.293571, 70.93221585714285, 72.528828, 75.0069, 78.893038, 82.156592, 86.577844, 93.576527, 100.72557, 116.90988, 137.59869, 166.04459],
  [85.0, 62.135432, 64.127454, 67.202133, 70.015553, 70.852678, 71.235774, 71.87995057142858, 73.490392, 75.990444, 79.912269, 83.206977, 87.672068, 94.743418, 101.96981, 118.33612, 139.26432, 168.04409],
  [86.0, 63.003294, 65.011499, 68.111309, 70.948076, 71.792241, 72.178576, 72.82826428571428, 74.452485, 76.974447, 80.931863, 84.257657, 88.766517, 95.910456, 103.21414, 119.76241, 140.92997, 170.04361],
  [87.0, 63.872065, 65.896377, 69.021206, 71.881225, 72.732403, 73.121964, 73.77714428571429, 75.415095, 77.958898, 81.951812, 85.308627, 89.861184, 97.077637, 104.45857, 121.18875, 142.59564, 172.04314],
  [88.0, 64.741729, 66.782073, 69.931811, 72.814988, 73.673152, 74.065927, 74.72658042857141, 76.378214, 78.94379, 82.972108, 86.359881, 90.956067, 98.244957, 105.7031, 122.61512, 144.26133, 174.04268],
  [89.0, 65.61227, 67.668572, 70.843111, 73.749353, 74.614477, 75.010454, 75.6765617142857, 77.341831, 79.929113, 83.992744, 87.411412, 92.051158, 99.412414, 106.94771, 124.04154, 145.92705, 176.04223],
  [90.0, 66.483673, 68.555861, 71.755094, 74.684309, 75.556368, 75.955536, 76.62707885714286, 78.305936, 80.914858, 85.013714, 88.463214, 93.146455, 100.58, 108.19241, 125.468, 147.59278, 178.04178],
  [91.0, 67.355922, 69.443924, 72.667746, 75.619845, 76.498813, 76.901161, 77.57812128571429, 79.270522, 81.901018, 86.035011, 89.515282, 94.241952, 101.74772, 109.4372, 126.89449, 149.25853, 180.04135],
  [92.0, 68.229004, 70.332749, 73.581057, 76.555952, 77.441804, 77.84732, 78.52967942857143, 80.235578, 82.887586, 87.056628, 90.56761, 95.337645, 102.91557, 110.68207, 128.32103, 150.9243, 182.04093],
  [93.0, 69.102902, 71.222323, 74.495014, 77.492618, 78.38533, 78.794002, 79.48174314285713, 81.201096, 83.874552, 88.078559, 91.620193, 96.433529, 104.08353, 111.92702, 129.7476, 152.59008, 184.04051],
  [94.0, 69.977606, 72.112632, 75.409607, 78.429834, 79.329381, 79.741201, 80.4343055714286, 82.167067, 84.86191, 89.100798, 92.673026, 97.529601, 105.25162, 113.17205, 131.17421, 154.25588, 186.0401],
  [95.0, 70.8531, 73.003665, 76.324824, 79.36759, 80.273949, 80.688904, 81.38735542857141, 83.133484, 85.849653, 90.123339, 93.726104, 98.625857, 106.41983, 114.41715, 132.60085, 155.9217, 188.03971],
  [96.0, 71.729371, 73.89541, 77.240656, 80.305878, 81.219024, 81.637105, 82.34088614285716, 84.100339, 86.837773, 91.146176, 94.779421, 99.722293, 107.58815, 115.66234, 134.02752, 157.58754, 190.03931],
  [97.0, 72.606406, 74.787854, 78.157091, 81.244687, 82.164598, 82.585793, 83.29488757142859, 85.067624, 87.826264, 92.169303, 95.832973, 100.8189, 108.75659, 116.90759, 135.45423, 159.25339, 192.03893],
  [98.0, 73.484195, 75.680986, 79.07412, 82.18401, 83.110662, 83.534963, 84.24935385714288, 86.035331, 88.815119, 93.192716, 96.886756, 101.91569, 109.92513, 118.15292, 136.88097, 160.91925, 194.03855],
  [99.0, 74.362724, 76.574796, 79.991734, 83.123837, 84.057209, 84.484603, 85.20427442857145, 87.003453, 89.804331, 94.216408, 97.940766, 103.01264, 111.09378, 119.39832, 138.30775, 162.58514, 196.03819],
  [100.0, 75.241982, 77.469272, 80.909921, 84.064159, 85.00423, 85.434708, 86.15964400000001, 87.971984, 90.793895, 95.240375, 98.994997, 104.10976, 112.26254, 120.64379, 139.73455, 164.25103, 198.03782],
  [101.0, 76.121959, 78.364402, 81.828674, 85.004969, 85.951713, 86.385265, 87.11545042857146, 88.940914, 91.783805, 96.264613, 100.04945, 105.20704, 113.4314, 121.88933, 141.16138, 165.91694, 200.03747],
  [102.0, 77.002643, 79.26018, 82.747984, 85.946261, 86.899661, 87.336281, 88.07169785714288, 89.91024, 92.774053, 97.289114, 101.10411, 106.30448, 114.60036, 123.13493, 142.58824, 167.58286, 202.03712],
  [103.0, 77.884017, 80.156593, 83.667842, 86.888022, 87.848056, 88.28773, 89.02836514285715, 90.879953, 93.764635, 98.313874, 102.15898, 107.40208, 115.76942, 124.38059, 144.01513, 169.2488, 204.03678],
  [104.0, 78.766077, 81.053633, 84.588233, 87.830249, 88.796895, 89.239621, 89.98545785714286, 91.85005, 94.755544, 99.33889, 103.21406, 108.49982, 116.93859, 125.62632, 145.44205, 170.91475, 206.03644],
  [105.0, 79.648809, 81.951283, 85.509162, 88.772935, 89.746187, 90.191879, 90.9429184285714, 92.820517, 95.746757, 100.36417, 104.26934, 109.59771, 118.10783, 126.87211, 146.869, 172.58071, 208.03611],
  [106.0, 80.532245, 82.849597, 86.430617, 89.71601, 90.695872, 91.144656, 91.9008542857143, 93.79135, 96.738313, 101.38968, 105.32481, 110.69576, 119.27718, 128.11795, 148.29597, 174.24668, 210.03579],
  [107.0, 81.416274, 83.748407, 87.352587, 90.659668, 91.646019, 92.09781, 92.85917228571431, 94.762578, 97.7302, 102.41543, 106.38051, 111.79395, 120.4466, 129.36386, 149.72296, 175.91267, 212.03547],
  [108.0, 82.300959, 84.647858, 88.275052, 91.603659, 92.596554, 93.051369, 93.81786214285714, 95.734095, 98.72236, 103.44137, 107.43635, 112.8923, 121.61616, 130.60983, 151.14998, 177.57866, 214.03516],
  [109.0, 83.186407, 85.547817, 89.198011, 92.548121, 93.547492, 94.005343, 94.77697014285715, 96.706038, 99.714863, 104.46768, 108.49239, 113.99075, 122.78572, 131.85585, 152.57704, 179.24467, 216.03485],
  [110.0, 84.072256, 86.448558, 90.121527, 93.493012, 94.498806, 94.959708, 95.73643914285714, 97.678267, 100.70759, 105.4941, 109.54867, 115.08936, 123.95544, 133.10191, 154.0041, 180.91069, 218.03455],
  [111.0, 84.958863, 87.349665, 91.045389, 94.438246, 95.450638, 95.91441, 96.6962622857143, 98.650893, 101.70065, 106.52081, 110.60504, 116.18808, 125.12522, 134.34805, 155.43119, 182.57672, 220.03425],
  [112.0, 85.846078, 88.251416, 91.969812, 95.383998, 96.402729, 96.869528, 97.65647742857145, 99.623851, 102.69401, 107.5477, 111.66167, 117.28697, 126.29507, 135.59422, 156.85831, 184.24276, 222.03396],
  [113.0, 86.733819, 89.153619, 92.894757, 96.330061, 97.355369, 97.825024, 98.61705428571427, 100.59713, 103.68762, 108.57485, 112.71843, 118.38596, 127.46501, 136.84045, 158.28545, 185.90881, 224.03368],
  [114.0, 87.622231, 90.056432, 93.82008, 97.276534, 98.308233, 98.780881, 99.57796928571429, 101.57069, 104.68153, 109.60217, 113.77536, 119.48508, 128.63504, 138.08672, 159.71261, 187.57487, 226.03339],
  [115.0, 88.511189, 90.959805, 94.745908, 98.223451, 99.261547, 99.737143, 100.53927071428573, 102.54459, 105.67572, 110.62974, 114.83248, 120.58436, 129.80514, 139.33307, 161.13978, 189.24094, 228.03312],
  [116.0, 89.400711, 91.863682, 95.672169, 99.17072, 100.21515, 100.69377, 101.50092428571426, 103.51881, 106.67017, 111.65753, 115.88976, 121.6837, 130.9753, 140.57946, 162.56699, 190.90702, 230.03285],
  [117.0, 90.290774, 92.768017, 96.598821, 100.11839, 101.1692, 101.65072, 102.46291714285715, 104.49341, 107.66489, 112.68543, 116.94719, 122.78322, 132.14556, 141.82586, 163.99421, 192.57311, 232.03258],
  [118.0, 91.181475, 93.672987, 97.526072, 101.0664, 102.12359, 102.60803, 103.42523857142861, 105.46826, 108.65986, 113.71364, 118.00484, 123.88281, 133.31588, 143.07233, 165.42145, 194.23921, 234.03231],
  [119.0, 92.072653, 94.578191, 98.453589, 102.01483, 103.07837, 103.56584, 104.38801142857143, 106.44344, 109.65504, 114.74206, 119.06255, 124.98255, 134.48623, 144.31885, 166.84871, 195.90531, 236.03205],
  [120.0, 92.964534, 95.484263, 99.381617, 102.9636, 104.03339, 104.52365, 105.35083571428574, 107.4188, 110.65069, 115.77057, 120.1204, 126.08241, 135.65669, 145.5654, 168.27599, 197.57143, 238.0318],
  [121.0, 93.856709, 96.390576, 100.3099, 103.91293, 104.98907, 105.48214, 106.31435142857143, 108.39488, 111.64665, 116.79939, 121.17842, 127.18236, 136.8272, 146.81206, 169.70334, 199.23756, 240.03155],
  [122.0, 94.749841, 97.297695, 101.23849, 104.86219, 105.94466, 106.44108, 107.27818, 109.37093, 112.64259, 117.82841, 122.23663, 128.28248, 137.998, 148.05865, 171.1306, 200.90367, 242.0313],
  [123.0, 95.642708, 98.205182, 102.16793, 105.81193, 106.90059, 107.39945, 108.24146714285712, 110.34651, 113.63814, 118.85737, 123.29531, 129.38228, 139.16854, 149.30556, 172.55795, 202.56983, 244.03107],
  [124.0, 96.535884, 99.11257, 103.09859, 106.76144, 107.85757, 108.35894, 109.20574000000005, 111.32274, 114.63529, 119.8881, 124.3537, 130.4828, 140.33946, 150.55224, 173.98525, 204.23597, 246.03081],
  [125.0, 97.432262, 100.02165, 104.0272, 107.71385, 108.81266, 109.31856, 110.17028857142856, 112.29961, 115.63177, 120.9162, 125.41249, 131.58464, 141.50993, 151.79892, 175.4129, 205.90204, 248.03055],
  [126.0, 98.328258, 100.93127, 104.95529, 108.66391, 109.77038, 110.28123, 111.13680428571425, 113.27574, 116.63049, 121.94528, 126.47169, 132.68405, 142.68125, 153.04524, 176.83992, 207.56834, 250.03036],
  [127.0, 99.2251, 101.8348, 105.88627, 109.61433, 110.72743, 111.23936, 112.1009942857143, 114.25508, 117.62523, 122.97475, 127.5297, 133.78407, 143.85191, 154.29276, 178.26743, 209.23445, 252.03011],
  [128.0, 100.11802, 102.75081, 106.82009, 110.56416, 111.68362, 112.19958, 113.06580571428576, 115.23137, 118.62552, 124.00615, 128.58855, 134.88425, 145.02238, 155.53924, 179.69472, 210.90065, 254.02989],
  [129.0, 101.01237, 103.65721, 107.7543, 111.52023, 112.64234, 113.16259, 114.03302428571428, 116.20911, 119.62146, 125.03719, 129.64794, 135.98523, 146.19415, 156.78619, 181.12216, 212.56687, 256.02965],
  [130.0, 101.90778, 104.57112, 108.68462, 112.47098, 113.60218, 114.1209, 114.99784857142859, 117.19022, 120.6191, 126.0664, 130.70707, 137.08698, 147.36419, 158.03314, 182.54973, 214.23302, 258.02944],
  [131.0, 102.81126, 105.47846, 109.61663, 113.4216, 114.56099, 115.08347, 115.96447857142859, 118.167, 121.61683, 127.09591, 131.76734, 138.18818, 148.5362, 159.28003, 183.97713, 215.89919, 260.02924],
  [132.0, 103.70649, 106.39232, 110.55005, 114.3742, 115.52168, 116.04535, 116.93150142857144, 119.14688, 122.6151, 128.12646, 132.82661, 139.28844, 149.70701, 160.52765, 185.40463, 217.56548, 262.02904],
  [133.0, 104.60203, 107.30236, 111.48223, 115.32838, 116.47878, 117.00666, 117.89739142857141, 120.12422, 123.61356, 129.1586, 133.88675, 140.3901, 150.87885, 161.7743, 186.83223, 219.23166, 264.02884],
  [134.0, 105.50165, 108.21322, 112.41444, 116.28173, 117.43918, 117.97007, 118.86564714285717, 121.10459, 124.61246, 130.18926, 134.9456, 141.4908, 152.04958, 163.02161, 188.25964, 220.89789, 266.02863],
  [135.0, 106.40211, 109.12905, 113.34886, 117.23545, 118.39901, 118.93227, 119.83278142857141, 122.08406, 125.61115, 131.22067, 136.00561, 142.59213, 153.22129, 164.26866, 189.68718, 222.56407, 268.02841],
  [136.0, 107.29878, 110.04078, 114.28325, 118.19471, 119.35888, 119.8936, 120.79804857142855, 123.05917, 126.61073, 132.24893, 137.06762, 143.69357, 154.39325, 165.51662, 191.11466, 224.23014, 270.02817],
  [137.0, 108.20509, 110.96032, 115.22497, 119.1473, 120.32131, 120.86479, 121.77275285714289, 124.04266, 127.61355, 133.27983, 138.12783, 144.79512, 155.56414, 166.764, 192.5421, 225.89664, 272.02801],
  [138.0, 109.10859, 111.86401, 116.15796, 120.10158, 121.28561, 121.82518, 122.73926857142855, 125.02449, 128.62257, 134.30681, 139.18916, 145.8954, 156.73481, 168.00676, 193.96855, 227.56263, 274.02789],
  [139.0, 110.01406, 112.80369, 117.07211, 121.0484, 122.23396, 122.78908, 123.71031714285712, 126.01341, 129.60789, 135.34622, 140.24126, 147.0008, 157.90892, 169.25891, 195.39709, 229.22882, 276.02777],
  [140.0, 110.91108, 113.7083, 118.01769, 121.99572, 123.22714, 123.73717, 124.67203000000002, 127.00918, 130.58872, 136.38698, 141.30538, 148.09742, 159.07671, 170.50416, 196.82348, 230.89493, 278.02744],
  [141.0, 111.7788, 114.61713, 118.93575, 122.95713, 124.15321, 124.703, 125.63571999999999, 127.96752, 131.61905, 137.4215, 142.37641, 149.20655, 160.24441, 171.7522, 198.25623, 232.56139, 280.02739],
  [142.0, 112.67734, 115.47342, 119.96259, 123.88751, 125.11644, 125.73024, 126.65917714285713, 128.98152, 132.58364, 138.4598, 143.45092, 150.30031, 161.43436, 173.00794, 199.6734, 234.22734, 282.02739],
  [143.0, 113.54498, 116.33002, 120.76308, 124.93683, 126.1271, 126.6587, 127.59093428571425, 129.92152, 133.56504, 139.46617, 144.52063, 151.39511, 162.60135, 174.24439, 201.11336, 235.89572, 284.02682],
  [144.0, 114.44673, 117.24388, 121.83526, 125.92208, 127.07098, 127.5728, 128.51924, 130.88534, 134.58976, 140.47228, 145.51072, 152.51199, 163.75129, 175.50398, 202.53366, 237.56147, 286.02679],
  [145.0, 115.34862, 118.15761, 122.74539, 126.84676, 127.98676, 128.57023, 129.54005285714285, 131.96461, 135.68783, 141.581, 146.62655, 153.60076, 164.92629, 176.72733, 203.96198, 239.22859, 288.02707],
  [146.0, 116.25434, 119.15765, 123.65881, 127.76252, 128.96575, 129.48984, 130.46387714285711, 132.89897, 136.61745, 142.57361, 147.63965, 154.72447, 166.12306, 177.98812, 205.39337, 240.8936, 290.02605],
  [147.0, 117.17168, 120.06412, 124.57316, 128.69163, 129.94282, 130.46594, 131.43673714285717, 133.86373, 137.62151, 143.55153, 148.75725, 155.79469, 167.27037, 179.24547, 206.81885, 242.55911, 292.02599],
  [148.0, 118.07309, 120.97635, 125.50268, 129.62362, 130.86259, 131.39955, 132.37844714285717, 134.82569, 138.5816, 144.66573, 149.80546, 156.89899, 168.47275, 180.48066, 208.24117, 244.22624, 294.02624],
  [149.0, 118.97765, 121.89916, 126.41982, 130.58763, 131.80485, 132.45116, 133.3973857142857, 135.76295, 139.60753, 145.65011, 150.84513, 158.01544, 169.61137, 181.72377, 209.67373, 245.89387, 296.02582],
  [150.0, 119.88208, 122.80894, 127.39643, 131.5685, 132.83996, 133.41435, 134.39021571428572, 136.82988, 140.65921, 146.69784, 151.94744, 159.11916, 170.79954, 182.96859, 211.09929, 247.55635, 298.0259],
];

const probabilities = [
  0.001, 0.002, 0.005, 0.010, 0.012, 0.013, 0.015, 0.020,
  0.030, 0.050, 0.070, 0.100, 0.150, 0.200, 0.300, 0.400, 0.500
];