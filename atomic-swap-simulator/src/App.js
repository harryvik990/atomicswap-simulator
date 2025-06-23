import React from 'react';
import SwapGraph from './components/SwapGraph';
import ContractDeployer from './components/ContractDeployer';
import WitnessNetwork from './components/WitnessNetwork';
import EventTimeline from './components/EventTimeline';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div>
      <h1>Atomic Swap Simulator</h1>
      <SwapGraph />
      <ContractDeployer />
      <WitnessNetwork />
      <ControlPanel />
      <EventTimeline />
    </div>
  );
}

export default App;