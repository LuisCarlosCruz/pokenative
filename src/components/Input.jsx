import React from 'react';

export const Input = () => {
  return (
    <View style={styles.inputContainer} >
      <TextInput style={styles.input} placeholder="Nome do Pokemon" />
      <TouchableOpacity>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
