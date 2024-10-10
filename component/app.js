import { View, Text } from 'react-native'
import React from 'react'
import Todoform from './todoform.js'
import Todolist from './todolist.js'

const app = () => {
  return (
    <View>
      <Todoform />
      <Todolist />
    </View>
  )
}

export default app