import { Pressable, View } from "react-native";

function Button ({children, onPress}) {
return (
    <Pressable onPress={onPress}>{children}</Pressable>
);
}
const styles = {
    button: {

    }
}
export default Button;