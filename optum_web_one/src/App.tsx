import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";

import MyComponent from "./nativeComponent/Test";
import BenefitComponent from "./Shared/Components/BenefitComponent";
import QQform from "./Shared/Components/QQform";
import FeatureList from "./Shared/Components/FeatureList";
import TrustList from "./Shared/Components/TrustList";
const App: React.FC = () => {
  return (
    <div>
      <NativeBaseProvider>
        <QQform />
        <BenefitComponent />
        <FeatureList />
        <TrustList />

      </NativeBaseProvider>
    </div>
  );
};

export default App;
