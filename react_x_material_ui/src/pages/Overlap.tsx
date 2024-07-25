import React, { useState } from "react";
import Parent from "../Components/Overlap/Parent/Parent";
import Child from "../Components/Overlap/Child/Child";

function Overlap() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Parent setVisible={setVisible} visible={visible} />
      <Child visible={visible} />
    </>
  );
}

export default Overlap;
