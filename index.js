import UIButton from "./UIButton";
import UIText from "./UIText";
import UIListItem from "./UIListItem";
import UICard from "./UICard";
import UIInput from "./UIInput";
import UIButtonGroup from "./UIButtonGroup";
import UIDivider from "./UIDivider";
import UIModal from "./UIModal";
import UICircleButton from "./UICircleButton";
import UIBackgroundView from "./UIBackgroundView";
import UIHeader from "./UIHeader";
import UIScrollView from "./UIScrollView";

import { useFonts } from "@use-expo/font";

let [fontsLoaded] = useFonts({
  "Nunito-Regular": require("./fonts/Nunito-Regular.ttf"),
  "Nunito-Bold": require("./fonts/Nunito-Bold.ttf"),
});

export {
  UIButton,
  UIText,
  UIListItem,
  UICard,
  UIInput,
  UIButtonGroup,
  UIDivider,
  UIModal,
  UICircleButton,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
};
