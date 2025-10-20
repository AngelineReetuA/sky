import { SkyBase } from "./components/sky-base";
import { EcoHeader } from "./components/eco-header";
import { Sparkler } from "./sparkler";

export default function App() {
  return (
    <SkyBase>
      <EcoHeader />
      <Sparkler burn={true} />
    </SkyBase>
  );
}
