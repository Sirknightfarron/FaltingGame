import { ReactNode } from "react";
import { View } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: any;
}

const Content = ({children, style}: ContentProps) => {
    return (
        <View style={style === undefined ? styles.content : style}>
            { children }
        </View>
    );
}

const styles = {
    content: {
        innerHeight: "100%"    
    }
}

export default Content;