import { ReactNode } from "react";
import { Dimensions, View, StyleSheet } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: any;
}

const height = Dimensions.get('window').height;
const fixedHeight = height * 0.85

const Content = ({ children, style }: ContentProps) => {
    return (
        <View style={ styles === undefined ? style : [styles.content, { height: fixedHeight}] }>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
      alignItems: 'center',
      justifyContent: 'flex-start' ,
      borderWidth: 1,
      borderColor: 'black',
      padding: 12
    },
  });

export default Content;