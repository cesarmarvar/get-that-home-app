import { ScaleLoader } from "react-spinners";
import { colors } from "../../styles";
import * as Style from "./styles";

function Loader() {
  return (
    <Style.Container>
      <ScaleLoader 
        color={colors.pink.regular}
      />
    </Style.Container>
  )
}

export default Loader;
