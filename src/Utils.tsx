import { Toast } from "native-base";
import { Dimensions, View ,Text} from "react-native";
export const isEmpty = (value: any) =>
  !value || value.toString().trim().length <= 0;

let toastRef: any = undefined;
type TOAST_TYPES = "success" | "danger" | "warning" | "info";
export const showToast = (
  message: string,
  duration = 4000,
  type: TOAST_TYPES = "success"
) => {
  const styledata:any =  {position: "absolute" };

  let bgColor = 'green'

  if (type === "warning") {
    bgColor ='yellow';
  } else if (type === "danger") {
    bgColor = 'red';
  }
  if (!toastRef) {
    Toast.show({
      title: message.toString(),
      duration,
      placement: "bottom",
      style: styledata,
      render: () => {
        toastRef = "Some dummy value";
        return (
          <View
            style={{
          backgroundColor: bgColor,
            width: Dimensions.get("window").width,
        }}
      >
        <Text
          style={{
            paddingVertical:15,
            paddingHorizontal: 10,
            color: 'white',
        }}
      >
        {message}
        </Text>
        </View>
      );
      },
      onCloseComplete: () => {
        toastRef = undefined;
      },
    });
  }
};
