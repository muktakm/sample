import React from 'react'
import { View, Text } from 'react-native'

import { StoryContainer } from 'react-native-stories-view'

const images = [ 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' ]


const Details = () => {
    return (
        <StoryContainer
            visible={true}
            enableProgress={true}
            images={images}
            duration={20}  
            containerStyle={{
                width: '100%',
                height: '100%',
            }}
            />
    )
}
                
export default Details            
/*const Details = () => {
    return (
        <View>
            <Text>
                Details View
            </Text>
        </View>
    )
}

export default Details*/