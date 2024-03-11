import { useState } from 'react';

import Heading from 'components/common/text/Heading';
import Overview from 'components/recoil/Overview';
import BasicTest from 'components/recoil/atomSelector/BasicTest';
import StepButtonFrame from 'components/common/frame/StepButtonFrame';
import FamilyTest from 'components/recoil/family/FamilyTest';

/**
 * 리코일 스터디 페이지
 */
export default function RecoilPage() {
  const [step, setStep] = useState(PAGE_MIN_MAX[0]);
  const handleOnClick = (number: number) => {
    setStep(prev => prev + number);
  };

  const prevDisabled = step === PAGE_MIN_MAX[0];
  const nextDisabled = step === PAGE_MIN_MAX[1];
  return (
    <div>
      <Heading text='Recoil' />
      {step === 1 && <Overview />}
      {step === 2 && <BasicTest />}
      {step === 3 && <FamilyTest />}
      <StepButtonFrame
        prevFunc={() => handleOnClick(-1)}
        nextFunc={() => handleOnClick(1)}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
      />
    </div>
  );
}

const PAGE_MIN_MAX = [1, 4];
