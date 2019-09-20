import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';


const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] =useState(initialValues.title);
    const [content, setContent] =useState(initialValues.content);

    return (
        <View>
            <Text style={style.label}>
                Enter Title:
            </Text>
            <TextInput
            style={style.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            />

            <Text style={style.label}>
                Enter Content:
                </Text>
                <TextInput
                style={style.input}
                value={content}
                onChangeText={(text) => setContent(text)}
                />
                    
              <Button onPress={() => onSubmit(title, content)
            } 
            title="Save Blog Post"/>
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize:20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm;